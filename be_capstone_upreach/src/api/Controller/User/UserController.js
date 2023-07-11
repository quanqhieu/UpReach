const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const {v4 : uuidv4} = require("uuid")

const auth = require('../../Authen/auth');
const sendMail = require('../../sendMail/sendMail')
const userService = require('../../Service/User/UserService')
const userModels = require('../User/UserController')
const router = express.Router();

router.post('/api/login', login);
router.post('/api/register', register);
router.post('/api/confirm', confirm);
router.post('/api/logout', logout);

auth.initialize(
    passport,
    id => userModels.find(user => user.id === id),
    email => userModels.find(user => user.email === email)
)

async function register(req, res, next){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        userModels.id = uuidv4();
        userModels.email = req.body.email;
        userModels.password = hashedPassword;
        userModels.role = req.body.role;
        existingEmail = await  userService.getUserByEmail(userModels.email);
        if (existingEmail.length > 0){
            return res.json({ message: "Email đã được sử dụng" });
        }else {
            const mailOptions = {
                from: 'thienndde150182@gmail.com', // Địa chỉ email người gửi
                to: userModels.email, // Địa chỉ email người nhận
                subject: 'OTP for Registration', // Tiêu đề email
                text: `Your OTP for registration is: ${sendMail.otp}` // Nội dung email
            };
            sendMail.sendMailToUser(mailOptions)
            .then(() => {
                // Xử lý khi gửi email thành công
                res.json({ message: sendMail.otp });
            })
            .catch((error) => {
                console.log(userModels.email);
                // Xử lý khi gửi email gặp lỗi
                res.json({ message: error });
            });
        }
    }catch (err){
        res.json({ message: "Lỗi ", err });
    }
}

async function confirm(req, res, next){
    try{
        const otp = req.body.otp;
        if(otp === sendMail.otp){
            result = userService.insertInfoUser(userModels.id,userService.role,userModels.email,userModels.password);
            if(result){
                console.log('Dữ liệu đã được thêm thành công');
                res.json({ message: "Dữ liệu đã được thêm thành công" });
            }else{
                console.log('Dữ liệu đã được thêm Fails');
                res.json({ message: "Dữ liệu add Fails" });
            }
        }
    }catch(err){
        console.log(err);
        res.json({ message: "Lỗi ", err });
    }
}

async function login(req,res,next){
    try{
        const sessionId = req.sessionID;
        const maxAge = req.session.cookie.maxAge; // Thời gian tồn tại của session (đơn vị tính bằng mili giây)
        const expiry = new Date(Date.now() + maxAge); // Thời gian hết hạn của session
        const email = req.body.email;
        const user = await userService.getUserByEmail(email);
        const userId = user[0].User_ID;
        passport.authenticate("local",async (err, user, info) => {
            
            if (err) {
                return res.status(500).json({ message: "Internal server error" });
            }
            if (!user) {
                return res.status(401).json({ message: "Sai email hoặc sai mật khẩu" });
            }
            const existedUserId = await userService.getSessionUser(userId);
            if(existedUserId.length > 0){
                return res.status(500).json({ message: "User Id tồn tại" });
            }
            req.logIn(user, (err) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error" });
                }
                result = userService.insertSessionUser(sessionId,userId,maxAge.toString(),expiry.toISOString());
                if(!result){
                    console.log('fails add session');
                    res.json({message :'Fails Add Session'});
                }
                res.json({
                    message : "Them session vao db thanh cong",
                    data: {
                        User_ID: user.User_ID,
                        Email: user.Email,
                    }
                })
            });
        })(req, res, next);
    }catch(err){
        res.json({message : err});
    }
}



async function logout(req,res,next){
    try{
        const email = req.body.email;
        const user = await userService.getUserByEmail(email);
        const userId = user[0].User_ID;
        console.log('userId : ' + userId);
        const result = await userService.deleteSessionUserById(userId);
        console.log('Result : ' + result)
        if(result){
            req.logout();
            res.json({message : "Xoa session khoi db thanh cong"})
        }
        console.log('fails delete session');
        res.json({message :'Fails Delete Session'});
    }catch(err){
        res.json({message : err});
    }
}

module.exports = router;
