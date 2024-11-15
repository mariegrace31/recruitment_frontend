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

function Footer() {
  return (
    <div className='bg-[#333872] p-16'>
      <div className='flex gap-14'>  
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs w-[25%]'> <TiLocation className='p-1 text-4xl bg-secondary rounded-r-lg text-white' />4th floor La Bonne Addresse House, Nyarugenge Kiyovu, Kigali City</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs w-'><MdOutlineEmail className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />office@lkrecruitmentrw.com</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><IoCall className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />+250 795 460 410</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><LiaHandsHelpingSolid className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />Become a partner</p>
        <p className='border border-gray-500 p-2 rounded-sm flex items-center gap-2 text-white text-xs'><FaWhatsapp className='p-1 text-3xl bg-secondary rounded-r-lg text-white' />Chat with us now</p>
      </div>

      <div className='flex gap-4 mt-8'>

      <div className='grid grid-cols-2'>
      <div className=''>
        <div className='flex flex-col gap-3'>
          <h1 className='font-medium text-lg text-white'>Main Menu</h1>
          <Link className='text-white text-xs' href='#jobBoard'>Job Board</Link>
          <Link className='text-white text-xs' href='#jobBoard'>Candidates</Link>
          <Link  className='text-white text-xs'href='#jobBoard'>Recruiters</Link>
          <Link className='text-white text-xs' href='#jobBoard'>Contact Us</Link>
          <Link className='text-white text-xs' href='#jobBoard'>Blog</Link>
        </div>
        <Image src={sHr} width={100} height={1} alt='hr' />
        
      </div>
      <div className=''>
        <div className='flex flex-col gap-3'>
          <h1 className='font-medium text-lg text-white'>Payment Plans</h1>
          <Link className='text-white text-xs' href='#forcompanies'>For companies</Link>
          <Link className='text-white text-xs' href='#forindividualss'>For Individuals</Link>
        </div>
        <Image src={sHr} width={100} height={1} alt='hr' />
      </div>
      <div>
        <div>
          <h1>Support</h1>
          <Link href='#privacy'>Privacy and Policy</Link>
          <Link href='#contact'>Contact Us</Link>
        </div>
        <Image src={sHr} width={100} height={1} alt='hr' />
      </div>
      <div>
        <div>
          <h1>Community</h1>
          <Link href='#jobBoard'>Training</Link>
          <Link href='#jobBoard'>Employee Development</Link>
          <Link href='#jobBoard'>Career Readiness</Link>
        </div>
        <Image src={sHr} width={100} height={1} alt='hr' />
      </div>
      </div>

      {/* <Image src={longHr} width={5} height={1} alt='hr' className='' /> */}

      <div>
        <div>
          <h1 className='font-medium text-lg text-white'>Available Jobs</h1>
          <Image src={sHr} />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-white text-xs'>Leadership</h3>
            <h3 className='text-white text-xs'>Waiter & Waitress</h3>
            <h3 className='text-white text-xs'>Ushering</h3>
            <h3 className='text-white text-xs'>Script writing</h3>
            <h3 className='text-white text-xs'>Sales</h3>
            <h3 className='text-white text-xs'>Monitoring and Evaluation</h3>
            <h3 className='text-white text-xs'>Operation</h3>
            <h3 className='text-white text-xs'>House Cleaning</h3>
            <h3 className='text-white text-xs'>Receptionist</h3>
            <h3 className='text-white text-xs'>Business Management</h3>
            <h3 className='text-white text-xs'>Generative AI</h3>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-white text-xs'>Public Speaking</h3>
            <h3 className='text-white text-xs'>Human Resource</h3>
            <h3 className='text-white text-xs'>Events Hosting</h3>
            <h3 className='text-white text-xs'>Logistics</h3>
            <h3 className='text-white text-xs'>Adult Education</h3>
            <h3 className='text-white text-xs'>Chief Cook</h3>
            <h3 className='text-white text-xs'>Communication Skills</h3>
            <h3 className='text-white text-xs'>Customer Care</h3>
            <h3 className='text-white text-xs'>Theater Acting</h3>
            <h3 className='text-white text-xs'>Presentation Skills</h3>
            <h3 className='text-white text-xs'>Digital Marketing</h3>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-white text-xs'>Supervision</h3>
            <h3 className='text-white text-xs'>Health care</h3>
            <h3 className='text-white text-xs'>Baby sitting</h3>
            <h3 className='text-white text-xs'>Elderly caretaker</h3>
            <h3 className='text-white text-xs'>Story Writing</h3>
            <h3 className='text-white text-xs'> Project Management</h3>
            <h3 className='text-white text-xs'>Online Business</h3>
            <h3 className='text-white text-xs'>Social Media Management</h3>
            <h3 className='text-white text-xs'>Content Writing</h3>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer;