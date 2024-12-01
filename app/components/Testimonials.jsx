import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hr from '../assets/hrtestimonial.png';
import dawidi from '../assets/dawidi.png';
import sara from '../assets/sara.png';
import yohani from '../assets/yohani.png';


const testimonials = [
 {
   text: `"We needed to fill a critical role quickly, and LK Recruitment came through for us. Their team understood our urgent needs and presented us with a pool of highly qualified candidates within just a few days. The onboarding process was smooth, and we're delighted with the new employee's performance"`,
   name: "Sara Jarhain",
   role: "HR Manager at COTTAGE HAVEN",
   img: sara,
   hrImg: hr,
 },
 {
   text: `". LK Recruitment truly understands the food industry landscape. They went beyond simply finding candidates - they dug deep to find people with the specific skills and experience we needed for our specialized project. We're confident that we've made the right hiring decision thanks to their expertise."`,
   name: "Dawidi Leeray",
   role: "Project Manager at VENTURE",
   img: dawidi,
   hrImg: hr,
 },
 {
  text: `"Working with LK Recruitment has been a real partnership. They go the extra mile to understand our needs, our company culture, and the types of people we want to bring on board. They've been a valuable asset to our growth and development over the past few years"`,
  name: "Yohani Smith",
  role: "CEO at Investment Insights Agency",
  img: yohani,
  hrImg: hr,
},
];


function Testimonials() {
const [activeIndex, setActiveIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);


return (
  <div className='bg-[#F5F5FF] p-6 lg:p-24' id='testimonials'>
    <h1 className='uppercase font-medium text-center text-[18px]'>testimonials</h1>
    <p className='font-semibold text-center text-xl lg:text-4xl mt-3'>Hear what they say about us</p>


    <div className='relative mt-16 w-[80%] mx-auto overflow-hidden'>
      <div
        className='flex transition-transform duration-1000'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white flex flex-col lg:flex-row rounded-3xl w-full shrink-0'
          >
            <div className='p-3 lg:p-5 flex flex-col gap-1 justify-center'>
              <p className='text-lg leading-9'>{testimonial.text}</p>
              <Image src={testimonial.hrImg} width={500} height={100} alt='hr' className='mt-8' />
               <div className='flex gap-6 mt-4 items-center'>
                 <h3 className='text-xs'>{testimonial.name}</h3>
                 <p className='text-[8px] text-left lg:text-[10px] bg-secondary/15 p-1 rounded-xl px-2'>
                   {testimonial.role}
                 </p>
               </div>
             </div>
             <Image
               src={testimonial.img}
               width={400}
               height={100}
               alt='testimonial'
               className='rounded-0 lg:rounded-r-3xl'
             />
           </div>
         ))}
       </div>
     </div>


     {/* Dots */}
     <div className='flex justify-center mt-6'>
       {testimonials.map((_, index) => (
         <div
           key={index}
           className={`h-1 mx-1 rounded-xl transition-all duration-300 ${
             index === activeIndex ? 'bg-gray-500 w-5' : 'bg-gray-300 w-2'
           }`}
         />
       ))}
     </div>
   </div>
 );
}


export default Testimonials;
