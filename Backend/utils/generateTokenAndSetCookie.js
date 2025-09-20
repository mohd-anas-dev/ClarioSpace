//! Necessary Dependencies
const JWT = require("jsonwebtoken")

//! Building Function

const generateTokenAndSetCookie = (res, userID) => {
    const token = JWT.sign({userID}, process.env.JWT_SECRET_URI, {
        expiresIn: "7d"
    })

    res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    console.log("NODE_ENV: ", process.env.NODE_ENV)
    return token //! DONT FORGET TO RETURN THE TOKEN
}

//! Exporting the Function
module.exports = generateTokenAndSetCookie