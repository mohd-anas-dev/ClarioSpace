//! Working With Motion.div
import React from 'react'
import "../../ComponentStyles/NavBarCompsStyles/NavBar2.css"
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import MobileNavBar from './MobileNavBar'
import { useNavigate } from 'react-router-dom'
const NavBar2 = () => {
    const navigate = useNavigate()
  return (
    <>

    <div className="NavBar2">
        <motion.div 
        initial = {{ y: "-20px", opacity: 0}}
        animate = {{ y: 0, opacity: 1}}
        transition={{duration: 0.20, ease: "easeIn",}}
        exit={{y:"-20px", opacity: 0}}
        className="NavBar2Container">
            <ul>
                <li>
                    <Link className='Clicked' to="hero" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                </li>
                <li>
                    <Link className="Clicked" to="features" activeClass="active"  spy={true} smooth={true} offset={40} duration={500} >Features</Link>
                </li>
                <li >
                    <Link className='Clicked' to="whyus" activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} >Why Us?</Link>
                </li>
                <li className='N2'>
                    <Link className='Clicked' to="faqs" activeClass="active"  spy={true} smooth={true} offset={50} duration={500} >FAQs</Link>
                </li>
                <li className='N2'>
                    <Link activeClass="active"  spy={true} smooth={true} offset={50} duration={500} ><button onClick={() => navigate("/login")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>Get Started</button></Link>
                </li>
            </ul>
        </motion.div>
    </div>
    <div className="MobNav">
        <MobileNavBar/>
    </div>
    
    </>
  )
}

export default NavBar2
