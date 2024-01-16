import default_profile from '../assets/default_profile.jpg'
import { useContext, useEffect, useState } from 'react'
import { ProducersData } from '../utils/ProducersContext '

import { Link } from 'react-router-dom'
function Producers() {
    const { producersList, search, searchClicked } = useContext(ProducersData)
    const [tempProducersList, setTempProducersList] = useState()
    useEffect(() => {
        setTempProducersList(producersList.filter((item) => item.username.toLowerCase().includes(search.toLowerCase())))
    }, [search, producersList])

    const produitsRecherches = [
        'Arachides',
        'Manioc',
        'Macabo',
        'Riz',
        'Lait de vache',
        'Poultes de chair',
        'Tomate',
        'Mais',
        'Patate',
        'Banane plantain'
    ]
    return (
        <div className="pt-10 px-10 bg-gray-100 w-full">
            <p className="text-[20px] font-bold pb-10 ">
                {' '}
                {!searchClicked
                    ? `${producersList.length} producteurs inscrits`
                    : `${tempProducersList.length} résultats pour "${search}"`}
            </p>
            <div className=" flex flex-col md:flex-row gap-x-0 w-full">
                <div className="flex flex-row justify-center flex-wrap gap-10 w-full  md:w-[70%] pb-10 ">
                    {!searchClicked
                        ? producersList.map((prod) => <Card productor={prod} />)
                        : tempProducersList.map((prod) => <Card productor={prod} />)}
                </div>
                {/*section de droite*/}
                <div className="flex flex-col gap-10  w-full md:w-[30%] justify-start items-center ">
                    <div className="text-center flex flex-col gap-5 shadow-md py-5 bg-white rounded-[20px] w-[80%] ">
                        {' '}
                        <div>
                            <p className=" text-[18px] ">Vous achetez</p>
                            <p className="font-bold text-[18px] "> un produit?</p>
                            <br />
                            <p className="px-3 text-[16px]  leading-[23px]">
                                une multitude de producteurs agropastoraux partout à travers le Cameroun vous font une
                                offre de qualité à bas prix{' '}
                            </p>
                        </div>
                        <div>
                            <span className="bg-[#006400] cursor-pointer hover:font-bold text-[18px] w-full text-white py-3 px-5 rounded-xl  border-2 border-[#006400] hover:bg-gray-100 hover:text-[#006400]">
                                Passer une annonce
                            </span>
                        </div>
                    </div>
                    <div className="text-center flex flex-col gap-5 shadow-md py-5 bg-white rounded-[20px] w-[80%]">
                        {' '}
                        <div>
                            <p className=" text-[18px] ">Vous vendez</p>
                            <p className="font-bold text-[18px] pb-3 "> un produit?</p>

                            <p className="px-3 text-[16px]  leading-[23px] ">
                                Déposez les produits que vous vendez sur{' '}
                                <span className="text-[#006400] font-bold ">AgroRéseau</span> et faites vous un réseau
                                pour l'écoulement de vos produits
                            </p>
                        </div>
                        <div>
                            <span className="bg-[#006400] cursor-pointer text-[18px] hover:font-bold w-full text-white py-3 px-5 rounded-xl  border-2 border-[#006400] hover:bg-gray-100 hover:text-[#006400]">
                                Passer une annonce
                            </span>
                        </div>
                    </div>
                    <div className="text-center flex flex-col gap-5  py-5   w-[90%]">
                        <p className="font-bold text-[20px] ">Les produits les plus demandés ces 30 derniers jours</p>
                        <div className="h-[400px] flex flex-col overflow-y-scroll gap-5 mr-2 scrollbar-color-blue scrollbar-width-10px scroll- ">
                            {produitsRecherches.map((item) => (
                                <div className="bg-white rounded-xl shadow-xl font-bold scroll-smooth hover:text-[#006400] py-3">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producers

function Card({ productor }) {
    const rank = productor.ranking
    const stars = []
    for (var i = 0; i < 5; i++) {
        if (rank - i >= 1) {
            stars.push(<span className="material-icons  ">grade</span>)
        }
        if (rank - i < 1 && rank - i > 0) {
            stars.push(<span className="material-icons  ">star_half</span>)
        }
        if (rank - i <= 0) {
            stars.push(<span className="material-icons-outlined  ">grade</span>)
        }
    }

    return (
        <div className="relative flex flex-col cursor-pointer w-[250px] pb-3 transition-all ease-in-out h-[360px] overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.07] duration-300 rounded-lg bg-white border boder-1 border-gray-200">
            <div>
                <img
                    className="h-[160px] rounded-t-lg object-cover w-full"
                    src={productor.photo ? productor.photo : default_profile}
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className=" flex flex-col justify-center px-2 pt-2">
                <Link
                    to={`/profile/${productor.id}`}
                    className="text-[#006400] font-bold text-[17px] text-center hover:underline  "
                >
                    {productor.username}
                </Link>
                <div className="text-gray-600  text-[13px] text-center">
                    <span className="material-icons-outlined text-[15px] font-bold">place</span> {productor.ville}
                    Cameroun
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 my-2">
                {/* <div className="text-[#006400] text-[18px]">
                    {stars.map((star) => (
                        <>{star}</>
                    ))}
                </div>
                 <div>
                    <p className="text-center font-bold text-[#006400] text-[18px]">{parseFloat(productor.ranking)}</p>
                    <p className="text-[12px]">476 avis</p>
                </div> */}
            </div>
            <div className="px-2 text-[15px] flex flex-row flex-wrap gap-2 justify-center">
                {/* {productor.products.split(',').map((item) => (
                    <div className="rounded-full py-[2px] px-3  text-[#006400] border border-[#006400] hover:bg-[#006400] hover:text-white">
                        {item}
                    </div>
                ))} */}
            </div>
        </div>
    )
}
