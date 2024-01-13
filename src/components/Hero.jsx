import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <Swiper
        spaceBetween='30'
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="h-full">
          <div className="max-h-[500px] relative rounded-lg overflow-hidden">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">Foods</span> Delivered</h1>
            </div>
            <LazyLoadImage
              alt='/'
              src='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600'
              className='w-full max-h-[500px] object-cover object-center'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="max-h-[500px] relative rounded-lg overflow-hidden">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Fast food</span></h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">at your </span> fingertips</h1>
            </div>
            <LazyLoadImage
              alt='/'
              src='https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg'
              className='w-full max-h-[500px] object-cover object-center'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="max-h-[500px] relative rounded-lg overflow-hidden">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-end">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Craving <span className="text-orange-500"> Fast Food?</span></h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Let Us<span className="text-orange-500"> Deliver. </span></h1>
            </div>
            <LazyLoadImage
              alt='/'
              src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600'
              className='w-full max-h-[500px] object-cover object-center'
            />
          </div>
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default Hero;