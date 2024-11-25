import React from 'react';
import icon from '../assets/jobIcon.png';
import hr from '../assets/hrjob.png';
import Image from 'next/image';

function Jobs() {
  return (
    <div className='flex flex-col lg:flex-row mx-auto justify-center bg-tertiary p-10 lg:p-14 gap-12 lg:gap-32'>
      <Image src={icon} width={650} height={100} alt='job illustrator' />
      <div className='flex flex-col gap-4 w-[100%]'>
      <h1 className='text-lg font-medium'>JOB OPPORTUNITIES</h1>
      <h3 className='font-semibold text-2xl'>Unlock Your Potential with Career Pathways</h3>
        <div className='flex flex-col gap-3 mt-4'>
          <h3 className='font-semibold text-[19px]'>Career Growth Paths</h3>
          <p className='text-[13px] w-[100%]'>At every stage of your professional journey, clear career growth paths are essential for success. Whether you're just starting out or looking to climb the ladder, our well-defined pathways are designed to help you achieve your ambitions. With the right skills, support, and guidance, you can reach your goals and build a career that brings both fulfillment and success.</p>
          <Image src={hr} width={430} height={100} alt='line' />
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <h3 className='font-semibold text-[19px]'>Job Openings</h3>
          <p className='text-[13px] w-[100%]'>Explore a wide range of job openings that cater to various skills, interests, and career stages. Whether you're seeking a role to launch your career or a position to advance your professional journey, we have something for everyone. Our diverse opportunities are designed to align with your passion, skill set, and aspirations. Apply today and take the first step toward your next great career move.</p>
          <Image src={hr} width={430} height={100} alt='line' />
        </div>
        <div className='flex flex-col gap-3 mt-3' >
          <h3 className='font-semibold text-[19px]'>Tailored Career Guidance</h3>
          <p className='text-[13px] w-[100%]'>Navigating your career path can be challenging, but with personalized guidance, you can move forward with confidence. We offer one-on-one support to help you identify your strengths, set clear goals, and make informed decisions. Whether you’re transitioning to a new role or seeking growth in your current position, our tailored career advice will help you stay on track and achieve your professional aspirations</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs;