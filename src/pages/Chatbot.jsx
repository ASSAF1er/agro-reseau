import default_profile from '../assets/default_profile.jpg'
function Chatbot() {
    document.documentElement.scrollTop = 0
    return (
        <div className="pt-[60px] flex flex-row h-screen ">
            <div className="w-[30%] bg-green-100">
                <div className="flex flex-row p-2 border-y-2 border-gray-300">
                    <div className="relative flex  h-[40px] w-[40px] ">
                        <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                        <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                    </div>
                    <div className="  w-full flex flex-col px-2">
                        <p>Sobajo</p>
                        <div className="flex justify-between">
                            <p className=" text-gray-500 text-[15px] ">Bonjour mon type ça dit quoi? </p>
                            <span className="  px-2 rounded-full text-[15px] text-white  bg-green-400">2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 bg-green-50">
                <div className="bg-white flex p-3 justify-between items-center shadow-md ">
                    <p className="text-[#006400] font-bold text-[20px] ">AgroBot</p>
                    <span className="material-icons-outlined text-[#006400] font-bold text-[20px] ">settings</span>
                </div>
            </div>
        </div>
    )
}

export default Chatbot
