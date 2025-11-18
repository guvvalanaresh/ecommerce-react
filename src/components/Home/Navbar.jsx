import React, { useState } from 'react'
import '../../App.css'
import logo from '../../assets/logo.svg'
import { FaCartPlus } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { useCart } from '../../context/CartContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const { cartItems = [] } = useCart() || {}
  const totalCount = cartItems.reduce((sum, it) => sum + (it.quantity || 0), 0)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Left: logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Flashcart" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Center: navigation links (hidden on small screens) */}
          <nav className="hidden md:flex md:space-x-6">
            <NavLink to="/" end className={({isActive}) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Products</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Contact</NavLink>
          </nav>

          {/* Right: search + icons */}
          <div className='flex items-center gap-4'>
            <div className='hidden md:block'>
              <SearchForm />
            </div>

            <div className='flex items-center gap-4'>
              <Link to="/cart" className='relative text-gray-700 dark:text-gray-200 hover:text-gray-900'>
                <FaCartPlus className='cart-icon' />
                {totalCount > 0 && (
                  <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-red-600 rounded-full'>
                    {totalCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100'
                onClick={() => setMobileOpen((s) => !s)}
                aria-label='Toggle menu'
              >
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  {mobileOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu: show when open */}
        {mobileOpen && (
          <div className='md:hidden mt-2 pb-4'>
            <div className='space-y-2'>
              <SearchForm />
              <NavLink to="/" end onClick={() => setMobileOpen(false)} className={({isActive}) => (isActive ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900' : 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50')}>Home</NavLink>
              <NavLink to="/products" onClick={() => setMobileOpen(false)} className={({isActive}) => (isActive ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900' : 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50')}>Products</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className={({isActive}) => (isActive ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900' : 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50')}>About</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({isActive}) => (isActive ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-900' : 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50')}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

function SearchForm() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = q.trim()
    if (trimmed) {
      navigate(`/products?q=${encodeURIComponent(trimmed)}`)
      setQ('')
      return
    }
    // if empty, go to products page
    navigate('/products')
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        aria-label="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="text"
        className='w-full md:w-64 pl-10 pr-4 py-2 rounded-full border text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
        placeholder='Search products, brands...'
      />
      <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'><IoSearch /></span>
    </form>
  )
}
