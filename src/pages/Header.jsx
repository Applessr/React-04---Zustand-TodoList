import React from 'react'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='flex bg-[#A9BCD0] h-20 justify-between items-end'>
          <img src='https://via.placeholder.com/60' alt='profile' className='w-[60px] rounded-[50%] mb-2 mx-20' />
      <Nav/>
  </div>
  )
}

export default Header
