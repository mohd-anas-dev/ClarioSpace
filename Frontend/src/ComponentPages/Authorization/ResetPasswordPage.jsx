import React, { useState } from 'react'
import "../../ComponentStyles/AuthorizationStyle/ResetPasswordPage.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmuserPassword] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [isMessageTrue, setisMessageTrue] = useState("")
    const [isMessageFalse, setisMessageFalse] = useState("")
    const { resetToken } = useParams()
    const handlePasswords = () => {
        return userPassword !== confirmUserPassword
    }

    const handleUserResetPassword = async (e) => {
        e.preventDefault()
        if (handlePasswords()) {
            setisMessageFalse("Passwords did not match")
            return
        }
        setisLoading(true)
        setisMessageFalse("")
        try {
            const res = await axios.post(`https://clariospace-backend.onrender.com/api/auth/reset-password/${resetToken}`, {
                userPassword
            })
            setisMessageTrue(res.data.message)
            navigate("/dashboard")
        } catch (error) {
            if (error.response) {
                setisMessageFalse(error.response.data.message)
            } else {
                setisMessageFalse(" || Error 404 ||")
            }
        } finally {
            setisLoading(false)
            setUserPassword("")
            setConfirmuserPassword("")
        }
    }
    return (
        <>
            <div className="ResetPasswordPage">
                <motion.div className="ResetPasswordPageContainer" initial={{y: "10px", opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 1, delay: 0.3}}>
                    <div  className="Form">
                        <form action="" onSubmit={handleUserResetPassword}>
                            <h1>Reset Password</h1>
                            <div className="takeInput">
                                <input type="password" placeholder='New Password' required value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
                            </div>
                            <div className="takeInput">
                                <input type="password" placeholder='Confirm New Password' required value={confirmUserPassword} onChange={(e) => setConfirmuserPassword(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
                            </div>
                            {isMessageTrue && <p className='text-green-700 text-center'>{isMessageTrue}</p>}
                            {isMessageFalse && <p className='text-red-700 text-center'>{isMessageFalse}</p>}
                            <button type='submit'>{isLoading ? <div class="loader">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div> : "Set New Password"}</button>
                        </form>
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default ResetPasswordPage
