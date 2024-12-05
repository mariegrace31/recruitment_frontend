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
      <div className='p-5 lg:p-20'>
      <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
        <div className='bg-primary relative rounded-lg p-16 lg:p-44'>
          <h1 className='text-white text-center text-xl lg:text-6xl'>Available Jobs</h1>
          <Image src={hr} width={300} height={1} alt='hr' className='mx-auto mt-2 lg:mt-4 z-10 w-[120px]' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24 z-10 object-cover'/>

      <Image src={dot} width={1150} height={1} alt='dothr' className='mt-5 lg:mt-24 mx-auto' />

      <div>
       <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 w-[100%] p-6 lg:p-24 mx-auto'>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Software Engineer</h1>
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
          <h1 className='font-bold text-[16px] lg:text-lg'>Caring Nanny Needed</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Seeking a compassionate and dependable Nanny to provide exceptional care and support for children</p>
          <Link href="/job5">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
           </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Content Creator</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Content Creator, you will be the voice of our brand, responsible for developing and producing high-quality..</p>
          <Link href="/job9">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
              <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Tutor</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Tutor, you will provide individualized academic support to students of various ages and levels.</p>
          <Link href="/job4">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
              <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Graphic Designer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.....</p>
          <Link href="/job2">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
              <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Web designer</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Web Designer, you will be responsible for the visual design and development of our website ...</p>
          <Link href="/job3">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
              <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Reliable Maid Needed</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>Looking for a hardworking and trustworthy Maid to help maintain a clean and organized home.</p>
          <Link href="/job6">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Community Manager</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>JJoin us as a Community manager and make a lasting impact by fostering connections, promoting collaboration.</p>
          <Link href="/job8">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
           </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Chef Cook</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As a Chef Cook, you will be responsible for preparing and cooking high-quality meals for our clients.</p>
          <Link href="/job12">
                <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
                  More Details
                </button>
              </Link>
              </div>
        <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Admin assistant</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-sm'>As an Administrative Assistant, you will be responsible for providing comprehensive administrative support...</p>
          <Link href="/job10">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
            </Link>
            </div>
          <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
          <h1 className='font-bold text-[16px] lg:text-lg'>Commercial Assistant</h1>
          <div className='flex gap-9'>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
            <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
          </div>
          <p className='text-xs'>As a Commercial Assistant, you will play a crucial role in supporting our sales efforts and ensuring smooth business...</p>
          <Link href="/job11">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
          </Link>
            </div>
         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
           <h1 className='font-bold text-[16px] lg:text-lg'>Experienced Driver</h1>
           <div className='flex gap-9'>
             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
           </div>
           <p className='text-sm'>Looking for a professional and reliable Driver to ensure smooth, safe, and timely transportation.</p>
          <Link href="/job7">
            <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
              More Details
            </button>
          </Link>
           </div>
        </div>
      </div>

      <div className='bg-primary p-4 lg:p-16 flex flex-col lg:flex-row justify-between items-center rounded-lg w-[94%] my-4 lg:my-14 mx-auto'>
        <div className='flex flex-col gap-5 lg:gap-10 w-[90%] lg:w-[50%]'>
          <h1 className='font-medium text-white text-[15px] text-center lg:text-left lg:text-[30px]'>Ready to hire an employee?</h1>
          <p className='font-extralight text-center lg:text-left text-white text-[15px] lg:text-[20px]'>Find your next great team member today! We're here to help you connect with top talent that will drive your business forward. Let's build your dream team.</p>
        </div>
        <button className='bg-secondary text-[13px] mt-5 lg:mt-0 lg:text-[16px] text-white p-2 px-3 rounded-3xl font-medium'>Contact Us Today</button>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default page;