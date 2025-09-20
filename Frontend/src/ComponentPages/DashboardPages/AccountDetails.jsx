import React from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar.jsx"
import { SideBarDashboard } from './SideBarDashboard'
import UnderDevelopment from '@/components/UnderDevelopment'
const AccountDetails = () => {
  return (
    <>
    <div className="AccountDetails">
        <SidebarProvider>
            <SideBarDashboard/>
            <SidebarTrigger/>
            <SidebarInset>
                <UnderDevelopment/>
            </SidebarInset>
        </SidebarProvider>

    </div>
    
    </>
  )
}

export default AccountDetails
