import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  
const SwiperPost1 = [{
  img: './img-6.png',
  title: 'Leveraging press and partnerships for user acquisition and credibility — Adam Allore, Wavve Boating',
  desc: 'Adam Allore reveals partnership and PR strategies on the Sub Club podcast.',
  userImage: './user-1.jpg',
  userName: 'David Barnard'
},
{
  img: './img-2.webp',
  title: 'Optimizing paywall placement: The key to unlocking more app subscribers',
  desc: 'Want a big boost in subscribers? It’s time to stop being so cautious with paywall placement.',
  userImage: './user-2.jpg',
  userName: 'Peter Meinertzhagen'
},
{
  img: './img-3.webp',
  title: 'Why ratings and reviews in ASO are more important than ever',
  desc: 'Adam Allore reveals partnership and PR strategies on the Sub Club podcast.',
  userImage: './user-3.jpg',
  userName: 'David Barnard'
}]


const SwiperPost2 = [
  {
    img: './img-7.webp',
    title: '“I love that constraints breed creativity. That’s the way I like to build a business.” ',
    desc: "Redbox Mobile's Anil Ozdemir on how recent changes in the app stores mean that it's time to have a dedicated approach to boosting.",
    userImage: './user-4.jpg',
    userName: 'Anil Ozdemir'
  },
  {
    img: './img-6.png',
    title: 'Scaling smoothly: RevenueCat’s data-caching techniques for 1.2 billion daily API requests',
    desc: 'A deep-dive into the techniques that fuel our efficient cache management system.',
    userImage: './user-5.png',
    userName: "Guillermo Pérez"
  },
  {
    img: './img-9.webp',
    title: 'Leveraging press and partnerships for user acquisition and credibility — Adam Allore, Wavve Boating',
    desc: 'Adam Allore reveals partnership and PR strategies on the Sub Club podcast.',
    userImage: './user-7.jpg',
    userName: 'David Barnard'
  },
  ]

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-full p-2 md:p-10"
      >
        <SwiperSlide>
        {SwiperPost1.map((post) => {
          return (
          <div className="card-container justify-center gap-10 w-[330px] md:w-[370px] h-[470px] border-2 rounded-xl overflow-hidden">
            <div className="card-image w-full h-50 bg-cover overflow-hidden">
              <img className="w-full h-full" src={post.img} alt="" />
            </div>
            <div className="card-text flex flex-col gap-4 p-4 justify-between">
              <div className="card-text-container w-full">
                <button className="px-4 py-1 rounded-full border-2 border-green-400 text-green-400 text-xs">Latest Post</button>
                <h1 className="font-bold w-full text-xl py-1 line-clamp-2 lg:text-[18px] xs:text-[16px]">{post.title}</h1>
                <p className="py-1 text-xl line-clamp-3">{post.desc}</p>
              </div>

              <div className="user-profile flex gap-2 items-center">
                <div className="user-image w-8 h-8 rounded-full bg-cover overflow-hidden">
                  <img className="w-full h-full" src={post.userImage} alt="" />
                </div>
                <div className="user-details leading-4 flex flex-col ">
                  <span className="font-semibold  text-sm">{post.userName}</span>
                  <p className="text-xs">June 07,2022</p>
                </div>
              </div>
            </div>
          </div>
          )
        })}
          </SwiperSlide>
        <SwiperSlide>
           {SwiperPost2.map((post) => {
          return (
          <div className="card-container justify-center gap-10 w-[330px] md:w-[370px] h-[470px] border-2 rounded-xl overflow-hidden">
            <div className="card-image w-full h-50 bg-cover overflow-hidden">
              <img className="w-full h-full" src={post.img} alt="" />
            </div>
            <div className="card-text flex flex-col gap-4 p-4 justify-between">
              <div className="card-text-container w-full">
                <button className="px-4 py-1 rounded-full border-2 border-green-400 text-green-400 text-xs">Latest Post</button>
                <h1 className="font-bold w-full text-xl py-1 line-clamp-2 lg:text-[18px] xs:text-[16px]">{post.title}</h1>
                <p className="py-1 text-xl line-clamp-3">{post.desc}</p>
              </div>

              <div className="user-profile flex gap-2 items-center">
                <div className="user-image w-8 h-8 rounded-full bg-cover overflow-hidden">
                  <img className="w-full h-full" src={post.userImage} alt="" />
                </div>
                <div className="user-details leading-4 flex flex-col ">
                  <span className="font-semibold  text-sm">{post.userName}</span>
                  <p className="text-xs">June 07,2022</p>
                </div>
              </div>
            </div>
          </div>
          )
        })}
          </SwiperSlide>

      </Swiper>
    </>
  );
}
