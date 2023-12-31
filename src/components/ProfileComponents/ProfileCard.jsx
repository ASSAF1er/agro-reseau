import default_profile from '../../assets/default_profile.jpg'
import { Link } from 'react-router-dom'
function ProfileCard({ account }) {
    return (
        <div className="flex flex-row flex-1 gap-[30px] h-[300px] rounded-[20px] shadow-sm bg-white ">
            <img
                src={default_profile}
                loading="lazy"
                alt=""
                className="w-[30%] h-full rounded-l-[20px] object-cover "
            />
            <div className="relative flex flex-col py-[20px] pr-[20px] ">
                <p className="font-bold text-[20px] text-[#006400] ">{account.name}</p>
                <p className="text-[15px] font-[400] text-gray-400 flex items-center">
                    <span className="material-icons-outlined text-[16px] ">place</span> {' ' + account.location}
                </p>
                <p className="pt-[10px] text-gray-800 ">
                    Je suis un développeur passioné de la résolution des problèmes difficiles et de l'entrepreneuriat.
                    chaque jour je m'eforce à mettre sur pied une entreprise revolutionnare au Cameroun et en Afrique.
                </p>
                <div className="flex flex-row  flex-wrap gap-[10px] mt-[20px] ">
                    {account.products.split(',').map((item) => (
                        <button className="px-4 py-1 bg-green-100 rounded-md text-green-800">{item}</button>
                    ))}
                </div>
                <div className="absolute bottom-3 right-5 flex ">
                    <div className="px-5 py-[8px] rounded-[6px] bg-[#006400] hover:bg-[#005000] cursor-pointer text-white ">
                        <Link to={`/1/messages/${account.name}`}> Envoyer un message</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
