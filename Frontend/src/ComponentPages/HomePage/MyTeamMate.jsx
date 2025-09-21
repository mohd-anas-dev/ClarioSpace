// import React, { useEffect } from 'react'
// import "../../ComponentStyles/HomePageStyle.css/MyTeamMate.css"
// import MohammedAnas from "../../assets/MohammedAnas.png"
// import SayedAnas from "../../assets/Sayed-Anas.jpg"
// import Zuhaib from "../../assets/Zuhaib.jpg"
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// gsap.registerPlugin(ScrollTrigger)
// import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css"



// const MyTeamMate = () => {

//     useGSAP(() => {
//         //! Initial
//         gsap.set(".Images", {
//             clipPath: "polygon(32% 0, 68% 0, 100% 100%, 0% 100%)",
//         })
//         gsap.to(".Images", {
//             clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
//             ease: "power1.inOut",
//             scrollTrigger: {
//                 trigger: ".Images",
//                 start: "top 100%",
//                 end: "bottom 100%",
//                 scrub: true,
//             }
//         })
//         //! Final
//         gsap.set(".Images", {
//             clipPath: "polygon(0% 0%, 100% 0%, 68% 100%, 32% 100%)"
//         })

//         gsap.from(".Images", {
//             clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
//             ease: "power1.inOut",
//             scrollTrigger: {
//                 trigger: ".Images",
//                 start: "center center",
//                 end: "bottom center",
//                 scrub: true
//             }
//         })

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//         }
//     }, [])

//     //! Second Image
//     useEffect(() => {
//         const secondImageContainer = document.querySelector(".SecondImage")
//         const secondImageCursor = document.querySelector(".SecondImageCursor")

//         const handleSecondImageMouseMove = (event) => {
//             const { clientX, clientY } = event;
//             const rect = secondImageContainer.getBoundingClientRect()

//             gsap.to(".SecondImageCursor", {
//                 x: clientX - rect.left - 100,
//                 y: clientY - rect.top - 112.5,
//                 duration: 0.3,
//                 ease: "power2.out"
//             })
//         }

//         if (secondImageContainer) {
//             secondImageContainer.addEventListener("mousemove", handleSecondImageMouseMove)
//         }

//         return () => {
//             if (secondImageContainer) {
//                 secondImageContainer.removeEventListener("mousemove", handleSecondImageMouseMove)
//             }
//         }
//     }, [])

//     //! First Image
//     useEffect(() => {
//         const firstImageContainer = document.querySelector(".FirstImage")
//         const firstImageCursor = document.querySelector(".FirstImageCursor")

//         const handleFirstImageMouseMove = (event) => {
//             const { clientX, clientY } = event;
//             const rect = firstImageContainer.getBoundingClientRect()

//             gsap.to(".FirstImageCursor", {
//                 x: clientX - rect.left - 100,
//                 y: clientY - rect.top - 112.5,
//                 duration: 0.3,
//                 ease: "power2.out"
//             })
//         }

//         if (firstImageContainer) {
//             firstImageContainer.addEventListener("mousemove", handleFirstImageMouseMove)
//         }

//         return () => {
//             if (firstImageContainer) {
//                 firstImageContainer.removeEventListener("mousemove", handleFirstImageMouseMove)
//             }
//         }
//     }, [])

//     //! Third Image
//     useEffect(() => {
//         const thirdImageContainer = document.querySelector(".ThirdImage")
//         const thirdImageCursor = document.querySelector(".ThirdImageCursor")

        
//         const handleThirdImageContainer = (event) => {
//             const { clientX, clientY } = event;
//             const rect = thirdImageContainer.getBoundingClientRect()
//             gsap.to(".ThirdImageCursor", {
//                 x: clientX - rect.left - 100,
//                 y: clientY - rect.top - 112.5 ,
//                 duration: 0.3,
//                 ease: "power2.out"
//             })
//         }
//         if (thirdImageContainer) {
//             thirdImageContainer.addEventListener("mousemove", handleThirdImageContainer)
//         }

//         return () => {
//             if (thirdImageContainer) {
//                 thirdImageContainer.removeEventListener("mousemove", handleThirdImageContainer)
//             }
//         }
//     }, [])


//     return (
//         <>
//             <div className="MyTeamMatePage">
//                 <div className="MyTeamMateContainer">
//                     <div className="TopTeamMateContainer">
//                         <h1>Our Team</h1>
//                     </div>
//                     <div className="MiddleTopTeamMateContainer">
//                         <div className="Images">
//                             <div className="SecondImage" 
//                             onMouseEnter={() => gsap.to(".SecondImageCursor", { scale: 1 })} 
//                             onMouseLeave={() => gsap.to(".SecondImageCursor", { scale: 0 })}>
//                                 <div className="SecondImageCursor">
//                                     <h1>Sayed Mohammed Anas</h1>
//                                     <div className="Roles">
//                                         <ul>
//                                             <h1>Contribution: </h1>
//                                             <li>Project Visionary</li>
//                                             <li>Quality Analyst</li>
//                                             <li>Data Organizer</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <img src={SayedAnas} alt="" />
//                             </div>
//                             <div className="FirstImage"
//                                 onMouseEnter={() => gsap.to(".FirstImageCursor", { scale: 1 })}
//                                 onMouseLeave={() => gsap.to(".FirstImageCursor", { scale: 0 })} >
//                                 <div className="FirstImageCursor">
//                                     <h1>Mohammed Anas</h1>
//                                     <ul>
//                                         <li>Founder & Lead Architect</li>
//                                         <li>Full-Stack Creator</li>
//                                     </ul>
//                                 </div>
//                                 <img src={MohammedAnas} alt="" />
//                             </div>
//                             <div className="ThirdImage" 
//                             onMouseEnter={() => gsap.to(".ThirdImageCursor", {scale: 1})} 
//                             onMouseLeave={() => gsap.to(".ThirdImageCursor", {scale: 0})}>
//                                 <div className="ThirdImageCursor" >
//                                     <h1>Mohammed Zuhaib Khan</h1>
//                                     <ul>
//                                         <li>UI/UX Designer</li>
//                                         <li>Documentation Lead</li>
//                                     </ul>
//                                 </div>
//                                 <img src={Zuhaib} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyTeamMate

import React, { useEffect } from 'react'
import "../../ComponentStyles/HomePageStyle.css/MyTeamMate.css"
import MohammedAnas from "../../assets/MohammedAnas (2).jpg"
import SayedAnas from "../../assets/Sayed-Anas.jpg"
import Zuhaib from "../../assets/Zuhaib-sjmuE5XL.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"

const MyTeamMate = () => {

    useGSAP(() => {
        // Wait for images to load and layout to settle
        const initAnimation = () => {
            const imagesElement = document.querySelector(".Images")
            if (!imagesElement) return

            // Kill any existing ScrollTriggers for this element
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === imagesElement) {
                    trigger.kill()
                }
            })

            // Initial state - trapezoid from top
            gsap.set(".Images", {
                clipPath: "polygon(32% 0, 68% 0, 100% 100%, 0% 100%)",
            })

            // First animation - trapezoid to rectangle on scroll down
            gsap.to(".Images", {
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".Images",
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: true,
                    refreshPriority: -1,
                    onRefresh: () => {
                        // Ensure initial state is set on refresh
                        gsap.set(".Images", {
                            clipPath: "polygon(32% 0, 68% 0, 100% 100%, 0% 100%)",
                        })
                    }
                }
            })

            // Second animation - rectangle to trapezoid from bottom
            gsap.fromTo(".Images", 
                {
                    clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 68% 100%, 32% 100%)",
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ".Images",
                        start: "center center",
                        end: "bottom center",
                        scrub: true,
                        refreshPriority: -1
                    }
                }
            )
        }

        // Initialize with delay to ensure DOM is ready
        const timer = setTimeout(initAnimation, 100)

        // Also initialize when images load
        const images = document.querySelectorAll(".Images img")
        let loadedCount = 0
        const totalImages = images.length

        const handleImageLoad = () => {
            loadedCount++
            if (loadedCount === totalImages) {
                setTimeout(initAnimation, 50)
            }
        }

        images.forEach(img => {
            if (img.complete) {
                handleImageLoad()
            } else {
                img.addEventListener('load', handleImageLoad)
            }
        })

        return () => {
            clearTimeout(timer)
            images.forEach(img => img.removeEventListener('load', handleImageLoad))
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    //! Second Image
    useEffect(() => {
        const secondImageContainer = document.querySelector(".SecondImage")
        const secondImageCursor = document.querySelector(".SecondImageCursor")

        const handleSecondImageMouseMove = (event) => {
            const { clientX, clientY } = event;
            const rect = secondImageContainer.getBoundingClientRect()

            gsap.to(".SecondImageCursor", {
                x: clientX - rect.left - 100,
                y: clientY - rect.top - 112.5,
                duration: 0.3,
                ease: "power2.out"
            })
        }

        if (secondImageContainer) {
            secondImageContainer.addEventListener("mousemove", handleSecondImageMouseMove)
        }

        return () => {
            if (secondImageContainer) {
                secondImageContainer.removeEventListener("mousemove", handleSecondImageMouseMove)
            }
        }
    }, [])

    //! First Image
    useEffect(() => {
        const firstImageContainer = document.querySelector(".FirstImage")
        const firstImageCursor = document.querySelector(".FirstImageCursor")

        const handleFirstImageMouseMove = (event) => {
            const { clientX, clientY } = event;
            const rect = firstImageContainer.getBoundingClientRect()

            gsap.to(".FirstImageCursor", {
                x: clientX - rect.left - 100,
                y: clientY - rect.top - 112.5,
                duration: 0.3,
                ease: "power2.out"
            })
        }

        if (firstImageContainer) {
            firstImageContainer.addEventListener("mousemove", handleFirstImageMouseMove)
        }

        return () => {
            if (firstImageContainer) {
                firstImageContainer.removeEventListener("mousemove", handleFirstImageMouseMove)
            }
        }
    }, [])

    //! Third Image
    useEffect(() => {
        const thirdImageContainer = document.querySelector(".ThirdImage")
        const thirdImageCursor = document.querySelector(".ThirdImageCursor")

        const handleThirdImageContainer = (event) => {
            const { clientX, clientY } = event;
            const rect = thirdImageContainer.getBoundingClientRect()
            gsap.to(".ThirdImageCursor", {
                x: clientX - rect.left - 100,
                y: clientY - rect.top - 112.5 ,
                duration: 0.3,
                ease: "power2.out"
            })
        }
        if (thirdImageContainer) {
            thirdImageContainer.addEventListener("mousemove", handleThirdImageContainer)
        }

        return () => {
            if (thirdImageContainer) {
                thirdImageContainer.removeEventListener("mousemove", handleThirdImageContainer)
            }
        }
    }, [])

    return (
        <>
            <div className="MyTeamMatePage">
                <div className="MyTeamMateContainer">
                    <div className="TopTeamMateContainer">
                        <h1>Our Team</h1>
                    </div>
                    <div className="MiddleTopTeamMateContainer">
                        <div className="Images">
                            <div className="SecondImage" 
                            onMouseEnter={() => gsap.to(".SecondImageCursor", { scale: 1 })} 
                            onMouseLeave={() => gsap.to(".SecondImageCursor", { scale: 0 })}>
                                <div className="SecondImageCursor">
                                    <h1>Sayed Mohammed Anas</h1>
                                    <div className="Roles">
                                        <ul>
                                            <h1>Contribution: </h1>
                                            <li>Project Visionary</li>
                                            <li>Quality Analyst</li>
                                        </ul>
                                    </div>
                                </div>
                                <img src={SayedAnas} alt="Sayed Mohammed Anas" />
                            </div>
                            <div className="FirstImage"
                                onMouseEnter={() => gsap.to(".FirstImageCursor", { scale: 1 })}
                                onMouseLeave={() => gsap.to(".FirstImageCursor", { scale: 0 })} >
                                <div className="FirstImageCursor">
                                    <h1>Mohammed Anas</h1>
                                    <ul>
                                        <li>Founder & Lead Architect</li>
                                        <li>Full-Stack Creator</li>
                                    </ul>
                                </div>
                                <img src={MohammedAnas} alt="Mohammed Anas" />
                            </div>
                            <div className="ThirdImage" 
                            onMouseEnter={() => gsap.to(".ThirdImageCursor", {scale: 1})} 
                            onMouseLeave={() => gsap.to(".ThirdImageCursor", {scale: 0})}>
                                <div className="ThirdImageCursor" >
                                    <h1>Zuhaib Mohammed Ahsan Khan</h1>
                                    <ul>
                                        <li>UI/UX Designer</li>
                                        <li>Documentation Lead</li>
                                    </ul>
                                </div>
                                <img src={Zuhaib} alt="Mohammed Zuhaib Khan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTeamMate