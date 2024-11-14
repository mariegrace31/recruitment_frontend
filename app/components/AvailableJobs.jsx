import React from 'react';
import { RiLoader2Line } from "react-icons/ri";
import { TbBriefcase } from "react-icons/tb";

function AvailableJobs() {
  return (
    <div className='bg-white flex p-20 gap-28'>
      <div className='w-[60%] flex flex-col gap-10'>
        <h1 className='text-sm font-medium'>AVAILABLE JOBS</h1>
        <h2 className='text-3xl font-semibold'>Ready Jobs To Apply In November</h2>
        <p className='text-sm'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation Manage an efficient and
         effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation
         </p>
         <button className='flex items-center gap-1 border border-secondary/50 p-2 w-[27%] justify-center rounded-2xl text-[14px] hover:bg-secondary hover:text-white'><RiLoader2Line className='text-xl group-hover:text-white' /> Load more</button>
      </div>
      <div className='grid grid-cols-2 gap-5 w-[80%]'>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-5 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-sm'>Software Engineer</h1>
          <div className='flex gap-14'>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-[10px]'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[30%] ml-auto text-[11px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-5 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-sm'>Software Engineer</h1>
          <div className='flex gap-14'>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-[10px]'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[30%] ml-auto text-[11px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-5 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-sm'>Software Engineer</h1>
          <div className='flex gap-14'>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-[10px]'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[30%] ml-auto text-[11px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
        </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-5 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-sm'>Software Engineer</h1>
          <div className='flex gap-14'>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[10px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-[10px]'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <button className='bg-[#E0E6F7] p-2 rounded-md w-[30%] ml-auto text-[11px] text-secondary group-hover:bg-secondary group-hover:text-white'>More Details</button>
        </div>
      </div>
    </div>
  )
}

export default AvailableJobs;