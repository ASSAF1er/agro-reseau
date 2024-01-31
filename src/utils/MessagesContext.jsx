import { createContext, useContext, useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import axios from 'axios'

export const MessagesContext = createContext('')

export const MessagesContextProvider = ({ children }) => {
    const { connectedUser } = useContext(AuthContext)
    const [userMessages, setUserMessages] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api_message/my-massages/1/`)
            .then((res) => {
                setUserMessages(res.data)
                console.log(connectedUser)
            })
            .catch((err) => console.log(err))
    }, [])
    return <MessagesContext.Provider value={{ userMessages, setUserMessages }}>{children}</MessagesContext.Provider>
}
export default MessagesContextProvider
