import Link from 'next/link';
import React from 'react';
import { RiLoader2Line } from "react-icons/ri";
import { TbBriefcase } from "react-icons/tb";


function AvailableJobs() {
  return (
    <div className='bg-white flex flex-col lg:flex-row p-8 lg:p-28 gap-10 lg:gap-28'>
      <div className='w-[100%] lg:w-[50%] flex flex-col gap-6 lg:gap-12'>
        <h1 className='text-[14px] lg:text-[17px] font-medium'>AVAILABLE JOBS</h1>
        <h2 className='text-[15px] lg:text-[38px] font-semibold'>Exciting Job Opportunities Available!</h2>
        <p className='text-[14px] lg:text-[18px]'>We're hiring! If you're passionate, dedicated, and looking for a rewarding career, we have multiple job openings across various fields.
           Whether you're interested in supporting a kitchen team, providing care as a nanny, maintaining a clean and organized home, or driving with
           care and precision, we have the perfect role for you. Explore our available positions and take the next step
            in your career with us. Apply now and become part of a team that values hard work, integrity, and community</p>
            <Link href='/jobboard'>
            <button className='lg:flex items-center hidden gap-1 border border-secondary/50 p-2 w-[45%] lg:w-[27%] justify-center rounded-2xl hover:bg-secondary hover:text-white'><RiLoader2Line className='text-xl group-hover:text-white' /> Load more</button>
            </Link>
        
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-[100%] lg:w-[55%]'>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] lg:w-[43%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Tutor</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Tutor, you will provide individualized academic support to students of various ages and levels.</p>
          <Link href="/job4">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] lg:w-[43%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Graphic Designer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.....</p>
          <Link href="/job2">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] lg:w-[43%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Web designer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Web Designer, you will be responsible for the visual design and development of our website </p>
          <Link href="/job3">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] lg:w-[43%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>

        <Link href="/jobboard">
          <button className="flex items-center gap-1 border mx-auto text-sm lg:hidden border-secondary/50 p-2 w-[45%] lg:w-[27%] justify-center rounded-2xl hover:bg-secondary hover:text-white">
          <RiLoader2Line className="text-xl group-hover:text-white" /> Load more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AvailableJobs;
