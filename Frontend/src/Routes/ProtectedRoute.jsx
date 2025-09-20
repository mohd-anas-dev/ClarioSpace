import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import NotAuthenticated from '@/components/NotAuthenticated'

const ProtectedRoute = ({children}) => {
    const [isLoading, setisLoading] = useState(true)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const handleUserAuthentication = async() => {
        try {
            const res = await axios.get("https://clariospace-backend.onrender.com/api/auth/check-auth")
            setisAuthenticated(true)
        } catch{
            console.log("Error")
        } finally{
            setTimeout(()=> {
                setisLoading(false)
            }, 1000)
        }
    }

    useEffect(() => {
        handleUserAuthentication()
    }, [])
    
    if(isLoading){
        return <LoadingSpinner/>
    }

    if(isAuthenticated){
        return children
    }
    
    if(!isAuthenticated){
        return <NotAuthenticated/>
    }

    return null
}

export default ProtectedRoute
