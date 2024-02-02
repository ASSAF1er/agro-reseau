import { Message } from '@mui/icons-material'
import { useEffect, useState, useContext } from 'react'
import default_profile from '../assets/default_profile.jpg'
import MessageZone from '../components/MessageComponenets/MessageZone'
import DiscussionZone from '../components/MessageComponenets/DiscussionsZone'
import { AuthContext } from '../utils/AuthContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Messages() {
    document.documentElement.scrollTop = 0
    const params = useParams()
    const { connectedUser } = useContext(AuthContext)
    const [userMessages, setUserMessages] = useState([])
    useEffect(() => {
        connectedUser.userId &&
            axios
                .get(`http://localhost:8000/api_message/messages/${connectedUser.userId}/`)
                .then((res) => {
                    setUserMessages(res.data)
                })
                .catch((err) => console.log(err))
    }, [connectedUser.userId])

    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <DiscussionZone userMessages={userMessages} />
            <MessageZone params={params} />
        </div>
    )
}

export default Messages
