import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO'S Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <LazyLoadImage
          alt='/'
          src='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600'
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>
      <div className="rounded-xl relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <LazyLoadImage
          alt='/'
          src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600'
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>
      <div className="rounded-xl relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Dessert Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <LazyLoadImage
          alt='/'
          src='https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=1600'
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>
    </div>
  )
}

export default HeadlineCards;