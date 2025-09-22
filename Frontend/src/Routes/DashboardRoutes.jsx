import FriendsDashboard from '@/ComponentPages/DashboardPages/FriendsDashboard'
import HomeDashboard from '@/ComponentPages/DashboardPages/HomeDashboard'
import MyFilesDashboard from '@/ComponentPages/DashboardPages/MyFilesDashboard'
import ProtectedRoute from './ProtectedRoute'
import React from 'react'
import { Route } from 'react-router-dom'
import NotFound from '@/components/NotFound'
import SettingsDashboard from '@/ComponentPages/DashboardPages/SettingsDashboard'
import AccountDetails from '@/ComponentPages/DashboardPages/AccountDetails'

const DashboardRoutes = () => {
  return (
    <>
      <Route path="/dashboard" element={<ProtectedRoute><HomeDashboard/></ProtectedRoute>}/>
      <Route path="/myfiles" element={<ProtectedRoute><MyFilesDashboard/></ProtectedRoute>}/>
      <Route path="/friends" element={<ProtectedRoute><FriendsDashboard/></ProtectedRoute>}/>
      <Route path="/settings" element={<ProtectedRoute><SettingsDashboard/></ProtectedRoute>}/>
      <Route path="/account-details" element={<ProtectedRoute><AccountDetails/></ProtectedRoute>}/>
    </>
  )
}

export default DashboardRoutes
