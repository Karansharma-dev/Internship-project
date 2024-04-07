import React from 'react'

function Card({img}) {
  return (
          <div className="card-container justify-center gap-10 w-[370px] border-[1px] rounded-xl overflow-hidden">
                <div className="card-image w-full h-50 bg-cover overflow-hidden">
                    <img className="w-full h-full" src={img} alt="" />
                </div>
                <div className="card-text flex flex-col gap-4 p-4 justify-between">
                    <div className="card-text-container w-full">
                    <button className="px-4 py-1 rounded-full border-2 border-green-400 text-green-400 text-xs">Latest Post</button>
                    <h1 className="font-bold w-full text-xl py-1">A Practical Guide to Apple Search Ads</h1>
                    <p className="py-1 text-sm md:text-[18px] ">Why it's a channel worth exploring to grow to app</p>
                    </div>
                   
                    <div className="user-profile flex gap-2 items-center">
                        <div className="user-image w-8 h-8 rounded-full bg-cover overflow-hidden">
                            <img className="w-full h-full" src="./user-data/user-1.jpg" alt="" />
                        </div>
                        <div className="user-details leading-4 flex flex-col items-center">
                            <span className="font-semibold  text-sm">Thomas Petit</span>
                            <p className="text-sm">June 07,2022</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Card