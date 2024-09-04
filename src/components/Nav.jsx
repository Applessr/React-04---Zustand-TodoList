import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='flex justify-end w-1/2 h-full align-middle items-center mr-20 text-[#1B1B1E] font-bold text-[20px] '>
        <nav className='flex gap-8  '>
            <Link className='hover:text-[#1b1b1e66]'
            to='/'>Home</Link>
            <Link className='hover:text-[#1b1b1e66]'
            to='/about'>About</Link>
            <Link className='hover:text-[#1b1b1e66]'
            to='/login'>Login</Link>
        </nav>
    </div>
  )
}

export default Nav
