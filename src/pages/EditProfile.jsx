import default_pofile from '../assets/default_profile.jpg'
import classNames from 'classnames'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthContext'
function EditProfile() {
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/search/${params.id}/`)
            .then((res) => {
                console.log(res.data)
                setUserName(res.data.username)
                setEmail(res.data.email)
                setFirstName(res.data.first_name)
                setLastName(res.data.last_name)
                setTown(res.data.ville)
                setDescription(res.data.description)
                setTypeAccount(res.data.type_compte)
            })
            .catch((err) => console.log(err))
    }, [])
    const { connectedUser } = useContext(AuthContext)
    const [account, setAccount] = useState({})
    const [userName, setUserName] = useState(account.username)
    const [send, setSend] = useState(false)
    const [description, setDescription] = useState(account.description)
    const [firstName, setFirstName] = useState(account.first_name)
    const [lastName, setLastName] = useState(account.last_name)
    const [town, setTown] = useState(account.ville)
    const [email, setEmail] = useState(account.email)
    const [country, setCountry] = useState('Cameroon')
    const [facebookURL, setFacebookURL] = useState('')
    const [website, setWebsite] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [typeAccount, setTypeAccount] = useState('')
    const [validTypeAccount, setValidTypeAccount] = useState('')
    const [product, setProduct] = useState()
    const [soldProducts, setSoldProducts] = useState([])
    const [successful, setSuccessful] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const params = useParams()

    const [newUser, setNewUser] = useState({})
    useEffect(() => {
        setNewUser({
            username: userName,
            first_name: firstName,
            last_name: lastName,
            email: email,
            description: description,
            ville: town,
            type_compte: typeAccount,
            addresse: ''
        })
    }, [userName, firstName, description, lastName, email, town, typeAccount])

    const handleEditAccount = () => {
        setSend(true)
        setValidEmail(validateEmail(email))

        if (validateEmail(email) && lastName && firstName && userName) {
            editUser()
        }
    }

    const editUser = async () => {
        await axios
            .put('http://localhost:8000/api/user/update/', newUser, {
                headers: {
                    Authorization: `token ${connectedUser.token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log({ res })
                setSuccessful(true)
                setTimeout(() => {
                    return <Navigate to="/" />
                }, 2000)
                setErrorMessage(false)
            })
            .catch((res) => {
                console.log({ res })
                setErrorMessage(res.response.data)
                setSuccessful(false)
            })
    }

    const handleAddproduct = (prod) => {
        if (prod.trim() !== '') {
            setSoldProducts([...soldProducts, prod])
            setProduct('')
        }
    }
    const handledeleteProduct = (name) => {
        setSoldProducts(soldProducts.filter((prod) => prod !== name))
    }
    const validateEmail = (pwd) => {
        if (pwd && pwd.length >= 6) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="py-[60px] ">
            <p className="text-3xl font-bold pl-[10%] py-4 mb-5 border-b-[4px] bg-green-100 border-green-300 ">
                Mon Profil
            </p>
            <div className="flex flex-col gap-5 mt-10 px-[10%]">
                <div className="flex  gap-10 ">
                    <div className="relative">
                        <img src={default_pofile} alt="" className=" rounded-full h-[200px] !w-[200px] " />
                        <span className="absolute material-icons bg-green-600 hover:bg-green-500 text-white rounded-full p-2 top-[150px] right-1 cursor-pointer">
                            edit
                        </span>
                    </div>
                    <div className="flex flex-col w-full flex-1 gap-1">
                        <label htmlFor="name" className="text-gray-900">
                            Nom d'utilisateur (c'est le nom que les autres utilisateurs verront)
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value)
                                setSend(true)
                            }}
                            className={classNames(
                                !userName && send && 'border-red-500',
                                'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                            )}
                        />{' '}
                        {!userName && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                        <div className="flex gap-5">
                            <div className="w-full flex flex-col gap-1">
                                <label htmlFor="email" className="text-gray-900">
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setValidEmail(true)
                                    }}
                                    className={classNames(
                                        !validEmail && send && 'border-red-500',
                                        'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                    )}
                                />
                                {email && !validEmail && send && (
                                    <p className="text-red-500 font-[300] ">E-mail non valide</p>
                                )}
                                {!email && !validEmail && send && (
                                    <p className="text-red-500 font-[300] ">champ obligatoire</p>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <label htmlFor="typeAccount" className="text-gray-900">
                                    Type de compte
                                </label>
                                <select
                                    id="typeAccount"
                                    type="text"
                                    value={typeAccount}
                                    onChange={(e) => {
                                        setTypeAccount(e.target.value)
                                        setValidTypeAccount(true)
                                    }}
                                    className={classNames(
                                        typeAccount === '' && send && 'border-red-500',
                                        'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                    )}
                                >
                                    <option value=""></option>
                                    <option value="vendeur">Producteur</option>
                                    <option value="acheteur">Acheteur ou visiteur</option>
                                </select>
                                {typeAccount === '' && send && (
                                    <p className="text-red-500 font-[300] ">champ obligatoire</p>
                                )}
                            </div>
                        </div>
                        <div className=" flex flex-col gap-1">
                            <label htmlFor="name" className="text-gray-900">
                                Description (breve decription de qui vous etes et ce que vous faites)
                            </label>
                            {!description && send && (
                                <span className="text-red-500 font-[300] ">champ obligatoire</span>
                            )}
                            <textarea
                                id="description"
                                type="text"
                                maxLength={200}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                    setSend(true)
                                }}
                                className={classNames(
                                    !description && send && 'border-red-500',
                                    'border border-gray-400  w-full rounded-[4px] h-20 py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />{' '}
                            <span className="text-right text-gray-700">
                                {200 - (description ? description.length : 0)} caractères restants{' '}
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-2xl font-bold">Informations personnelles</p>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="flex flex-col w-full flex-1 gap-1">
                            <label htmlFor="name" className="text-gray-900">
                                Prénom
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                    setSend(true)
                                }}
                                className={classNames(
                                    !userName && send && 'border-red-500',
                                    'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />{' '}
                        </div>
                        <div className="flex flex-col w-full flex-1 gap-1">
                            <label htmlFor="name" className="text-gray-900">
                                Nom
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                    setSend(true)
                                }}
                                className={classNames(
                                    !userName && send && 'border-red-500',
                                    'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />{' '}
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-full flex-1 gap-1">
                            <label htmlFor="name" className="text-gray-900">
                                Ville
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={town}
                                onChange={(e) => {
                                    setTown(e.target.value)
                                    setSend(true)
                                }}
                                className={classNames(
                                    !userName && send && 'border-red-500',
                                    'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />{' '}
                        </div>
                        <div className="flex flex-col w-full flex-1 gap-1">
                            <label htmlFor="name" className="text-gray-900">
                                Pays
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={country}
                                onChange={(e) => {
                                    setCountry(e.target.value)
                                    setSend(true)
                                }}
                                className={classNames(
                                    !userName && send && 'border-red-500',
                                    'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />{' '}
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col w-full flex-1 gap-1">
                        <label htmlFor="name" className="text-gray-900">
                            Site web
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={website}
                            onChange={(e) => {
                                setUserName(e.target.value)
                                setSend(true)
                            }}
                            className={classNames(
                                !userName && send && 'border-red-500',
                                'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                            )}
                        />{' '}
                    </div>
                    <div className="flex flex-col w-full flex-1 gap-1">
                        <label htmlFor="name" className="text-gray-900">
                            Facebook
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={facebookURL}
                            onChange={(e) => {
                                setUserName(e.target.value)
                                setSend(true)
                            }}
                            className={classNames(
                                !userName && send && 'border-red-500',
                                'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                            )}
                        />{' '}
                    </div>
                </div>

                <div
                    className={classNames(typeAccount === 'vendeur' ? 'block' : 'hidden', 'w-full flex flex-col gap-1')}
                >
                    <p className="text-2xl font-bold">Produits vendus</p>
                    <form action="">
                        <label htmlFor="produits" className="text-gray-900">
                            Entrez les produits phares que vous produisez
                        </label>
                        <div className="flex gap-2 mb-2 ">
                            <input
                                id="produits"
                                type="text"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                className={classNames(
                                    typeAccount === 'producteur' &&
                                        soldProducts.length === 0 &&
                                        send &&
                                        'border-red-500',
                                    'border border-gray-400 w-full rounded-[4px] py-2 px-2  font-[300] focus:outline-[#166534] hover:border-[#166534] '
                                )}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleAddproduct(product)
                                }}
                                className="bg-gray-300 rounded-[4px] px-10 hover:bg-gray-400 hover:text-[#166534] "
                            >
                                Ajouter
                            </button>
                        </div>
                    </form>
                    <div className=" leading-[30px] ">
                        {typeAccount === 'producteur' && soldProducts.length === 0 && send && (
                            <p className="text-red-500 font-[300]  ">
                                Quand vous choisissez pour type de compte "producteur", vous devez renseigner quelques
                                uns de vos produits
                            </p>
                        )}
                        {soldProducts?.map((item) => (
                            <button className="relative   pl-2 pr-7 text-[16px] bg-green-200 border border-gray-400 rounded-full mx-1 my-1 ">
                                {item}
                                <span
                                    onClick={() => handledeleteProduct(item)}
                                    className="material-icons absolute right-0 p-1 text-[15px] bg-green-100 hover:bg-white cursor-pointer rounded-full top-1/2 -translate-y-1/2"
                                >
                                    close
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                {successful && (
                    <div className="flex items-center  justify-center gap-2 my-2 bg-green-200 text-green-700 font-medium rounded-md shadow-md text-center py-[20px] ">
                        <span className="material-icons">check_circle</span>
                        {'  '} Publication effectuée
                    </div>
                )}
                <div className="flex justify-center ">
                    <button
                        onClick={handleEditAccount}
                        className="bg-green-500 px-14 py-3 rounded-sm shadow-xl hover:shadow"
                    >
                        Valider
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
