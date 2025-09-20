import React from 'react'
import {Link} from "react-scroll"
import { NavLink } from 'react-router-dom'
import "../../ComponentStyles/NavBarCompsStyles/NavBar.css"
import Logo from "../../assets/Logo.png"
import { motion } from 'framer-motion'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
        
  return (
    <>
    <motion.div 
        initial={{ y: "-10px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.20, ease: "easeOut" }}
        exit={{ y: "-50%", opacity: 0 }}
        className="NavBar">
        <div className="NavBarContainer" >
            <ul>
                <li>
                    <Link to="hero" className='Clicked' activeClass="active"  spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                </li>
                <li>
                    <Link to="features" className='Clicked' activeClass="active"  spy={true} smooth={true} offset={40} duration={500} >Features</Link>
                </li>
                <li>
                    <img src={Logo}alt="" />
                </li>
                <li>
                    <Link to="whyus" activeClass="active" className='Clicked' spy={true} smooth={true} offset={-100} duration={500} >Why Choose Us?</Link>
                </li>
                <li>
                    <Link to="faqs" activeClass="active" className='Clicked' spy={true} smooth={true} offset={50} duration={500} >FAQs</Link>
                </li>
            </ul>
        </div>
    </motion.div>
    <div className="MobNav">
        <MobileNavBar/>
    </div>
    </>
  )
}

export default NavBar
