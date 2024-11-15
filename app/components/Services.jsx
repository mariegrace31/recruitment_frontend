import React from 'react';
import hr from '../assets/hrService.png';
import Image from 'next/image';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Short-term workers for roles in housekeeping, childcare, etc...',
  },
  {
    title: 'Temp-to-Perm Staffing',
    description: 'Trial period for employer and worker to assess fit before permanent hire...',
  },
  {
    title: 'Training & Development',
    description: 'Training services to improve candidate skills and employability.',
  },
  {
    title: 'On-Site Management',
    description: 'Overseeing the temporary workers placed at a client’s location.',
  },
  {
    title: 'On-Site Management',
    description: 'Overseeing the temporary workers placed at a client’s location.',
  },
  {
    title: 'End to End Recruitment',
    description: 'Complete recruitment from sourcing to placement.',
  },
  {
    title: 'Talent Sourcing',
    description: 'Finding and attracting qualified talent.',
  },
  {
    title: 'Screening & Interviews',
    description: 'Evaluating and interviewing candidates for best fit.',
  },
  {
    title: 'Executive Search',
    description: 'Specialized recruitment for high-level executive positions.',
  },
  {
    title: 'Assist in recruitment',
    description: 'Supporting recruitment panels through coordination and guidance',
  },
  {
    title: 'Permanent Recruitment',
    description: 'Providing comprehensive hiring services for permanent roles.',
  },
  {
    title: 'Temporary Staffing',
    description: 'Offering flexible staffing solutions for short-term positions.',
  },
  {
  title: 'Negotiating Offers',
  description: 'Handling offer negotiations with candidates.',
  },
];

function Services() {
  return (
    <div className='bg-white p-28 py-40'>
      <div className='bg-[#D6E4FF]/50 border border-secondary w-[97%] mx-auto rounded-2xl p-10'>
      <div className='text-center'>
        <h1 className='font-semibold text-4xl uppercase'>Our Services</h1>
        <Image src={hr} width={226} height={100} alt="hr" className='mx-auto mt-5'/>
      </div>
      <div className='flex flex-wrap justify-center gap-4 my-10 '>
        {services.map((service, index) => (
          <div key={index} className='border w-[18%] mt-6 hover:bg-white cursor-pointer border-black/50 rounded-lg p-2'>
            <h3 className='text-[#05264E] font-semibold text-[13px]'>{service.title}</h3>
            <p className='text-[#4F5E64] text-[9px] p-1 mt-2'>{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Services;
