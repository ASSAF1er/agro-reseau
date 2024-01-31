import default_profile from '../../assets/default_profile.jpg'
import MsgInputZone from './MsgInputZone'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../utils/AuthContext'
import axios from 'axios'
import EmitedMessage from './EmitedMessage'
import ReceivedMessage from './ReceivedMessage'
function MessageZone({ params }) {
    const { connectedUser } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [messagesList, setMessagesList] = useState([])
    console.log(params)
    useEffect(() => {
        params.receiverId &&
            axios
                //requete pour récupérer les informations de l'interlocuteur
                .get(
                    `http://localhost:8000/api/search/${parseInt(
                        params.senderId === connectedUser.userId ? params.receiverId : params.senderId
                    )}/`
                )
                .then((res) => {
                    setUser(res.data)
                    console.log(res.data)
                })
                .catch((err) => {})

        //requete pour recupérer les messages entre les deux utilisateurs
        params.receiverId &&
            axios
                .get(`http://localhost:8000/api_message/get-messages/${params.senderId}/${params.receiverId}/`)
                .then((res) => {
                    setMessagesList(res.data)
                })
                .catch((err) => {})
    }, [params])
    return (
        <div className="relative flex flex-col flex-1 bg-green-50">
            {params.receiverId ? (
                <div className="w-full flex flex-col">
                    <div className="bg-white flex p-3 justify-between items-center shadow-md ">
                        <div className="relative flex  h-[40px] w-[40px] ">
                            <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                            <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                        </div>{' '}
                        <p className="text-[#006400] font-bold text-[20px] ">{user.username}</p>
                        <span className="material-icons-outlined text-[#006400] font-bold text-[20px] ">settings</span>
                    </div>
                    <Messages messages={messagesList} />
                    <MsgInputZone messages={messagesList} setMessages={setMessagesList} receiver={user} />
                </div>
            ) : (
                <div className="bg-white flex p-3 h-full justify-center text-center font-bold text-[20px] text-gray-400 items-center shadow-md ">
                    Sélectionnnez une discussion pour la voir apparaître ici.
                </div>
            )}
        </div>
    )
}

export default MessageZone

const Messages = ({ messages }) => {
    const { connectedUser } = useContext(AuthContext)
    return (
        <div className="flex z-[2] flex-col max-h-[80%] overflow-y-scroll px-3 py-4">
            {messages
                ?.sort((a, b) => a.id - b.id)
                .map((message) =>
                    message.sender.id === parseInt(connectedUser.userId) ||
                    message.sender === parseInt(connectedUser.userId) ? (
                        <EmitedMessage key={message.body} msg={message.message} date={message.date} />
                    ) : (
                        <ReceivedMessage key={message.body} msg={message.message} date={message.date} />
                    )
                )}
        </div>
    )
}
