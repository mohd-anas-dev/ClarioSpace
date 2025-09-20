import * as React from "react"
import { NavLink } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useState , useEffect} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog.jsx"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip.jsx"

import {
  Sidebar,
} from "../../components/ui/sidebar.jsx"
import "../../ComponentStyles/DashboardPagesStyle/SideBarDashBoardStyle.css"

export function SideBarDashboard({
  ...props
}) {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")

  const getUserName = async() => {
    const res = await axios.get("https://clariospace-backend.onrender.com/api/auth/check-auth")
    setUserName(res.data.user.userName)
  }

  useEffect(() => {
    getUserName()
  }, [])
  
  const handlseUserLogout = async() => {
    try {
      const res = await axios.delete("https://clariospace-backend.onrender.com/api/auth/logout")
      navigate("/")
      return res
    } catch{
      console.log("|| Unknown 404 Error ||")
    }
  }
  return (
    <Sidebar {...props}>
      <div className="SideBar">
        <div className="SideBarContainer">
          <div className="TopMiddle">
            <div className="TopSideBar">
              <div className="TopSideBarLine">
                <div className="TopSideBarLineOne">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" width="18" height="18" aria-hidden="true">
                    <circle cx="6" cy="8" r="6" fill="#000" />
                    <circle cx="24" cy="8" r="6" fill="#fff" stroke="#000" stroke-width="2" />
                    <circle cx="42" cy="8" r="6" fill="#000" />
                  </svg>
                  <h1>ClarioSpace</h1>
                </div>
              </div>
              <div className="TopSideBarLine2">
                <img src="https://tse1.mm.bing.net/th/id/OIP.Tvomoi7VQfev8W-1DO1-ZgAAAA?w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <div className="UserDetails">
                  <h5>Good Day 👋</h5>
                  <h1>{userName}</h1>
                </div>
              </div>
            </div>
            <div className="MiddleSideBar">
              <h2>Menu: 4</h2>
              <ul>
                <li>
                  <NavLink  to="/dashboard"  className={({ isActive}) => isActive ? "ab active" : "ab"} >
                    <div className="Content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>Dashboard
                    </div>
                    <div className="HoveredSVG">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink className={({ isActive}) => isActive ? "ab active" : "ab"} to="/myfiles">
                    <div className="Content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-closed-icon lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>My Files
                    </div>
                    <div >
                      <svg className="HoveredSVG" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends" className={({ isActive}) => isActive ? "ab active" : "ab"}>
                    <div className="Content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>Friends
                    </div>
                    <div className="HoveredSVG">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? "ab active" : "ab"} to="/trash">
                    <div className="Content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Trash
                    </div>
                    <div className="HoveredSVG">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="EndMostSideBar">

            <ul>
              <li>
                <NavLink className={({ isActive}) => isActive ? "dc active" : "dc"} to="/settings">
                  <Tooltip>
                    <TooltipTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
                    </TooltipTrigger>
                    <TooltipContent><h1>Settings</h1></TooltipContent>
                  </Tooltip>
                </NavLink>
              </li>

              <li>
                <NavLink className="dc" to="/account-details">
                  <Tooltip>
                    <TooltipTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </TooltipTrigger>
                    <TooltipContent><h1>Account</h1></TooltipContent>
                  </Tooltip>
                </NavLink>
              </li>
              <svg width="100" height="2" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="100" y2="1" stroke="black" stroke-width="1" className="opacity-[0.5]" />
              </svg>
              <li>
                <NavLink className="flex">
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertDialog>
                        <AlertDialogTrigger className="dc">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to Logout?</AlertDialogTitle>
                            <AlertDialogDescription>Logging out will end your current session and you’ll need to sign in again to access your dashboard and saved settings.</AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter >
                            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handlseUserLogout} className="cursor-pointer">Logout</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TooltipTrigger>
                    <TooltipContent><h1>Logout</h1></TooltipContent>
                  </Tooltip>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Sidebar>
  );
}
