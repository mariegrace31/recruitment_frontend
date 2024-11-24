import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hr from '../assets/hrtestimonial.png';
import image from '../assets/testImage.png';

const testimonials = [
  {
    text: `"We needed to fill a critical role quickly, and LK Recruitment came through for us. Their team understood our urgent needs and presented us with a pool of highly qualified candidates within just a few days. The onboarding process was smooth, and we're delighted with the new employee's performance"`,
    name: "Sara Jarhain",
    role: "HR Manager at COTTAGE HAVEN",
    img: image,
    hrImg: hr,
  },
  {
    text: `"LK Recruitment has been a game-changer for us. They provided top-tier candidates who matched our requirements perfectly. Their attention to detail and commitment to finding the best fit is unparalleled."`,
    name: "John Doe",
    role: "Operations Manager at STARTECH",
    img: image,
    hrImg: hr,
  },
  {
    text: `"The LK Recruitment team has consistently exceeded our expectations. Their expertise and dedication helped us build a strong, talented team. We highly recommend their services."`,
    name: "Emily Watson",
    role: "CEO at INNOVATIVE SOLUTIONS",
    img: image,
    hrImg: hr,
  },
  {
    text: `"Thanks to LK Recruitment, we were able to streamline our hiring process. Their team is professional, responsive, and results-oriented."`,
    name: "Michael Brown",
    role: "CTO at TECHSPHERE",
    img: image,
    hrImg: hr,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5-second interval
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
              <div className='p-3 lg:p-5'>
                <p className='text-lg leading-9'>{testimonial.text}</p>
                <Image src={testimonial.hrImg} width={500} height={100} alt='hr' className='mt-8' />
                <div className='flex gap-6 mt-4 items-center'>
                  <h3 className='text-xs'>{testimonial.name}</h3>
                  <p className='text-[8px] lg:text-[10px] bg-secondary/15 p-1 rounded-xl px-2'>
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
