import { productors } from '../utils/productorsList'
import ProductorContainer from '../components/ProductorContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
import 'swiper/css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function NearbyProductors() {
    return (
        <div className=" flex flex-col items-center justify-center pb-5">
            <p className="text-center  text-[20px] sm:text-[20px] text-[#333333] font-bold py-[20px]">
                Producteurs près de chez vous
            </p>

            <div className="flex flex-row    ">
                {' '}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {productors.slice(0, 5).map((prod) => (
                        <SwiperSlide>
                            <ProductorContainer productor={prod} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default NearbyProductors
