import React from 'react'
import {Route} from 'react-router-dom'
import HeroPage from '../ComponentPages/HomePage/HeroPage.jsx'
import RegistrationPage from '../ComponentPages/Authorization/RegistrationPage.jsx'
import ForgotPasswordPage from '../ComponentPages/Authorization/ForgotPasswordPage'
import ResetPasswordPage from '../ComponentPages/Authorization/ResetPasswordPage'
import HomeDashboard from '../ComponentPages/DashboardPages/HomeDashboard'
import NotFound from '@/components/NotFound.jsx'

const PublicRoutes = () => {
  return (
    <>
        <Route path="/" element={<HeroPage/>}/>
        <Route path="/login" element={<RegistrationPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path={`/reset-password/:resetToken`} element={<ResetPasswordPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </>
  )
}

export default PublicRoutes
