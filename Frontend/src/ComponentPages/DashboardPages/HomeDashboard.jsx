import React, { useEffect } from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar.jsx"
import "../../ComponentStyles/DashboardPagesStyle/HomeDashboardStyle.css"
import { SideBarDashboard } from './SideBarDashboard.jsx'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import DashBaordImage from "../../assets/DashboardImage.png"
import SmoothScroll from '@/components/SmoothScroll.jsx'
const apiUrl = import.meta.env.VITE_API_URL

const HomeDashboard = () => {
  const [UserName, setUserName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMessageTrue, setisMessageTrue] = useState("")
  const [isMessageFalse, setisMessageFalse] = useState("")
  const [selectedFiles, setSelectedFiles] = useState(null)

  const navigate = useNavigate()


  const handleUserName = async () => {
    const res = await axios.get(`${apiUrl}/api/auth/check-auth`)
    setUserName(res.data.user.userName)
  }

  useEffect(() => {
    handleUserName()
    handleSortedUserFIles("all")
  }, [])


  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files)
  }

  const handleUserFileUploads = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.target)

    try {
      const res = await axios.post(`${apiUrl}/api/uploads/uploadFiles`, formData)
      setisMessageTrue(res.data.message)
      setisMessageFalse("")
      e.target.reset()
      setTimeout(async () => {
        await handleSortedUserFIles(currentExtension)
      }, 1000)
    } catch (error) {
      setisMessageTrue("")
      if (error.response) {
        setisMessageFalse(error.response.data.message)
      } else {
        setisMessageFalse("Error -- Frontend")
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }

  const [FilteredFiles, setFilteredFiles] = useState([])
  const [currentExtension, setCurrentExtentsion] = useState("all")

  const handleSortedUserFIles = async (extension) => {
    setCurrentExtentsion(extension)
    try {
      if (extension === "all") {
        const res = await axios.get(`${apiUrl}/api/uploads/allUserFiles`)
        setFilteredFiles(res.data.files)
        setisMessageFalse("")
      } else {
        const res = await axios.get(`${apiUrl}/api/uploads/allUserFiles/${extension}`)
        setFilteredFiles(res.data.files)
        setisMessageFalse("")
      }
    } catch {
      setFilteredFiles([])
    }
  }



  return (
    <SmoothScroll>
    <div className="HomeDashboard">
      <SidebarProvider>
        <SideBarDashboard />
        <SidebarTrigger />
        <SidebarInset>
          <div className="HomeDashboardContainer">
            <div className="TopHomeDashboard">
              <div className="Content">
                <div className="ContentHeader"><motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1>{`Hi ${UserName}.`}</h1>
                  <p>
                    Welcome to <strong>ClarioSpace</strong>. Organize, share,
                    and collaborate on files with ease. Let’s make your work more
                    productive and inspiring today!
                  </p>
                </motion.div>
                </div>
                <div className="ContentButtons">
                  <button onClick={() => navigate("/myFiles")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-closed-icon lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>View Files</button>
                  <button onClick={() => navigate("/friends")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>View Friends</button>
                </div>
              </div>
              <div className="ImageLogo">
                <img
                  src={DashBaordImage}
                  alt="ClarioSpace Logo"
                />
              </div>
            </div>

            <div className="MiddleHomeDashboard">
              <div className="MiddleHomeCard">
                <div className="ForForm">
                  <h1>Drag & Drop your Files</h1>
                  <p className='text-center'>We’ll automatically categorize them by type <p className='Limit text-center'>(Maximum 10 Files At Once)</p></p>
                  
                  <div className="UploadArea">
                    <form
                      encType="multipart/form-data"
                      className="UploadForm"
                      onSubmit={handleUserFileUploads}
                    >
                      <label htmlFor="fileInput" className="CustomFileInput">
                        <span className='SPAN'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-closed-icon lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>Choose File</span>
                        <input type="file" id="fileInput" name="myFile" onChange={handleFileChange} multiple />
                      </label>
                      <button type="submit" className="UploadBtn">{isLoading ? <div class="loader">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div> : "Upload"}</button>
                      {!isLoading && isMessageTrue && (
                        <motion.div
                          key="text"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: "24px" }}
                        >
                          {!isLoading && isMessageTrue && <><p className='ForSuccess'>{isMessageTrue}</p><p className='ForSuccess'>View <NavLink to="/myFiles" className="text-[var(--foreground-color)] font-bold  ">Files</NavLink> to See Them Sorted</p></>}
                        </motion.div>
                      )}
                      {!isLoading && isMessageFalse && (
                        <motion.div
                          key="text"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: "24px" }}
                        >
                          {!isLoading && isMessageFalse && <p className='ForError'>{isMessageFalse}</p>}
                        </motion.div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="EndHomeDashboard m-[1em]">
              <div className="EndHome">
                <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-closed-icon lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>Recent Files</h2>
                <div className="DropDownOptions">
                  <form>
                    <label className='Sorts'>Extensions:</label>
                    <select name="" className='DropSort' onChange={(e) => handleSortedUserFIles(e.target.value)}>
                      <option value="all" className='text-center'>All</option>
                      <option value="pdf" className='text-center'>PDF</option>
                      <option value="png" className='text-center'>PNG</option>
                      <option value="docx" className='text-center'>DOCX</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="RecentFilesGrid">
                {currentExtension === "all" && FilteredFiles?.length === 0 && (<p className='text-center font-["Poppins"] opacity-[0.7] text-[18px]'>
                  Start off by uploading Files
                </p>)}

                {currentExtension !== "all" && FilteredFiles?.length === 0 && (    <p className='text-center font-["Poppins"] opacity-[0.7] text-[18px]'>{`No Files Exist For Extension .${currentExtension}`}</p>)}

                
                {FilteredFiles?.slice(-4).map((file, index) => {
                  return (
                    <div className="FileCard flex justify-center items-center" key={index}>{`${file.fileOriginalName.split('.').slice(0, -1).join('.').replace(/[/_-]/g, ' ').split(' ').slice(0, 3).join(' ')}.${file.fileOriginalName.split('.').pop()}`}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
   </SmoothScroll>
  )
}

export default HomeDashboard
