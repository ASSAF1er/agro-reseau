import default_profile from '../../assets/default_profile.jpg'
function PhotosContainer() {
    return (
        <div className="flex flex-col h-[300px] shadow-sm rounded-[20px] bg-white py-[20px] px-[20px] ">
            <div className="flex justify-between mb-7">
                {' '}
                <p className="font-bold text-[18px] ">Photos</p>
                <p className="text-[#006400] text-[20px] ">
                    {' '}
                    <span className="material-icons cursor-pointer hover:text-gray-400">navigate_before</span>
                    <span className="material-icons cursor-pointer hover:text-gray-400">navigate_next</span>
                </p>
            </div>
            <div className="flex gap-[20px] flex-wrap">
                <img src={default_profile} alt="" className="h-[200px] w-[200px] rounded-xl object-cover " />
                <img src={default_profile} alt="" className="h-[200px] w-[200px] rounded-xl object-cover " />
                <img src={default_profile} alt="" className="h-[200px] w-[200px] rounded-xl object-cover " />
            </div>
        </div>
    )
}

export default PhotosContainer
