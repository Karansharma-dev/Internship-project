import React from 'react'
import Cardfull from './Cardfull'

function Hero() {
    return (
        <div className="hero-section bg-white max-w-full pt-20 md:pt-0">
           <Cardfull img={'./Posts/poster-img.webp'} title={'A Practical Guide to Apple Search Ads'} desc={"Why it's a channel worth exploring to grow your app"}/>
        </div>
    )
}

export default Hero