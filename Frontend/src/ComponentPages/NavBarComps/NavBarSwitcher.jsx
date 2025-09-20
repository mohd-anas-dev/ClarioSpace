import React from 'react'
import { useState, useEffect } from 'react'
import NavBar2 from './NavBar2'
import NavBar from './NavBar'
import { AnimatePresence } from 'framer-motion'

const NavBarSwitcher = () => {
    const [navbarSwitcher, setNavbarSwitcher] = useState(false)

    useEffect(() => {
        const handleNavBarSwitcher = () => {
            if(window.scrollY > 9){
                setNavbarSwitcher(true)
            } else {
                setNavbarSwitcher(false)
            }
        }
        window.addEventListener("scroll", handleNavBarSwitcher);
        return () => window.removeEventListener("scroll", handleNavBarSwitcher)
    }, [])
    
  return (
    <>
    <AnimatePresence mode="wait">
        {navbarSwitcher ? <NavBar2 key="navbar2"/> : <NavBar key="navbar"/>}
    </AnimatePresence>
    </>
  )
}

export default NavBarSwitcher
