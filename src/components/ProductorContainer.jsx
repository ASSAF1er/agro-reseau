import default_profile from '../assets/default_profile.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProducersData } from '../utils/ProducersContext '
function ProductorContainer({ productor }) {
    return (
        <div className="group relative w-[200px]  h-[300px] shadow-sm   rounded-md bg-white border boder-1 border-gray-300">
            <div className="overflow-hidden">
                <img
                    className="h-[160px] object-cover w-full overflow-hidden group-hover:scale-[1.07] transition-all ease-in-out duration-300"
                    src={productor.photo ? productor.photo : default_profile}
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="px-2">
                <Link
                    to={`/profile/${productor.name}`}
                    className="text-[#006400] font-bold text-[17px] hover:underline"
                >
                    {productor.name}
                </Link>
                <div className="text-[12px] ">{productor.description}</div>
            </div>
            <div className="flex flex-row items-center justify-around ">
                <div className="text-[#006400]">
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">star_half</span>
                    <span className="material-icons-outlined">grade</span>
                </div>
                <div>
                    <p className="text-center font-bold text-[#006400] ">3,8</p>
                    <p className="text-[12px]">476 avis</p>
                </div>
            </div>
            <div className="absolute flex items-center justify-center left-0 bottom-0 cursor-pointer  bg-[#006400] text-white text-[15px] text-center w-full py-2 rounded-b-md  ">
                Voir <span className="material-icons text-[15px] ">open_in_new</span>
            </div>
        </div>
    )
}

export default ProductorContainer
