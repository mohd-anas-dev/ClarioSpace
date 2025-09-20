import React from 'react'
import { motion } from 'framer-motion'


const calculateRandomLocDelay= (rowIndex, totalRows) => {
    const rowDelay = (totalRows - rowIndex - 1) * 0.1;
    return rowDelay
}

const Transitions = (OgComponent) => {
    return () => {
        return (
            <> 
                <OgComponent/>
                <div className="blocks-container transition-in">
                    {Array.from({length:10}).map((_, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {Array.from({length:11}).map((_, blockIndex) => (
                                <motion.div
                                key={blockIndex}
                                className='block'
                                initial={{scaleY: 1}}
                                animate={{scaleY: 0}}
                                exit={{scaleY: 0}}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: calculateRandomLocDelay(rowIndex, 10)
                                }}>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>


                <div className="blocks-container transition-out">
                    {Array.from({length:10}).map((_, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {Array.from({length:11}).map((_, blockIndex) => (
                                <motion.div
                                key={blockIndex}
                                className='block'
                                initial={{scaleY: 0}}
                                animate={{scaleY: 0}}
                                exit={{scaleY: 1}}
                                transition={{
                                    duration: 0.4,
                                    easein: [0.22, 1, 0.36, 1],
                                    delay: calculateRandomLocDelay(rowIndex, 10)
                                }}>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            
            </>
        )
    }
}

export default Transitions




//! Original Code

// import React from 'react'
// import { motion } from 'framer-motion'

//! Original
// const calculateRandomLocDelay= (rowIndex, totalRows) => {
//     const blockDelay = Math.random() * 0.5;
//     const rowDelay = (totalRows - rowIndex - 1) * 0.5;
//     return blockDelay + rowDelay
// }


// const calculateRandomLocDelay = (rowIndex, totalRows) => {
//     const blockDelay = Math.random() * 0.1; // small randomness
//     const rowDelay = (totalRows - rowIndex - 1) * 0.05; // max ~0.45s
//     return blockDelay + rowDelay;
// }

// const calculateRandomLocDelay = (rowIndex, totalRows) => {
//     const blockDelay = Math.random() * 0.05; // smaller randomness
//     const rowDelay = (totalRows - rowIndex - 1) * 0.05; // stagger smaller
//     return blockDelay + rowDelay;
// }
// const Transitions = (OgComponent) => {
//     return () => {
//         return (
//             <> 
//                 <OgComponent/>
//                 <div className="blocks-container transition-in">
//                     {Array.from({length:10}).map((_, rowIndex) => (
//                         <div className="row" key={rowIndex}>
//                             {Array.from({length:11}).map((_, blockIndex) => (
//                                 <motion.div
//                                 key={blockIndex}
//                                 className='block'
//                                 initial={{scaleY: 1}}
//                                 animate={{scaleY: 0}}
//                                 exit={{scaleY: 0}}
//                                 transition={{
//                                     duration: 0.2,
//                                     ease: [0.4, 0, 0.2, 1],
//                                     delay: calculateRandomLocDelay(rowIndex, 10)
//                                 }}>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>


//                 <div className="blocks-container transition-out">
//                     {Array.from({length:10}).map((_, rowIndex) => (
//                         <div className="row" key={rowIndex}>
//                             {Array.from({length:11}).map((_, blockIndex) => (
//                                 <motion.div
//                                 key={blockIndex}
//                                 className='block'
//                                 initial={{scaleY: 0}}
//                                 animate={{scaleY: 0}}
//                                 exit={{scaleY: 1}}
//                                 transition={{
//                                     duration: 1,
//                                     ease: [0.68, -0.55, 0.27, 1.55],
//                                     delay: calculateRandomLocDelay(rowIndex, 10)
//                                 }}>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
            
//             </>
//         )
//     }
// }

// export default Transitions

