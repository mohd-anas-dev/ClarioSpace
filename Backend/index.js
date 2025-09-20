//! Necessary Dependencies
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const authRouter = require("./routes/auth.routs")
const userFileRouter = require("./routes/userFile.routs")
const {ConnectMongoDB} = require("./MongoConnection")
const cors = require("cors")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

//! Routes
dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: "https://clariospace-frontend.onrender.com",
    credentials: true
}))
app.get("/", (req, res)=> {
    res.send("Home Page For ClarioSpace")
})
app.use("/api/auth", authRouter)
app.use("/api/uploads", userFileRouter)
// app.use("/userUploads", express.static(path.join(__dirname, "C:\\Users\\ff297\\OneDrive\\Desktop\\userUploads")))
// app.use("/userUploads", express.static(path.join(__dirname, "userUploads"))) -----> //! Original

app.use("/userUploads", express.static("C:\\Users\\ff297\\OneDrive\\Desktop\\userUploads")) 
// app.use("/userUploads", express.static(path.join(__dirname, "userUploads"))) //! ---> Most Recent



const PORT = process.env.PORT || 3000
//! Live Server 
app.listen(PORT, () => {
    ConnectMongoDB()
})



