import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext('')

export function AuthContextProvider({ children }) {
    const [connectedUser, setConnectedUser] = useState({})
    useEffect(() => {
        const getConnectedUser = async () => {
            const userId = localStorage.getItem('userId')
            const username = localStorage.getItem('username')
            const token = localStorage.getItem('token')
            userId &&
                setConnectedUser({
                    userId,
                    username,
                    token
                })
        }
        getConnectedUser()
        console.log(connectedUser)
    }, [])

    return <AuthContext.Provider value={{ connectedUser, setConnectedUser }}>{children}</AuthContext.Provider>
}
export default AuthContextProvider
