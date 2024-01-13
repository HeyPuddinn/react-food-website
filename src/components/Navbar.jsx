import react, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

const Navbar = () => {

  const [nav, setNav] = useState(false) 

  const menuItems = [
    { icon: <TbTruckDelivery size={25} className='mr-4' />, text: 'Orders' },
    { icon: <MdFavorite size={25} className='mr-4' />, text: 'Favorites' },
    { icon: <FaWallet size={25} className='mr-4' />, text: 'Wallet' },
    { icon: <MdHelp size={25} className='mr-4' />, text: 'Help' },
    { icon: <AiFillTag size={25} className='mr-4' />, text: 'Promotions' },
    { icon: <BsFillCartFill size={25} className='mr-4' />, text: 'Best Ones' },
    { icon: <FaUserFriends size={25} className='mr-4' />, text: 'Invite Friends' },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[58%] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search Foods' />
      </div>

      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className="mr-2"/> Cart
      </button>

      {/* Mobile */}
      { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }


      {/* dropdown */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 left-[-100%]'}>
        <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer hover:text-orange-600 duration-200" onClick={()=> setNav(!nav)}/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="text-xl p-4 flex items-center hover:bg-gray-200 cursor-pointer hover:text-orange-500 duration-200">
                {item.icon}{item.text}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;