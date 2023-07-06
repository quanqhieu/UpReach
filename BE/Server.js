if(process.env.NODE_ENV !== "production") require("dotenv").config()

// Declare param was install from npm
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const {v4 : uuidv4} = require("uuid")
const passport = require('passport');
const methodOverride = require("method-override")
const flash = require('express-flash');
const session = require('express-session');
const sql = require('mssql');

const config = require('./Config/dbConfig')
const userLogin = require('./Router/userLogin');
const auth = require('./Authen/auth');
const sendMail = require('./sendMail/sendMail')


const app = express();

auth.initialize(
    passport,
    id => users.find(user => user.id === id),
    email => users.find(user => user.email === email)
)

const PORT = process.env.PORT || 4000;
const dataUser ={}

// for parsing application/json
// for parsing application/xwww-
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize()) 
app.use(passport.session())
app.use(methodOverride("_method"))

//connect to your database
const pool = new sql.ConnectionPool(config);

// Function : register 

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        dataUser.id = uuidv4();
        dataUser.email = req.body.email;
        dataUser.password = hashedPassword;
        const searchUserByEmail = "getInfoUserByEmail"; // Thay thế thành tên stored procedure tìm kiếm email
        
        pool.connect().then(() => {
            const request = pool.request();
            request.input('EmailUser', sql.VarChar, dataUser.email);
            request.execute(searchUserByEmail).then((result) => {
            const existingEmail = result.recordset.length > 0;
            if (existingEmail) {
                return res.json({ message: "Email đã được sử dụng" });
            } else {
                const mailOptions = {
                from: 'thienndde150182@gmail.com', // Địa chỉ email người gửi
                to: dataUser.email, // Địa chỉ email người nhận
                subject: 'OTP for Registration', // Tiêu đề email
                text: `Your OTP for registration is: ${sendMail.otp}` // Nội dung email
                };

                sendMail.sendMailToUser(mailOptions)
                .then(() => {
                    // Xử lý khi gửi email thành công
                    res.json({ message: sendMail.otp });
                })
                .catch((error) => {
                    // Xử lý khi gửi email gặp lỗi
                    console.log('Error:', error);
                });
            }
            pool.close();
            }).catch((err) => {
                console.log('Lỗi thực thi stored procedure:', err);
                res.json({ message: "Lỗi khi xử lý câu lệnh: " + err });
                pool.close();
            });
        }).catch((err) => {
            console.log('Lỗi kết nối:', err);
            res.json({ message: "Lỗi kết nối: " + err });
        });
        } catch (err) {
            res.json({ message: "Lỗi ", err });
        }
});

app.post("/confirm", (req, res, next) => {
    try {
        const otp = req.body.otp;
        if (otp === sendMail.otp) {
            const insertQuery = "InsertInfoUser";
            pool.connect(async function (err, connection) {
                if (err) {
                    console.log('Lỗi kết nối:', err);
                    return res.json({ message: "Lỗi kết nối: " + err });
                }
                const request = connection.request();
                request.input('UserId', sql.VarChar, dataUser.id);
                request.input('UserRole', sql.VarChar, "1");
                request.input('UserEmail', sql.VarChar, dataUser.email);
                request.input('UserPassword', sql.VarChar, dataUser.password);
                
                request.execute(insertQuery).then((result) => {
                    console.log('Dữ liệu đã được thêm thành công');
                    res.json({ message: "Dữ liệu đã được thêm thành công" });
                }).catch((err) => {
                    console.log('Lỗi thực thi stored procedure:', err);
                    res.json({ message: "Lỗi thực thi stored procedure: " + err });
                    pool.close();
                });
            })
        }
    } catch (err) {
        res.json({ message: "Lỗi ", err });
    }
});

// Function : Login 
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
    if (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
        return res.status(401).json({ message: "Sai email hoặc sai mật khẩu" });
    }
    req.logIn(user, (err) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
        return res.status(200).json({ 
            message: "Login successful" ,
            data: {
                User_ID: user.User_ID,
                Email: user.Email,
                // Include other desired user properties here
            }
        });
    });
    })(req, res, next);
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            // Handle error
        } else {
            res.redirect('/login');
        }
    });
});

app.use('/',userLogin);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

