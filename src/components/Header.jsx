import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";

function Header() {

   const[handleValue, sethandleValue] = useState()

    const handleClose = () => {
        const mobileNavbar = document.getElementById('mobile-navbar')
        mobileNavbar.style.left = '-100%';
        sethandleValue(false);
    }
    const handleBurger = () => {
        const mobileNavbar = document.getElementById('mobile-navbar')
        mobileNavbar.style.left = '0%';
        sethandleValue(true);
    }


    return (
        <div className='header-section h-full w-full relative'>
            <div className="header-mobile bg-white">
                <div className="header-icon flex w-full justify-between p-5 border-b-[1px] border-gray-300 fixed top-0 z-[1000] bg-white">
                    <img className="w-[140px]" src="./logo.png" alt="" />
                    <button className="text-4xl" id="toggle-button" >{handleValue?<IoMdCloseCircle onClick={handleClose} />:    <RxHamburgerMenu onClick={handleBurger}/> }</button>
                </div>
                <div className="header-mobile-links w-full h-full flex flex-col justify-around p-10 fixed z-[500] bg-white left-[-100%] transition-all" id='mobile-navbar'>
                    <ul className="flex flex-col justify-between text-[18px]">
                        <li className="border-b-[1px] border-gray-300 py-4"><a href="#">Products</a></li>
                        <li className="border-b-[1px] border-gray-300 py-4"><a href="#">Docs</a></li>
                        <li className="border-b-[1px] border-gray-300 py-4"><a href="#">Customers</a></li>
                        <li className="border-b-[1px] border-gray-300 py-4" ><a href="#">Pricing</a></li>
                        <li className="border-b-[1px] border-gray-300 py-4"><a href="#">Blog</a></li>
                    </ul>

                    <div className="header-buttons flex gap-10 items-center justify-center">
                        <div className="header-login">
                            <button className="uppercase font-bold text-sm text-black border-b-[3px] border-red-500">Log in</button>
                        </div>
                        <div className="header-signup">
                            <button className="bg-blue-700 rounded-full px-5 py-2 uppercase font-semibold text-sm text-white">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-container h-20 w-full py-4 px-28 hidden md:flex justify-between items-center">
                <div className="header-icons w-30 h-full">
                    <img src="./logo.png" className="w-full h-full" />
                </div>
                <div className="header-links">
                    <ul className="flex justify-between gap-10 text-[18px]">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="header-buttons flex gap-10 items-center">
                    <div className="header-login">
                        <button className="uppercase font-bold text-sm text-black border-b-[3px] border-red-500">Log in</button>
                    </div>
                    <div className="header-signup">
                        <button className="bg-blue-700 rounded-full px-5 py-2 uppercase font-semibold text-sm text-white">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header