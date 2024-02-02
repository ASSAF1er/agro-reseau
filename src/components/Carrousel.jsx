import ProductorContainer from './ProductorContainer'
import { productors } from '../utils/productorsList'

function Carrousel() {
    return (
        <div className="md:w-[40%] mb-[40px]  ">
            <p className="text-center ">Producteurs les mieux notés</p>
            <div className="relative flex justify-center gap-5  bg-red-100 w-full py-3">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center  border-2 rounded-full  border-gray-300 p-2 cursor-pointer hover:border-[#006400] duration-300">
                    <span className="material-icons">chevron_left</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center  border-2 rounded-full  border-gray-300 p-2 cursor-pointer hover:border-[#006400] duration-300 ">
                    <span className="material-icons">chevron_right</span>
                </div>
                {productors.slice(0, 3).map((prod) => (
                    <ProductorContainer productor={prod} />
                ))}
            </div>
        </div>
    )
}

export default Carrousel
