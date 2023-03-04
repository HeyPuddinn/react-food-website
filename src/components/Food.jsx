import React, { useState } from "react";
import {data} from '../data/data.js'

const Food = () => {
  // console.log(data)
  const [foods, setFoods] = useState(data)

  // Filter Type food

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  } 

  // Fill by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      }))
  }

  // set active

  // const [isActive, setActive] = useState(false)

  // const handleActive = (id) => {
  //   this.setState({ activeLink: id });
  // }

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* FIlter Row */}
      <div className="flex flex-col lg:flex-row justify-between">

        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => {setFoods(data)}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
            <button onClick={() => {filterType('burger')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
            <button onClick={() => {filterType('pizza')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
            <button onClick={() => {filterType('salad')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
            <button onClick={() => {filterType('chicken')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => {filterPrice('50$')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">50$</button>
            <button onClick={() => {filterPrice('100$')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">100$</button>
            <button onClick={() => {filterPrice('150$')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">150$</button>
            <button onClick={() => {filterPrice('200$')}} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">200$</button>
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