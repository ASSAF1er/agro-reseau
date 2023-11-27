import default_profile from '../assets/default_profile.jpg'
import { Link } from 'react-router-dom'
function ProductorContainer({ productor }) {
    return (
        <div className="relative w-[200px] transition-all ease-in-out h-[300px] shadow-sm hover:shadow-2xl hover:scale-[1.07] duration-300 rounded-md bg-white border boder-1 border-gray-300">
            <div>
                <img
                    className="h-[160px] object-cover w-full"
                    src={productor.photo ? productor.photo : default_profile}
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="px-2">
                <Link
                    to={`/profile/${productor.name}`}
                    className="text-[#166534] font-bold text-[17px] hover:underline"
                >
                    {productor.name}
                </Link>
                <div className="text-[12px] ">{productor.description}</div>
            </div>
            <div className="flex flex-row items-center justify-around ">
                <div className="text-[#166534]">
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">grade</span>
                    <span className="material-icons  ">star_half</span>
                    <span className="material-icons-outlined">grade</span>
                </div>
                <div>
                    <p className="text-center font-bold text-[#166534] ">3,8</p>
                    <p className="text-[12px]">476 avis</p>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 cursor-pointer  bg-[#166534] text-white text-[15px] text-center w-full py-2 rounded-b-md  ">
                Contacter
            </div>
        </div>
    )
}

export default ProductorContainer
