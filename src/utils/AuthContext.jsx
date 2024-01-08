import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext('')

export function AuthContextProvider({ children }) {
    const [connectedUser, setConnectedUser] = useState('')
    useEffect(() => {
        setConnectedUser(JSON.parse(localStorage.getItem('user')))
        console.log(localStorage.getItem('user'))
    }, [])

    return <AuthContext.Provider value={{ connectedUser, setConnectedUser }}>{children}</AuthContext.Provider>
}
export default AuthContextProvider
