import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../utils/AuthContext'
import axios from 'axios'
function MsgInputZone({ messages, setMessages, receiver }) {
    const [message, setMessage] = useState({})
    const [newMessage, setNewMessage] = useState('')
    const { connectedUser } = useContext(AuthContext)

    useEffect(() => {
        setMessage({
            message: newMessage,
            user: parseInt(connectedUser.userId),
            sender: parseInt(connectedUser.userId),
            receiver: receiver.id
        })
    }, [newMessage])
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(`http://localhost:8000/api_message/send-message/`, message)
            .then((res) => {})
            .catch((err) => console.log(err))

        setMessages([...messages, message])
        setNewMessage('')
    }
    return (
        <form className="w-full my-2">
            <div className=" bottom-2 flex w-full items-center justify-center gap-3 px-5">
                <div className="px-5 rounded-full border border-[#006400] py-1 w-full bg-white shadow-sm">
                    <input
                        type="text"
                        placeholder="Nouveau Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="focus:outline-none w-full h-[40px] text-[18px] text-gray-800 "
                    />
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    <span className="material-icons bg-[#006400] hover:bg-[#006000] rounded-full shadow-xl text-white p-3 cursor-pointer">
                        send
                    </span>
                </button>
            </div>
        </form>
    )
}

export default MsgInputZone
