import default_profile from '../../assets/default_profile.jpg'
import { discussions } from '../../utils/discussions'
import { Link } from 'react-router-dom'
function DiscussionZone() {
    return (
        <div className="flex flex-col gap-1 pt-2 px-2 w-[30%] bg-green-100">
            <p className="text-[25px] font-bold pl-2 ">Discussions</p>
            {discussions.map((item) => (
                <SingleDiscussion discussion={item} />
            ))}
        </div>
    )
}

export default DiscussionZone

function SingleDiscussion({ discussion }) {
    return (
        <div className="flex flex-row p-2  ease-in-out duration-200  hover:bg-green-200 rounded-md shadow-md hover:shadow-md cursor-pointer">
            <div className="relative flex  h-[40px] w-[40px] ">
                <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
            </div>
            <Link to={`/1/messages/${discussion.name}`} className="w-full">
                <div className="  w-full flex flex-col px-2">
                    <p>{discussion.name}</p>
                    <div className="flex justify-between">
                        <p className=" text-gray-500 text-[15px] ">{discussion.lastMessage} </p>
                        <span className="  px-2 rounded-full text-[15px] text-white  bg-green-400">
                            {discussion.numberMessages}{' '}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
