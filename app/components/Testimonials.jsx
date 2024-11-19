import React from 'react';
import hr from '../assets/hrtestimonial.png';
import Image from 'next/image';
import image from '../assets/testImage.png';

function Testimonials() {
  return (
    <div className='bg-[#F5F5FF] p-6 lg:p-24' id='testimonials'>
      <h1 className='uppercase font-medium text-center text-[14px]'>testimonials</h1>
      <p className='font-semibold text-center text-xl lg:text-3xl mt-3'>Hear what they say about us</p>
      <div className='bg-white mt-16 flex flex-col lg:flex-row rounded-3xl w-[90%] lg:w-[60%] mx-auto'>
        <div className='p-3 lg:p-5'>
          <p className='text-xs leading-7'>"We needed to fill a critical role quickly, and LK Recruitment came through for us. Their team understood our urgent needs and presented
           us with a pool of highly qualified candidates within just a few days. The onboarding process was smooth, and we're delighted with the new employee's performance"</p>
           <Image src={hr} width={500} height={100} alt='hr' className='mt-8' />
           <div className='flex gap-6 mt-4 items-center'>
            <h3 className='text-xs'>Sara Jarhain</h3>
            <p className='text-[8px] lg:text-[10px] bg-secondary/15 p-1 rounded-xl px-2'>HR Manager at COTTAGE HAVEN</p>
           </div>
        </div>
        <Image src={image} width={300} height={100} alt='testimonial' className='rounded-0 lg:rounded-r-3xl' />
      </div>
    </div>
  )
}

export default Testimonials;