import React from 'react';
import { RiNotification2Line } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import Image from 'next/image';
import avatar from '../assets/avatar.png';

function Navbar2() {
  return (
    <nav className='bg-lk_bg h-[10vh] flex items-center justify-end gap-10 p-7'>
      <RiNotification2Line className='text-5xl p-3 bg-white rounded-md' />
      <HiUser className='text-5xl p-3 bg-white rounded-md' />
      <div className='flex gap-3 items-center'>
        <Image src={avatar} alt='avatar' width={40} height={10}/>
        <h3 className='flex items-center gap-1 font-extralight text-[15px]'>Admin <FaCaretDown className='text-lg' /> </h3>
      </div>
    </nav>
  )
}

export default Navbar2;