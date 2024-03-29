import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <div className="mod-hero-banner">
      <div className="container">
        <div className="hero-banner">
          <Swiper
            spaceBetween= '30'
            slidesPerView={1}
            loop={true}
            pagination={{ 
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            >
            <SwiperSlide className="h-full">
              <div className="max-h-[500px] relative rounded-lg overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">Foods</span> Delivered</h1>
                </div>
                <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="w-full max-h-[500px] object-cover object-center" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <div className="max-h-[500px] relative rounded-lg overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Fast food</span></h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">at your </span> fingertips</h1>
                </div>
                <img src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg" alt="/" className="w-full max-h-[500px] h-full object-cover object-center" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <div className="max-h-[500px] relative rounded-lg overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-end">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Craving <span className="text-orange-500"> Fast Food?</span></h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Let Us<span className="text-orange-500"> Deliver. </span></h1>
                </div>
                <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="w-full max-h-[500px] object-cover object-center" />
              </div>
            </SwiperSlide>
            
          
            
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Hero;