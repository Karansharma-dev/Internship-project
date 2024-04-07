import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

function Ad() {
  return (
    <div className="ad">
        <div className="overflow-hidden rounded-2xl bg-black col-span-4 md:min-h-[468px] lg:col-span-6 md:mx-auto  md:max-w-[384px]">
            <img src="./Posts/poster-img.webp" alt="" loading="lazy" width="384" height="234" aria-hidden="true"/>
            <div className="py-7 px-6 xl:pt-4">
                <h2 className="text-3xl font-bold text-white">The Sub Club Podcast</h2>
                <p className="mt-2 text-base text-white">Interviews and deep dives with the experts behind the biggest apps in the world.</p>
                <a className="mt-6 inline-flex gap-2 items-center space-x-3.5 rounded-full bg-[--secondary-color] p-2.5 pr-8 text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:bg-opacity-90" href="#"><FaPlayCircle className="text-[35px]"/>
                   LISTEN NOW
                   </a></div></div>
    </div>
  )
}

export default Ad
