import default_profile from '../assets/default_profile.jpg'
import agrobot_bg from '../assets/agrobot_bg.jpg'
import agrobot_bg2 from '../assets/agrobot_bg2.jpg'

import EmitedMessage from '../components/MessageComponenets/EmitedMessage'
import ReceivedMessage from '../components/MessageComponenets/ReceivedMessage'
import BotInputZone from '../components/MessageComponenets/BotInputZone'
import { useState } from 'react'
import { useContext } from 'react'
import { ChatBotContext } from '../utils/ChatBotContext'
function Chatbot() {
    document.documentElement.scrollTop = 0
    const { messagesList, setMessagesList } = useContext(ChatBotContext)
    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <div className="w-[30%] bg-green-100">
                <div className="flex flex-row p-2 border-y-2 border-gray-300">
                    <div className="relative flex  h-[40px] w-[40px] ">
                        <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                        <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                    </div>
                    <div className="  w-full flex flex-col px-2">
                        <p>Sobajo</p>
                        <div className="flex justify-between">
                            <p className=" text-gray-500 text-[15px] ">Bonjour mon type ça dit quoi? </p>
                            <span className="  px-2 rounded-full text-[15px] text-white  bg-green-400">2</span>
                        </div>
                    </div>
                </div>
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
            {messages?.map((message) =>
                message.emitId === 1 ? (
                    <EmitedMessage key={message.body} msg={message} />
                ) : (
                    <ReceivedMessage key={message.body} msg={message} />
                )
            )}
        </div>
    )
}
