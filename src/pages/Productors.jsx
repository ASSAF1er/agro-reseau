import HeroProductors from '../components/HeroProductors'
import Producers from '../components/Producers'
function Productors() {
    document.documentElement.scrollTop = 0
    return (
        <div>
            <HeroProductors />
            <Producers />
        </div>
    )
}
export default Productors
