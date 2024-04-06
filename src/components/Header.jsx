import React from 'react'

function Header() {
    return (
        <div className='header-section w-full'>
            <div className="header-container h-20 w-full py-4 px-28 flex justify-between items-center">
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