import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Navbar />

            <div>{<Outlet />}</div>
            <Footer />
        </div>
    )
}

export default Layout
