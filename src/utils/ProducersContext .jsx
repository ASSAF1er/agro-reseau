import { createContext, useState } from 'react'
import { productors } from './productorsList'
export const ProducersData = createContext('')

export const ProducersDataProvider = ({ children }) => {
    const [producersList, setProducersList] = useState(productors)
    const [searchClicked, setSearchClicked] = useState(false)
    const [search, setSearch] = useState('')
    return (
        <ProducersData.Provider
            value={{ producersList, setProducersList, searchClicked, setSearchClicked, search, setSearch }}
        >
            {children}
        </ProducersData.Provider>
    )
}
export default ProducersDataProvider
