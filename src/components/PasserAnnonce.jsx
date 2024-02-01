import default_profile from '../assets/default_profile.jpg'
import CreatePost from './popovers/CreatePost'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function PasserAnnonce() {
    const { connectedUser } = useContext(AuthContext)
    const [showPopover, setShowPopover] = useState(false)
    const closePopover = () => {
        if (!connectedUser) {
            return <Navigate to="/" />
        } else {
            setShowPopover(!showPopover)
        }
    }
    return (
        <div className="flex sm:w-[40%] w-[100%] mt-[50px] py-3 shadow-md px-5 flex-col justify-center items-center bg-white rounded-md">
            <div className="flex items-center gap-2 justify-center w-full">
                <img src={default_profile} alt="" className="h-12 object-cover w-12 rounded-full " />

                <div className="w-full ">
                    <Link to={!connectedUser && '/login'}>
                        <input
                            type="text"
                            className="bg-gray-200 h-10 text-gray-700 rounded-full  w-full px-4 focus:outline-none"
                            placeholder="description de votre annonce..."
                            onClick={closePopover}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex justify-around w-full pt-4 mt-4 border-t border-gray-300">
                <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2">
                    <span className="material-icons-outlined">add_photo_alternate</span> photo
                </div>
                <div className=" flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2">
                    <span className="material-icons-outlined">video_call</span> vidéo
                </div>
                <div className="bg-[#006400] hover:bg-[#178240] text-white rounded-md cursor-pointer px-5 py-2">
                    Publier
                </div>
            </div>
            <CreatePost openPopover={showPopover} closePopover={closePopover} />
        </div>
    )
}

export default PasserAnnonce
