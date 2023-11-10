import classNames from "classnames";
import { useEffect, useState } from "react";

function Navbar() {
  const nav =
    "text-[16px] px-2 hover:text-[#fbbf24] hover:cursor-pointer border-y-[transparent] border-y-[4px] hover:border-b-[#fbbf24] py-2";
  const [navMenu, setNav] = useState(false);
  const toogleNavMenu = () => {
    setNav(!navMenu);
  };
  const [scroll, setScroll] = useState(false);
  const handleNavbarColor = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavbarColor);
  return (
    <div
      className={classNames(
        scroll
          ? "bg-white text-[#166534] shadow-xl"
          : "bg-[#166534] text-[#ffffff]",
        "z-20 fixed left-0 w-screen flex  items-center duration-500 justify-between px-5   ",
      )}
    >
      <div className=" text-[25px] font-bold  pr-10 py-2 ">AgroRéseau</div>
      <div className=" hidden md:flex flex-row justify-between text-3xl w-screen px-5  pb-[0px]">
        <div className={nav}>ACCUEIL</div>
        <div className={nav}>VENDEURS</div>
        <div className={nav}>PROJETS</div>
        <div className={nav}>CHAT</div>
        <div className={nav}>NOTIFICATIONS</div>
        <div className="flex flex-row items-center gap-2 ">
          <div className="flex  justify-center items-center h-8 w-8 text rounded-full bg-[#ffffff] text-[#166534] hover:bg-[#fbbf24] hover:cursor-pointer">
            <span className="material-icons">search</span>
          </div>
          <div className="relative h-9 w-9 rounded-full bg-[#000000] z-1">
            <div className=" absolute top-0 right-0 h-2 w-2 rounded-full bg-[#a3e635] z-2 "></div>
          </div>
        </div>
      </div>
      <div
        className="md:hidden z-20 flex items-center  hover:cursor-pointer"
        onClick={toogleNavMenu}
      >
        {!navMenu ? (
          <span className="material-icons ">menu</span>
        ) : (
          <span className="material-icons ">close</span>
        )}
      </div>
      <ul
        className={classNames(
          !navMenu ? "left-[-100%]" : "left-0",
          "md:hidden px-5 fixed z-10 ease-in-out duration-500 top-0  bg-[#166534] w-[100%] h-screen pt-[50px] uppercase ",
        )}
      >
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
          accueil
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
          producteurs
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
          projets
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
          chat
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#165034]">
          notications
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
