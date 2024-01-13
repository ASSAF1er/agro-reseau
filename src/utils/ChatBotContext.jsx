import { createContext } from 'react'
import { useState } from 'react'
import { messages } from './messages'

export const ChatBotContext = createContext('')

function ChatBotContextProvider({ children }) {
    const [messagesList, setMessagesList] = useState(messages)
    const [themeList, setThemeList] = useState([])
    return (
        <ChatBotContext.Provider value={{ messagesList, setMessagesList, themeList, setThemeList }}>
            {children}
        </ChatBotContext.Provider>
    )
}
export default ChatBotContextProvider
