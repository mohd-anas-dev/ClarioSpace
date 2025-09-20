//! Necessary Dependencies
const authModel = require("../models/auth.models")
const bcryptjs = require("bcryptjs")
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie")
const crypto = require("crypto")

//! Handing Controllers
const handleUserSignUp = async(req,res) => {
    const body = req.body
    const {userName , userEmail, userPassword} = body
    try{
        if(!body || !userName || !userEmail || !userPassword){
            return res.status(400).json({success: false , message: "Kindly Fill In All Fields"})
        }
        const isUserExist = await authModel.findOne({userEmail})
        if(isUserExist){
            return res.status(400).json({success: false , message: "Email ID Is Already Registered, Please Log In"})
        }
        const hashedPassword = await bcryptjs.hash(userPassword, 15)
        const generateRandomUserVerificationToken =  Math.floor(100000 + Math.random() * 90000).toString();
        const user = new authModel({
            userName,
            userEmail,
            userPassword: hashedPassword,
            userVerificationToken: generateRandomUserVerificationToken,
            userVerificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
            userIsVerified: true,
        })
        await user.save()
        generateTokenAndSetCookie(res, user._id)
        res.status(201).json({success: true, message: "Sign Up Succesfull", user: {
            ...user._doc,
            userPassword: undefined
        }})
    }catch (error) {
        console.log(` Error Printed In Console Log: || ${error.message}`)
        res.status(400).json({success: false, message: `Error In Sign Up || ${error.message}`})

    }
}


const handleUserLogOut = async(req,res) => {
    res.clearCookie("authToken")
    res.status(200).json({success: true , message: "Logged Out Successfully"})
}

const handleUserLogIn = async(req,res) => {
    const body = req.body
    const {userEmail, userPassword} = body

    try {
        if(!body || !userEmail || !userPassword){
            return res.status(400).json({success: false, message: "Kindly Fill In All Fields"})
        }
        const user = await authModel.findOne({userEmail})
        if(!user){
            return res.status(400).json({success: false, message: "Invalid email or account does not exist.",})
        }
        const ComparePassword = await bcryptjs.compare(userPassword, user.userPassword)
        if(!ComparePassword){
            return res.status(400).json({success: false , message: "Invalid Password, Please Try Again"})
        }

        generateTokenAndSetCookie(res, user._id)
        user.userLastLoginDate = new Date()
        await user.save()
        res.status(200).json({success: true , message: "Logged In Successfully", user: {
            ...user._doc,
            userPassword: undefined
        }})
        
    } catch (error) {
        console.log(` Error Printed In Console Log: || ${error.message}`)
        res.status(400).json({success: false, message: `Error In Log In || ${error.message}`})    
        
    }
}

const handleUserForgotPassword = async(req,res) => {
    const {userEmail} = req.body
    try {
        if(!req.body || !userEmail){
            return res.status(400).json({success: false , message: "Kindly Fill In All Fields"})
        }
        const user = await authModel.findOne({userEmail})
        if(!user){
            return  res.status(400).json({success: false , message: "No Such Email ID exists"})
        }
        const randomToken = await crypto.randomBytes(15).toString("hex")
        const randomTokenExpiration = Date.now() + 10 * 60* 60* 1000
        user.resetPasswordToken = randomToken,
        user.resetPasswordTokenExpiresAt = randomTokenExpiration
        await user.save()
        res.status(200).json({success: true, message: "Forgot Password Succesfull", resetToken: randomToken})
        
    } catch (error) {
        console.log(` Error Printed In Console Log: || ${error.message}`)
        res.status(400).json({success: false, message: `Error In Forgot Password || ${error.message}`})
        
    }
}

const handleUserResetPassword = async(req,res) => {
    try {
        const {resetToken} = req.params
        const {userPassword} = req.body
        if(!req.body || !userPassword){
            return res.status(400).json({success: false , message: "Fill In The New Password"})
        }
        const user = await authModel.findOne({
            resetPasswordToken: resetToken,
            resetPasswordTokenExpiresAt: {$gt: Date.now()}
        })
        if(!user) {
            return res.status(400).json({success: false , message: "Invalid or Expired Token"})
        }
        const hashedPassword = await bcryptjs.hash(userPassword, 15)
        user.userPassword = hashedPassword,
        user.resetPasswordToken = undefined,
        user.resetPasswordTokenExpiresAt = undefined
        await user.save()
        res.status(200).json({success: true , message: "Password Has Been Reset", user: {
            ...user._doc,
            userPassword: undefined
        }})
        
    } catch (error) {
        console.log(` Error Printed In Console Log: || ${error.message}`)
        res.status(400).json({success: false, message: `Error In Reset Password || ${error.message}`})
        
    }
}

const handleUserVerifyAuth = async(req, res)=> {
    try{
        const user = await authModel.findById(req.userID)
        if(!user) {
            return res.status(400).json({success: false , message: "User Does Not Exist"})
        }
        res.status(200).json({success: true , message: "User is verifed", user: {
            ...user._doc,
            userPassword: undefined
        }})
    } catch(error){
                 console.log(` Error Printed In Console Log: || ${error.message}`)
                 res.status(400).json({success: false , message: `Error in User Verification || ${error.message}`})
    }
}
//! Exporting Functions
module.exports = {
    handleUserSignUp,
    handleUserLogOut,
    handleUserLogIn,
    handleUserForgotPassword,
    handleUserResetPassword,
    handleUserVerifyAuth
}