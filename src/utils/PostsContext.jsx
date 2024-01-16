import { createContext, useState, useEffect } from 'react'
import { posts } from './postList'
import axios from 'axios'
export const PostsData = createContext('')

export const PostsDataProvider = ({ children }) => {
    useEffect(() => {
        axios
            .get('http://localhost:8000/api_poste/list/')
            .then((res) => {
                setPostsList(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const [postsList, setPostsList] = useState([])
    return <PostsData.Provider value={{ postsList, setPostsList }}>{children}</PostsData.Provider>
}
export default PostsDataProvider
