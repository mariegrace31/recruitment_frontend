"use client";
import React, { useState, useEffect } from 'react';
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import bHr from '../assets/blackhr.png';
import Kelly from '../assets/kelly.png';
import Socrate from '../assets/socrate.png';
import Djasmine from '../assets/Djasmine.png';
import Henry from '../assets/henry.png';
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import ig from '../assets/instagram.png';
import Link from 'next/link';

function TypingEffect() {
  const text = "Learn the story behind LK Recruitment";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 130);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className='bg-[#F5F5FF] p-32 pb-14'>
      <h1 className="text-7xl mx-auto w-[70%] text-center">
        {displayedText}
        <span className="border-r-2 border-black animate-blink">&nbsp;</span>
      </h1>
      <div className='bg-gray-300 p-[5px] mt-20 rounded-lg'>
      <div className="relative bg-cover bg-coverr bg-center rounded-lg ">
      <div className="absolute inset-0 bg-primary opacity-85 z-0 rounded-lg "></div>
      <div className='relative z-10 p-16 flex flex-col justify-center gap-5'>
      <h1 className='uppercase font-semibold text-2xl text-white text-center'>about us</h1>
        <Image src={hr} width={100} height={1} alt='hr' className='mx-auto -mt-4' />
        <p className='text-white font-light text-[15px] leading-7 mt-10 text-center w-[85%] mx-auto'>LK RECRUITMENT is a staffing and recruitment agency based in Rwanda. Our mission focuses on investing in people and shaping a better
           future through empowerment, social responsibility, and promoting diversity, equity, and inclusion. The agency offers a talent-focused 
           approach, providing the right training, competitive salaries, and a strong commitment to making a positive social impact.
        </p>
        <button className='bg-white p-2 rounded-2xl mt-9 border hover:bg-secondary mx-auto items-center text-center hover:text-white hover:border-gray-400'>Contact us</button>
      </div>
      </div>
      </div>
    <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>
      </div>

      <div className='bg-white flex flex-col gap-10 justify-center text-center my-28'>
        <h1 className='uppercase font-semibold text-2xl'>our amazing team</h1>
        <Image src={bHr} width={200} height={1} alt='black hr' className='mx-auto -mt-7'/>
        <p className='w-[30%] mx-auto font-light text-[15px]'>Ready to take the next step in your career? Explore our diverse range of available jobs and find 
          the perfect opportunity that aligns with your skills and aspirations</p>
          <div className='flex gap-7 justify-center'>
 
  <div className="relative group">
    <Image src={Kelly} width={250} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[20px] font-medium">LONETE Kelly</h2>
      <Image src={hr} width={100} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-lg w-[70%]">Chief Executive Officer</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>

 
  <div className="relative group">
    <Image src={Socrate} width={250} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[20px] font-medium">AYIVUGWE Socrate</h2>
      <Image src={hr} width={100} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-lg w-[70%]">Hiring Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>
 
  <div className="relative group">
    <Image src={Henry} width={250} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[20px] font-medium">HIRWA Heritier</h2>
      <Image src={hr} width={100} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-lg w-[70%]">Social Media Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>

  <div className="relative group">
    <Image src={Djasmine} width={250} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[20px] font-medium">Keza Djasmine</h2>
      <Image src={hr} width={100} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-lg w-[70%]">Social Media Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default TypingEffect;

<style jsx>{`
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animate-blink {
    display: inline-block;
    animation: blink 1s step-end infinite;
  }
`}</style>


