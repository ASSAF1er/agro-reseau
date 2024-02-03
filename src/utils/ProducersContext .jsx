import { createContext, useState, useEffect } from 'react'
import { productors } from './productorsList'
import axios from 'axios'
export const ProducersData = createContext('')

export const ProducersDataProvider = ({ children }) => {
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/list/')
            .then((res) => {
                setProducersList(res.data)
            })
            .then((err) => console.log(err))
    }, [])
    const [producersList, setProducersList] = useState([])
    const [searchClicked, setSearchClicked] = useState(false)
    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState([])
    return (
        <ProducersData.Provider
            value={{
                filters,
                setFilters,
                producersList,
                setProducersList,
                searchClicked,
                setSearchClicked,
                search,
                setSearch
            }}
        >
            {children}
        </ProducersData.Provider>
    )
}
export default ProducersDataProvider
