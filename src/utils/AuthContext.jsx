import { createContext, useState } from 'react'

export const AuthContext = createContext('')

export const AuthContextProvider = ({ children }) => {
    const [connectedUser, setConnectedUser] = useState(false)
    const usersList = [
        {
            email: 'john Doe',
            password: '123456'
        }
    ]
    return (
        <AuthContext.Provider value={{ connectedUser, setConnectedUser, usersList }}>{children}</AuthContext.Provider>
    )
}
