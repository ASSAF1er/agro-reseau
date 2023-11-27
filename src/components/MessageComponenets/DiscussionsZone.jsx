import default_profile from '../../assets/default_profile.jpg'
function DiscussionZone() {
    return (
        <div className="w-[30%] bg-green-100">
            <div className="flex flex-row p-2 border-y border-gray-100">
                <div className="relative flex  h-[40px] w-[40px] ">
                    <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                    <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                </div>
                <div className="  w-full flex flex-col px-2">
                    <p>Assaf</p>
                    <div className="flex justify-between">
                        <p className=" text-gray-500 text-[15px] ">Bonjour le king ça dit quoi? </p>
                        <span className="  px-2 rounded-full text-[15px] text-white  bg-green-400">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscussionZone
