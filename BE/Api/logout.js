const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const passport = require('passport');

exports.delete = async function(req,res) {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect("/")
    })
}