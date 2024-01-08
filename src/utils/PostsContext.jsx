import { createContext, useState, useEffect } from 'react'
import { posts } from './postList'
import axios from 'axios'
export const PostsData = createContext('')

export const PostsDataProvider = ({ children }) => {
    const getPosts = () => {
        axios
            .get('http://localhost:8000/api_poste/list/')
            .then((res) => {
                setPostsList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getPosts()
    }, [])
    const [postsList, setPostsList] = useState(posts)
    return <PostsData.Provider value={{ postsList, setPostsList }}>{children}</PostsData.Provider>
}
export default PostsDataProvider
