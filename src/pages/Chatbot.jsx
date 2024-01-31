import default_profile from '../assets/default_profile.jpg'
import agrobot_bg from '../assets/agrobot_bg.jpg'
import agrobot_bg2 from '../assets/agrobot_bg2.jpg'

import EmitedMessage from '../components/MessageComponenets/EmitedMessage'
import ReceivedMessage from '../components/MessageComponenets/ReceivedMessage'
import ErrorMessage from '../components/MessageComponenets/ErrorMessage'
import BotInputZone from '../components/MessageComponenets/BotInputZone'
import { useState } from 'react'
import { useContext } from 'react'
import { ChatBotContext } from '../utils/ChatBotContext'
import DiscussionZone from '../components/MessageComponenets/DiscussionsZone'
function Chatbot() {
    document.documentElement.scrollTop = 0
    const { messagesList, themeList } = useContext(ChatBotContext)
    const [showInfo, SetShowInfo] = useState(true)
    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <div className="flex flex-col gap-1 pt-2 px-3 w-[30%] bg-green-100 overflow-y-scroll ">
                <p className="text-[25px] font-bold pl-2 ">Thèmes</p>
                {showInfo && (
                    <div className="relative mx-2 [auto] border-1 border-gray-300 bg-blue-200 text-center text-[15px] rounded-md p-4 ease-in-out duration-[3000]">
                        Vous verrez apparaître tous les thèmes de votre discussion avec Agrobot ici.
                        <span
                            onClick={() => SetShowInfo(false)}
                            className="material-icons absolute text-red-500 text-[17px] top-1 right-2 cursor-pointer hover:text-red-200"
                        >
                            close
                        </span>
                    </div>
                )}
                {themeList.map((theme) => (
                    <div className="mx-2 text-gray-700 text-[17px] pl-3 py-2 rounded-md bg-green-200 hover:bg-green-300 cursor-pointer">
                        {theme.content}
                    </div>
                ))}
            </div>

            <div
                style={{ backgroundImage: `url(${agrobot_bg2})` }}
                className="relative bg-cover  w-full h-full flex flex-col flex-1 "
            >
                <div className="absolute z-0 bg-[#cbd5e1]/40 backdrop-opacity-[0.5] blur-3xl w-full h-full inset-0"></div>
                <div className="bg-white z-[1] flex p-3 justify-between items-center shadow-md ">
                    <p className="text-[#006400] font-bold text-[25px] ">AgroBot</p>
                    <span className="material-icons-outlined text-[#006400] font-bold text-[20px] ">settings</span>
                </div>
                <Messages messages={messagesList} />
                <BotInputZone />
            </div>
        </div>
    )
}

export default Chatbot

function Messages({ messages }) {
    return (
        <div className="flex z-[2] flex-col max-h-[80%] overflow-y-scroll px-3 py-4">
            {messages?.map(
                (message) =>
                    (message.emitId === 1 && (
                        <EmitedMessage key={message.body} msg={message.content} date={message.date} />
                    )) ||
                    (message.emitId === 2 && message.type === 'error' && <ErrorMessage key={message.content} />) ||
                    (message.emitId === 2 && (
                        <ReceivedMessage key={message.body} msg={message.content} date={message.date} />
                    ))
            )}
        </div>
    )
}
