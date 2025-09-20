import React from 'react'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '../../components/ui/sidebar.jsx'
import { SideBarDashboard } from './SideBarDashboard'
import UnderDevelopment from '@/components/UnderDevelopment.jsx'

const TrashDashboard = () => {
  return (
    <>
    <div className="TrashDashboard">
        <SidebarProvider>
            <SideBarDashboard/>
            <SidebarTrigger/>
                <SidebarInset>
                    <div className="TrashDashboardContainer">
                      <UnderDevelopment/>
                    </div>
                </SidebarInset>        
         </SidebarProvider>
    </div>
    </>
  )
}

export default TrashDashboard
