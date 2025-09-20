import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../../ComponentStyles/AuthorizationStyle/RegistrationPage.css"
import Transitions from '../Transitionss/Transitions'
import axios from 'axios'

const RegistrationPage = () => {
    const [Class, setClass] = useState("")
    const navigate = useNavigate()
    const [userEmail, setuserEmail] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userName, setuserName] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [isMessageTrue, setIsMessageTrue] = useState("")
    const [isMessageFalse, setIsMessageFalse] = useState("")


    const handleUserSignUp = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            const res = await axios.post("http://localhost:3000/api/auth/signup", {
                userName,
                userEmail,
                userPassword
            })
            setIsMessageTrue(res.data.message)
            setIsMessageFalse("")
            navigate("/dashboard")
        } catch (error) {
            if (error.response) {
                setIsMessageFalse(error.response.data.message)
            } else {
                setIsMessageFalse("Error Frontend")
            }
            setIsMessageTrue("")
        } finally {
            setisLoading(false)
            setuserEmail("")
            setuserName("")
            setuserPassword("")
        }
    }

    const handleUserLogIn = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", {
                userEmail,
                userPassword
            })
            setIsMessageTrue(res.data.message)
            setIsMessageFalse("")
            navigate("/dashboard")
        } catch (error) {
            if (error.response) {
                setIsMessageFalse(error.response.data.message)
            } else {
                setIsMessageFalse("FrontEnd Error")
            }
            setIsMessageTrue("")
        } finally {
            setisLoading(false)
            setuserEmail("")
            setuserName("")
            setuserPassword("")
        }
    }

    return (
        <>
            <div className="LogInPage">
                <div className={`container ${Class}`}>
                    <div className="form-box login" >
                        <form action="" onSubmit={handleUserLogIn}>
                            <h1 className='text-[#0C0C0C]'>Log In</h1>
                            <div className="input-box">
                                <input type="text" placeholder='UserEmail' required value={userEmail} onChange={(e) => setuserEmail(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder='Password' required value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <div className="forgot-link">
                                <NavLink to="/forgot-password" className="a">Forgot password?</NavLink>
                            </div>
                            {isMessageTrue && <p className='text-green-700'>{isMessageTrue}</p>}
                            {isMessageFalse && <p className='text-red-700'>{isMessageFalse}</p>}
                            <button type='submit' class="btn">{isLoading ? <div class="loader">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div> : "Log In"}</button>
                        </form>
                    </div>
                    <div className="form-box register" onSubmit={handleUserSignUp}>
                        <form action="" >
                            <h1 className='text-[#0C0C0C]'>Registration</h1>
                            <div className="input-box">
                                <input type="text" placeholder='UserName' required value={userName} onChange={(e) => setuserName(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder='Email' required value={userEmail} onChange={(e) => setuserEmail(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder='Password' required value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <div className="forgot-link">
                                <p className='text-[#0C0C0C]'>Already have an account? <NavLink to="#" className="a"> Log In</NavLink></p>
                            </div>
                            {isMessageTrue && <p className='text-green-700'>{isMessageTrue}</p>}
                            {isMessageFalse && <p className='text-red-700'>{isMessageFalse}</p>}
                            <button type='submit' class="btn">{isLoading ? <div class="loader">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div> : "Sign Up"}</button>
                        </form>
                    </div>
                    <div className="toggle-box">
                        <div className="toggle-panel toggle-left">
                            <h1 className='text-[#ffffff]'>Welcome Back!</h1>
                            <p>Dont have an account?</p>
                            <button className="btn register-btn" onClick={() => {
                                setClass("active"),
                                    setIsMessageFalse(""),
                                    setIsMessageTrue("")
                            }}>Register</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1 className='text-[#ffffff]'>Hello, Welcome!</h1>
                            <p>Already have an account?</p>
                            <button className={`btn login-btn`} onClick={() => {
                                setClass(""),
                                    setIsMessageTrue(""),
                                    setIsMessageFalse("")
                            }}>Log In</button>
                        </div>
                    </div>
                    <div className="BackButton" onClick={() => navigate("/")}>
                        <div class="styled-wrapper">
                            <button class="button" >
                                <div class="button-box">
                                    <span class="button-elem">
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="arrow-icon"
                                        >
                                            <path
                                                fill="white"
                                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span class="button-elem">
                                        <svg
                                            fill="white"
                                            viewBox="0 0  24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="arrow-icon"
                                        >
                                            <path
                                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const WrappedRegistrationPage = Transitions(RegistrationPage)
export default WrappedRegistrationPage
