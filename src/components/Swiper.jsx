import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from './Card';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-full p-10"
      >
        <SwiperSlide>
          <Card/>
          <Card/>
          <Card/>
          </SwiperSlide>
        <SwiperSlide>
          <Card/>
          <Card/>
          <Card/>
          </SwiperSlide>

      </Swiper>
    </>
  );
}
