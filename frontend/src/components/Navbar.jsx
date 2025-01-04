import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookOutline } from "react-icons/io5";
import { TbPencilPlus } from "react-icons/tb";
import { MdInfoOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-emerald-600 p-7 flex items-center justify-center'>
      <Link to={'/about'}>
        <button className='px-4 py-2 rounded-[28px] bg-emerald-500 hover:bg-emerald-400 transition duration-150'>
          <h2 className='text-lg flex items-center gap-1'>
            <MdInfoOutline />About
          </h2>
        </button>
      </Link>

      <Link to={'/'}>
        <h1 className='text-3xl mx-10 flex items-center'>
          <span><IoBookOutline /></span>
          <span className='text-white'>Book</span>
          <span className='text-black'>Post</span>
        </h1>
      </Link>

      <Link to={'/create'}>
        <button className='px-4 py-2 rounded-[28px] bg-emerald-500 hover:bg-emerald-400 transition duration-150'>
          <h2 className='text-lg flex items-center gap-1'>
            Create  <TbPencilPlus/>
          </h2>
        </button>
      </Link>
    </div>
  )
}

export default Navbar