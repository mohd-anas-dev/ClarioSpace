import React from 'react'
import Logo from "../../assets/Logo.png"
import "../../ComponentStyles/NavBarCompsStyles/MobileNavBar.css"
import { Link } from 'react-scroll'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet.jsx"

const MobileNavBar = () => {
    return (
        <>
            <div className="MobileNavBar">
                <div className="MobileNavBarContainer">
                    <div className="LeftMobNav">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="RightMobNav">
                        <Sheet className="Sheet">
                            <SheetTrigger><svg className='Menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg></SheetTrigger>
                            <SheetContent className="SideNav">
                                <SheetHeader>
                                    <SheetTitle className="Header">Quick Access</SheetTitle>
                                    <SheetDescription>
                                        <ul>
                                            <li>
                                                <Link to="hero" className='Clicked' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                                            </li>
                                            <li>
                                                <Link to="features" className='Clicked' activeClass="active" spy={true} smooth={true} offset={0} duration={500} >Features</Link>
                                            </li>
                                            <li>
                                                <Link to="whyus" activeClass="active" className='Clicked' spy={true} smooth={true} offset={-100} duration={500} >Why Choose Us?</Link>
                                            </li>
                                            <li>
                                                <Link to="faqs" activeClass="active" className='Clicked' spy={true} smooth={true} offset={50} duration={500} >FAQs</Link>
                                            </li>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MobileNavBar
