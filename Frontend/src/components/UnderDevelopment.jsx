import React from 'react'
import { motion } from 'framer-motion'

const UnderDevelopment = () => {
    return (
        <>
            <div className="UnderDevelopment">
                <div className="UnderDevelopmentContainer">
                    <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.6 }} className="MiddleUnderDevelopment">
                        <div className="ContentForDev">
                            <div className="LeftDev">
                                <span>OOPs!</span>
                                <h1>Under Construction</h1>
                            </div>
                            <div className="RightDev">
                                <div class="hourglassBackground">
                                    <div class="hourglassContainer">
                                        <div class="hourglassCurves"></div>
                                        <div class="hourglassCapTop"></div>
                                        <div class="hourglassGlassTop"></div>
                                        <div class="hourglassSand"></div>
                                        <div class="hourglassSandStream"></div>
                                        <div class="hourglassCapBottom"></div>
                                        <div class="hourglassGlass"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>This section of our website is under construction. We appreciate your patience while we make improvements.</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default UnderDevelopment
