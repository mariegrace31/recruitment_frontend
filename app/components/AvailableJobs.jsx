import Link from 'next/link';
import React from 'react';
import { RiLoader2Line } from "react-icons/ri";
import { TbBriefcase } from "react-icons/tb";

function AvailableJobs() {
  return (
    <div className='bg-white flex flex-col lg:flex-row p-8 lg:p-28 gap-10 lg:gap-28'>
      <div className='w-[100%] lg:w-[50%] flex flex-col gap-6 lg:gap-12'>
        <h1 className='text-[17px] font-medium'>AVAILABLE JOBS</h1>
        <h2 className='text-[20px] lg:text-[38px] font-semibold'>Ready Jobs To Apply In November</h2>
        <p className='text-[14px] lg:text-[18px]'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation Manage an efficient and
         effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation
         </p>
         <button className='flex items-center gap-1 border border-secondary/50 p-2 w-[45%] lg:w-[27%] justify-center rounded-2xl hover:bg-secondary hover:text-white'><RiLoader2Line className='text-xl group-hover:text-white' /> Load more</button>
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
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px]'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[40%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AvailableJobs;