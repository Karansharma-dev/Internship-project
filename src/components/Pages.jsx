import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";

function Pages() {
    return (
        <div className="pages-section w-full flex flex-col md:flex-row justify-between items-center py-2 px-2 md:px-[10rem]">
            <ul className="flex gap-1 font-semibold cursor-pointer text-sm md:text-[18px]">
                <li className="py-2 px-2 md:px-4 bg-[--secondary-color] rounded-full">All articles</li>
                <li className="py-2 px-2 md:px-4  rounded-full">Company</li>
                <li className="py-2 px-2 md:px-4  rounded-full">Engineering</li>
                <li className="py-2 px-2 md:px-4  rounded-full">Growth</li>
            </ul>
            <div>
                <div className="w-full">
                    <div className=''>
                        <ul className="flex items-center gap-3">
                            <li className="text-sm text-gray-500">Follow for updates:</li>
                            <li className="text-sm text-gray-500"><FaTwitter /></li>
                            <li className="text-md text-gray-500"><IoWifi /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages