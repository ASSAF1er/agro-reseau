import { Children, createContext } from 'react'
import { useState } from 'react'
import { messages } from './messages'

export const ChatBotContext = createContext('')

function ChatBotContextProvider({ children }) {
    const [messagesList, setMessagesList] = useState(messages)
    return <ChatBotContext.Provider value={{ messagesList, setMessagesList }}>{children}</ChatBotContext.Provider>
}
export default ChatBotContextProvider
