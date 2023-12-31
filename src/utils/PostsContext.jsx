import { createContext, useState } from 'react'
import { posts } from './postList'
export const PostsData = createContext('')

export const PostsDataProvider = ({ children }) => {
    const [postsList, setPostsList] = useState(posts)
    return <PostsData.Provider value={{ postsList, setPostsList }}>{children}</PostsData.Provider>
}
export default PostsDataProvider
