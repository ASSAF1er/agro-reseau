import ProfileCard from '../components/ProfileComponents/ProfileCard'
import PhotosContainer from '../components/ProfileComponents/PhotosContainer'
import { productors } from '../utils/productorsList'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import { useContext } from 'react'
import { PostsData } from '../utils/PostsContext'
import RankingProfile from '../components/ProfileComponents/RankingProfile'
function Profile() {
    document.documentElement.scrollTop = 0
    const { postsList, setPostsList } = useContext(PostsData)
    const params = useParams()
    let account = productors.filter((acc) => acc.name === params.id)[0]
    let filteredPosts = postsList.filter((item) => item.name === params.id)
    return (
        <div className=" flex flex-col gap-[20px] pt-[100px] pb-[50px] items-center   bg-[#ceffce] ">
            <div className="w-[90%] flex gap-[20px] ">
                <ProfileCard account={account} />
                <RankingProfile />
            </div>
            <div className="w-[90%] flex gap-[20px] ">
                <div className="flex  flex-1">
                    <PhotosContainer />
                </div>
                <div className="w-[38%] flex flex-col">
                    <div className=" flex justify-between items-center rounded-[10px] px-[20px] py-[10px] bg-white shadow-sm ">
                        <p className="font-bold text-[18px] ">Publications</p>
                        <p className="flex items-center gap-2 font-bold bg-gray-100 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200">
                            <span className="material-icons">filter_list </span>Filtres
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-[10px] pt-[10px] ">
                        {filteredPosts.length !== 0 ? (
                            filteredPosts.map((item) => item.name === params.id && <Post post={item} />)
                        ) : (
                            <div className="rounded-[10px] px-[20px] py-[10px] bg-gray-100 text-center text-gray-500">
                                {account.name + ' '}n'a aucune publication pour le moment
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
