import { useEffect, useState } from 'react'
import default_profile from '../assets/default_profile.jpg'

import { useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../utils/AuthContext'
import { PostsData } from '../utils/PostsContext'
import classNames from 'classnames'

function CreatePost() {
    const { postsList, setPostsList } = useContext(PostsData)
    const { connectedUser } = useContext(AuthContext)
    const [postDescription, setPostDescription] = useState('')
    const [sentImage, setSentImage] = useState('')
    const [postPhoto, setPostPhoto] = useState('')
    const [showImageSelector, setShowImageSelector] = useState(false)
    const [postVideo, setPostVideo] = useState('')
    const [showVideoSelector, setShowVideoSelector] = useState(false)
    const [newPost, setNewPost] = useState({})
    useEffect(() => {
        postPhoto &&
            fetch(postPhoto)
                .then((response) => response.blob())
                .then((blob) => {
                    setSentImage(new File([blob], 'file.png', { type: `image/png` }))
                })
    }, [postPhoto])

    useEffect(() => {
        const hours = new Date().getHours()
        const mins = new Date().getMinutes()
        const secs = new Date().getSeconds()
        const day = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        setNewPost({
            description: postDescription,
            image: sentImage,
            like: 0,
            //video: postVideo,
            author: { username: connectedUser?.username }
        })
    }, [postDescription, sentImage, postVideo])

    const [success, setSuccess] = useState(false)
    const addPost = (newPost) => {
        axios
            .post('http://localhost:8000/api_poste/create/', newPost, {
                headers: {
                    Authorization: `token ${connectedUser.token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                setPostsList([res.data, ...postsList])
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000)
            })
            .catch((error) => console.log(error))
    }
    const [descriptionError, setDescriptionError] = useState(false)
    const handleAddPost = (e) => {
        e.preventDefault()
        postDescription && addPost(newPost)
        !postDescription && setDescriptionError(true)
        console.log(postPhoto)
        setPostsList([newPost, ...postsList])
        setPostDescription('')
        setPostPhoto('')
    }
    return (
        <form className="pt-[60px]">
            <p className="text-3xl font-bold text-center py-4 mb-5 border-b-[4px] bg-green-100 border-green-300 ">
                Nouvelle annonce
            </p>
            <div className="pb-[60px] px-[20%] ">
                <div className="flex gap-2 mb-2">
                    <img src={default_profile} alt="" className="h-12 object-cover w-12 rounded-full " />
                    <div className=" flex flex-col justify-center">
                        <p className="font-bold text-[18px] ">{connectedUser.username}</p>{' '}
                        {/* <p className="text-gray-700">vendeur</p> */}
                    </div>
                </div>
                <div className="min-h-[300px]  ">
                    <textarea
                        autoFocus={true}
                        value={postDescription}
                        onChange={(e) => {
                            setPostDescription(e.target.value)
                            setDescriptionError(false)
                        }}
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        className="p-4 w-full focus:outline-none text-gray-700 text-[18px] selection:bg-green-300 
            leading-[25px] "
                        placeholder="Description de votre annonce..."
                    ></textarea>
                    {descriptionError && (
                        <p className="text-red-400 text-center">
                            vous devez ajouter une description à votre publication
                        </p>
                    )}
                    {showImageSelector && (
                        <div className=" relative min-h-[200px] border border-gray-400 bg-gray-50 rounded-md p-2">
                            <p>Image</p>{' '}
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
                                        className="rounded-md h-[280px] w-[280px] mt-2 object-cover"
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
                            <p>Vidéo</p>
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
                                        className="rounded-md h-[280px] w-[280px] mt-2 object-cover"
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
                    <div className="text-[17px]">Ajouter à votre publication</div>
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
                {success && (
                    <div className="flex items-center  justify-center gap-2 my-2 bg-green-200 text-green-700 font-medium rounded-md shadow-md text-center py-[20px] ">
                        <span className="material-icons">check_circle</span>
                        {'  '} Publication effectuée
                    </div>
                )}
                <button
                    type="submit"
                    onClick={(e) => handleAddPost(e)}
                    className="w-full cursor-pointer flex justify-center py-2 text-[17px] text-white font-bold bg-[#006400] hover:bg-[#178240] rounded-lg "
                >
                    Publier
                </button>
            </div>
        </form>
    )
}

export default CreatePost
