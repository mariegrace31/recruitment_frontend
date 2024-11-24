import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import hrImage from '../assets/recru.png';
import resume from '../assets/resume.png';
import skill from '../assets/sico.png';

function Hr() {
  return (
    <div className='mt-16 lg:mt-20'>
      <h1 className='font-normal text-xl lg:text-3xl text-center '>Explore HR News & Tips</h1>
      <p className='text-center text-xs mt-3'>Bring all your employee and customer experiences together with LK Recruitment</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-16 px-5 lg:px-32'>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={hrImage} width={377} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
          <h3 className='px-3'>How to Prepare for a Job Interview</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <Link href='/hrdetail'>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
          </Link>
        </div>

         <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={resume} width={377} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
          <h3 className='px-3'>Resume Writing - Do's and Don's</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Your resume is your first chance to make a good impression. Learn the key do's and don'ts that can make your resume stand out from the competition...</p>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
        </div>

        <div className='rounded-xl border border-black/20 flex flex-col gap-4 pb-6'>
          <Image src={skill} width={377} height={100} alt='hr image' className='rounded-t-xl w-full object-cover' />
          <h3 className='px-3'>Top 5 Soft Skills Employers Look For</h3>
          <p className='px-3 text-[12px] font-light leading-6'>Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...</p>
          <button className='flex items-center gap-1 px-3 text-[13px]'>Learn more <GoArrowRight className='bg-secondary  rounded-2xl p-1 text-white text-2xl' /></button>
      