//! Necessary Dependencies
const multer = require("multer")
const path = require("path")

//! Building Multer Storage Configuration
// const userFileStorage = multer.diskStorage({
//     destination: function(req , file , cb){
//         // cb(null , "../userUploads/") //! --> Recent
//          cb(null, path.join(__dirname, "../userUploads"))
//     }, filename: function(req , file , cb) {
//         const uniqueName = Date.now() + "-" + file.originalname
//         cb(null, uniqueName)
//     }
// })

const uploadPath = path.resolve(__dirname, "../userUploads");
if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

const userFileStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadPath);
    },
    filename: function(req, file, cb){
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});


//! Building Multer Instance
const userUploads = multer ({storage: userFileStorage})

//! Exporting the Multer Instance
module.exports = {userUploads}





