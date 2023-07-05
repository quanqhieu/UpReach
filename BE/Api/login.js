const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const passport = require('passport');

exports.login = async (passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));