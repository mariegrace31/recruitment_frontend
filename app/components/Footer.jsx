import React from 'react';
import { TiLocation } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';
import sHr from '../assets/hrfooter.png';
import Image from 'next/image';
import longHr from '../assets/longhr.png';
import verHr from '../assets/verhr.png';
import last from '../assets/lasthr.png';

function Footer() {
  return (
    <div className='bg-[#333872] p-[67px] pb-7'>
      <div className='flex gap-14 ml-8'>  
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs w-[25%]'> <TiLocation className='p-1 text-4xl bg-secondary rounded-r-lg text-white' />4th floor La Bonne Addresse House, Nyarugenge Kiyovu, Kigali City</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs w-'><MdOutlineEmail className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />office@lkrecruitmentrw.com</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><IoCall className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />+250 795 460 410</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><LiaHandsHelpingSolid className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />Become a partner</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><FaWhatsapp className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />Chat with us now</p>
      </div>

      <div className='flex gap-5 mt-10 p-12'>

      <div className='grid grid-cols-2 h-[450px]'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-4 ml-9'>
          <h1 className='text-lg text-white'>Main Menu</h1>
          <Link className='text-white text-xs font-light' href='#jobBoard'>Job Board</Link>
          <Link className='text-white text-xs font-light' href='#candidates'>Candidates</Link>
          <Link  className='text-white text-xs font-light'href='#recruiters'>Recruiters</Link>
          <Link className='text-white text-xs font-light' href='#contact'>Contact Us</Link>
          <Link className='text-white text-xs font-light' href='#blog'>Blog</Link>
        </div>
        <Image src={sHr} width={50} height={1} alt='hr' className='ml-2 mt-5' />
        
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg text-white'>Payment Plans</h1>
          <Link className='text-white text-xs font-light' href='#forcompanies'>For companies</Link>
          <Link className='text-white text-xs font-light' href='#forindividualss'>For Individuals</Link>
        </div>
        <Image src={sHr} width={50} height={1} alt='hr' className='ml-2 mt-5' />
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-4 ml-9'>
          <h1 className='text-lg text-white'>Support</h1>
          <Link className='text-white text-xs font-light' href='#privacy'>Privacy and Policy</Link>
          <Link className='text-white text-xs font-light' href='#contact'>Contact Us</Link>
        </div>
        <Image src={sHr} width={50} height={1} alt='hr' className='-ml-6 mt-5' />
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg text-white'>Community</h1>
          <Link className='text-white text-xs font-light' href='#jobBoard'>Training</Link>
          <Link className='text-white text-xs font-light' href='#jobBoard'>Employee Development</Link>
          <Link className='text-white text-xs font-light' href='#jobBoard'>Career Readiness</Link>
        </div>
        <Image src={sHr} width={50} height={1} alt='hr' className='-ml-5 mt-5' />
      </div>
      </div>

      <Image src={longHr} width={3} height={1} alt='hr' className='-ml-16 h-[500px]' />

      <div>
        <div className=''>
          <h1 className='text-lg text-white'>Available Jobs</h1>
          <Image src={verHr} width={450} height={1} alt='hr' className=' relative bottom-2 ml-[155px]' />
        </div>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-white text-xs font-light'>Leadership</h3>
            <h3 className='text-white text-xs font-light'>Waiter & Waitress</h3>
            <h3 className='text-white text-xs font-light'>Ushering</h3>
            <h3 className='text-white text-xs font-light'>Script writing</h3>
            <h3 className='text-white text-xs font-light'>Sales</h3>
            <h3 className='text-white text-xs font-light'>Monitoring and Evaluation</h3>
            <h3 className='text-white text-xs font-light'>Operation</h3>
            <h3 className='text-white text-xs font-light'>House Cleaning</h3>
            <h3 className='text-white text-xs font-light'>Receptionist</h3>
            <h3 className='text-white text-xs font-light'>Business Management</h3>
            <h3 className='text-white text-xs font-light'>Generative AI</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-white text-xs font-light'>Public Speaking</h3>
            <h3 className='text-white text-xs font-light'>Human Resource</h3>
            <h3 className='text-white text-xs font-light'>Events Hosting</h3>
            <h3 className='text-white text-xs font-light'>Logistics</h3>
            <h3 className='text-white text-xs font-light'>Adult Education</h3>
            <h3 className='text-white text-xs font-light'>Chief Cook</h3>
            <h3 className='text-white text-xs font-light'>Communication Skills</h3>
            <h3 className='text-white text-xs font-light'>Customer Care</h3>
            <h3 className='text-white text-xs font-light'>Theater Acting</h3>
            <h3 className='text-white text-xs font-light'>Presentation Skills</h3>
            <h3 className='text-white text-xs font-light'>Digital Marketing</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-white text-xs font-light'>Supervision</h3>
            <h3 className='text-white text-xs font-light'>Health care</h3>
            <h3 className='text-white text-xs font-light'>Baby sitting</h3>
            <h3 className='text-white text-xs font-light'>Elderly caretaker</h3>
            <h3 className='text-white text-xs font-light'>Story Writing</h3>
            <h3 className='text-white text-xs font-light'> Project Management</h3>
            <h3 className='text-white text-xs font-light'>Online Business</h3>
            <h3 className='text-white text-xs font-light'>Social Media Management</h3>
            <h3 className='text-white text-xs font-light'>Content Writing</h3>
          </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col gap-5'>
        <Image src={last} width={1400} height={1} alt='last hr'/>
        <div className='flex justify-between'>
          <p className='text-white text-xs font-light'>Do not use or Sale Our Data</p>
          <p className='text-white text-xs font-light'>© 2024 LK Recruitment Ltd | All-Right Reserved.</p>
          <p className='text-white text-xs font-light'>Designed & Developed By <span className='text-[#FFBB33]'>Mayllos.com</span></p>
        </div>
      </div>

    </div>
  )
}

export default Footer;