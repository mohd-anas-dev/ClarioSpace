//! Necessary Dependencies
const express = require("express")
const router = express.Router()
const {userUploads} = require("../multer.config")
const {handleUserFileUploads, handleGetUserFileUploads, handleGetUserAllFileUploads, handleGetSortedUserFileUploads, handleDeleteUserFileUploads, handleUserFileTags} = require("../controllers/userFile.controllers")
const {verifyAuth} = require("../middlewares/auth.middleware")
const { verify } = require("jsonwebtoken")

//! Defining Routes
router.post("/uploadFiles",verifyAuth, userUploads.array("myFile", 10), handleUserFileUploads)
router.get("/userFiles",verifyAuth, handleGetUserFileUploads)
router.get("/allUserFiles" ,verifyAuth, handleGetUserAllFileUploads)
router.get("/allUserFiles/:ext",verifyAuth, handleGetSortedUserFileUploads)
router.delete('/deleteFile/:fileFileName', verifyAuth,handleDeleteUserFileUploads)
router.patch('/UpdateFile/:fileFileName', verifyAuth, handleUserFileTags)

//! Exporting Routes
module.exports = router

