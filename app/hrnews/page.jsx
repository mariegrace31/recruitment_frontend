import React from 'react';
import hr from '../assets/abouthr.png';
import lines from '../assets/linegroup.png';
import Image from 'next/image';
import blog2 from '../assets/blog2.png';
import { GoArrowRight } from "react-icons/go";
import Footer from '../components/Footer';
import Link from 'next/link';
import { RiLoader2Line } from 'react-icons/ri';
import hrImage from '../assets/recru.png';
import resume from '../assets/resume.png';
import skill from '../assets/sico.png';

function page() {
  return (
    <div className='bg-white'>
      <div className='p-20'>
      <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-44 relative'>
          <h1 className='text-white text-center text-6xl'>HR News & Tips</h1>
          <Image src={hr} width={400} height={1} alt='hr' className='mx-auto mt-4 z-10' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>

      <div className='grid grid-cols-3 gap-6 mt-32 p-16 px-3'>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
        <Image src={hrImage} width={401} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
        <h3 className='px-3 text-[16px]'>How to Prepare for a Job Interview</h3>
        <p className='px-3 text-[14px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
        <Link href='/hrdetail'>
       <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
       </Link>
      </div>

       <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
       <Image src={blog2} width={401} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
       <h3 className='px-3 text-[16px]'>LK Recruitment embraces the agenda 2063 for a thriving future.</h3>
       <p className='px-3 text-[14px] font-light leading-6'>LK Recruitment Rwanda recently participated in the “One Africa, One HR” Summit, held at the Kigali Convention Center in Kigali, Rwanda. </p>
       <Link href='/blog2'>
       <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
       </Link>
       </div>

      <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
      <Image src={skill} width={401} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
      <h3 className='px-3 text-[16px]'>Top 5 Soft Skills Employers Look For</h3>
       <p className='px-3 text-[14px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
       <Link href='#'>
       <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
       </Link>
       </div>

       </div>
       <button className='flex items-center gap-1 border border-secondary/50 p-3 text-lg w-[15%] mx-auto my-14 justify-center rounded-3xl hover:bg-secondary hover:text-white'><RiLoader2Line className='text-xl group-hover:text-white' /> Load more</button>
      </div>
      <Footer />
    </div>
  )
}

export default page;