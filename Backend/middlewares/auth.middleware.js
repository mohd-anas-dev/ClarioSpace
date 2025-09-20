//! Necessary Dependencies
const jwt = require("jsonwebtoken")

//! Building Middleware:
const verifyAuth = (req, res , next) =>{
    const token = req.cookies.authToken

    if(!token) {
        return res.status(400).json({success: false , message: "Unauthorized User in MiddleWare -- 1"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_URI)
        if(!decoded) {
            return res.status(400).json({success: false , message: "Unauthorized User In MiddleWare --2"})
        }
        req.userID = decoded.userID
        next()
    } catch(error) {
        console.log(`Error || ${error.message}`)
        res.status(400).json({success: false , message: `Error || ${error.message}`})  
    }

}


//! Exporting Middlewares
module.exports = {verifyAuth}