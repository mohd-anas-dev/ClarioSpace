//! Necessary Dependencies
const mongoose = require("mongoose")

//! Creating Schema
const authSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    userEmail: {
        type: String,
        required: true,
        unique: true
    },

    userPassword: {
        type: String,
        required: true
    },

    userIsVerified: {
        type: Boolean,
        default: false
    },

    userLastLoginDate: {
        type: Date,
        default: Date.now()
    },

    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,

    userVerificationToken: String,
    userVerificationTokenExpiresAt: Date

    
}, {timestamps: true})


//! Creating Model
const authModel = mongoose.model("ClarioSpaceAuthBase", authSchema)


//! Exporting Model
module.exports = authModel