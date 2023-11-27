import { useEffect, useState } from 'react'
import img_page_signup from '../assets/img_page_signup.jpg'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'


function Connexion() {
    const { connectedUser, setConnectedUser, usersList } = useContext(AuthContext)
    const handleLogin = () => {
        setConnectedUser(!connectedUser)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [send, setSend] = useState(false)

    const validateEmail = (email) => {
        setSend(true)
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
        return regex.test(email)
    }
    const validatePassword = (pwd) => {
        if (pwd.lenght >= 6) return true
        else return false
    }

    const [user, setUser] = useState()

    useEffect(() => {
        setUser({ email, password })
    }, [password, email])
    const [account, setAccount] = useState([])
    const handleConnect = (email) => {
        setValidEmail(validateEmail(email))
        setValidPassword(validatePassword(password))
        if (validEmail && validPassword) {
            setAccount(usersList.filter((acc) => acc.password === user.password && acc.email === user.email))
            if (account.lenght === 0) {
                alert('non trouvé')
            }
            if (account.lenght === 1) {
                alert('trouvé')
            }
        }
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
                <div className="bg-red-100 text-red-500 rounded-md shadow-md text-center py-[20px] ">
                    Mot de passe incorrect ou compte inexistant

                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-900">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={classNames(
                            validEmail ? '' : '!border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] invalid:outline-red-500'
                        )}
                    />
                    {email.trim() === '' && send && <p className="text-red-500 font-[300] "> champ obligatoire</p>}
                    {!validEmail && send && email.trim() !== '' && (
                        <p className="text-red-500 font-[300]"> adresse email non valide</p>
                    )}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-900">
                        Mot de passe
                    </label>
                    <input
                        id="email"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={classNames(
                            password.trim() === '' && send && 'border-red-500',
                            'border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-[#166534] hover:border-[#166534] '
                        )}
                    />
                    {password.trim() === '' && send && <p className="text-red-500 font-[300] ">champ obligatoire</p>}
                </div>

                <div className="w-full flex justify-between">
                    <div className="text-gray-600">
                        <input type="checkbox" /> se souvenir de moi
                    </div>
                    <div className="text-[#166534] cursor-pointer hover: "> Mot de passe oublié ?</div>
                </div>
                <Link
                    onClick={() => handleConnect(email)}
                    className="text-center bg-[#006400] hover:bg-green-600 py-3  w-full rounded-[5px] text-white hover:shadow-xl cursor-pointer"
                >
                    Se connecter
                </Link>
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
                        Bienvenue sur la meilleure plateforme de mise en relation des producteurs et acheteurs dans la
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
