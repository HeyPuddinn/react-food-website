import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <Slider {...settings}>
        <div className="max-h-[500px] relative rounded-lg overflow-hidden">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">Foods</span> Delivered</h1>
          </div>
          <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="w-full max-h-[500px] object-cover object-center" />
        </div>
        <div className="max-h-[500px] relative rounded-lg overflow-hidden">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Fast food</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">at your </span> fingertips</h1>
          </div>
          <img src="https://images.pexels.com/photos/212303/pexels-photo-212303.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="w-full max-h-[500px] object-cover object-center" />
        </div>
        <div className="max-h-[500px] relative rounded-lg overflow-hidden">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-end">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Craving <span className="text-orange-500"> Fast Food?</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Let Us<span className="text-orange-500"> Deliver. </span></h1>
          </div>
          <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="w-full max-h-[500px] object-cover object-center" />
        </div>
        </Slider>
    </div>
  )
}

export default Hero;