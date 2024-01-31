import Post from '../components/Post'
import { posts } from '../utils/postList'
import { useContext } from 'react'
import { PostsData } from '../utils/PostsContext'
function RecentPost({ initial_index, end_index }) {
    const { postsList, setPostsList } = useContext(PostsData)
    return (
        <div className="bg-gray-200  md:w-[40%]">
            <div className="flex flex-col gap-y-3  justify-center  items-center">
                {postsList.slice(initial_index, end_index).map((singlePost) => (
                    <Post post={singlePost} />
                ))}
            </div>
        </div>
    )
}

export default RecentPost
