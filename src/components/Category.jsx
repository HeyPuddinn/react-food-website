import React, { Component } from 'react';
import { categories } from '../data/data.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';


class Categprory extends Component {

  render() {
    return (
      <div className="mod-top-rate">
        <div className="container">
          <div className='py-12 mx-auto top-rate'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
              {categories.map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <h2 className='font-bold sm:text-xl mb-0'>{item.name}</h2>
                  <LazyLoadImage
                    alt={item.name}
                    src={item.image}
                    className='w-20'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categprory;