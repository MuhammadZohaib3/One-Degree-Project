import React from 'react'
import logo from '../../assets/images/logo1Degree.avif';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
function Nav() {
  return (
    <nav className=' bg-black '>
    <div className='w-full mx-auto h-20 px-5'>
      <div className='flex justify-between items-center h-full  '>   
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className='flex gap-6 mt-3 items-center'>
          <li><NavLink className='text-white no-underline hover:border-white border-transparent border-b-2' to="">NEW IN</NavLink></li>
          <li><NavLink className='text-white no-underline hover:border-white border-transparent border-b-2' to="/collection/all-men">MEN</NavLink></li>
          <li ><NavLink className='text-white no-underline hover:border-white border-transparent border-b-2' to="/collection/all-women">WOMEN</NavLink></li>
          <li><NavLink className='text-white no-underline  hover:border-white border-transparent border-b-2' to="/collection/summer-sale-2025">UPTO 50% OFF </NavLink> </li>
        </ul>

      </div>
      <div className="text-3xl flex gap-4 items-center">
      <span><CiSearch /></span>
      <span><MdOutlineShoppingCart /></span>
      </div>

      </div>

    </div>
    </nav>
  )
}

export default Nav;