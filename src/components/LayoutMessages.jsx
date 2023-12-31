import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function LayoutMessages() {
    return (
        <div>
            <Navbar />

            <div>{<Outlet />}</div>
        </div>
    )
}
export default LayoutMessages
