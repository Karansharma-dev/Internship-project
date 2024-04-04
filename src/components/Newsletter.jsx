import React from 'react'

function Newsletter() {
  return (
    <div className='newsletter-section w-full flex justify-center'>
        <div className="newsletter-container w-[75%] flex justify-center items-center gap-7 bg-yellow-200 p-11 rounded-xl">
            <h1 className="font-bold text-2xl ">Subscribe to our monthly newsletter</h1>
            <form className="input-elem relative flex items-center">
            <input className="text-md p-4 pr-[200px] border-2 rounded-full placeholder:text-black " type="text" placeholder='Enter your email address...'/>
            <a href="#" className="absolute right-0 py-2 px-6 mx-2 font-semibold bg-blue-400 rounded-full ">SUBSCRIBE</a>
            </form>
        </div>
    </div>
  )
}

export default Newsletter