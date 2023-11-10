import { useState } from 'react'
import default_profile from '../../assets/default_profile.jpg'
function CreatePost({ openPopover, closePopover }) {
    const [postDescription, setPostDescription] = useState('')
    const handleSubmitPost = () => {
        setPostDescription('')
    }
    return (
        openPopover && (
            <>
                <div
                    className="fixed flex items-center justify-center bg-fixed z-[10] top-0 inset-0 right-0 h-screen w-screen bg-gray-300/30 backdrop-opacity-30 backdrop-blur-[4px]  overflow-y-hidden"
                    onClick={closePopover}
                ></div>
                <div className=" fixed z-[11] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[45%] shadow-lg rounded-md">
                    <div className="flex items-center  w-full p-4 text-[25px] border-b border-gray-200 ">
                        <div className="w-full text-center">
                            <span className="font-bold">Créer une nouvelle annonce</span>
                        </div>
                        <div className="flex items-center">
                            <span
                                onClick={closePopover}
                                className="material-icons p-2 cursor-pointer text-end bg-gray-100 hover:bg-gray-200 rounded-full"
                            >
                                close
                            </span>
                        </div>
                    </div>
                    <div className="py-4 px-6">
                        <div className="flex gap-2">
                            <img src={default_profile} alt="" className="h-12 object-cover w-12 rounded-full " />
                            <div>
                                <p className="font-bold">Beral ASSONFACK</p> <p className="text-gray-700">vendeur</p>
                            </div>
                        </div>
                        <textarea
                            autoFocus
                            value={postDescription}
                            onChange={(e) => setPostDescription(e.target.value)}
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            className="p-4 w-full focus:outline-none text-gray-800 text-[18px] selection:bg-green-300 
                            leading-[25px] "
                            placeholder="Description de votre annonce..."
                        ></textarea>{' '}
                        <div className="flex justify-around my-2 items-center">
                            <div>Ajouter à votre publication</div>
                            <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2">
                                <span className="material-icons-outlined">add_photo_alternate</span> photo
                            </div>
                            <div className=" flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2">
                                <span className="material-icons-outlined">video_call</span> vidéo
                            </div>
                        </div>
                        <div
                            onClick={handleSubmitPost}
                            className="w-full flex justify-center py-2 text-[17px] text-white font-bold bg-[#166534] hover:bg-[#178240] rounded-lg "
                        >
                            Publier
                        </div>
                    </div>
                </div>
            </>
        )
    )
}

export default CreatePost
