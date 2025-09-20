//! Necessary Dependencies
const express = require("express")
const router = express.Router()
const {handleUserSignUp, handleUserLogOut, handleUserLogIn, handleUserForgotPassword, handleUserResetPassword, handleUserVerifyAuth} = require("../controllers/auth.controllers")
const {verifyAuth} = require("../middlewares/auth.middleware")

//! Defining Routes

router.post("/signup", handleUserSignUp)
router.delete("/logout", handleUserLogOut)
router.post("/login", handleUserLogIn)
router.post("/forgot-password", handleUserForgotPassword)
router.post("/reset-password/:resetToken", handleUserResetPassword)
router.get("/check-auth", verifyAuth , handleUserVerifyAuth)

module.exports = router