const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const sql = require('mssql');

const config = require('../Config/dbConfig');

const pool = new sql.ConnectionPool(config);

function initialize(passport, getUserById, getUserByEmail){
    // Function : Authenticate users

    const authenticateUser = async (email, password, done) => {
        try {
            pool.connect(async function (err,connection) {
                if (err) {
                    console.log('Lỗi kết nối:', err);
                    return;
                }
                const query = `SELECT * FROM Users WHERE Email = '${email}'`;
                connection.query(query, async function (err, result) {
                    if (err) {
                        console.log('Lỗi truy vấn:', err);
                        return done(err);
                    }
                    const user = result.recordset[0];
                    console.log(user);
                    if (!user) {
                        return done(null, false, { message: "No user found with that email" });
                    }
                    const passwordMatch = await bcrypt.compare(password, user.Password);
                    if (passwordMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Incorrect password" });
                    }
                    
                })
                
            })
            
        }
        catch (e) {
          console.log(e);
          return done(e);
        }
        
        
        
        
    };

    passport.use( new LocalStrategy({usernameField: 'email'}, authenticateUser))
        
    // save infor user into session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // save infor user into session
    // use data in session to get data of users
    passport.deserializeUser(async (id, done) => {
        try {
        const user = await getUserById(id);
        done(null, user);
        } catch (e) {
        done(e);
        }
    });
}

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}

module.exports = {initialize,checkAuthenticated,checkNotAuthenticated}