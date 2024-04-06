import React from 'react'
import Cardfull from './Cardfull'

function Hero() {
    return (
        <div className="hero-section bg-white max-w-full pt-28">
           <Cardfull img={'./poster-img.webp'} title={'How RevenueCat handles errors in Google Play’s Billing Library'} desc={'Lessons on Billing Library error handling from RevenueCats engineering team'}/>
        </div>
    )
}

export default Hero