import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Logo = '/src/image/logo.png'
const Thai = '/src/image/Thai.png'
const Profile = '/src/image/Userprofile.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-gradient-to-r from-orange1 to-orange2 w-full h-[80px] flex items-center justify-between px-5 drop-shadow-xl relative'>
      <div className='flex-shrink-0 px-3'>
        <Link to='/' ><img src={Logo} alt="Logo" className='h-18 w-auto cursor-pointer' /> </Link>
      </div>
      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-6 font-bold text-base px-3'>
        <p className='text-white hover:transition-all duration-300 cursor-pointer relative group'>
          <span>Jobbord</span>
          <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-xl'></span>
        </p>
        <p className='text-white hover:transition-all duration-300 cursor-pointer relative group'>
          <span>เพิ่มโอกาสถูกจ้างงาน</span>
          <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-xl'></span>
        </p>
        <p className='text-white hover:transition-all duration-300 cursor-pointer relative group'>
          <span>การจ้างงาน</span>
          <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-xl'></span>
        </p>
        <p className='bg-white py-2 rounded-xl px-3 hover:bg-gray-100 transition-colors cursor-pointer text-orange-500'>
          Seller Center
        </p>
        <div className='bg-white h-[40px] w-[2.5px] rounded-lg'></div>
        <img src={Thai} alt="Thai" className='h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity' />
        <Link to="/Profile">  <img src={Profile} alt="Profile" className='h-9 w-auto rounded-full cursor-pointer transition-opacity ' /></Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className='md:hidden text-white hover:text-orange-100 transition-colors p-2'
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <div className="w-6 h-6 relative">
            <div className="absolute top-3 w-6 h-0.5 bg-white transform rotate-45"></div>
            <div className="absolute top-3 w-6 h-0.5 bg-white transform -rotate-45"></div>
          </div>
        ) : (
          // Hamburger menu icon
          <div className="w-6 h-6 flex flex-col justify-center gap-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-[80px] left-0 right-0 bg-gradient-to-r from-orange1 to-orange2 shadow-lg z-50'>
          <div className='flex flex-col p-5 gap-4 font-bold text-base'>
            <p className='text-white hover:text-orange-100 transition-all duration-300 cursor-pointer py-2 border-b border-orange-300 relative group'>
              <span>Jobbord</span>
            </p>
            <p className='text-white hover:text-orange-100 transition-all duration-300 cursor-pointer py-2 border-b border-orange-300 relative group'>
              <span>เพิ่มโอกาสถูกจ้างงาน</span>
            </p>
            <p className='text-white hover:text-orange-100 transition-all duration-300 cursor-pointer py-2 border-b border-orange-300 relative group'>
              <span>การจ้างงาน</span>
            </p>
            <p className='bg-white py-3 rounded-xl px-4 hover:bg-gray-100 transition-colors cursor-pointer text-orange-500 text-center'>
              Seller Center
            </p>

            <div className='flex items-center justify-center gap-4 pt-4 border-t border-orange-300'>
              <img src={Thai} alt="Thai" className='h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity' />
              <Link to="/Profile"> <img src={Profile} alt="Profile" className='h-10 w-auto rounded-full cursor-pointer hover:opacity-80 transition-opacity' /> </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav