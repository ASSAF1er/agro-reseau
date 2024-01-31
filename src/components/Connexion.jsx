import { useEffect, useState } from 'react'
import img_page_signup from '../assets/img_page_signup.jpg'
import classNames from 'classnames'
import { Link, json } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import axios from 'axios'
import { redirect } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function Connexion() {
    const { connectedUser, setConnectedUser } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [validPassword, setValidPassword] = useState(true)
    const [send, setSend] = useState(false)
    const [correctPassword, setCorrectPassword] = useState(true)
    const [remember, setRemember] = useState(false)
    const [successful, setSuccessful] = useState(false)

    const validateEmail = (email) => {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
        return regex.test(email)
    }
    const validatePassword = (pwd) => {
        if (pwd.trim() === '') {
            return false
        } else return true
    }

    const [user, setUser] = useState()

    const [account, setAccount] = useState([])

    const handleConnect = () => {
        setCorrectPassword(true)
        setSend(true)
        if (username.trim() !== '' && validatePassword(password)) {
            handleLogin()
        }
    }
    const [data, setData] = useState()

    useEffect(() => {
        setData({ username: username, password })
    }, [username, password])

    const handleLogin = async () => {
        await axios
            .post('http://localhost:8000/api/login/', data)
            .then((res) => {
                if (remember) {
                    storeInLocalStorage(res.data)
                }
                setSuccessful(true)
                setConnectedUser({
                    userId: res.data.user_info.id,
                    token: res.data.token,
                    username: res.data.user_info.username
                })
                console.log(connectedUser)
                setTimeout(() => {
                    return <Navigate to="/" />
                }, 2000)
                //
            })
            .catch((res) => {
                setCorrectPassword(false)
                console.log(res)
            })
    }
    const storeInLocalStorage = (response) => {
        localStorage.setItem('userId', response.user_info.id)
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.user_info.username)
    }

    return (
        <div className="    flex flex-row     ">
            <div className="flex flex-col    gap-3 w-[50%] px-20 mt-[30px] pb-5 ">
                <div>
                    <p className="text-[#166534] font-bold text-[33px] text-center   "> AgroRéseau</p>
                </div>
                <div className="text-center">
                    <p className="text-[20px] font-bold text-center  text-gray-900">Se connecter</p>
                </div>
                {!correctPassword && (
                    <div className="bg-red-100 text-red-500 rounded-md shadow-md text-center py-[20px] ">
                        Mot de passe incorrect ou compte inexistant
                    </div>
                )}
                {successful && (
                    <div className="flex items-center  justify-center gap-2 bg-green-200 text-green-700 font-medium rounded-md shadow-md text-center py-[20px] ">
                        <span className="material-icons">check_circle</span>
                        {'  '} Connexion Réussie
                    </div>
                )}
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-900">
                        Nom d'utilisateur
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setSend(true)
                            setCorrectPassword(true)
                        }}
                        className={classNames(
                            username.trim() === '' && send && '!border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] invalid:outline-red-500'
                        )}
                    />
                    {username.trim() === '' && send && <p className="text-red-500 font-[300] "> champ obligatoire</p>}
                    {/* {!validEmail && send && email.trim() !== '' && (
                        <p className="text-red-500 font-[300]"> adresse email non valide</p>
                    )} */}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-900">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setCorrectPassword(true)
                        }}
                        className={classNames(
                            password.trim() === '' && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />
                    {password.trim() === '' && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>

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
                    <div className="text-[#166534] cursor-pointer hover: "> Mot de passe oublié ?</div>
                </div>
                <div
                    onClick={handleConnect}
                    className="text-center bg-[#006400] hover:bg-green-600 py-3  w-full rounded-[5px] text-white hover:shadow-xl cursor-pointer"
                >
                    Se connecter
                </div>
                {successful && <Navigate to="/" replace={true} />}
                <div className="text-end w-full text-gray-500 mt-3">
                    vous n'avez pas de compte?{' '}
                    <Link to="/signup" className="text-[#166534]  cursor-pointer underline ">
                        Créer un compte
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

export default Connexion
