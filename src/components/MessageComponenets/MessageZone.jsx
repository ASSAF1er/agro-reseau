import default_profile from '../../assets/default_profile.jpg'
import MsgInputZone from './MsgInputZone'
function MessageZone({ params }) {
    return (
        <div className="relative flex flex-col flex-1 bg-green-50">
            {params.name !== 'null' ? (
                <div className="w-full flex flex-col">
                    <div className="bg-white flex p-3 justify-between items-center shadow-md ">
                        <div className="relative flex  h-[40px] w-[40px] ">
                            <img src={default_profile} alt="" className="w-full h-full  rounded-full object-cover " />
                            <div className="absolute z-1 h-2 w-2 rounded-full bottom-0 right-0 bg-green-400"></div>
                        </div>{' '}
                        <p className="text-[#006400] font-bold text-[20px] ">{params.name}</p>
                        <span className="material-icons-outlined text-[#006400] font-bold text-[20px] ">settings</span>
                    </div>
                    <MsgInputZone />
                </div>
            ) : (
                <div className="bg-white flex p-3 h-full justify-center text-center font-bold text-[20px] text-gray-400 items-center shadow-md ">
                    Sélectionnnez une discussion pour la voir apparaître ici.
                </div>
            )}
        </div>
    )
}

export default MessageZone
