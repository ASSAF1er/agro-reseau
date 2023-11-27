import classNames from 'classnames'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../utils/NavbarLinks'
import { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'

function Navbar() {
    const { connectedUser } = useContext(AuthContext)
    const nav =
        'text-[16px] flex items-center px-2  hover:cursor-pointer hover:text-[#fbbf24] border-y-[transparent] border-y-[4px] hover:border-b-[#fbbf24] py-2'
    const [navMenu, setNav] = useState(false)
    const toogleNavMenu = () => {
        setNav(!navMenu)
    }
    const [scroll, setScroll] = useState(false)
    const handleNavbarColor = () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
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
                <div className=" hidden md:flex flex-row justify-between text-3xl w-screen px-5  pb-[0px] uppercase">
                    {NavbarLinks.slice(0, NavbarLinks.length - 1).map((item) => (
                        <NavLink item={item} />
                    ))}

                    <Link to="/messages">
                        <div
                            className={classNames(
                                '/messages' === location.pathname ? 'text-[#fbbf24]  bord border-b-[#fbbf24]' : '',
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

                    <div className="flex flex-row items-center gap-2 ">
                        <Link>
                            <div className="flex  justify-center items-center h-8 w-8 text rounded-full bg-[#ffffff] text-[#006400] hover:bg-[#fbbf24] hover:cursor-pointer">
                                <span className="material-icons">search</span>
                            </div>
                        </Link>

                        {connectedUser ? (
                            <div className="relative h-9 w-9 rounded-full bg-[#000000] z-1">
                                <div className=" absolute top-0 right-0 h-2 w-2 rounded-full bg-[#a3e635] z-2 "></div>
                            </div>
                        ) : (
                            <Link to="/login">
                                {' '}
                                <div
                                    className={classNames(
                                        scroll ? '!bg-[#006400] !text-white hover:!bg-[#178240]' : '',
                                        'bg-white text-[#006400] hover:bg-yellow-400 rounded-[6px] !text-[17px] font-bold px-3 py-1 cursor-pointer normal-case '
                                    )}
                                >
                                    {' '}
                                    Se connecter
                                </div>
                            </Link>
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
                    'md:hidden px-5 fixed z-10 ease-in-out text-white duration-500 top-0  bg-[#006400] w-[100%] h-screen pt-[50px] uppercase '
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
        'text-[16px] flex items-center px-2  hover:cursor-pointer hover:text-[#fbbf24] border-y-[transparent] border-y-[4px] hover:border-b-[#fbbf24] py-2'

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
