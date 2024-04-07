import React from 'react'
import Card from './Card'
import Cardfull from './Cardfull'
import Newsletter from './Newsletter'
import LatestPost from './SampleData'
import Pages from './Pages'
import Ad from './Ad'

function Articles() {

  return (
  <>
    <Pages />
    <div className='articles-section flex justify-center flex-wrap gap-10 p-4 md:p-10' key={'articles-section'}>
      {LatestPost.map((post,index) => {
        return (
          <div key={index} className="card-container justify-center gap-10 w-[370px] md:h-[470px] border-[1px] rounded-xl overflow-hidden">
            <div className="card-image w-full h-50 bg-cover overflow-hidden">
              <img className="w-full h-full" src={post.img} alt="" />
            </div>
            <div className="card-text flex flex-col gap-4 p-4 justify-between">
              <div className="card-text-container w-full">
                <button className="px-4 py-1 rounded-full border-2 border-green-400 text-green-400 text-sm font-semibold" id="niche-button">{post.niche}</button>
                <h1 className="font-bold w-full text-xl py-1 line-clamp-2 lg:text-[18px] xs:text-[16px]">{post.title}</h1>
                <p className="py-1 text-md md:text-[18px] line-clamp-3">{post.desc}</p>
              </div>

              <div className="user-profile flex gap-2 items-center">
                <div className="user-image w-8 h-8 rounded-full bg-cover overflow-hidden">
                  <img className="w-full h-full" src={post.userImage} alt="" />
                </div>
                <div className="user-details leading-4 flex flex-col ">
                  <span className="font-semibold  text-sm">{post.userName}</span>
                  <p className="text-sm">June 07,2022</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <Ad />
    </div>
    <div className="card-full bg-gray-100 max-w-full">
      <Cardfull img={'./Posts/poster-img-2.webp'} title={'How to run a holiday sale in App Store Connect for iOS subscription apps'} desc={'Make sure your subscription apps are ready for Black Friday and Christmas sale season.'} key={LatestPost.niche} />
    </div>
    <div className='articles-section flex justify-center flex-wrap gap-10 p-4 md:p-10'>
      <Card img={'./Posts/img-7.webp'} key={LatestPost.niche}/>
      <Card img={'./Posts/img-12.png'} key={LatestPost.niche} />
      <Card img={'./Posts/img-13.png'} key={LatestPost.niche}/>
    </div>
    <Newsletter />
  </>
)

}

export default Articles