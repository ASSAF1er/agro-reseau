import fond_producteurs from '../assets/fond_producteurs.png'
import React, { useState } from 'react'
import { useContext } from 'react'
import { ProducersData } from '../utils/ProducersContext '
import classNames from 'classnames'

function HeroProductors() {
    const { filters, setFilters, producersList, setProducersList, setSearch, setSearchClicked } =
        useContext(ProducersData)
    const [showCategories, setShowCategories] = useState(false)
    const [searchText, setSearchText] = useState('')
    const categoriesList = [
        { category: 'Nom', selected: false },
        { category: 'produit', selected: true }
    ]
    const [nameSelected, setNameSelected] = useState(true)
    const [productSelected, setProductSelected] = useState(false)
    const [townSelected, setTownSelected] = useState(true)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(searchText.trim())
        setSearchClicked(true)
    }
    return (
        <div
            style={{ backgroundImage: `url(${fond_producteurs})` }}
            className="flex flex-col  bg-no-repeat bg-cover justify-center items-center w-full  "
        >
            <div className="pt-[70px] backdrop-opacity-90 backdrop-invert-0 w-full bg-[#166534]/30 ">
                <div className="flex flex-col items-center py-[50px] ">
                    <h1 className="text-[30px] sm:text-[40px] font-bold text-white text-center leading-[40px]">
                        Trouvez un producteur agropastoral
                    </h1>
                    <p className="text-white text-[18px] sm:text-[20px] leading-[25px] font-bold w-[80%] sm:w-1/2 text-center py-5">
                        Affinez votre recherche en entrant soit le nom du producteur, la catégorie du produit ou le nom
                        du produit recherché.
                    </p>
                    <form className="w-[80%]  sm:w-1/2 flex flex-row items-center justify-center rounded-lg ring-2 ring-gray-300">
                        <div className="relative group w-[200px] bg-white h-10 rounded-l-lg text-center flex items-center justify-center border-r border-gray-400  cursor-pointer">
                            Filtres{' '}
                            <span
                                onClick={() => setShowCategories(!showCategories)}
                                className={classNames(
                                    'material-icons duration-500 hover:text-gray-500   ',
                                    showCategories && 'rotate-[180deg] '
                                )}
                            >
                                keyboard_arrow_down
                            </span>
                            <ul
                                className={classNames(
                                    showCategories ? ' h-[auto]  ' : '  h-0 !p-0  ',
                                    'absolute  flex flex-col   gap-1 z-[20] bg-white top-[110%] px-1 py-2 w-full  rounded-md shadow-md text-gray-700 duration-300 ease-in-out overflow-hidden'
                                )}
                            >
                                <li
                                    onClick={() => {
                                        setNameSelected(!nameSelected)
                                        if (filters.includes('nom')) {
                                        }
                                    }}
                                    className="flex items-center z-[20] justify-around py-2  hover:bg-green-200 rounded-md "
                                >
                                    {' '}
                                    {nameSelected && (
                                        <span className="material-icons absolute left-3 text-green-500">check</span>
                                    )}{' '}
                                    Nom
                                </li>
                                <li
                                    onClick={() => {
                                        setProductSelected(!productSelected)
                                    }}
                                    className="flex items-center justify-around py-2  hover:bg-green-200 rounded-md "
                                >
                                    {' '}
                                    {productSelected && (
                                        <span className="material-icons absolute left-3 text-green-500">check</span>
                                    )}{' '}
                                    Produit
                                </li>
                                <li
                                    onClick={() => {
                                        setTownSelected(!townSelected)
                                    }}
                                    className="flex items-center justify-around py-2  hover:bg-green-200 rounded-md "
                                >
                                    {' '}
                                    {townSelected && (
                                        <span className="material-icons absolute left-3 text-green-500">check</span>
                                    )}{' '}
                                    Ville
                                </li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                            placeholder="Oeufs, poulets de chair, haricot,.."
                            className=" h-10 focus:outline-none w-full p-2 text-gray-600 font-bold"
                        />
                        <button
                            onClick={handleSearch}
                            type="submit"
                            className="flex items-center justify-center bg-white h-10 rounded-r-lg"
                        >
                            <span className="material-icons pr-2 hover:text-gray-600">search</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeroProductors
