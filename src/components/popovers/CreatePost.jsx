import { useEffect, useState } from 'react'
import default_profile from '../../assets/default_profile.jpg'
import Dialog from '@mui/material/Dialog'
import { useContext } from 'react'

import { AuthContext } from '../../utils/AuthContext'
import { PostsData } from '../../utils/PostsContext'
import classNames from 'classnames'
import axios from 'axios'
function CreatePost({ openPopover, closePopover }) {
    const { postsList, setPostsList } = useContext(PostsData)
    const { connectedUser } = useContext(AuthContext)
    const [postDescription, setPostDescription] = useState('')
    const [postPhoto, setPostPhoto] = useState('')
    const [showImageSelector, setShowImageSelector] = useState(false)
    const [postVideo, setPostVideo] = useState('')
    const [showVideoSelector, setShowVideoSelector] = useState(false)
    const [newPost, setNewPost] = useState({})

    useEffect(() => {
        const hours = new Date().getHours()
        const mins = new Date().getMinutes()
        const secs = new Date().getSeconds()
        const day = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        setNewPost({
            ...newPost,
            description: postDescription,

            //date: `${day}-${month}-${year} ${hours}:${mins}:${secs}`,
            image: postPhoto
            //video: postVideo,
            //author: 'assaf',
        })
    }, [postDescription, postPhoto, postVideo])

    const addPost = (newPost) => {
        axios
            .post('http://localhost:8000/api_poste/create/', newPost, {
                headers: { Authorization: `token ${connectedUser.token}`, 'content-type': 'multipart/form-data' }
            })
            .then(() => {})
            .catch((error) => console.log(error))
    }

    const handleAddPost = () => {
        addPost(newPost)
        setPostsList([newPost, ...postsList])
        setPostDescription('')
        setPostPhoto('')
        closePopover()
    }

    return (
        openPopover && (
            <Dialog open={openPopover} onClose={closePopover}>
                <div className=" fixed z-[11] top-1/2 left-1/2 max-h-[200] -translate-x-1/2 -translate-y-1/2 bg-white  sm:w-[45%] w-[80%]  shadow-lg rounded-md">
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
                    <form action="" enctype="multipart/form-data">
                        <div className="py-4 px-6 ">
                            <div className="flex gap-2 mb-2">
                                <img src={default_profile} alt="" className="h-12 object-cover w-12 rounded-full " />
                                <div>
                                    <p className="font-bold">Beral ASSONFACK</p>{' '}
                                    <p className="text-gray-700">vendeur</p>
                                </div>
                            </div>
                            <div className="max-h-[300px] overflow-y-scroll ">
                                <textarea
                                    autoFocus={true}
                                    value={postDescription}
                                    onChange={(e) => setPostDescription(e.target.value)}
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                    className="p-4 w-full focus:outline-none text-gray-700 text-[18px] selection:bg-green-300 
                            leading-[25px] "
                                    placeholder="Description de votre annonce..."
                                ></textarea>
                                {showImageSelector && (
                                    <div className=" relative min-h-[200px] border border-gray-400 bg-gray-50 rounded-md p-2">
                                        <span
                                            onClick={() => setShowImageSelector(false)}
                                            className="material-icons absolute top-2 right-2 p-2 cursor-pointer text-end bg-gray-100 hover:bg-gray-200 rounded-full"
                                        >
                                            close
                                        </span>{' '}
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            onChange={(e) => setPostPhoto(URL.createObjectURL(e.target.files[0]))}
                                            className="file:bg-[#006400] file:text-white  file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold file:hover:bg-[#178240]"
                                        />
                                        <div className="relative w-[280px] ">
                                            {postPhoto && (
                                                <img
                                                    src={postPhoto}
                                                    alt=""
                                                    className="rounded-md h-[280px] w-[280px] mt-2 "
                                                />
                                            )}
                                            <span
                                                onClick={() => setPostPhoto('')}
                                                className={classNames(
                                                    !postPhoto && 'hidden',
                                                    'material-icons absolute flex items-center justify-center rounded-full p-1 top-1 right-1 bg-white text-red-500 cursor-pointer hover:text-red-400 '
                                                )}
                                            >
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {showVideoSelector && (
                                    <div className=" relative min-h-[200px] border border-gray-400 bg-gray-50 rounded-md p-2">
                                        <span
                                            onClick={() => setShowVideoSelector(false)}
                                            className="material-icons absolute top-2 right-2 p-2 cursor-pointer text-end bg-gray-100 hover:bg-gray-200 rounded-full"
                                        >
                                            close
                                        </span>{' '}
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={(e) => setPostVideo(URL.createObjectURL(e.target.files[0]))}
                                            className="file:bg-[#006400] file:text-white  file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold file:hover:bg-[#178240]"
                                        />
                                        <div className="relative w-[280px] ">
                                            {postVideo && (
                                                <video
                                                    src={postVideo}
                                                    alt=""
                                                    className="rounded-md h-[280px] w-[280px] mt-2 "
                                                />
                                            )}
                                            <span
                                                onClick={() => setPostVideo('')}
                                                className={classNames(
                                                    !postVideo && 'hidden',
                                                    'material-icons absolute flex items-center justify-center rounded-full p-1 top-1 right-1 bg-white text-red-500 cursor-pointer hover:text-red-400 '
                                                )}
                                            >
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-around my-2 items-center">
                                <div>Ajouter à votre publication</div>
                                <div
                                    onClick={() => {
                                        showVideoSelector && setShowVideoSelector(false)
                                        setShowImageSelector(true)
                                    }}
                                    className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2"
                                >
                                    <span className="material-icons-outlined">add_photo_alternate</span> photo
                                </div>
                                <div
                                    onClick={() => {
                                        showImageSelector && setShowImageSelector(false)
                                        setShowVideoSelector(true)
                                    }}
                                    className=" flex items-center bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer px-5 py-2"
                                >
                                    <span className="material-icons-outlined">video_call</span> vidéo
                                </div>
                            </div>
                            <div
                                onClick={handleAddPost}
                                className="w-full cursor-pointer flex justify-center py-2 text-[17px] text-white font-bold bg-[#006400] hover:bg-[#178240] rounded-lg "
                            >
                                Publier
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>
        )
    )
}

export default CreatePost
