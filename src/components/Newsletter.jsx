import React from 'react'

function Newsletter() {
  return (
    <div className='newsletter-section w-full flex justify-center'>
        <div className="newsletter-container w-[95%] md:w-[75%] flex flex-col md:flex-row justify-center items-center gap-7 bg-gray-100 py-14 px-10 rounded-xl">
            <h1 className="font-bold text-xl md:text-4xl ">Subscribe to our newsletter</h1>
            <form className="input-elem relative flex items-center">
            <input className="text-md p-3 md:p-4 pr-[140px] md:pr-[200px] border-2 rounded-full placeholder:text-black shadow-md" type="text" placeholder='Enter your email address...'/>
            <a href="#" className="absolute right-0 py-2 px-6 mx-2 font-semibold bg-[--primary-color] rounded-full text-white shadow-xl">SUBSCRIBE</a>
            </form>
        </div>
    </div>
  )
}

export default Newsletter