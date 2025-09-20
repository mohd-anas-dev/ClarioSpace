import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes } from 'react-router-dom'
import PublicRoutes from './Routes/PublicRoutes'
import DashboardRoutes from './Routes/DashboardRoutes'
import { useLocation } from 'react-router-dom'


const App = () => {
  const changeLocation = useLocation()
  return (
    <>
    <AnimatePresence mode='wait'>
      <Routes location={changeLocation} key={changeLocation.pathname}>
        {PublicRoutes()}
        {DashboardRoutes()}
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
