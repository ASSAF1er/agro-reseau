import Typed from 'react-typed'
import image_hero from '../assets/image_hero.jpg'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../utils/AuthContext'
import classNames from 'classnames'
function Hero() {
    const { connectedUser, setConnectedUser } = useContext(AuthContext)
    const [display, setDisplay] = useState(true)
    useEffect(() => {
        setDisplay(true)
        setTimeout((setDisplay(false), 15000))
    }, [])
    return (
        <div className=" relative  flex gap-[100px] h-screen items-center bg-[#006400] overflow-hidden ">
            {connectedUser && (
                <div
                    className={classNames(
                        'absolute bottom-8  py-5 px-3  bg-blue-200 rounded-md text-[17px] z-10 shadow-2xl',
                        display ? 'left-4' : 'left-[-100%]'
                    )}
                >
                    Heureux de te revoir, {connectedUser.username} 🎉
                </div>
            )}
            <div className="  w-[80%] sm:w-[90%] md:w-[55%] mx-[10%] sm:mx-[5%] md:mr-0">
                <div className="text-[30px]  sm:text-[40px] md:text-[50px]  text-[#ffffff] sm:leading-[40px] md:leading-[50px] leading-[30px] font-bold">
                    Les producteurs locaux près de chez vous pour des produits
                    <Typed
                        className="pl-2 text-yellow-500"
                        strings={['Bios.', 'Frais.', 'de qualité.']}
                        typeSpeed={50}
                        backSpeed={50}
                        backDelay={1000}
                        loop
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-[30px] ">
                    <div className="flex  items-center justify-between w-full sm:w-[250px]   duration-[400ms]  bg-[#65a30d] text-[#ffffff] text-[19px] px-4 py-3 rounded-[3px] shadow-md hover:cursor-pointer hover:px-2">
                        Passer une annonce
                        <span className="material-icons">arrow_right_alt</span>
                    </div>
                    <Link to="/producteurs">
                        <div className="flex items-center  justify-between bg-[#3f6212] text-[#ffffff] w-full sm:w-[290px] text-[19px] duration-[400ms] px-4 py-3 rounded-[3px] shadow-md hover:cursor-pointer hover:px-2">
                            Contacter un producteur
                            <span className="material-icons">arrow_right_alt</span>
                        </div>
                    </Link>
                </div>
            </div>
            <img alt="" src={image_hero} className="bg-white rounded-md w-[25%] h-[50%] object-cover" />
        </div>
    )
}

export default Hero
