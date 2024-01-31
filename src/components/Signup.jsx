import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import img_page_signup from '../assets/img_page_signup.jpg'
import classNames from 'classnames'
import { Link, Navigate } from 'react-router-dom'
import default_profile from '../assets/default_profile.jpg'
import axios from 'axios'
function Signup() {
    const [soldProducts, setSoldProducts] = useState([])
    const [product, setProduct] = useState('')
    const [typeAccount, setTypeAccount] = useState('')
    const [validTypeAccount, setValidTypeAccount] = useState('')
    const [showPassword, setShowPassWord] = useState(false)
    const [showConfirmPassword, setShowConfirmPassWord] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmPassword, setValidConfirmPassword] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [town, setTown] = useState('')
    const [send, setSend] = useState(false)
    const [remember, setRemember] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const [correctInformations, setCorrectInformations] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const handleAddproduct = (prod) => {
        if (prod.trim() !== '') {
            setSoldProducts([...soldProducts, prod])
            setProduct('')
        }
    }

    const handledeleteProduct = (name) => {
        setSoldProducts(soldProducts.filter((prod) => prod !== name))
    }
    const createUser = async () => {
        await axios
            .post('http://localhost:8000/api/register/', newUser)
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
    const handleCreateAccount = () => {
        setSend(true)
        setValidEmail(validateEmail(email))
        setValidPassword(validatePassword(password))
        setValidConfirmPassword(validateConfirmPassword())

        if (
            validateEmail(email) &&
            validatePassword(password) &&
            validateConfirmPassword() &&
            lastName &&
            firstName &&
            userName
        ) {
            createUser()
        }
    }
    const validateEmail = (email) => {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
        return regex.test(email)
    }
    const validatePassword = (pwd) => {
        if (pwd && pwd.length >= 6) {
            return true
        } else {
            return false
        }
    }
    const validateConfirmPassword = () => {
        if (validatePassword(password) && password === confirmPassword) return true
        else return false
    }
    const [newUser, setNewUser] = useState({})
    useEffect(() => {
        setNewUser({
            ...newUser,


































































































































































































































































            
            username: userName,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            ville: town,
            type_compte: typeAccount
        })
    }, [userName, firstName, lastName, email, password, town, typeAccount])

    return (
        <div className="    flex flex-row     ">
            <div className="flex flex-col    gap-3 w-[50%] px-20 mt-[30px] pb-5 ">
                <div>
                    <p className="text-[#006400] font-bold text-[33px] text-center   "> AgroRéseau</p>
                </div>
                <div className="text-center">
                    <p className="text-[20px] font-bold text-center  text-gray-900">Créez un compte</p>
                    <p>en 1 minute</p>
                </div>
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
                            setErrorMessage(false)
                        }}
                        className={classNames(
                            (!validEmail || errorMessage.email) && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />
                    {email && !validEmail && send && <p className="text-red-500 font-[300] ">E-mail non valide</p>}
                    {!email && !validEmail && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                    {errorMessage.email && send && <p className="text-red-500 font-[300] ">{errorMessage.email}</p>}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-900">
                        Nom d'utilisateur (c'est le nom que les autres utilisateurs verront)
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value)
                            setErrorMessage(false)
                        }}
                        className={classNames(
                            (errorMessage.username || !userName) && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />{' '}
                    {!userName && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                    {errorMessage.username && send && (
                        <p className="text-red-500 font-[300] ">{errorMessage.username}</p>
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
                    {typeAccount === '' && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-900">
                        Nom
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        className={classNames(
                            !firstName && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />{' '}
                    {!firstName && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-900">
                        Prénom
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        className={classNames(
                            !lastName && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />{' '}
                    {!lastName && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="pswd" className="text-gray-900">
                        Mot de passe
                    </label>
                    <div className="flex items-center justify-center  peer-focus:border-red-500">
                        <input
                            id="pswd"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setValidPassword(true)
                            }}
                            className={classNames(
                                !validPassword && send && 'border-red-500',
                                'peer border border-r-0 relative border-gray-400 w-full rounded-l-[4px] py-2 px-2 font-[300] focus:outline-0 hover:border-[#166534] focus:outline-r-0 '
                            )}
                        />{' '}
                        <div
                            onClick={() => setShowPassWord(!showPassword)}
                            className="0 bg-gray-200 px-2 h-full flex items-center justify-center border border-l-0 border-gray-400 rounded-r-[4px] cursor-pointer"
                        >
                            {showPassword ? (
                                <span className=" material-icons  ">visibility_off</span>
                            ) : (
                                <span className=" material-icons  ">visibility</span>
                            )}
                        </div>
                    </div>{' '}
                    {password && !validPassword && send && (
                        <p className="text-red-500 font-[300] ">Le mot de passe doit contenir au moins 6 caractères</p>
                    )}
                    {!password && !validPassword && send && (
                        <p className="text-red-500 font-[300] ">champ obligatoire</p>
                    )}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="confirmpswd" className="text-gray-900">
                        Confirmer mot de passe
                    </label>
                    <div className="flex items-center justify-center  peer-focus:border-red-500">
                        <input
                            id="pswd"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                setValidConfirmPassword(true)
                            }}
                            className={classNames(
                                (!validConfirmPassword || !confirmPassword) && send && 'border-red-500',
                                'peer border border-r-0 relative border-gray-400 w-full rounded-l-[4px] py-2 px-2 font-[300] focus:outline-0 hover:border-[#166534] focus:outline-r-0 '
                            )}
                        />
                        <div
                            onClick={() => setShowConfirmPassWord(!showConfirmPassword)}
                            className="0 bg-gray-200 px-2 h-full flex items-center justify-center border border-l-0 border-gray-400 rounded-r-[4px] cursor-pointer"
                        >
                            {showConfirmPassword ? (
                                <span className=" material-icons  ">visibility_off</span>
                            ) : (
                                <span className=" material-icons  ">visibility</span>
                            )}
                        </div>
                    </div>{' '}
                    {validPassword && confirmPassword && !validConfirmPassword && send && (
                        <p className="text-red-500 font-[300] ">Les deux mots de passe ne sont pas identiques</p>
                    )}
                    {!confirmPassword && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>
                {/* <div
                    className={classNames(
                        typeAccount === 'vendeur' ? 'block' : 'hidden',
                        'w-full flex flex-col gap-1'
                    )}
                >
                    <label htmlFor="produits" className="text-gray-900">
                        Produits vendus
                    </label>
                    <div className="flex gap-2 ">
                        <input
                            id="produits"
                            type="text"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            className={classNames(
                                typeAccount === 'producteur' && soldProducts.length === 0 && send && 'border-red-500',
                                'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                            )}
                        />
                        <button
                            onClick={() => handleAddproduct(product)}
                            className="bg-gray-300 rounded-[4px] px-5 hover:bg-gray-400 hover:text-[#166534] "
                        >
                            Ajouter
                        </button>
                    </div>
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
                </div> */}
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="location" className="text-gray-900">
                        Lieu de résidence
                    </label>
                    <input
                        id="town"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        type="text"
                        className="border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] "
                    />
                </div>
                {/* <div className="flex flex-col     p-2">
                    <label htmlFor="pprofilePicture" className="text-gray-900 ">
                        Photo de profil
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProfilePhoto(URL.createObjectURL(e.target.files[0]))}
                        className="mt-2 file:bg-[#006400] file:text-white  file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold file:hover:bg-[#178240]"
                    />
                    <div className=" relative border border-gray-400 bg-green-50 h-[280px] w-[280px] mt-2 rounded-md">
                        <img
                            src={profilePhoto ? profilePhoto : default_profile}
                            alt=""
                            loading="lazy"
                            className="rounded-md  object-cover w-full h-full  "
                        />
                        <span
                            onClick={() => setProfilePhoto('')}
                            className={classNames(
                                !profilePhoto && 'hidden',
                                'material-icons absolute flex items-center justify-center rounded-full p-1 top-1 right-1 bg-white text-red-500 cursor-pointer hover:text-red-400 '
                            )}
                        >
                            delete
                        </span>
                    </div>
                </div> */}
                <div className="w-full flex justify-between">
                    <div className="text-gray-600">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => {
                                setRemember(e.target.checked)
                            }}
                        />{' '}
                        se souvenir de moi
                    </div>
                </div>
                {successful && (
                    <div className="flex items-center  justify-center gap-2 bg-green-200 text-green-700 font-medium rounded-md shadow-md text-center py-[20px] ">
                        <span className="material-icons">check_circle</span>
                        {'  '} Création Réussie
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-100 text-red-500 rounded-md shadow-md text-center py-[20px] ">
                        {/* {Object.values(errorMessage).map((item) => (
                            <p>{item}</p>
                        ))} */}
                        Une erreur s'est produite. Vérifiez vos données
                    </div>
                )}
                <div
                    onClick={handleCreateAccount}
                    className="text-center bg-[#006400] hover:bg-green-600 py-3  w-full rounded-[5px] text-white hover:shadow-xl cursor-pointer"
                >
                    Créer mon compte
                </div>
                <div className="text-end w-full text-gray-500 mt-3">
                    vous avez déjà un compte?{' '}
                    <Link to="/login" className="text-[#166534]  cursor-pointer underline ">
                        connectez-vous
                    </Link>
                </div>
            </div>
            <div className=" w-[50%] fixed right-0">
                <img src={img_page_signup} alt="" className="   h-screen object-cover" />
                <div className="absolute left-0 top-0 w-full h-full bg-[#166534]/50 backdrop-opacity-[0.1] px-5  text-white">
                    <p className="font-bold text-[30px] pt-[20%] ">
                        Bienvenue sur la meilleure plateforme de mise en relation des producteurs et acheteurs dans le
                        secteur agropastoral
                    </p>
                    <p className="text-[20px] pt-[20px] ">
                        Achetez des produits partout à travers le Cameroun, des milliers de producteurs vous attendent
                    </p>
                    <button className="px-5 py-3 mt-5 rounded-md bg-white text-gray-700">Comment ça marche?</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
