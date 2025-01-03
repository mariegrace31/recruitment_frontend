"use client";

import React, { useState, useEffect } from 'react';
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import bHr from '../assets/blackhr.png';
import Kelly from '../assets/team1.png';
import Socrate from '../assets/socr.png';
import Djasmine from '../assets/dja.jpeg';
import whitehr from '../assets/hrwhite.png';
import Footer from '../components/Footer';
import team from '../assets/teamm.jpg.png';
import { LuArrowRight } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import values from '../assets/values.png';
import { motion } from 'framer-motion';

const cards = [
 {
   image: Kelly,
   name: 'Kelly',
   position: 'Chief Executive Officer',
   description1: `Welcome! My name is LONETE Kelly, and I'm the CEO of LK RECRUITMENT.
     For over 15 years, I've been driven by a simple yet powerful belief:
     Every individual has the potential to achieve amazing things, and every organization deserves the talent to make that happen.`,
   description2: `My journey has been a thrilling adventure of connecting people with opportunities, witnessing careers blossom, and seeing businesses soar to new heights. It's a passion that fuels everything we do at LK RECRUITMENT. At LK RECRUITMENT, we believe in a world where talent flourishes. We're not just about filling a vacancy; we're about building a future where individuals and organizations achieve their full potential together.`,
     description3:`We embrace diversity in all its forms because we know that a world where unique skills and backgrounds are valued is
     a world full of possibilities. My career has been an incredible journey of learning, exploration, and growth. From bustling cities to diverse cultures, I've witnessed the power of human connection and the incredible potential within every individual.`
    },
    {
      image: Socrate ,
      name: 'Socrate',
      position: 'Hiring Manager',
      description1: `"Live by lifting others" - Davido Adeleke This quote deeply resonates with me.`,
        description2: `I believe in building a world where everyone has the opportunity to shine.I'm AYIVUGWE Socrate, and I'm passionate about organizing, coordinating, and learning. I've been working professionally for 5 years, and I truly believe in the power of strong communication and teamwork. `,
        description3: `I've learned that everyone has unique skills and potential, and I'm dedicated to helping others find their stage to shine. I understand the challenges of professional life firsthand.
         I once had to step away from my job and had to work hard to find a new one.This experience solidified my belief that everyone deserves support and guidance, especially during difficult times. I'm excited to contribute my passion and skills to LK RECRUITMENT RWANDA Ltd. and to help create a positive and supportive environment for everyone to thrive. `,
    },
    {
      image: Djasmine,
      name: 'Djasmine',
      position: 'Administrative Assistant',
      description1: `My name is Keza Djasmine, `,
        description2: `I am an administrative assistant at LK Recruitment. With a passion for efficient organization and a strong attention to detail, I  am specialize in providing exceptional support in administrative tasks, ensuring smooth operations in a fast-paced environment.`,
        description3: `At LK Recruitment, I work closely with the team to streamline processes and assist in recruitment efforts, always striving to deliver top-notch services to clients and candidates.
        I am committed to personal and professional growth and always eager to take on new challenges.I am committed to personal and professional growth and always eager to take on new challenges.`,
    },
   ];
   
   
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
   
   
    const [currentCard, setCurrentCard] = useState(0);
   
   
    const handleNext = () => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    };
   
   
    const { image, name, position, description1, description2, description3 } = cards[currentCard];
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
          when: "beforeChildren",
        },
      },
    };

    const childVariants = {
      hidden: { opacity: 0, x: '-50%' },
      show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
    };
   
    return (
      <div className="">
        <div className='bg-[#F5F5FF] mt-0 p-6 lg:p-32 pb-14'>
        <h1 className="text-2xl lg:text-7xl mx-auto w-[100%] mt-20 lg:mt-10 lg:w-[70%] text-center">
          {displayedText}
          <span className="border-r-2 border-black animate-blink">&nbsp;</span>
     </h1>
     <div className='bg-gray-300 p-[5px] mt-8 lg:mt-20 rounded-lg'>
     <div className="relative bg-cover bg-coverr bg-center rounded-lg ">
     <div className="absolute inset-0 bg-primary opacity-85 z-0 rounded-lg "></div>
     <div className='relative z-10 p-7 lg:p-16 flex flex-col justify-center gap-7'>
     <h1 className='uppercase font-semibold text-[25px] lg:text-[45px] text-white text-center'>about us</h1>
       <Image src={hr} width={190} height={1} alt='hr' className='mx-auto -mt-4 w-[95px] lg:w-[180px]' />
       <p className='text-white font-light text-[14px] lg:text-[24px] leading-9 mt-2 lg:mt-10 text-center w-[95%] mx-auto'>LK RECRUITMENT is a staffing and recruitment agency based in Rwanda. Our mission focuses on investing in people and shaping a better
          future through empowerment, social responsibility, and promoting diversity, equity, and inclusion. The agency offers a talent-focused
          approach, providing the right training, competitive salaries, and a strong commitment to making a positive social impact.
       </p>
       <button className='bg-white p-2 rounded-2xl mt-4 lg:mt-9 border text-[15px] lg:text-[24px] hover:bg-secondary mx-auto items-center text-center hover:text-white hover:border-gray-400'>Contact us</button>
     </div>
     </div>
     </div>
   <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24 z-10 object-cover'/>
     </div>


     <div className='bg-white flex flex-col gap-6 lg:gap-10 justify-center text-center my-10 lg:my-28'>
       <h1 className='uppercase font-semibold text-xl lg:text-5xl'>our amazing team</h1>
       <Image src={bHr} width={450} height={1} alt='black hr' className='mx-auto -mt-6 w-[50%] md:w-[450px]'/>
       <p className='w-[70%] lg:w-[45%] mx-auto font-light text-[14px] lg:text-[20px]'>A Group of Passionate, Talented Individuals Committed to Your Success!Together, we bring diverse skills, creativity, and dedication to deliver outstanding results</p>
         <div className='flex gap-7 justify-center'>
         <div className="flex flex-col lg:flex-row gap-6 mx-auto px-5 lg:px-20 mt-9">
         {!isExpanded && (
 <Image
 src={image}
 width={500}
 height={1}
 alt={name}
 className="bg-[#1A77B9]/10 p-2 rounded-xl"
/>
)}

<div className={`p-2 lg:p-5 rounded-xl bg-[#1A77B9]/10 ${isExpanded ? 'w-full' : ''}`}>
<div className="flex justify-between">
<h3 className="flex text-[10px] lg:text-lg gap-2 items-center bg-white p-2 lg:p-3 rounded-xl">
  <FaUser className="text-sm lg:text-xl" />
  {name}
</h3>
<h3 className="flex gap-2 text-[10px] lg:text-lg items-center bg-white p-2 lg:p-3 rounded-xl">
  <GrUserManager className="text-sm lg:text-xl" />
  {position}
</h3>
</div>


<div className="flex flex-col gap-5 bg-white p-3 mt-6 justify-center rounded-xl">
<p className="text-left text-sm lg:text-lg">{description1}</p>
<p className="text-left text-sm lg:text-lg">{description2}</p>
<p className="text-left text-sm lg:text-lg">{description3} {!isExpanded && currentCard === 0 && (
          <span className="text-secondary underline cursor-pointer text-sm lg:text-lg" onClick={toggleReadMore}> Read More</span>
        )}
</p>


{isExpanded && (
  <div>
     <p className="text-left mt-3 text-sm lg:text-lg">These experiences have shaped my vision for LK RECRUITMENT: a company that connects talent across borders, understands the unique needs of global businesses, and empowers individuals to reach their full potential.I'm driven by a deep passion for human resources, recruitment,training, and communication - fields that are all about building strong relationships and unlocking potential.</p>
              <p className="text-left mt-3 text-sm lg:text-lg">My leadership style is built on collaboration, open communication, and a genuine belief in empowering my team to achieve their dreams. I'm passionate about creating a workplace where everyone feels valued and empowered to make a difference.At LK RECRUITMENT, we believe in building relationships, not just transactions. We get to know both our clients and candidates deeply, understanding their unique needs and aspirations.We're committed to crafting personalized recruitment strategies that match the right talent with the right opportunities, creating a win-win for everyone involved.</p>
              <p className="text-left mt-3 text-sm lg:text-lg">We believe that a truly thriving workforce is one that reflects the rich diversity of our world. We actively seek out and celebrate talent from all walks of life, creating a workplace that fosters inclusion and embraces the power of diverse perspectives.We're committed to creating equal opportunities for everyone, because we believe that a world where talent is recognized and valued, regardless of background, is a world that's ready to reach its full potential.</p>
              <p className="text-left mt-3 text-sm lg:text-lg">"The world of work is changing rapidly, but one thing remains constant: the need for exceptional talent to drive innovation and success. At LK RECRUITMENT, we're constantly evolving to embrace new technologies and trends, providing our clients with the innovative recruitment solutions they need to thrive in today's dynamic landscape.We're passionate about helping our clients build strong, diverse, and successful teams, ready to tackle the challenges and opportunities of the future.</p>
              <p className="text-left mt-3 text-sm lg:text-lg">
               Are you ready to unlock the potential of your organization? Contact us today to discuss your recruitment needs and explore how LK RECRUITMENT can partner with you to achieve your goals.We look forward to connecting with you and helping you build a brighter future!
              <span
              className="text-secondary underline cursor-pointer text-sm lg:text-lg ml-2"
              onClick={toggleReadMore}
              >
              Show Less
              </span>
              </p>
           </div>
     
     )}
       </div>
       {!isExpanded && (
        <LuArrowRight
         className="text-3xl lg:text-4xl text-white rounded-3xl mt-4 ml-auto bg-black p-2 cursor-pointer"
         onClick={handleNext}
       />
     )}
     </div>
   </div>


</div>
  </div>


  <div className='relative bg-coverr bg-cover bg-center p-8 lg:p-16 '>
  <div className="absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-90 z-0"></div>
  <div className='relative z-10 flex flex-col justify-center'>
  <h1 className='uppercase font-semibold text-[23px] lg:text-[50px] text-white text-center'>why choose us</h1>
   <Image src={hr} width={200} height={1} alt='hr' className='mx-auto mt-2' />
   <p className='text-white font-light text-[14px] lg:text-[20px] w-[90%] lg:w-[50%] text-center mx-auto mt-7'>Choose us for unmatched expertise, personalized solutions, and a commitment to your success.</p>
 
   <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-5 w-[90%] lg:w-[100%] mx-auto mt-14'>
     <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
       <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>01</h1>
       <h4 className='font-semibold text-[17px] lg:text-[22px] text-black'>Tailored Staffing Solutions</h4>
       <p className='text-black font-light text-[14px] lg:text-[15px]'>LK RECRUITMENT provides customized hiring options, from temporary roles to permanent
        positions, ensuring the best match for your business needs.</p>
     </div>


     <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
       <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>02</h1>
       <h4 className='font-semibold text-[17px] lg:text-[22px] text-black'>Expertise and Efficiency</h4>
       <p className='text-black font-light text-[14px] lg:text-[15px]'>With deep industry knowledge and a fast, streamlined hiring process, we make recruitment smooth and hassle-free.</p>
     </div>


     <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
       <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>03</h1>
       <h4 className='font-semibold text-[17px] lg:text-[22px] text-black'>Commitment to Diversity and Responsibility</h4>
       <p className='text-black font-light text-[14px] lg:text-[15px]'>We prioritize diversity, inclusion, and social responsibility, helping you build a strong, socially conscious workforce.</p>
     </div>


     <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
       <h1 className='text-right font-bold text-secondary text-3xl lg:text-5xl'>04</h1>
       <h4 className='font-semibold text-[17px] lg:text-[22px] text-black'>Quality Assurance</h4>
       <p className='text-black font-light text-[14px] lg:text-[15px]'>We maintain high standards in candidate selection and placement to ensure client satisfaction.</p>
     </div>
   </div>
   
  </div>


  </div>


  <div className='w-full'>
   <Image src={values} width={800} height={10} alt='values image' className='w-full' />
  </div>

  <div className='bg-[#F5F5FF] p-3 pt-9 lg:pt-28 lg:p-32'>
   <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
   <Image src={team} width={500} height={100} alt='hr image' className='flex lg:hidden'  />
   <div className='bg-secondary p-4 flex flex-col rounded-none lg:rounded-l-lg'>
     <div className='flex gap-8 items-center'>
     <h1 className='text-[80px] lg:text-[190px] text-white'>&ldquo;</h1>
     <p className='text-white text-xl lg:text-3xl font-medium -mt-8 lg:-mt-20'>What is a Temporary Work Agency?</p>
     </div>
     <p className='text-white text-[15px] text-center lg:text-left lg:text-[22px] font-light -mt-5 lg:-mt-24'>A temporary work agency is a company that matches businesses in need of temporary staff with qualified individuals looking for short-term employment opportunities.
     Benefits: Provides flexibility for businesses to meet fluctuating staffing needs, helps individuals gain valuable work experience, and offers a cost-effective solution for both parties.</p>
      <Image src={whitehr} width={100} height={1} alt='white hr' className='my-10 mx-auto lg:mx-0' />
   </div>
   <Image src={team} width={550} height={100} alt='hr image' className='hidden lg:flex'  />
   </div>

   <div className='bg-white w-[80%] lg:w-[50%] mx-auto rounded-b-3xl mb-12 lg:mb-0 lg:rounded-b-[20%] py-6 lg:py-8 px-5 lg:px-20'>
    <h1 className='text-lg text-center lg:text-left lg:text-2xl font-bold'>How Does LK RECRUITMENT work?</h1>
    <motion.div className='flex flex-col gap-3'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants} 
     >
      <motion.div variants={childVariants}>
      <h2 className='font-bold text-secondary mt-3 text-[15px] lg:text-[18px]'>Step O1</h2>
      <p className='text-[13px] lg:text-[18px]'>Businesses contact us with their staffing requirements.</p>
      </motion.div>

      <motion.div variants={childVariants} >
      <h2 className='font-bold text-secondary text-[15px] lg:text-[18px]'>Step O2</h2>
      <p className='text-[13px] lg:text-[18px]'>We source and screen qualified and trained candidates from our pool of temporary workers.</p>
      </motion.div>

      <motion.div variants={childVariants}>
      <h2 className='font-bold text-secondary text-[15px] lg:text-[18px]'>Step O3</h2>
      <p className='text-[13px] lg:text-[18px]' >We match the best-suited candidates with the job requirements and facilitate the placement process.</p>
      </motion.div>

      <motion.div variants={childVariants}>
      <h2 className='font-bold text-secondary text-[15px] lg:text-[18px]'>Step O4</h2>
      <p className='text-[13px] lg:text-[18px]' >We provide ongoing support and assistance to ensure a successful temporary work arrangement.</p>
      </motion.div>

    </motion.div>
   </div>

  </div>


  <div className="grid grid-cols-1 lg:grid-cols-2 justify-center bg-gray-100 lg:bg-white p-4 lg:p-20 gap-10 lg:gap-32 mt-0 ">
     
     <div className='bg-gray-100 p-3 rounded-lg'>
     <div className="flex h-[22vh] lg:h-[31vh] bg-gradient-center p-3 lg:p-8 rounded-lg ">
         <div className="flex flex-col gap-2 lg:gap-5 w-[100%]">
         <h1 className="font-bold text-[15px] lg:text-xl">Our mission</h1>
         <p className="text-[12px] lg:text-lg font-light">With LK Recruitment , you can expect a Commitment to Social Impact: We are passionate about making a positive difference in the world, and we strive to create a more sustainable and equitable future</p>
         </div>
       </div>
     </div>
      
      <div className='bg-gray-100 p-3 rounded-lg'>
      <div className="flex h-[22vh] lg:h-[31vh] bg-gradient-center p-3 lg:p-8 rounded-lg ">
         <div className="flex flex-col gap-2 lg:gap-5 w-[100%]">
         <h1 className="font-bold text-[15px] lg:text-xl">Our vision</h1>
         <p className="text-[12px] lg:text-lg font-light">At LK Recruitment we believe in building a brighter future  by promoting Diversity, Equity, and Inclusion: We believe in a world where everyone has the
          opportunity to succeed, and we actively champion diversity, equity, and inclusion within our
          organization.</p>
       
         </div>
         
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
   