import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import RecentPosts from '../components/RecentPosts'
import NearbyProductors from '../components/NearbyProductors'
import PasserAnnonce from '../components/PasserAnnonce'
import { useState } from 'react'
import classNames from 'classnames'
import Carrousel from '../components/Carrousel'

function Home() {
    document.documentElement.scrollTop = 0
    const [showSides, setShowSides] = useState(false)
    // const handleShowSides = () => {
    //     if (window.scrollY > window.innerHeight) {
    //         setShowSides(true)
    //     }
    //     else{setShowSides(false)}
    // }
    // window.addEventListener('scroll', handleShowSides)
    return (
        <div className="flex flex-col w-full pb-5 justify-center items-center overflow-hidden bg-gray-200 ">
            <Hero />

            {/* <Categories /> */}
            <PasserAnnonce />
            <p className="text-[18px]  bg-gray-200 text-[#333333] font-medium mt-[20px] mb-[10px] ">
                Annonces récentes
            </p>
            <div className="relative flex flex-col sm:flex-row  w-full justify-center sm:px-5 flex-wrap mb-3 ">
                <div
                    className={classNames(
                        showSides ? 'visible' : 'hidden',
                        ' absolute top-20 left-0 bg-white shadow-md rounded-md h-[300px]'
                    )}
                >
                    gauche
                </div>
                <RecentPosts initial_index={0} end_index={2} />
                {/* <div className="hidden sm:visible bg-white shadow-md rounded-md w-[300px]">droite</div> */}
            </div>

            {/* <NearbyProductors /> */}
            {/* <Carrousel /> */}
            <RecentPosts initial_index={2} end_index={10} />
        </div>
    )
}

export default Home
