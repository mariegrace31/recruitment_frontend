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
import whitehr from '../assets/hrwhite.png';
import image from '../assets/hrImage.png';
import candidate from '../assets/candidate.png';
import employer from '../assets/employer.png';
import Footer from '../components/Footer';

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
      <div className='bg-[#F5F5FF] mt-9 lg:mt-0 p-6 lg:p-32 pb-14'>
      <h1 className="text-3xl lg:text-7xl mx-auto w-[100%] lg:w-[70%] text-center">
        {displayedText}
        <span className="border-r-2 border-black animate-blink">&nbsp;</span>
      </h1>
      <div className='bg-gray-300 p-[5px] mt-8 lg:mt-20 rounded-lg'>
      <div className="relative bg-cover bg-coverr bg-center rounded-lg ">
      <div className="absolute inset-0 bg-primary opacity-85 z-0 rounded-lg "></div>
      <div className='relative z-10 p-7 lg:p-16 flex flex-col justify-center gap-7'>
      <h1 className='uppercase font-semibold text-[35px] lg:text-[45px] text-white text-center'>about us</h1>
        <Image src={hr} width={190} height={1} alt='hr' className='mx-auto -mt-4' />
        <p className='text-white font-light text-[17px] lg:text-[24px] leading-9 mt-10 text-center w-[95%] mx-auto'>LK RECRUITMENT is a staffing and recruitment agency based in Rwanda. Our mission focuses on investing in people and shaping a better
           future through empowerment, social responsibility, and promoting diversity, equity, and inclusion. The agency offers a talent-focused 
           approach, providing the right training, competitive salaries, and a strong commitment to making a positive social impact.
        </p>
        <button className='bg-white p-2 rounded-2xl mt-4 lg:mt-9 border text-[20px] lg:text-[24px] hover:bg-secondary mx-auto items-center text-center hover:text-white hover:border-gray-400'>Contact us</button>
      </div>
      </div>
      </div>
    <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24 z-10 object-cover'/>
      </div>

      <div className='bg-white flex flex-col gap-6 lg:gap-10 justify-center text-center my-10 lg:my-28'>
        <h1 className='uppercase font-semibold text-xl lg:text-5xl'>our amazing team</h1>
        <Image src={bHr} width={450} height={1} alt='black hr' className='mx-auto -mt-6 w-[50%] md:w-[450px]'/>
        <p className='w-[70%] lg:w-[45%] mx-auto font-light text-[15px] lg:text-[20px]'>Ready to take the next step in your career? Explore our diverse range of available jobs and find 
          the perfect opportunity that aligns with your skills and aspirations</p>
          <div className='flex gap-7 justify-center'>
 
  <div className="relative group">
    <Image src={Kelly} width={300} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[30px] font-medium">LONETE Kelly</h2>
      <Image src={hr} width={190} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-2xl w-[80%]">Chief Executive Officer</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>

 
  <div className="relative group">
    <Image src={Socrate} width={300} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[30px] font-medium">AYIVUGWE Socrate</h2>
      <Image src={hr} width={190} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-2xl w-[80%]">Hiring Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>
 
  <div className="relative group">
    <Image src={Henry} width={300} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[30px] font-medium">HIRWA Heritier</h2>
      <Image src={hr} width={190} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-2xl w-[80%]">Social Media Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>

  <div className="relative group">
    <Image src={Djasmine} width={300} height={100} alt="kelly" className="object-cover transition-all duration-300 group-hover:opacity-50" />
    <div className="absolute inset-0 rounded-md cursor-pointer bg-secondary bg-opacity-70 flex gap-3 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h2 className="text-white text-[30px] font-medium">Keza Djasmine</h2>
      <Image src={hr} width={190} height={1} alt='hr' className='-mt-2' />
      <p className="text-white text-2xl w-[80%]">Social Media Manager</p>
      <div className='flex items-center gap-5'>
        <Link href='#'><FaLinkedinIn   className='p-1 text-xl bg-[#0076B2] text-white'/></Link>
        <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-2xl p-1 rounded-3xl' /></Link>
        <Image src={ig} width={20} height={18} alt='instagram' />
      </div>
    </div>
  </div>
</div>
   </div>

   <div className='relative bg-coverr bg-cover bg-center p-8 lg:p-16 '>
   <div className="absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-90 z-0"></div>
   <div className='relative z-10 flex flex-col justify-center'>
   <h1 className='uppercase font-semibold text-[25px] lg:text-[50px] text-white text-center'>why choose us</h1>
    <Image src={hr} width={200} height={1} alt='hr' className='mx-auto mt-2' />
    <p className='text-white font-light text-[16px] lg:text-[20px] w-[90%] lg:w-[50%] text-center mx-auto mt-7'>Empowering job seekers and employers alike, we connect talent with opportunities.</p>
   
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] mx-auto mt-14'>

      <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
        <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>01</h1>
        <h4 className='font-semibold text-[18px] lg:text-[23px] text-black'>Tailored Staffing Solutions</h4>
        <p className='text-black font-light text-[15px]'>LK RECRUITMENT provides customized hiring options, from temporary roles to permanent
         positions, ensuring the best match for your business needs.</p>
      </div>

      <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
        <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>02</h1>
        <h4 className='font-semibold text-[18px] lg:text-[23px] text-black'>Expertise and Efficiency</h4>
        <p className='text-black font-light text-[15px]'>With deep industry knowledge and a fast, streamlined hiring process, we make recruitment smooth and hassle-free.</p>
      </div>

      <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
        <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>03</h1>
        <h4 className='font-semibold text-[18px] lg:text-[23px] text-black'>Commitment to Diversity and Responsibility</h4>
        <p className='text-black font-light text-[15px]'>We prioritize diversity, inclusion, and social responsibility, helping you build a strong, socially conscious workforce.</p>
      </div>

    </div>
   </div>

   </div>

   <div className='bg-[#F5F5FF] p-5 lg:p-32'>
    <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
    <div className='bg-secondary p-4 flex flex-col rounded-none lg:rounded-l-lg'>
      <h1 className='text-[80px] lg:text-[120px] text-white'>&ldquo;</h1>
      <p className='text-white text-[18px] lg:text-[22px] font-light -mt-11 lg:-mt-20'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation Manage an efficient and effective CX operation
       Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation, Manage an efficient and effective CX operation</p>
       <Image src={whitehr} width={100} height={1} alt='white hr' className='my-10' />
    </div>
    <Image src={image} width={500} height={100} alt='hr image'  />
    </div>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 bg-white p-6 lg:p-20 gap-10 lg:gap-32 mt-16 ">
      <div className="p-4 bg-gray-100 py-3 lg:py-5 rounded-lg">
        <div className="flex bg-gradient-center p-8 rounded-lg ">
          <div className="flex flex-col gap-2 lg:gap-5 w-[90%] lg:w-[60%]">
          <h1 className="font-bold text-[15px] lg:text-xl">For employers</h1>
          <p className="text-sm lg:text-lg font-light">Investing in people shaping in better future investing in people shaping in better future</p>
          <button className="bg-primary text-white font-bold w-[100%] text-sm lg:text-lg lg:w-[50%] rounded-3xl p-2 lg:p-3">Post Your Job</button>
          </div>
          <Image
           src={employer}
           width={170}
           height={100}
           alt="Employer png"
          />
        </div>
      </div>
      <div className="p-4 bg-gray-100 py-3 lg:py-5 rounded-lg">
        <div className="flex bg-gradient-center p-8 rounded-lg ">
          <div className="flex flex-col gap-2 lg:gap-5 w-[90%] lg:w-[60%]">
          <h1 className="font-bold text-[15px] lg:text-xl">For candidates</h1>
          <p className="text-sm lg:text-lg font-light">Investing in people shaping in better future investing in people shaping in better future</p>
          <button className="bg-primary text-white w-[100%] font-bold lg:w-[40%] rounded-3xl p-2 lg:p-3">Register</button>
          </div>
          <Image
           src={candidate}
           width={170}
           height={100}
           alt="Candidate png"
          />
        </div>
      </div>
    </div>
    <Footer />
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


