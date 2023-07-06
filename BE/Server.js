if(process.env.NODE_ENV !== "production") require("dotenv").config()

// Declare param was install from npm
const express = require('express');
const bycrypt = require('bcrypt');
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
const users = []
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
// app.post("/register", async (req,res) => {
//     try{
        
//         const hashedPassword = await bycrypt.hash(req.body.password,10)
//         const dataUser = {
//             id : uuidv4(),
//             email : req.body.email,
//             password: hashedPassword,
//         }
//         users.push(dataUser)
//         const insertQuery = "INSERT INTO Users VALUES ('" + dataUser.id + "','" + 1 + "', '" + dataUser.email + "', '" + dataUser.password + "')";
//         const searchEmail = "SELECT * FROM Users WHERE Email = '" + dataUser.email + "'";
//         pool.connect(function (err) {
//             if (err) {
//                 console.log('Lỗi kết nối:', err);
//                 return;
//             }
//             // Check Existed Email
//             pool.request().query(searchEmail).then(function (result) {
//                 if(result.recordset.length > 0 ){
//                     res.json({ message: "Email nãy đã được xử dụng"});
//                     // res.redirect('/register');
//                 }
//                 else{
//                     // INSERT
//                     pool.request().query(insertQuery).then(function (result) {
//                         res.json({ message: "Dữ liệu đã được thêm thành công"});
//                         // res.redirect("/login");
//                     })
//                     .catch(function (err) {
//                         res.json({ message: "Lỗi khi thêm dữ liệu : ",err});
//                         // res.send(false);
//                     });
//                 }
//             })
//             .catch(function (err) {
//                 res.json({ message: "Lỗi khi xử lý câu lệnh : ",err});
//             });
//         });
//     }catch (e){
//         console.log(e)
//         // res.redirect('/register');
//     }
// })



app.post("/register", async (req,res) => {
    try{
        
        const hashedPassword = await bycrypt.hash(req.body.password,10)
        // dataUser = {
        //     id : uuidv4(),
        //     email : req.body.email,
        //     password: hashedPassword,
        // }
        dataUser.id = uuidv4();
        dataUser.email = req.body.email;
        dataUser.password = hashedPassword;

        const searchEmail = "SELECT * FROM Users WHERE Email = '" + dataUser.email + "'";
        pool.connect(function (err) {
            if (err) {
                console.log('Lỗi kết nối:', err);
                return;
            }
            // Check Existed Email
            pool.request().query(searchEmail).then(function (result) {
                if(result.recordset.length > 0 ){
                    res.json({ message: "Email nãy đã được xử dụng"});
                    // res.redirect('/register');
                }
                else{
                    // Send Mail
                    const mailOptions = {
                        from: 'thienndde150182@gmail.com', // Địa chỉ email người gửi
                        to: dataUser.email, // Địa chỉ email người nhận
                        subject: 'OTP for Registration', // Tiêu đề email
                        text: `Your OTP for registration is: ${sendMail.otp}` // Nội dung email
                    };
                    
                    sendMail.sendMailToUser(mailOptions)
                    .then((info) => {
                            // Xử lý khi gửi email thành công
                            res.json({ message: sendMail.otp});

                        })
                        .catch((error) => {
                            // Xử lý khi gửi email gặp lỗi
                            console.log('Error:', error);
                    });
                }
            })
            .catch(function (err) {
                res.json({ message: "Lỗi khi xử lý câu lệnh : ",err});
            });
        });
    }catch (err){
        res.json({ message: "Lỗi ",err});
        // res.redirect('/register');
    }
})

app.post("/confirm", (req, res, next) => {
    try{
        const otp = req.body.otp;
        if (otp === sendMail.otp){
            const insertQuery = "INSERT INTO Users VALUES ('" + dataUser.id + "','" + 1 + "', '" + dataUser.email + "', '" + dataUser.password + "')";
            pool.connect(function (err) {
                if (err) {
                    console.log('Lỗi kết nối:', err);
                    return;
                }
                pool.request().query(insertQuery).then(function (result) {
                    res.json({ message: "Dữ liệu đã được thêm thành công"});
                    // res.redirect("/login");
                })
                .catch(function (err) {
                    res.json({ message: "Lỗi khi thêm dữ liệu : ",err});
                    // res.send(false);
                })
                .catch(function (err) {
                    res.json({ message: "Lỗi khi xử lý câu lệnh : ",err});
                });
            });
        }
    }catch (err){
        res.json({ message: "Lỗi ",err});
    }
})
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


app.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect("/")
    })
})


app.use('/',userLogin);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

