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
            <p className="text-[30px] text-center bg-gray-200 text-[#333333] font-bold mt-[20px] mb-[10px] ">
                Annonces récentes
            </p>

            <RecentPosts initial_index={0} end_index={2} />
            <NearbyProductors />
            <RecentPosts initial_index={2} end_index={10} />
        </div>
    )
}

export default Home
