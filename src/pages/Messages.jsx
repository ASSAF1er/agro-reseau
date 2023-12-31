import { Message } from '@mui/icons-material'
import default_profile from '../assets/default_profile.jpg'
import MessageZone from '../components/MessageComponenets/MessageZone'
import DiscussionZone from '../components/MessageComponenets/DiscussionsZone'
import { useParams } from 'react-router-dom'
function Messages() {
    document.documentElement.scrollTop = 0
    const params = useParams()
    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <DiscussionZone />
            <MessageZone params={params} />
        </div>
    )
}

export default Messages
