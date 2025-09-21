import React, { useState } from 'react'
import "../../ComponentStyles/AuthorizationStyle/ForgotPasswordPage.css"
import { NavLink } from 'react-router-dom'
import Transitions from '../Transitionss/Transitions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const apiUrl = import.meta.env.VITE_API_URL

const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const [userEmail, setuserEmail] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [isMessageTrue, setIsMessageTrue] = useState("")
    const [isMessageFalse, setIsMessageFalse] = useState("")

    const handleUserForgotPassword = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            const res = await axios.post(`${apiUrl}/api/auth/forgot-password`, {
                userEmail
            })
            setIsMessageTrue(res.data.message)
            setIsMessageFalse("")
            navigate(`/reset-password/${res.data.resetToken}`)
        } catch (error) {
            if (error.response) {
                setIsMessageFalse(error.response.data.message)
            } else {
                setIsMessageFalse(" || Unknown Error ||")
            }
            setIsMessageTrue("")
        } finally {
            setisLoading(false)
            setuserEmail("")
        }
    }
    return (
        <>
            <div className="ForgotPasswordPage">
                <motion.div className="ForgotPasswordPageContainer" initial={{y: "10px", opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 1, delay: 0.5}}>
                    <div className="Form">
                        <form action="" onSubmit={handleUserForgotPassword}>
                            <h1>Forgot Password</h1>
                            <p className='p'>Enter your email address and we'll redirect you to reset your password</p>
                            <div className="takeInput">
                                <input type="email" placeholder='UserEmail' required value={userEmail} onChange={(e) => setuserEmail(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                            </div>
                            <div className="Error">
                                {isMessageTrue && <p className='text-green-700 text-center'>{isMessageTrue}</p>}
                                {isMessageFalse && <p className='text-red-700 text-center'>{isMessageFalse}</p>}
                            </div>
                            <button type='submit'>{isLoading ? <div class="loader">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div> : "Reset Password"}</button>
                        </form>
                        <div className="BackLogin">
                            <NavLink className="LogBack" to="/login"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>Back To Login</NavLink>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
// const WrappedForgotPasswordPage = Transitions(ForgotPasswordPage)
export default ForgotPasswordPage
