import React, { useState } from "react";
import {data} from '../data/data.js'

const Food = () => {
  const [foods, setFoods] = useState(data)
  const [active, setActive] = useState("");

  // Filter Type food
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        if (category === 'all') {
          return item
        }
        return item.category === category
      })
    )
    setActive(category)
  } 

  // Fill by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      }))
    setActive(price)
  }

  const createButton = (type) => (
    <button
      onClick={() => filterType(type)}
      className={`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ${(active === type)  ? 'bg-orange-600 text-white' : ''} ${type === 'all' ? 'rounded-full' : ''}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );

  const createPriceButton = (price) => (
    <button
      onClick={() => filterPrice(price)}
      className={`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ${active === price ? 'bg-orange-600 text-white' : ''}`}
    >
      {price}
    </button>
  )

  
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 list-food">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* FIlter Row */}
      <div className="flex flex-col lg:flex-row justify-between">

        {/* Filter Type */}
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

        {/* Filter Price */}
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

{/* display image */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div className="border shadow-lg hover:scale-105 duration-300 rounded-lg" key={index}>
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover object-center rounded-t-lg"/>
            <div className="flex justify-between items-center px-2 py-4">
              <h2 className="font-bold">{item.name}</h2>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Food;