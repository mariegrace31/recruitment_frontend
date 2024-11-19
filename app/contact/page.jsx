import Image from 'next/image';
import React from 'react';
import hr from '../assets/abouthr.png';
import lines from '../assets/linegroup.png';
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import whitehr from '../assets/hrwhite.png';
import { GrFacebookOption } from 'react-icons/gr';
import ig from '../assets/instagram.png';
import Footer from '../components/Footer';
import Link from 'next/link';
import contactHr from '../assets/contacthr.png';
import { IoMdSend } from "react-icons/io";

function page() {
  return (
    <div>
       <div className='p-20'>
        <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-44'>
          <h1 className='text-white text-center text-6xl'>Contact Us</h1>
          <Image src={hr} width={320} height={1} alt='hr' className='mx-auto mt-4 z-10' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>

      
      <div className='grid grid-cols-3 gap-12 p-16'>

      <div className='bg-secondary p-5 rounded-s-sm flex flex-col gap-10'>
      <div className='flex gap-12'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={190} height={1} alt='white hr' className='my-2' />
     </div>
     <div>
     <h2 className='text-white flex font-light items-center gap-2'><IoLocationSharp className='text-5xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white font-light flex items-center gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white font-light flex items-center gap-2'><IoMailUnreadOutline className='text-2xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

     <div className='bg-secondary p-5 rounded-sm flex flex-col gap-10'>
      <div className='flex gap-12'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={190} height={1} alt='white hr' className='my-2' />
     </div>
     <div>
     <h2 className='text-white flex items-center font-light gap-2'><IoLocationSharp className='text-5xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white flex items-center font-light gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white flex items-center font-light gap-2'><IoMailUnreadOutline className='text-2xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

     <div className='bg-secondary rounded-sm p-5 flex flex-col gap-10'>
      <div className='flex gap-12'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={190} height={1} alt='white hr' className='my-2' />
     </div>
     <div>
     <h2 className='text-white flex font-light items-center gap-2'><IoLocationSharp className='text-5xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white flex font-light items-center gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white flex font-light items-center gap-2'><IoMailUnreadOutline className='text-2xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

      </div>
  
    </div>
    <div className='p-20 bg-[#F5F5FF]'>
        <div className='p-8 bg-primary rounded-xl w-[100%]'>
          <h1 className='font-bold text-2xl w-[30%] text-white'>Get in Touch!</h1>
          <p className='text-white w-[30%] mt-7 text-[18px]'>Your satisfaction is our priority. Whether you have questions, feedback, or need assistance, please feel free to reach to us.</p>
        </div>

        <div className='flex gap-64'>

          <div className='mt-7 flex gap-2 relative'>
            <Image src={contactHr} width={10} height={1} alt='hr' className='h-[270px]' />
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl'>Phone number:</h3>
              <h3 className='text-secondary font-medium underline'>+250 795 460 410</h3>
              <h3 className='font-bold text-xl mt-5'>Email Address:</h3>
              <h3 className='text-secondary font-medium'>office@lkrecruitmentrw.com</h3>
              <h3 className='font-bold text-xl mt-5'>Our Location</h3>
              <h3 className='text-secondary font-medium'>4th floor La Bonne Addresse House</h3>
              <h3 className='font-bold text-xl mt-5'>Social Media</h3>
              <div className='flex gap-3 items-center'>
              <Link href='#'><FaLinkedinIn   className='p-1 text-xl rounded-sm bg-[#0076B2] text-white'/></Link>
              <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
              <Image src={ig} width={20} height={18} alt='instagram' />
              <h3 className='text-secondary'>LkRecruitment</h3>
              </div>
            </div>
          </div>

          <div className='-mt-[233px]'>
          <form className="space-y-4 bg-[#7bb3db] rounded-b-md p-7 w-[170%]">
          <div>
                <label htmlFor="name" className="block text-[15px] font-medium text-gray-100 mb-3">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-secondary/50 bg-[#FDFDFD]/30 rounded-md p-3 text-black placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[15px] font-medium text-gray-100 mb-3 mt-5">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border  bg-[#FDFDFD]/30 text-black border-secondary/50 rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[15px] font-medium text-gray-100 mb-3 mt-5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-secondary/50 bg-[#FDFDFD]/30 rounded-md p-3 text-black placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[15px] font-medium text-white  mb-3 mt-10 ">Your message</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Type your message"
                  className="w-full border  bg-[#FDFDFD]/30  border-secondary/50 text-black rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <button className='text-white font-medium px-5 bg-secondary p-2 rounded-3xl ml-auto flex gap-1 items-center'>Send <IoMdSend className='text-white text-2xl' /></button>
              </form>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default page;