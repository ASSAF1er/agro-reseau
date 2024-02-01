import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import RecentPosts from '../components/RecentPosts'
import NearbyProductors from '../components/NearbyProductors'
import PasserAnnonce from '../components/PasserAnnonce'

function Home() {
    document.documentElement.scrollTop = 0
    return (
        <div className="flex flex-col w-full  justify-center items-center overflow-hidden bg-gray-200 ">
            <Hero />

            {/* <Categories /> */}
            <PasserAnnonce />
            <p className="text-[18px]  bg-gray-200 text-[#333333] font-medium mt-[20px] mb-[10px] ">
                Annonces récentes
            </p>
            <div className="flex flex-col sm:flex-row  w-full justify-between sm:px-5 flex-wrap mb-3 ">
                <div className="hidden sm:visible bg-white shadow-md rounded-md w-[300px]">gauche</div>
                <RecentPosts initial_index={0} end_index={2} />
                <div className="hidden sm:visible bg-white shadow-md rounded-md w-[300px]">droite</div>
            </div>

            {/* <NearbyProductors /> */}

            <RecentPosts initial_index={2} end_index={10} />
        </div>
    )
}

export default Home
