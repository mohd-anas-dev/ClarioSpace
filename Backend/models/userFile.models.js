//! Necessary Dependencies
const mongoose = require("mongoose")

//! Building the User Upload File Schema
const userFileSchema = new mongoose.Schema({
    fileOriginalName: String,
    fileFileName: String,
    fileFilePath: String,
    fileFileSize: String,
    fileFileType: String,
    fileUploadDate: {
        type: Date,
        default: Date.now()
    },
    fileTags: {
        type: String,
        default: "",
        enum: ["Work", "Study" , "Personal", ""]
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClarioSpaceAuthBase",
        required: true,
    }
}, {timestamps: true})

//! Building the User Upload File Model
const userFileModel = mongoose.model("clarioSpaceUserFilesBase", userFileSchema)

//! Exporting the UserFileModel
module.exports = userFileModel