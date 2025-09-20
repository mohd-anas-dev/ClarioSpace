//! Necessary Dependencies
const userFileModel = require("../models/userFile.models")
const path = require("path")
const fs = require("fs")


//! Handling Controllers
const handleUserFileUploads = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: "Please proceed with uploading the files." })
        }
        const savedFiles = []

        for (const file of req.files) {
            const userFile = new userFileModel({
                fileOriginalName: file.originalname,
                fileFileName: file.filename,
                fileFilePath: file.path,
                fileFileSize: file.size,
                fileFileType: file.mimetype,
                userID: req.userID
            })
            await userFile.save()
            savedFiles.push(userFile)
        }

        return res.status(200).json({ success: true, message: `${savedFiles.length} files uploaded Successfully` })

    } catch (error) {
        console.log(" || Error ||")
        return res.status(500).json({ success: false, message: `Error || ${error.message}` })
    }
}

const handleGetUserFileUploads = async (req, res) => {
    try {
        const files = await userFileModel.find({ userID: req.userID }).sort({ fileUploadDate: -1 })
        res.json(files)

    } catch (error) {
        console.log(" Error | Console")
        return res.status(500).json({ success: false, message: `Error || ${error.message}` })

    }
}

const handleGetUserAllFileUploads = async (req, res) => {
    try {
        const files = await userFileModel.find({ userID: req.userID })

        if (files.length === 0) {
            return res.status(400).json({ success: false, message: "Start off by Uploading Files" })
        }

        const fileList = files.map((file) => ({
            fileOriginalName: file.fileOriginalName,
            fileFileName: file.fileFileName,
            fileFilePath: file.fileFilePath,
            fileFileSize: file.fileFileSize,
            fileFileType: file.fileFileType,
            fileTags: file.fileTags
        }))

        return res.status(200).json({ success: true, message: "All Files", files: fileList })



    } catch (error) {
        console.log(" || Error ||")
        return res.status(500).json({ success: false, message: `Error || ${error.message}` })
    }

}

const handleGetSortedUserFileUploads = async (req, res) => {
    try {
        const filterExt = "." + req.params.ext.toLowerCase()
        const files = await userFileModel
            .find({
                userID: req.userID,
                fileOriginalName: { $regex: `\\${filterExt}$`, $options: 'i' }
            })
            .sort({ fileUploadDate: -1 })

        if (files.length === 0) {
            return res.status(400).json({ success: false, message: `No Such Files Found With Extension: ${filterExt}` })
        }

        const sortedFileList = files.map((file) => ({
            fileOriginalName: file.fileOriginalName,
            fileFileName: file.fileFileName,
            fileFilePath: file.fileFilePath,
            fileFileSize: file.fileFileSize,
            fileFileType: file.fileFileType
        }))

        return res.status(200).json({ success: true, message: `Sorted Files For ${filterExt}: `, files: sortedFileList })


    } catch (error) {
        console.log("|| Error ||")
        return res.status(500).json({ success: false, message: `Error || ${error.message}` })
    }
}

const handleDeleteUserFileUploads = async (req, res) => {
    try {
        const deletedFiles = await userFileModel.findOneAndDelete({ userID: req.userID, fileFileName: req.params.fileFileName })
        if(!deletedFiles){
            return res.status(400).json({success: false , message: `File Does'nt Exist`})
        }
        // const filePath = `C:\\Users\\ff297\\OneDrive\\Desktop\\userUploads\\${req.params.fileFileName}` //! --> Recent
        const filePath = path.join(__dirname, "../userUploads", req.params.fileFileName)
        fs.unlink(filePath, (err) => {
            if(err){
                return res.status(400).json({success: false , message: `Error || ${err.message}`})
            }
            else{
                res.status(200).json({success: true , message: `File Deleted`})
            }
        })

    } catch (error) {
        console.log("Error")
        res.status(400).json({success: false , message: `Error || ${error.message}`})

    }
}

const handleUserFileTags = async(req, res) => {
    const {fileTags} = req.body
    const validTags = ["Work", "Personal", "Study"]

    try {
        if(fileTags !==  "" && !validTags.includes(fileTags)){
            return res.status(400).json({success: true , message: "Invalid Tag"})
        }

        const updatedFiles = await userFileModel.findOneAndUpdate(
            {userID: req.userID, fileFileName: req.params.fileFileName},
            {fileTags: fileTags},
            {new: true}
        )
        if(!updatedFiles){
            return res.status(400).json({success: false , message: "File Not Found"})
        }
        res.status(200).json({success: true , message: "File Tagged"}, updatedFiles)
    } catch (error) {
        console.log("Error")
        return res.status(400).json({success: false , message: "Something went Wrong"})
        
    }

}

//! Exporting Controllers
module.exports = {
    handleUserFileUploads,
    handleGetUserFileUploads,
    handleGetUserAllFileUploads,
    handleGetSortedUserFileUploads,
    handleDeleteUserFileUploads,
    handleUserFileTags

}