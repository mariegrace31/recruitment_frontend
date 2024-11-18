import React from 'react';
import hr from '../assets/abouthr.png';
import lines from '../assets/linegroup.png';
import Image from 'next/image';
import dot from '../assets/dothr.png';
import { TbBriefcase } from "react-icons/tb";
import Footer from '../components/Footer';
import Link from 'next/link';

function page() {
  return (
    <div className='bg-[#F8FAFF]'>
      <div className='p-20'>
      <div className='bg-gray-300 p-2 rounded-lg w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-44'>
          <h1 className='text-white text-center text-6xl'>Available Jobs</h1>
          <Image src={hr} width={300} height={1} alt='hr' className='mx-auto mt-4' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>

      <Image src={dot} width={1150} height={1} alt='dothr' className='mt-24 mx-auto' />

      <div>
       <div className='grid grid-cols-4 gap-7 w-[100%] p-24 mx-auto'>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
         </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
           </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
           </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
            </Link>
            </div>
          <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-lg'>Software Engineer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-xs'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
          </Link>
            </div>
         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
           <h1 className='font-bold text-lg'>Software Engineer</h1>
           <div className='flex gap-9'>
             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
           </div>
           <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
          <Link href="/jobdetail">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
          </Link>
           </div>
        </div>
      </div>

      <div className='bg-primary p-16 flex justify-between items-center rounded-lg w-[94%] my-14 mx-auto'>
        <div className='flex flex-col gap-10 w-[50%]'>
          <h1 className='font-medium text-white text-[30px]'>Ready to hire an employee?</h1>
          <p className='font-extralight text-white text-[20px]'>Ready to take the next step in your career? Explore our diverse range of available jobs and find the perfect opportunity that aligns with your skills and aspirations</p>
        </div>
        <button className='bg-secondary text-[16px] text-white p-2 px-3 rounded-3xl font-medium'>Contact Us Today</button>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default page;