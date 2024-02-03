import default_profile from '../../assets/default_profile.jpg'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../utils/AuthContext'
function ProfileCard({ acc }) {
    const { connectedUser } = useContext(AuthContext)
    const [account, setAccount] = useState(acc)
    useEffect(() => {
        setAccount(acc)
    }, [acc])
    return (
        <div className="flex flex-row flex-1 gap-[30px] h-[300px] rounded-[20px] shadow-sm bg-white ">
            <img
                src={default_profile}
                loading="lazy"
                alt=""
                className="w-[30%] h-full rounded-l-[20px] object-cover "
            />
            <div className="relative flex flex-col py-[20px] pr-[20px] ">
                <p className="font-bold text-[20px] text-[#006400] ">{account.username}</p>
                <p className="text-[15px] font-[400] text-gray-400 flex items-center">
                    <span className="material-icons-outlined text-[16px] ">place</span> {' ' + account.ville},Cameroun
                </p>
                <p className="pt-[10px] text-gray-800 ">
                    {account.description ? (
                        <p>{account.description}</p>
                    ) : (
                        <p className="text-gray-500 text-[18px] text-center border-2 border-blue-200 bg-blue-100 py-2 rounded-md ">
                            Vous n'avez ajouté aucune description à votre profil. Faites-le en modifiant votre profil
                        </p>
                    )}
                </p>
                <div className="flex flex-row  flex-wrap gap-[10px] mt-[20px] ">
                    {/* {account.products.split(',').map((item) => (
                        <button className="px-4 py-1 bg-green-100 rounded-md text-green-800">{item}</button>
                    ))} */}
                </div>
                <div className="absolute bottom-3 right-5 flex gap-3">
                    {parseInt(connectedUser.userId) === parseInt(account.id) ? (
                        <Link
                            to={`/profile/edit/${connectedUser.userId}/`}
                            className="flex gap-2 items-center px-5 py-[8px] rounded-[6px] bg-[#006400] hover:bg-[#005000] cursor-pointer text-white "
                        >
                            <span className="material-icons">edit</span> Modifier mon profil
                        </Link>
                    ) : (
                        <Link
                            to={`/1/chat/${parseInt(connectedUser.userId)}/${account.id}/`}
                            className="flex gap-2 items-center px-5 py-[8px] rounded-[6px] bg-[#006400] hover:bg-[#005000] cursor-pointer text-white "
                        >
                            Envoyer un Message
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
