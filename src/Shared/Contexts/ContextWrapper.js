import React, { createContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({
    auth: '',
    username: '',
    isLoaded: false,
})

const ContextWrapper = (props) => {
    const [auth, setAuthUser] = useState('')
    const [username, setUsername] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const authUser = getAuth()

    useEffect(() => {
        onAuthStateChanged(authUser, (user) => {
            if (user != null) {
                setUsername('')
                const injectUsername = () => {
                    if (user.displayName === null) {
                        setTimeout(() => {
                            injectUsername()
                        }, 500)
                    } else {
                        setUsername(user.displayName)
                        setIsLoaded(true)
                    }
                }
                injectUsername()
                setAuthUser(true)
            } else {
                setAuthUser(false)
                setIsLoaded(true)
            }
        })
    }, [authUser])

    return (
        <AuthContext.Provider value={{ auth, username, isLoaded }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextWrapper
