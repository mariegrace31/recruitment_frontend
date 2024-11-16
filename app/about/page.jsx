"use client";
import React, { useState, useEffect } from 'react';
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import lines from '../assets/linegroup.png';

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
      <div className='bg-[#F5F5FF] p-32'>
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


