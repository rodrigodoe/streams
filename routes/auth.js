const auth = require("express").Router();
const authHelper = require("../helpers/Auth");
const passport = require("passport");

auth.post("/register", authHelper.signUp,passport.authenticate("local"),authHelper.getUser);

auth.post("/login", passport.authenticate("local"), authHelper.getUser);

auth.get("/me", authHelper.getUser);

module.exports = auth;
