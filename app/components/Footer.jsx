import React from 'react';
import { TiLocation } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-[#333872] pt-[50px] lg:pt-[67px] py-14 pb-7'>
      <div className='hidden lg:flex gap-3 lg:gap-12 justify-center'>  
        <p className='border border-gray-500 p-1 lg:p-2 rounded-sm flex items-center gap-2 text-white text-[8px] lg:text-[14px] w-[50%] lg:w-[23%]'> <TiLocation className='p-1 px-2 text-xl lg:text-5xl bg-secondary rounded-r-lg text-white' />4th floor La Bonne Addresse House, Nyarugenge Kiyovu, Kigali City</p>
        <p className='border border-gray-500 p-1 lg:p-2 rounded-sm flex items-center gap-2 text-white text-[8px] lg:text-[14px]'><MdOutlineEmail className='p-1 text-lg lg:text-4xl bg-secondary rounded-r-lg text-white' />office@lkrecruitmentrw.com <br /> contact@lkrecruitmentrw.com</p>
        <p className='border border-gray-500 p-1 lg:p-2 rounded-sm flex items-center gap-2 text-white text-[8px] lg:text-[14px]'><IoCall className='p-1 text-lg lg:text-4xl bg-secondary rounded-r-lg text-white' />+250 795 460 410</p>
        <p className='border border-gray-500 p-1 lg:p-2 rounded-sm flex items-center gap-2 text-white text-[8px] lg:text-[14px]'><FaWhatsapp className='p-1 text-lg lg:text-4xl bg-secondary rounded-r-lg text-white' />Chat with us now</p>
      </div>
      <div>
      <p className='border border-gray-500 p-3 lg:hidden rounded-lg flex items-center justify-center w-[90%] mx-auto gap-2 text-white text-[12px]'><IoCall className='text-xl text-white' />+250 795 460 410 | office@lkrecruitmentrw.com </p>
      </div>

      <div className='flex justify-around mx-auto mt-6 lg:mt-10 p-3 lg:p-12'>

        <div className='flex flex-col gap-4'>
          <h1 className='text-[12px] lg:text-[20px] font-medium text-white'>Main menu</h1>
          <Link className='text-white text-[11px] lg:text-[15px] font-light' href='/'>Home</Link>
          <Link className='text-white text-[11px] lg:text-[15px] font-light' href='/jobBoard'>Job Board</Link>
          <Link className='text-white text-[11px] lg:text-[15px] font-light' href='/about'>About Us</Link>
          <Link  className='text-white text-[11px] lg:text-[15px] font-light'href='/hrnews'>Hr News</Link>
          <Link  className='text-white text-[11px] lg:text-[15px] font-light'href='/contact'>Contact</Link>
        </div>
        
      
        <div className='flex flex-col gap-4'>
          <h1 className='text-[12px] lg:text-[20px] font-medium text-white'>Support</h1>
          <Link className='text-white text-[11px] lg:text-[15px] font-light' href='#privacy'>Privacy and Policy</Link>
          <Link className='text-white text-[11px] lg:text-[15px] font-light' href='#contact'>Contact Us</Link>
        </div>
       
        <div className='hidden lg:flex flex-col gap-4'>
          <h1 className='text-[20px] font-medium text-white'>Social media</h1>
          <Link className='text-white text-[15px] font-light' href='#'>Instagram</Link>
          <Link className='text-white text-[15px] font-light' href='#'>Facebook</Link>
          <Link className='text-white text-[15px] font-light' href='#'>LinkedIn</Link>
        </div>

          <div className='flex flex-col gap-4'>
           <h1 className='text-[12px] lg:text-[20px] font-medium text-white'>Community</h1>
            <h3 className='text-white text-[10px] lg:text-[15px] font-light'>Training</h3>
            <h3 className='text-white text-[10px] lg:text-[15px] font-light'>Employee dev</h3>
            <h3 className='text-white text-[10px] lg:text-[15px] font-light'>Career Read...</h3>
          </div>
     
      </div>

      <hr className='border-b border-gray-500 w-[90%] lg:w-[90%] mx-auto' />

        <div className='flex justify-between py-5 px-5 lg:px-20'>
          <p className='text-white text-[11px] hidden lg:flex lg:text-[15px] font-light'>Do not use or Sale Our Data</p>
          <p className='text-white text-[10px] lg:text-[15px] font-light'>© 2024 LK Recruitment Rwanda</p>
          <p className='text-white text-[10px] lg:text-[15px] font-light'>Developed By <a href='https://mayllos.com/' className='text-[#FFBB33] font-bold'>Mayllos.com</a></p>
        </div>

    </div>
  )
}

export default Footer;