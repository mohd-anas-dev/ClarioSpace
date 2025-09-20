import React, { useEffect, useState } from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar.jsx"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,

  DropdownMenuSeparator,

  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
} from "../../components/ui/dropdown-menu.jsx"
import { SideBarDashboard } from './SideBarDashboard.jsx'
import { motion } from 'framer-motion'
import "../../ComponentStyles/DashboardPagesStyle/MyFilesDashboard.css"
import { useNavigate } from 'react-router-dom'
import PPTLogo from "../../assets/AllLogos/PPTLogo.png"
import PDFLogo from "../../assets/AllLogos/PDFLogo.png"
import WordLogo from "../../assets/AllLogos/WordDoc.png"
import ExcelLogo from "../../assets/AllLogos/ExcelLogo.png"
import MP4Logo from "../../assets/AllLogos/FinalMP4Logo.png"
import MP3Logo from "../../assets/AllLogos/MP3Logo.png"
import SVGLogo from "../../assets/AllLogos/SVGLogo.png"
import JPEGLogo from "../../assets/AllLogos/JPEGLogo.png"
import GIFLogo from "../../assets/AllLogos/GIFLogo.png"
import PNGLogo from "../../assets/AllLogos/PNGLogo.png"
import UNKLogo from "../../assets/AllLogos/UNKLogo.png"
import TextLogo from "../../assets/AllLogos/TEXTLogo.png"

import axios from 'axios'
const MyFilesDashboard = () => {
  const navigate = useNavigate()
  const [sortedFiles, setsortedFiles] = useState([])
  const [isLaoding, setIsLoading] = useState(true)


  const handleSortedFiles = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/uploads/allUserFiles")
      setsortedFiles(res.data.files)
    } catch {
      console.log(" Unexpected Error ")
    } finally {
      setIsLoading(false)
    }
  }

  const friendlyMimeTypes = (mimeType) => {
    if (!mimeType) return "unknown";
    if (mimeType.includes("pdf")) return "PDF Files";        //!
    if (mimeType.includes("png")) return "PNG Images";  //!
    if (mimeType.includes("Microsoft Excel Worksheet (.xlsx)")) return "Excel Files";   //!
    if (mimeType.includes("wordprocessingml")) return "Word Files";    //!
    if (mimeType.includes("spreadsheetml.sheet")) return "Excel Files";  //!
    if (mimeType.includes("presentation")) return "Presentation Files";   //!
    if (mimeType.includes("jpeg")) return "JPEG Images";         //!
    if (mimeType.includes("video")) return "Video Files"; //!
    if (mimeType.includes("svg")) return "SVG Files"; //!
    if (mimeType.includes("mpeg")) return "Audio Files"; //!
    if (mimeType.includes("gif")) return "GIF Files"; //!
    if (mimeType.includes("text")) return "Text Files"; //!
    return mimeType.split("/").pop().toUpperCase();
  }

  const friendlyImages = (mimeType) => {
    if (mimeType.includes("pdf")) return `${PDFLogo}`
    if (mimeType.includes("wordprocessingml")) return `${WordLogo}`
    if (mimeType.includes("jpeg")) return `${JPEGLogo}`
    if (mimeType.includes("Microsoft Excel Worksheet (.xlsx)")) return `${ExcelLogo}`
    if (mimeType.includes("spreadsheetml.sheet")) return `${ExcelLogo}`
    if (mimeType.includes("png")) return `${PNGLogo}`
    if (mimeType.includes("video")) return `${MP4Logo}`
    if (mimeType.includes("presentation")) return `${PPTLogo}`
    if (mimeType.includes("mpeg")) return `${MP3Logo}`
    if (mimeType.includes("svg")) return `${SVGLogo}`
    if (mimeType.includes("html")) return `${SVGLogo}`
    if (mimeType.includes("gif")) return `${GIFLogo}`
    if (mimeType.includes("text")) return `${TextLogo}`

    return UNKLogo
    
  }


  useEffect(() => {
    handleSortedFiles()
  }, [])

  const groupedData = sortedFiles.reduce((files, ext) => {
    (files[ext.fileFileType] = files[ext.fileFileType] || []).push(ext)
    return files
  }, {})

  
  const handleDeletedFiles = async(fileName) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/uploads/deleteFile/${fileName}`)
      setsortedFiles(prev => prev.filter(file => file.fileFileName !== fileName))
      console.log("Deleted Successfully")
    } catch (error) {
      if(error.response){
        console.log(`Error || ${error.response.data.message}`)
      } else {
        console.log("Error")
      }
    }
  }

  const handleUpdateFileTags = async(fileName, selectedTags) => {
    const currentFile = sortedFiles.find(file => file.fileFileName === fileName)
    const newTag = currentFile?.fileTags === selectedTags ? "": selectedTags
    try {
      const res = await axios.patch(`http://localhost:3000/api/uploads/UpdateFile/${fileName}`, {
        fileTags: newTag
      })
      // Update the specific file's tag in the local state

      setsortedFiles(prev => prev.map(file => 
        file.fileFileName === fileName 
        ? { ...file, fileTags: newTag, }
        : file
      ))
      console.log(res.data.message)
    } catch (error) {
      if(error.response){
        console.log(error.response.data.message)
      }
      else {
        console.log("|| Error")
      }
    }
  }

  

  return (
    <>
      <div className="MyFilesDashboard">
        <SidebarProvider>
          <SideBarDashboard />
          <SidebarTrigger />
          <SidebarInset>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} className="MyFilesDashboardContainer">
              <div className="TopMyFilesDashboard">
                <h1>Your Files</h1>
              </div>
              {Object.entries(groupedData).length === 0 &&
                <div className='MidText'>
                  <p>Upload Files To Get Started</p>
                  <button onClick={() => navigate("/dashboard")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-icon lucide-upload"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>Upload Files</button>
                </div>}
              <div className="MiddleMyFilesDashboard">
                {Object.entries(groupedData).sort(([a],[b])=> a.localeCompare(b)).map(([FileType, Files]) => {
                  return (
                    <div className="MyFileCard" key={FileType}>
                      <h1>{friendlyMimeTypes(FileType)}</h1>
                      <ul>
                        {Files.map((file, index) => {
                          return (
                            <li key={index} className={file.fileTags || ""}><span  onClick={() => window.open(`http://localhost:3000/userUploads/${file.fileFileName}`)} ><img src={friendlyImages(file.fileFileType)} alt="" />{`${file.fileOriginalName.split('.').slice(0, -1).join('.').replace(/[/_-]/g, ' ').split(' ').slice(0, 2).join(' ')}.${file.fileOriginalName.split('.').pop()}`}</span><div className="MenuOption flex gap-[0.2em]">
                              <svg onClick={() => handleDeletedFiles(file.fileFileName)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            <DropdownMenu><DropdownMenuTrigger ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dotMenu"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuLabel className="font-[Poppins] font-semibold">Sort & Filter</DropdownMenuLabel>
                            <DropdownMenuSub><DropdownMenuSubTrigger className="cursor-pointer">Add Tags</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent >
                              <DropdownMenuItem onClick={() => handleUpdateFileTags(file.fileFileName, "Work")}  className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#035c96" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot cursor-pointer"><circle cx="12.1" cy="12.1" r="1"/></svg>Work</DropdownMenuItem>
                              <DropdownMenuItem   onClick={() => handleUpdateFileTags(file.fileFileName, "Study")} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d40e0e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot cursor-pointer"><circle cx="12.1" cy="12.1" r="1"/></svg>Study</DropdownMenuItem>
                              <DropdownMenuItem  onClick={() => handleUpdateFileTags(file.fileFileName, "Personal")} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#46bf55" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot cursor-pointer"><circle cx="12.1" cy="12.1" r="1"/></svg>Personal</DropdownMenuItem>
                            </DropdownMenuSubContent>
                            </DropdownMenuSub><DropdownMenuSeparator/></DropdownMenuContent>
                            </DropdownMenu></div></li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </SidebarInset>
        </SidebarProvider>

      </div>
    </>
  )
}

export default MyFilesDashboard






// {Object.entries(groupedData).length === 0 && <div  className='MidText'>
//   <p>Upload Files To Get Started</p>
//   <button onClick={() => navigate("/dashboard")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-icon lucide-upload"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Files</button>
//   </div>}
// <div className="MiddleMyFilesDashboard">
//   {Object.entries(groupedData)?.map(([fileType, files])=> {
//     return (
//   <div className="MyFileCard" key={fileType}>
//     <h1>{fileType.toUpperCase().replace(/[_ + - \/ . () {} ]/g, " ").split("").slice(-4)} Files</h1>
//     <ul>
//       {files.map((file,index) => (
//         <li key={index}><span><img src="" alt="" /><a href={file.fileFilePath} target="_blank">{`${file.fileOriginalName.split('.').slice(0, -1).join('.').replace(/[/_-]/g, ' ').split(' ').slice(0, 3).join(' ')}.${file.fileOriginalName.split('.').pop()}`}</a></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></li>
//       ))}
//     </ul>
//   </div>
//     )
//   })}
// </div>
