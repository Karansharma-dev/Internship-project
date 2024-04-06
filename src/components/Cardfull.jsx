import React from 'react'

function Cardfull({img,title,desc}) {
    return (
        <div className="hero-container flex flex-col sm:flex-row justify-center gap-10 p-4 md:p-20 w-full bg-white">
            <div className="hero-image w-100 h-50 md:h-80 bg-cover rounded-xl overflow-hidden">
                <img className="w-full h-full" src={img} alt="" />
            </div>
            <div className="hero-text flex flex-col gap-4 justify-between">
                <div className="hero-text-container w-full md:w-[500px]">
                    <button className="px-4 py-1 rounded-full border-2 border-green-400 text-green-400">Latest Post</button>
                    <h1 className="font-bold text-2xl md:text-3xl py-1">{title}</h1>
                    <p className="py-1 text-md md:text-[20px]">{desc}</p>
                </div>

                <div className="user-profile flex gap-2">
                    <div className="user-image w-10 h-10 rounded-full bg-cover overflow-hidden">
                        <img className="w-full h-full" src="./user-2.jpg" alt="" />
                    </div>
                    <div className="user-details leading-4 flex flex-col items-center">
                        <span className="font-semibold py-1">Thomas Petit</span>
                        <p className="text-sm">June 07,2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardfull