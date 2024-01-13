import React from "react";
import { headlineCard } from '../data/headlineCard.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {headlineCard.map((item, index) => (
        <div className="rounded-xl relative overflow-hidden" key={index}>
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
            <p className="px-2">{item.description}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">{item.btn}</button>
          </div>
          <LazyLoadImage
            alt='/'
            src={item.imageSrc}
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          />
        </div>
      ))}
    </div>
  )
}

export default HeadlineCards;