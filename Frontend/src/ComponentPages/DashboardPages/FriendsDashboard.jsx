import React from 'react'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '../../components/ui/sidebar.jsx'
import { SideBarDashboard } from './SideBarDashboard.jsx'
import UnderDevelopment from '@/components/UnderDevelopment.jsx'

const FriendsDashboard = () => {
  return (
    <>
      <div className="FriendsDashboard">
        <SidebarProvider>
          <SideBarDashboard />
          <SidebarTrigger />
          <SidebarInset>
            <div className="FriendsDashboardContainer">
              <UnderDevelopment/>
            </div>
          </SidebarInset>
        </SidebarProvider>

      </div>
    </>
  )
}

export default FriendsDashboard
