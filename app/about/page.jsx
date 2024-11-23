"use client";
import React, { useState, useEffect } from 'react';
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import bHr from '../assets/blackhr.png';
import Kelly from '../assets/team1.png';
import Socrate from '../assets/socrate.png';
import Djasmine from '../assets/Djasmine.png';
import Henry from '../assets/henry.png';
import Link from 'next/link';
import whitehr from '../assets/hrwhite.png';
import candidate from '../assets/candidate.png';
import employer from '../assets/employer.png';
import Footer from '../components/Footer';
import team from '../assets/teamm.jpg.png';
import { LuArrowRight } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import liine from '../assets/Line61.png';
import { GrUserManager } from "react-icons/gr";

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
        <p className='w-[70%] lg:w-[45%] mx-auto font-light text-[15px] lg:text-[20px]'>A Group of Passionate, Talented Individuals Committed to Your Success!Together, we bring diverse skills, creativity, and dedication to deliver outstanding results</p>
          <div className='flex gap-7 justify-center'>
 
  <div className="flex gap-6 mx-auto px-20 mt-9">
    <Image src={Kelly} width={500} height={1} alt="kelly" className="bg-[#1A77B9]/10 p-2 rounded-xl" />
    <div className="p-5 rounded-xl bg-[#1A77B9]/10 ">
      <div className='flex justify-between'>
        <h3 className='flex gap-2 items-center bg-white p-3 rounded-xl'><FaUser className='text-xl'/>LONETE Kelly</h3>
        <h3 className='flex gap-2 items-center bg-white p-3 rounded-xl'> <GrUserManager className='text-xl' />Chief Executive Ofiicer</h3>
      </div>
      <div className='flex flex-col gap-5 bg-white p-3 mt-6 rounded-xl'>
        <p className='text-left'>Welcome! My name is LONETE Kelly, and I'm the CEO of LK RECRUITMENT. For over 15 years, I've been driven by a simple yet powerful belief: Every individual has the potential to achieve amazing things, and every organization deserves the talent to make that happen.</p>
        <p className='text-left'>My journey has been a thrilling adventure of connecting people with opportunities, witnessing careers blossom, and seeing businesses soar to new heights. It's a passion that fuels everything we do at LK RECRUITMENT. At LK RECRUITMENT, we believe in a world where talent flourishes.
           We're not just about filling a vacancy; we're about building a future where individuals and organizations achieve their full potential together.</p>
           <p className='text-left'>We embrace diversity in all its forms because we know that a world where unique skills and backgrounds are valued is a world full of possibilities. My career has been an incredible journey of learning, exploration, and growth. From bustling cities to diverse cultures, I've witnessed
            the power of human connection and the incredible potential within every individual. <span className='text-secondary underline cursor-pointer'>Read More</span> </p>
      </div>

      <LuArrowRight className='text-4xl text-white rounded-3xl mt-4 ml-auto bg-black p-2' />
      
    </div>
  </div>

</div>
   </div>

   <div className='relative bg-coverr bg-cover bg-center p-8 lg:p-16 '>
   <div className="absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-90 z-0"></div>
   <div className='relative z-10 flex flex-col justify-center'>
   <h1 className='uppercase font-semibold text-[25px] lg:text-[50px] text-white text-center'>why choose us</h1>
    <Image src={hr} width={200} height={1} alt='hr' className='mx-auto mt-2' />
    <p className='text-white font-light text-[16px] lg:text-[20px] w-[90%] lg:w-[50%] text-center mx-auto mt-7'>Choose us for unmatched expertise, personalized solutions, and a commitment to your success.</p>
   
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

   <div className='bg-white flex flex-col gap-6 lg:gap-10 justify-center text-center my-10 lg:my-28 '>
    <h1 className='font-semibold text-xl lg:text-5xl'>OUR VALUES</h1>
    <Image src={bHr} width={150} height={1} alt='black hr' className='mx-auto -mt-6 w-[50%] md:w-[250px]'/>
    <p className='w-[70%] lg:w-[45%] mx-auto font-light text-[15px] lg:text-[20px]'>Guided by integrity, driven by innovation, and committed to excellence - our values define who we are and how we serve you</p>
    
    <div className='grid grid-cols-3 p-20 w-[85%] mx-auto justify-center items-center gap-10'>
      <div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Integrity</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Doing the right thing"</p>
        <p className='font-light text-left text-[15px]'>Be transparent with clients and candidates, treat everyone fairly, and act with integrity.</p>
      </div>
      <div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Innovation</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Finding new ways to connect"</p>
        <p className='font-light text-left text-[15px]'>Utilize technology to develop new recruitment methods and stay ahead of trends.</p>
      </div>
      <div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Ubuntu</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Humanity towards others"</p>
        <p className='font-light text-left text-[15px]'>Utilize technology to develop new recruitment methods and stay ahead of trends.</p>
      </div>
      <div div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Empowerment</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Supporting individual growth"</p>
        <p className='font-light text-left text-[15px]'>Offer career coaching and development programs to support growth.</p>
      </div>
      <div div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Community Engagement</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Giving back and making a difference"</p>
        <p className='font-light text-left text-[15px]'>Partner with organizations focused on education and social justice.</p>
      </div>
      <div div className='border border-gray-500 p-3 rounded-lg'>
        <h3 className='font-semibold text-[20px] text-left'>Empowerment</h3>
        <p className='text-secondary font-light text-left text-[15px] mt-4'>"Supporting individual growth"</p>
        <p className='font-light text-left text-[15px]'>Offer career coaching and development programs to support growth.</p>
      </div>
      
    </div>

   </div>


   <div className='bg-[#F5F5FF] p-5 lg:p-32'>
    <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
    <div className='bg-secondary p-4 flex flex-col rounded-none lg:rounded-l-lg'>
      <div className='flex gap-8 items-center'>
      <h1 className='text-[80px] lg:text-[190px] text-white'>&ldquo;</h1>
      <p className='text-white text-3xl font-medium -mt-20'>Stay Ahead with Industry Insights.</p>
      </div>
      <p className='text-white text-[18px] lg:text-[22px] font-light -mt-24'>Our team stays on top of the latest trends, innovations, and best practices in the industry to provide you with valuable insights. On this page, we share expert advice, market updates, and in-depth analysis to help you make informed decisions and stay ahead of the competition. Whether you're looking for the latest industry trends, tips for growth, or guidance on challenges you may face, we've got you covered.</p>
       <Image src={whitehr} width={100} height={1} alt='white hr' className='my-10' />
    </div>
    <Image src={team} width={500} height={100} alt='hr image'  />
    </div>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 bg-white p-6 lg:p-20 gap-10 lg:gap-32 mt-16 ">
      <div className="p-4 bg-gray-100 py-3 lg:py-5 rounded-lg">
        <div className="flex bg-gradient-center p-8 rounded-lg ">
          <div className="flex flex-col gap-2 lg:gap-5 w-[90%] lg:w-[60%]">
          <h1 className="font-bold text-[15px] lg:text-xl">For employers</h1>
          <p className="text-sm lg:text-lg font-light">Post your job today & connect with skilled candidates ready to make an impact. Let's build a strong team together.</p>
          <button className="bg-primary text-white font-bold w-[100%] text-sm lg:text-lg lg:w-[65%] rounded-3xl p-2 lg:p-3">Post Your Job</button>
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
          <p className="text-sm lg:text-lg font-light">Apply & join a team that values talent, growth, & opportunity. We're excited to see what you can bring to the table.</p>
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


