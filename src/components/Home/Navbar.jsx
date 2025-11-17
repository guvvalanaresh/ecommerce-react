import React from 'react'
import '../../App.css'
import { FaCartPlus } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { useCart } from '../../context/CartContext'


const Navbar = () => {
  const { cartItems = [] } = useCart() || {}
  const totalCount = cartItems.reduce((sum, it) => sum + (it.quantity || 0), 0)

  return (
    <div>
      <div className='flex justify-around items-center p-5'>
        {/* Left section */}
        <div>
            {/* <img className='w-[60px] h-15' src="/shopping-venture-2523066.png" alt="Logo" /> */}
            <h4 className='font-bold italic text-orange-600'>FLASHCART</h4>
        </div>
        {/* Right Section */}
        <div className='flex gap-5 items-center'>
          {/* Here we use "relative" and "absoulte" positions to set the search icon inside the input */}
          {/* relative position will be given to the parent element here <div> and absolute will be given to the what we want fix in that parent element here we <p> use top,left,right,bottom to align in correct position*/}
          <div className='flex items-center relative'>
              <input type="text" className='p-1 pl-[35px] shadow-md' placeholder='Search here....' />
              <p className='absolute right-48 text-gray-400'><IoSearch /></p>
          </div>
          <div>
            <ul className='flex gap-6 relative items-center'>
              <li>
                <a href="/cart" className='cursor-pointer cart-icon' aria-label="View cart"><FaCartPlus /></a>
              </li>
              {totalCount > 0 && (
                <li className='absolute left-4 bottom-4 rounded-full z-0 px-1 text-xs font-semibold bg-red-600 text-white'>
                  {totalCount}
                </li>
              )}
              <li>
                <button className='cursor-pointer login-icon' aria-label="Login"><SlLogin /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
