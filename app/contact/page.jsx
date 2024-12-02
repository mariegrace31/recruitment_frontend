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
import map from '../assets/map.png';
import 'leaflet/dist/leaflet.css';


function page() {
 return (
   <div>
      <div className='p-5 lg:p-20'>
       <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
       <div className='bg-primary rounded-lg p-16 lg:p-44'>
         <h1 className='text-white text-center text-2xl lg:text-6xl'>Contact Us</h1>
         <Image src={hr} width={320} height={1} alt='hr' className='mx-auto mt-2 lg:mt-4 z-10 w-[110px] lg:w-[260px]' />
       </div>
     </div>
     <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24 z-10 object-cover'/>


    
     <div className='flex flex-col mt-6 lg:mt-0 lg:flex-row justify-center gap-7 lg:gap-28 p-3 lg:p-16'>


     <div className='bg-secondary w-[100%] lg:w-[80%] p-5 rounded-s-sm flex flex-col gap-5 lg:gap-10'>
     <div className='flex gap-12'>
     <h1 className='text-white text-sm lg:text-xl'>Rwanda</h1>
    <Image src={whitehr} width={190} height={1} alt='white hr' className='my-2 w-[100px] lg:w-[200px]' />
    </div>
    <div>
    <h2 className='text-white text-sm lg:text-xl flex font-light items-center gap-3'><IoLocationSharp className='text-4xl lg:text-5xl text-white' />4th floor La Bonne Addresse House,Nyarugenge Kiyovu, Kigali.</h2>
    </div>
    <div>
    <h2 className='text-white text-sm lg:text-xl font-light flex items-center gap-3'><FaPhoneAlt className='text-xl lg:text-3xl text-white'/>+250 795 460 410</h2>
   </div>
    <div>
    <h2 className='text-white text-sm lg:text-xl font-light flex items-center gap-3'><IoMailUnreadOutline className='text-2xl lg:text-3xl text-white'/>office@lkrecruitmentrw.com <br /> contact@lkrecruitmentrw.com</h2>
   </div>
    </div>


    <div className="bg-secondary w-[100%] lg:w-[80%] p-5 rounded-sm flex flex-col gap-5 lg:gap-10">
      <div className="flex gap-12">
        <h1 className="text-white text-sm lg:text-xl">Map</h1>
        <Image src={whitehr} width={190} height={1} alt="white hr" className="my-2 w-[100px] lg:w-[200px]" />
      </div>
      <div className="w-full rounded-sm overflow-hidden">
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38392.209292547175!2d30.0609764!3d-1.9460172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6b7fddf20fb%3A0xb88a0d94cc7a8ff9!2sKigali!5e0!3m2!1sen!2srw!4v1694511787659!5m2!1sen!2srw"
    width="100%"
    height="250"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full rounded-sm border-none"
  />
      </div>
    </div>

     </div>
    </div>
   <div className='p-5 lg:p-20 bg-[#F5F5FF] mb-72 lg:mb-0'>
    <div>
    <div className='p-5 lg:p-8 bg-primary rounded-xl w-[100%]'>
         <h1 className='font-bold text-xl lg:text-2xl w-[100%] text-center lg:text-left lg:w-[30%] text-white'>Get in Touch!</h1>
         <p className='text-white w-[100%] lg:w-[30%] text-center lg:text-left mt-7 text-[15px] lg:text-[18px]'>Your satisfaction is our priority. Whether you have questions, feedback, or need assistance, please feel free to reach to us.</p>
       </div>
       
    </div>
      
       <div className='flex flex-col lg:flex-row gap-64 items-start relative'>
         <div className='mt-7 flex gap-2 relative'>
           <Image src={contactHr} width={10} height={1} alt='hr' className='h-[200px] lg:h-[270px]' />
           <div className='flex flex-col gap-2'>
             <h3 className='font-bold text-[16px] lg:text-xl'>Phone number:</h3>
             <h3 className='text-secondary text-sm lg:text-[16px] font-medium underline'>+250 795 460 410</h3>
             <h3 className='font-bold text-[16px] lg:text-xl mt-1 lg:mt-5'>Email Address:</h3>
             <h3 className='text-secondary text-sm lg:text-[16px] font-medium'>office@lkrecruitmentrw.com <br /> contact@lkrecruitmentrw.com </h3>
             <h3 className='font-bold text-[16px] lg:text-xl mt-1 lg:mt-5'>Our Location</h3>
             <h3 className='text-secondary text-sm lg:text-[16px] font-medium'>4th floor La Bonne Addresse House</h3>
             <h3 className='font-bold text-[16px] lg:text-xl mt-1 lg:mt-5'>Social Media</h3>
             <div className='flex gap-3 items-center'>
             <Link href='#'><FaLinkedinIn   className='p-1 text-xl rounded-sm bg-[#0076B2] text-white'/></Link>
             <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
             <Image src={ig} width={20} height={18} alt='instagram' />
             <h3 className='text-secondary text-sm lg:text-[16px]'>LkRecruitmentRwanda</h3>
             </div>
           </div>
         </div>


         <div className='relative w-[100%] lg:w-[40%]'>
         <form className="space-y-4 bg-[#7bb3db] rounded-md p-4 lg:p-7 absolute -top-52 lg:-top-56 w-full"
            style={{
             marginTop: 0,
          }}>
         <div>
               <label htmlFor="name" className="block text-[13px] lg:text-[15px] font-medium text-gray-100 mb-1 lg:mb-3">Full Name</label>
               <input
                 type="text"
                 id="name"
                 className="w-full border border-secondary/50 bg-[#FDFDFD]/30 rounded-md p-2 lg:p-3 text-black placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                 required
               />
             </div>
             <div>
               <label htmlFor="phone" className="block text-[13px] lg:text-[15px] font-medium text-gray-100 mb-1 lg:mb-3 mt-3 lg:mt-5">Phone Number</label>
               <input
                 type="tel"
                 id="phone"
                 className="w-full border  bg-[#FDFDFD]/30 text-black border-secondary/50 rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                 required
               />
             </div>
             <div>
               <label htmlFor="email" className="block text-[13px] lg:text-[15px] font-medium text-gray-100 mb-1 lg:mb-3 mt-3 lg:mt-5">Email Address</label>
               <input
                 type="email"
                 id="email"
                 className="w-full border border-secondary/50 bg-[#FDFDFD]/30 rounded-md p-2 lg:p-3 text-black placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                 required
               />
             </div>
            
             <div>
               <label htmlFor="message" className="block text-[13px] lg:text-[15px] font-medium text-white  mb-1 lg:mb-3 mt-7 lg:mt-10 ">Your message</label>
               <textarea
                 id="message"
                 rows="3"
                 placeholder="Type your message"
                 className="w-full border  bg-[#FDFDFD]/30  border-secondary/50 text-black rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[13px] lg:placeholder:text-[15px] placeholder:font-light"
                 required
               />
             </div>
             <button className='text-white font-medium px-3 lg:px-5 text-sm lg:text[16px] bg-secondary p-2 rounded-3xl ml-auto flex gap-1 items-center'>Send <IoMdSend className='text-white text-lg lg:text-2xl' /></button>
             </form>
         </div>

       </div>
     </div>
   <Footer />
   </div>
 )
}


export default page;

