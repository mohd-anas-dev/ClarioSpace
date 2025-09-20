import React from 'react'
import { useNavigate } from 'react-router-dom'
import FeaturesPage from './FeaturesPage'
import WhyChooseUsPage from './WhyChooseUsPage'
import FAQsPage from './FAQsPage'
import "../../ComponentStyles/HomePageStyle.css/HeroPage.css"
import NavBarSwitcher from '../NavBarComps/NavBarSwitcher'
import RotatingText from "../../components/RotatingText.jsx"
import Transitions from '../Transitionss/Transitions'
import HomeImage from "../../assets/ForClarioSpace.png"
import MyTeamMate from './MyTeamMate'
import SmoothScroll from '@/components/SmoothScroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const HeroPage = () => {
    const navigate = useNavigate()
    const scrollRef = useRef()
    useGSAP(() => {
        gsap.from(".TopMostContainer h1", {
            y: 50,
            opacity: 0,
            delay: 1,
            duration: 1,
        })
        gsap.from(".MiddleMostContainer", {
            y: 50,
            opacity: 0,
            delay: 1.2,
            duration: 1,
        })
    })

    useGSAP(() => {
        gsap.from(scrollRef.current, {
            scale: 0,
            duration: 1,
            delay: 0,
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 85%",
            }
        })
    }, { scope: scrollRef })

    const CustomHoverExpand = () => {
        const Images = [
            {
                src: "https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3",
                alt: "Team1",
                code: "# 01"
            },
            {
                src: "https://ichef.bbci.co.uk/images/ic/976xn/p0bvgbs6.jpg",
                alt: "Team2",
                code: "# 02"
            },
            {
                src: "https://images.pexels.com/photos/1563678/pexels-photo-1563678.jpeg?cs=srgb&dl=pexels-deeanacreates-1563678.jpg&fm=jpg",
                alt: "Team3",
                code: "# 03"
            }
        ]
        return <HoverExpand_001 images={Images} className="" />
    }

    return (
        <>
            <SmoothScroll>
                <div className="HeroPage" id="hero" name="Hero" >
                    <NavBarSwitcher />
                    <div className="HeroPageContainer">
                        <div className="TopMostContainer">
                            <h1>Meet the all-in-one platform</h1>
                            <div className="SecondLine">
                                <h1 className='Animated Text'>that <RotatingText
                                    texts={['Organizes', 'Connects', 'Simplifies']}
                                    mainClassName="myText"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                                </h1>
                            </div>
                        </div>
                        <div className="MiddleMostContainer">
                            <div className="MottoContent">
                                <p>Clario Space - A unified workspace for all your academic resources.</p>
                                <p>Organize, share, and annotate PDFs, links and more—turning resources into active conversations.</p>
                            </div>
                            <button class="animated-button" onClick={() => navigate("/login")} >
                                <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span class="text" >Join the Space</span>
                                <span class="circle"></span>
                                <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="EndMostContainer">
                            <img src={`${HomeImage}`}   ref={scrollRef} alt="" />
                            <div>
                                <section id="features" name="features">
                                    <FeaturesPage />
                                </section >
                                <section id="whyus" name="WhyUs">
                                    <WhyChooseUsPage />
                                </section>
                                <section id="myteam" name="MyTeam">
                                    <MyTeamMate />
                                </section>
                                <section id="faqs" name="Faqs">
                                    <FAQsPage />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothScroll>
        </>
    )
}
const WrappedHeroPage = Transitions(HeroPage)
export default WrappedHeroPage
