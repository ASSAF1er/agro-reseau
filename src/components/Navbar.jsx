import classNames from 'classnames'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../utils/NavbarLinks'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import { Navigate } from 'react-router-dom'

function Navbar() {
    const { connectedUser, setConnectedUser } = useContext(AuthContext)
    const nav =
        'text-[16px] flex items-center px-2  hover:cursor-pointer hover:text-[#fbbf24] border-y-[transparent] border-y-[4px] hover:border-b-[#fbbf24] py-2 uppercase'
    const [navMenu, setNav] = useState(false)
    const toogleNavMenu = () => {
        setNav(!navMenu)
    }
    const [scroll, setScroll] = useState(false)
    const [showSearchInput, setShowSearchInput] = useState(false)
    const handleNavbarColor = () => {
        if (window.scrollY > 0) {
            setScroll(true)
            console.log(connectedUser)
        } else {
            setScroll(false)
        }
    }
    const Logout = () => {
        setConnectedUser(false)
        localStorage.clear('user')
        setTimeout(() => {
            return <Navigate to="/" />
        }, 2000)
    }

    const location = useLocation()

    window.addEventListener('scroll', handleNavbarColor)
    const handleClickMobileNav = () => {
        setNav(!navMenu)
    }
    return (
        <>
            <div
                className={classNames(
                    scroll ? 'bg-white text-[#006400] shadow-xl' : 'bg-[#006400] text-[#ffffff]',
                    'z-20 fixed left-0 w-screen flex  items-center transition ease-in-out duration-1000 justify-between px-5   '
                )}
            >
                <div className=" text-[25px] font-bold  pr-10 py-2 ">AgroRéseau</div>
                <div className=" hidden md:flex flex-row justify-between text-3xl w-screen px-5  pb-[0px] ">
                    {NavbarLinks.slice(0, NavbarLinks.length - 1).map((item) => (
                        <NavLink item={item} />
                    ))}

                    <Link to={connectedUser ? `/1/messages/${connectedUser.userId}` : '/login'}>
                        <div
                            className={classNames(
                                'messages' === location.pathname.split('/')[2]
                                    ? 'text-[#fbbf24]  bord border-b-[#fbbf24]'
                                    : '',
                                nav
                            )}
                        >
                            MESSAGERIE{' '}
                            <span
                                className={classNames(
                                    'rounded-full h-5 w-5 flex items-center justify-center text-[13px] bg-gray-200 text-[#006400] ml-1'
                                )}
                            >
                                0
                            </span>
                        </div>
                    </Link>

                    <div className="flex flex-row items-center gap-5 ">
                        {connectedUser && (
                            <div
                                className={classNames(
                                    showSearchInput
                                        ? '    bg-blue-100   '
                                        : 'bg-transparent delay-[900ms] !pl-1 transition-all ease-in-out duration-[400ms] transform',
                                    'flex items-center rounded-full   pr-1 py-[2px] pl-3 '
                                )}
                            >
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className={classNames(
                                        showSearchInput ? 'w-60 ' : 'w-0',
                                        ' mx-2 text-gray-600 bg-blue-100 rounded-md border-none focus:outline-0 text-[17px] transition-all ease-in-out duration-1000 transform'
                                    )}
                                />

                                <div className="flex  justify-center items-center h-8 w-8 text rounded-full bg-[#ffffff] text-[#006400] hover:bg-[#fbbf24] hover:cursor-pointer">
                                    <span
                                        onClick={() => {
                                            setShowSearchInput(!showSearchInput)
                                        }}
                                        className={classNames(
                                            showSearchInput ? 'rotate-[-280deg]  ' : '',
                                            'material-icons ease-in-out duration-1000'
                                        )}
                                    >
                                        search
                                    </span>
                                </div>
                            </div>
                        )}

                        {connectedUser ? (
                            <div className="group/profile">
                                <div className="group/profile-photo relative border-2 rounded-full border-[#a3e635] p-[2px] cursor-pointer hover:bg ">
                                    <div className=" h-9 w-9 rounded-full text-[18px] text-center text-white uppercase bg-blue-500 group-hover/profile-photo:bg-blue-400 z-1">
                                        {connectedUser && connectedUser.username?.split('').slice(0, 2)}
                                        {/* <div className=" absolute top-0 right-0 h-2 w-2 rounded-full bg-[#a3e635] z-2 "></div> */}
                                    </div>
                                </div>
                                <ul className="absolute invisible group-hover/profile:visible right-[50px] py-2  text-[16px]  bg-gray-100 rounded-md text-gray-500 shadow-xl">
                                    <li className="group/voir-profil cursor-pointer  hover:text-gray-400 hover:bg-green-100">
                                        {' '}
                                        <Link
                                            to={`/profile/${connectedUser.userId}`}
                                            className="flex items-center px-4"
                                        >
                                            {' '}
                                            <span className="material-icons group-hover/voir-profil:text-gray-700 ">
                                                person
                                            </span>{' '}
                                            Profil
                                        </Link>
                                    </li>
                                    <li
                                        onClick={Logout}
                                        className="group/deconnexion cursor-pointer flex items-center px-4 hover:text-gray-400 hover:bg-green-100"
                                    >
                                        {' '}
                                        <span className="material-icons group-hover/deconnexion:text-red-500">
                                            logout
                                        </span>{' '}
                                        Déconnexion
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/signup">
                                    {' '}
                                    <div
                                        className={classNames(
                                            scroll
                                                ? '!bg-white !text-[#006400] border !border-[#006400] hover:!bg-yellow-400 '
                                                : '',
                                            'bg-[#006400] text-white border border-white hover:bg-yellow-400 hover:text-[#006400] rounded-[6px] !text-[17px] font-bold px-3 py-1 cursor-pointer normal-case '
                                        )}
                                    >
                                        {' '}
                                        Créer un compte
                                    </div>
                                </Link>
                                <Link to="/login">
                                    {' '}
                                    <div
                                        className={classNames(
                                            scroll
                                                ? '!bg-[#006400] !text-white  border hover:!bg-yellow-400 !border-[#006400] hover:!text-[#006400]'
                                                : '',
                                            'bg-white text-[#006400] border border-white hover:bg-yellow-400 rounded-[6px] !text-[17px] font-bold px-3 py-1 cursor-pointer normal-case '
                                        )}
                                    >
                                        {' '}
                                        Se connecter
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="md:hidden z-20 flex items-center  hover:cursor-pointer" onClick={toogleNavMenu}>
                    {!navMenu ? (
                        <span className="material-icons ">menu</span>
                    ) : (
                        <span className="material-icons ">close</span>
                    )}
                </div>
            </div>
            <ul
                className={classNames(
                    !navMenu ? 'left-[-100%]' : 'left-0',
                    'md:hidden px-5 fixed z-10 ease-in-out text-white duration-500 top-0  bg-[#006400] w-[100%] h-screen pt-[50px]  '
                )}
            >
                <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
                    <Link to="/" onClick={handleClickMobileNav}>
                        accueil
                    </Link>
                </li>
                <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
                    <Link to="/producteurs" onClick={handleClickMobileNav}>
                        producteurs
                    </Link>
                </li>
                <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
                    <Link>projets </Link>
                </li>
                <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
                    <Link>chat</Link>
                </li>
                <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
                    <Link>notications</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar

function NavLink({ item }) {
    const nav =
        'text-[16px] flex items-center px-2  hover:cursor-pointer hover:text-[#fbbf24] border-y-[transparent] border-y-[4px] hover:border-b-[#fbbf24] py-2 uppercase'

    const location = useLocation()

    return (
        <Link
            to={item.path}
            className={classNames(
                item.path === location.pathname ? 'text-[#fbbf24]  bord border-b-[#fbbf24]' : '',
                nav
            )}
        >
            {item.label}
        </Link>
    )
}
