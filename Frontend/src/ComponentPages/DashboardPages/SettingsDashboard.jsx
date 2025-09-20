import React from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar.jsx"
import { SideBarDashboard } from './SideBarDashboard'
import UnderDevelopment from '@/components/UnderDevelopment'

const SettingsDashboard = () => {
  return (
    <>
    <div className="SettingsDashboard">
        <SidebarProvider>
            <SideBarDashboard/>
            <SidebarTrigger/>
            <SidebarInset>
                <div className="SettingsDashboardContainer">
                    <UnderDevelopment/>
                </div>
            </SidebarInset>
        </SidebarProvider>
    </div>
    
    
    </>
  )
}

export default SettingsDashboard
