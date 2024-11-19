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

function page() {
  return (
    <div>
       <div className='p-20'>
        <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-44 relative'>
          <h1 className='text-white text-center text-6xl'>Contact Us</h1>
          <Image src={hr} width={320} height={1} alt='hr' className='mx-auto mt-4 z-10' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>

      
      <div className='grid grid-cols-3 gap-9 p-16'>

      <div className='bg-secondary p-5 rounded-s-sm flex flex-col gap-5'>
      <div className='flex'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={120} height={1} alt='white hr' className='my-10' />
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoLocationSharp className='text-xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoMailUnreadOutline className='text-xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

     <div className='bg-secondary p-5 rounded-sm flex flex-col gap-5'>
      <div className='flex'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={120} height={1} alt='white hr' className='my-10' />
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoLocationSharp className='text-xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoMailUnreadOutline className='text-xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

     <div className='bg-secondary rounded-sm p-5 flex flex-col gap-5'>
      <div className='flex'>
      <h1 className='text-white text-lg'>Rwanda</h1>
     <Image src={whitehr} width={120} height={1} alt='white hr' className='my-10' />
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoLocationSharp className='text-xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
     </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><FaPhoneAlt className='text-xl text-white'/>+250 795 460 410</h2>
    </div>
     <div>
     <h2 className='text-white flex items-center gap-2'><IoMailUnreadOutline className='text-xl text-white'/>office@lkrecruitmentrw.com</h2>
    </div>
     </div>

      </div>

      <div className='p-20 bg-[#F5F5FF]'>
        <div className='p-8 bg-primary rounded-2xl w-[30%]'>
          <h1 className='font-semibold text-xl text-white'>Get in Touch!</h1>
          <p className='text-white text-[18px]'>Your satisfaction is our priority. Whether you have questions, feedback, or need assistance, please feel free to reach to us.</p>
        </div>

        <div>

          <div>
            <Image />
            <div>
              <h3>Phone number:</h3>
              <h3>+250 795 460 410</h3>
              <h3>Email Address:</h3>
              <h3>office@lkrecruitmentrw.com</h3>
              <h3>Our Location</h3>
              <h3>4th floor La Bonne Addresse House</h3>
              <h3>Social Media</h3>
              <div>
              <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
              <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
              <Image src={ig} width={20} height={18} alt='instagram' />
              <h3>LkRecruitment</h3>
              </div>
            </div>
          </div>

          <div>
          <form onSubmit={handleFormSubmit} className="space-y-4 mt-10">
          <div>
                <label htmlFor="name" className="block text-[20px] text-gray-100 font-light mb-3">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 bg-secondary rounded-md p-3 text-white placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[20px] text-gray-100 font-light mb-3 mt-8">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[20px] text-gray-100 font-light mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 bg-secondary rounded-md p-3 text-white placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[20px] text-white font-light mb-3 mt-8 ">Your message</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Type your message"
                  className="w-full border  bg-secondary h-28  border-gray-300 text-white rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              </form>
          </div>
        </div>
      </div>

  
    </div>
    <Footer />
    </div>
  )
}

export default page;