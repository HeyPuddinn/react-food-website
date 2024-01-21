import React, { useState } from "react";
import $ from 'jquery';
import { data } from '../data/data.js';
import Popup from 'reactjs-popup';
import { IoClose } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoFastFoodOutline } from "react-icons/io5";


const Food = () => {
  const [foods, setFoods] = useState(data);
  const [active, setActive] = useState("");
  const [activePrice, setActivePrice] = useState("");

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        if (category === 'all') {
          return item;
        }
        return item.category === category;
      })
    );
    $('.item-food').show();
    setActive(category);
    setActivePrice('');
  }

  const filterPrice = (price) => {
    const itemFoods = document.querySelectorAll('.item-food');
    itemFoods.forEach((item) => {
      const eleTarget = item;
      if (eleTarget.getAttribute('data-price') === price) {
        eleTarget.style.display = 'block';
      } else {
        eleTarget.style.display = 'none';
      }
    });
  };

  React.useEffect(() => {
    setActive('all');
  }, []);

  const createButton = (type) => (
    <button
      onClick={() => filterType(type)}
      className={`type-item m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ${(active === type) ? 'type-active' : ''} ${type === 'all' ? 'rounded-full' : ''}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );

  const createPriceButton = (price) => (
    <button
      onClick={() => filterPrice(price)}
      className={`price-item m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ${activePrice === price ? 'price-active' : ''}`}
    >
      {price}
    </button>
  )

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 list-food last-mb-none  ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type:</p>
          <div className="flex justify-between flex-wrap">
            {createButton('all')}
            {createButton('burger')}
            {createButton('pizza')}
            {createButton('salad')}
            {createButton('chicken')}
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price:</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {createPriceButton('50$')}
            {createPriceButton('100$')}
            {createPriceButton('150$')}
            {createPriceButton('200$')}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div className="border shadow-lg item-food overflow-hidden duration-300 rounded-lg relative" key={index} data-price={item.price}>
            <div className="h-[200px] overflow-hidden">
              <LazyLoadImage
                alt={item.name}
                src={item.image}
                className='w-full h-full object-cover object-center rounded-t-lg'
              />
            </div>
            <div className="flex flex-col items-start justify-between px-2 py-4">
              <div className="content w-full flex justify-between mb-6">
                <h2 className="font-bold text-h3 mb-0 inline-block">{item.name}</h2>
                <p>
                  <span className="bg-orange-500 text-white p-2 rounded-full">{item.price}</span>
                </p>
              </div>
              <Popup
                trigger={<button className="button border-none hover:bg-orange-600 hover:text-white rounded-lg flex items-center leading-none py-3">Detail <IoFastFoodOutline className="ml-2" /></button>}
                modal
                nested
              >
                {close => (
                  <div className="modal relative last-mb-none">
                    <div className="container">
                      <div className="wrapper-popup lg:max-w-[700px] lg:mx-auto ">
                        <div className="flex flex-nowrap items-center">
                          <div className="popup-img w-full md:w-2/5">
                            <img src={item.image} alt={item.name} className='w-full h-full object-cover object-center' />
                          </div>
                          <div className="popup-title py-5 px-6 lg:py-7 lg:px-10 w-full md:w-3/5">
                            <div className="header">
                              <h2 className="text-h3 ">{item.name}</h2>
                            </div>
                            <div className="content ">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            </div>
                          </div>
                        </div>
                        <div className="popup-close absolute top-0 right-0">
                          <button className="close button-popup-close" onClick={close}><IoClose /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Food;