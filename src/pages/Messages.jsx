import { Message } from '@mui/icons-material'
import default_profile from '../assets/default_profile.jpg'
import MessageZone from '../components/MessageComponenets/MessageZone'
import DiscussionZone from '../components/MessageComponenets/DiscussionsZone'
function Messages() {
    document.documentElement.scrollTop = 0
    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <DiscussionZone />
            <MessageZone />
        </div>
    )
}

export default Messages
