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



const app = express();

auth.initialize(
    passport,
    id => users.find(user => user.id === id),
    email => users.find(user => user.email === email)
)

const PORT = process.env.PORT || 4000;
const users = []

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
app.post("/register", async (req,res) => {
    try{
        
        const hashedPassword = await bycrypt.hash(req.body.password,10)
        const dataUsers = {
            id : uuidv4(),
            email : req.body.email,
            password: hashedPassword,
        }
        users.push(dataUsers)
        const insertQuery = "INSERT INTO Users VALUES ('" + dataUsers.id + "','" + 1 + "', '" + dataUsers.email + "', '" + dataUsers.password + "')";
        const searchEmail = "SELECT * FROM Users WHERE Email = '" + dataUsers.email + "'";
        pool.connect(function (err) {
            if (err) {
                console.log('Lỗi kết nối:', err);
                return;
            }
            // Check Existed Email
            pool.request().query(searchEmail).then(function (result) {
                if(result.recordset.length > 0 ){
                    console.log("Email nãy đã được xử dụng");
                    res.redirect('/register');
                }
                else{
                    // INSERT
                    pool.request().query(insertQuery).then(function (result) {
                        console.log('Dữ liệu đã được thêm thành công');
                        res.redirect("/login");
                    })
                    .catch(function (err) {
                        console.log('Lỗi khi thêm dữ liệu:', err);
                        res.send(false);
                    });
                }
            })
            .catch(function (err) {
                console.log('Lỗi khi xử lý câu lệnh :', err);
            });
        });
    }catch (e){
        console.log(e)
        res.redirect('/register');
    }
})

// Function : Login 


app.post("/login", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

app.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect("/")
    })
})

app.get("/", (req, res) => {
    // Kiểm tra trạng thái đăng nhập từ session
    if (req.isAuthenticated()) {
      // Người dùng đã đăng nhập, có thể truy cập thông tin phiên từ req.session
      const username = req.session.username;
      console.log(req.session);
      console.log(username);

    } else {
      console.log("Not login")
    }
  });

app.use('/',userLogin);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

