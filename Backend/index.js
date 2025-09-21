// //! Necessary Dependencies
// const express = require("express")
// const app = express()
// const cookieParser = require("cookie-parser")
// const dotenv = require("dotenv")
// const authRouter = require("./routes/auth.routs")
// const userFileRouter = require("./routes/userFile.routs")
// const {ConnectMongoDB} = require("./MongoConnection")
// const cors = require("cors")
// const multer = require("multer")
// const path = require("path")
// const fs = require("fs")

// //! Routes
// dotenv.config()
// app.use(cookieParser())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(cors({
//     origin: ["https://clariospace-frontend.onrender.com", "http://localhost:5173"],
//     credentials: true
// }))

// //! ------------------ TO CREATE THE FOLDER -----------------
// const uploadDir = path.join(__dirname, "userUploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }

// //! -------------------------------------
// app.get("/", (req, res)=> {
//     res.send("Home Page For ClarioSpace")
// })
// app.use("/api/auth", authRouter)
// app.use("/api/uploads", userFileRouter)
// // app.use("/userUploads", express.static(path.join(__dirname, "C:\\Users\\ff297\\OneDrive\\Desktop\\userUploads")))
// // app.use("/userUploads", express.static(path.join(__dirname, "userUploads"))) -----> //! Original

// // app.use("/userUploads", express.static("C:\\Users\\ff297\\OneDrive\\Desktop\\userUploads")) //! --> Before Most Recent
// // app.use("/userUploads", express.static(path.join(__dirname, "userUploads"))) //! ---> Most Recent
// app.use("/userUploads", express.static(path.join(__dirname, "userUploads")))




// const PORT = process.env.PORT || 3000
// //! Live Server 
// app.listen(PORT, () => {
//     ConnectMongoDB(),
//     console.log("Server  Running on: ", PORT)
// })


//! ----------------> Second Recent

// //! Necessary Dependencies
// const express = require("express")
// const app = express()
// const cookieParser = require("cookie-parser")
// const dotenv = require("dotenv")
// const path = require("path")
// const fs = require("fs")
// const cors = require("cors")
// const { ConnectMongoDB } = require("./MongoConnection")

// //! Routers
// const authRouter = require("./routes/auth.routs")
// const userFileRouter = require("./routes/userFile.routs")

// dotenv.config()

// //! Middleware
// app.use(cookieParser())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(
//   cors({
//     origin: ["https://clariospace-frontend.onrender.com", "http://localhost:5173"],
//     credentials: true,
//   })
// )

// //! ------------------ TO CREATE THE UPLOADS FOLDER -----------------
// const uploadDir = path.join(__dirname, "userUploads")
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

// //! ------------------ API ROUTES -----------------
// app.use("/api/auth", authRouter)
// app.use("/api/uploads", userFileRouter)

// //! Serve User Uploads
// app.use("/userUploads", express.static(path.join(__dirname, "userUploads")))

// //! ------------------ SERVE REACT BUILD -----------------
// const frontendBuildPath = path.join(__dirname, "../Frontend/dist")
// app.use(express.static(frontendBuildPath))

// //! Fallback Route: all non-API requests go to React index.html
// // Catch-all fallback for React SPA (Express v5 compatible)
// app.get(/^\/(?!api).*/, (req, res) => {
//   res.sendFile(path.join(frontendBuildPath, "index.html"))
// })



// //! ------------------ START SERVER -----------------
// const PORT = process.env.PORT || 3000
// const startServer = async () => {
//   try {
//     await ConnectMongoDB()
//     console.log("✅ MongoDB connected")
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`)
//     })
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err)
//     process.exit(1)
//   }
// }

// startServer()



//! Complete working solution for your Backend/index.js

//! Necessary Dependencies
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const { ConnectMongoDB } = require("./MongoConnection")

//! Routers
const authRouter = require("./routes/auth.routs")
const userFileRouter = require("./routes/userFile.routs")

dotenv.config()

//! Middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ["https://clariospace-frontend.onrender.com", "http://localhost:5173"],
    credentials: true,
  })
)

//! ------------------ TO CREATE THE UPLOADS FOLDER -----------------
const uploadDir = path.join(__dirname, "userUploads")
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

//! ------------------ API ROUTES (MUST COME BEFORE STATIC FILES) -----------------
app.use("/api/auth", authRouter)
app.use("/api/uploads", userFileRouter)

//! Serve User Uploads (API-like route, should come before static files)
app.use("/userUploads", express.static(path.join(__dirname, "userUploads")))

//! ------------------ SERVE REACT BUILD -----------------
const frontendBuildPath = path.join(__dirname, "../Frontend/dist")

// Serve static files from the React build (CSS, JS, images, etc.)
app.use(express.static(frontendBuildPath))

//! SPA FALLBACK - EXPRESS v5 COMPATIBLE
app.use((req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return next()
  }
  
  // Skip file upload routes
  if (req.path.startsWith('/userUploads/')) {
    return next()
  }
  
  // Skip requests for static assets (files with extensions like .js, .css, .png, etc.)
  if (req.path.includes('.') && !req.path.endsWith('/')) {
    return next()
  }
  
  // For all SPA routes, serve index.html
  const indexPath = path.join(frontendBuildPath, "index.html")
  
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath)
  } else {
    return res.status(404).json({
      success: false,
      message: 'Frontend build not found. Please check if the build was created properly.'
    })
  }
})

//! 404 handler for API routes that don't exist
app.use('/api', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: `API endpoint not found: ${req.originalUrl}` 
  })
})

//! Final 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found'
  })
})

//! Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  })
})

//! ------------------ START SERVER -----------------
const PORT = process.env.PORT || 3000
const startServer = async () => {
  try {
    await ConnectMongoDB()
    console.log("✅ MongoDB connected")
    
    // Log important paths for debugging
    console.log(`📁 Frontend build path: ${frontendBuildPath}`)
    console.log(`📄 Index.html exists: ${fs.existsSync(path.join(frontendBuildPath, "index.html"))}`)
    console.log(`📂 Uploads directory: ${uploadDir}`)
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err)
    process.exit(1)
  }
}

startServer()