import default_profile from '../../assets/default_profile.jpg'
function MessageZone() {
    return (
        <div className="flex flex-col flex-1 bg-green-50">
            <div className="bg-white flex p-3 justify-between items-center shadow-md ">
                <div className="relative flex  h-[40px] w-[40px] ">
                    <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                    <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                </div>{' '}
                <p className="text-[#006400] font-bold text-[20px] ">Sobajo</p>
                <span className="material-icons-outlined text-[#006400] font-bold text-[20px] ">settings</span>
            </div>
        </div>
    )
}

export default MessageZone
