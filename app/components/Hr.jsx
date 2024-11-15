import React from 'react';
import image from '../assets/hrImage.png';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";

function Hr() {
  return (
    <div className='mt-20'>
      <h1 className='font-normal text-3xl text-center '>Explore HR News & Tips</h1>
      <p className='text-center text-xs mt-3'>Bring all your employee and customer experiences together with LK Recruitment</p>
      <div className='grid grid-cols-3 gap-6 p-16 px-32'>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={image} width={377} height={100} alt='hr image' className='rounded-t-xl' />
          <h3 className='px-3'>How to Prepare for a Job Interview</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
        </div>

         <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={image} width={377} height={100} alt='hr image' className='rounded-t-xl' />
          <h3 className='px-3'>How to Prepare for a Job Interview</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
        </div>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={image} width={377} height={100} alt='hr image' className='rounded-t-xl' />
          <h3 className='px-3'>How to Prepare for a Job Interview</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
        </div>

      </div>
    </div>
  )
}

export default Hr;