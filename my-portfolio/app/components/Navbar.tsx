import React from 'react'
import Image from 'next/image'
import { FaArrowCircleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex w-full px-8 items-center justify-between'>
        <div className='flex gap-3 ml-5 items-center justify-center'>
            <Image src="/logo.png" width={50} height={50} alt="logo"/>
            <h1 className='font-semibold text-emerald-400'>GoodAt</h1>
        </div>
        <div>
            <ul className='flex text-[13px] gap-12 mr-5 text-gray-300'>
                <li className='hover:text-emerald-400 cursor-pointer'>Home</li>
                <li className='hover:text-emerald-400 cursor-pointer'>About</li>
                <li className='hover:text-emerald-400 cursor-pointer'>Projects</li>
                <li className='hover:text-emerald-400 cursor-pointer'>Contact</li>
            </ul>
        </div>
        <button className='bg-emerald-400 cursor-pointer w-[160px] rounded-md p-1.5 items-center justify-center text-white flex'>See Projects <FaArrowCircleRight className='ml-4' size={20}/></button>

    </div>
  )
}

export default Navbar