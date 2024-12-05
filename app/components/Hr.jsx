import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import hrImage from '../assets/recru.png';
import blog2 from '../assets/blogpic.jpeg';
import blog3 from '../assets/blog3.jpeg';

function Hr() {
  return (
    <div className='mt-16 lg:mt-20'>
      <h1 className='font-normal text-xl lg:text-3xl text-center '>Explore HR News & Tips</h1>
      <p className='text-center text-xs mt-3'>Bring all your employee and customer experiences together with LK Recruitment</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-16 px-5 lg:px-32'>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={hrImage} width={377} height={100} alt='hr image' className='rounded-t-xl w-full h-full object-cover' />
          <h3 className='px-3'>How to Prepare for a Job Interview</h3>
          <p className='px-3 text-[14px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <Link href='/hrdetail'>
          <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
          </Link>
        </div>

         <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={blog2} width={377} height={100} alt='hr image' className='rounded-t-xl w-full h-full object-cover' />
          <h3 className='px-3'>LK Recruitment embraces the agenda 2063 for a thriving future.</h3>
          <p className='px-3 text-[14px] font-light leading-6'>LK Recruitment Rwanda recently participated in the “One Africa, One HR” Summit, held at the Kigali Convention Center in Kigali, Rwanda.</p>
          <Link href='/blog2'>
          <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
          </Link> </div>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={blog3} width={377} height={100} alt='hr image' className='rounded-t-xl w-full h-full object-cover' />
          <h3 className='px-3 '>Cracking the Code: How to Read Job Ads Like a Pro</h3>
          <p className='px-3 text-[14px] font-light leading-6'>Tired of applying for jobs and getting nowhere? It might be time to upgrade your job ad reading skills! Job ads aren't just lists of requirements...</p>
          <Link href='/blog3'>
          <button className='flex items-center gap-1 px-3 text-[14px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hr;
