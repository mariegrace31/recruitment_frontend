"use client"
import React, { useState } from "react";
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import Link from 'next/link';
import { MdOutlineContentCopy } from "react-icons/md";
import { PiShareFatFill } from "react-icons/pi";
import logo from '../assets/navLogo.png';
import gray from '../assets/grayhr.png';
import Footer from '../components/Footer';
 

function Jobdetail() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (e) => {
    const element = e.target;
    setIsAtBottom(element.scrollHeight - element.scrollTop === element.clientHeight);
  };

  return (
    <div>
      <div className='bg-primary p-52'>
        <h1 className='text-white text-center text-6xl'>Job Details</h1>
        <Image src={hr} width={250} height={1} alt='hr' className='mx-auto mt-4' />
      </div>

      <div className='bg-white p-32 flex gap-32'>
      <div className='w-[50%]'>
        <h1 className='text-3xl font-medium'>Software Dev</h1>
        <div className='flex flex-col gap-11 border border-gray-400 py-5 p-3 mt-10 rounded-lg'>
          <h1 className='text-xl'>Overview</h1>
          <p className='text-[14px]'>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labogggris nisi ut galiquip ex ea commodo consequat.
             Duis aute irure dolor inelit esse cillum dolore eu fugiat nu sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='text-[14px]'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
          <p className='text-[14px]'>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
        </div>
        <div
      className={`flex flex-col gap-8 border border-gray-400 ${
        isAtBottom ? "border-b-gray-400" : "border-b-0"
      } py-5 p-3 mt-10 rounded-lg h-[251px] overflow-y-auto`}
      onScroll={handleScroll}
    >
      <h1 className="text-xl">Job Description</h1>
      <p className="text-[14px]">
        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in elit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='text-[14px]'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
          <p className='text-[14px]'>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
    </div>

      </div>

      <div className='flex flex-col gap-24 w-[50%] -mt-52'>
        <div className='bg-secondary p-4 w-[100%] py-10 border-4 border-white rounded-xl'>
          <div className='flex items-center gap-2 mt-10 mb-20'>
          <Image
          src={logo}
          width={40}
          height={40}
          alt="Logo"
        />
            <div className='flex flex-col'>
              <h2 className='text-white font-light'>Company</h2>
              <h3 className='text-4xl text-white'>Mayllos</h3>
            </div>
          </div>
          <div className='flex justify-between mb-4'>
            <h3 className='font-light text-[#ECEDF2]'>Monthly Salary:</h3>
            <p className='font-light text-[#ECEDF2]'>200,000 Rwf</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Type:</h3>
            <p className='font-light text-[#ECEDF2]'> Full Time, Part Time</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Location:</h3>
            <p className='font-light text-[#ECEDF2]'> Kigali/Rwanda</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Type:</h3>
            <p className='font-light text-[#ECEDF2]'>Full Time, Part Time</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Contact Us:</h3>
            <p className='font-light text-[#ECEDF2]'>0784 673 524</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>E-mail:</h3>
            <p className='font-light text-[#ECEDF2]'>info.mayllos@gmail.com</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='text-center'>
          <button className='bg-white text-black p-2 w-[80%] mt-16 mb-12 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl'>Apply now</button>
          </div>
         
        </div>

        <div className='p-5 border border-gray-400 rounded-lg '>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-black/50 text-xl font-light'>Share with friends</h1>
              <Image src={gray} width={170} height={1} alt='hr' className='mt-2 ml-1' />
            </div>
            <p className='text-black/50 flex gap-1 items-center text-[13px]'>Copy link < MdOutlineContentCopy className='text-black/70 text-xl' /></p>
          </div>
          <div className='flex justify-between mt-10 items-center'>
          <div className='flex gap-3 items-center'>
          <Link href='#'><IoLogoWhatsapp   className='p-1 text-[40px] text-[#60D669] bg-white'/></Link>
          <Link href='#'><FaLinkedinIn   className='p-1 text-3xl bg-[#0076B2] rounded-[10px] text-white'/></Link>
          <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-3xl p-1 rounded-3xl' /></Link>
          </div>
          <PiShareFatFill className='text-3xl text-[#1A77B9]/50' />
          </div>
        </div>

      </div>

      </div>
      <Footer />
    </div>
  )
}

export default Jobdetail;