import React from 'react';
import hr from '../assets/hrService.png';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";


function Services() {
 return (
   <div className='bg-white p-3 lg:p-12 py-16 lg:py-12'>
     <div className=' w-[97%] mx-auto rounded-2xl p-3 lg:p-10'>
     <div className='text-center'>
       <h1 className='font-semibold text-3xl lg:text-4xl uppercase'>Our Services</h1>
       <Image src={hr} width={226} height={100} alt="hr" className='mx-auto mt-5'/>
     </div>


     <div className='grid grid-cols-2 gap-10 mt-16'>
       <div className='bg-[#F5F5FF] flex flex-col justify-center p-7 border border-[#1A77B9]/50 rounded-lg'>
         <h3 className='font-bold text-xl'>Workforce Solutions</h3>
         <div>


           <div className='mt-3'>
           <p className='font-medium flex items-center'><GoDotFill className='text-secondary text-2xl' />Temporary staffing:</p>
           <p className='font-light text-[14px]'>Workers to fill short-term positions in various sectors, such as; house staff (Babysitting/Nanny, Housekeeping/Maid, Personal Assistants, Drivers, Gardener, Tutor), catering staff, web specialist, etc.</p>
           </div>
           <div className='mt-3'>
           <p className='font-medium flex items-center'><GoDotFill className='text-secondary text-2xl' />Temp-to-Perm Staffing:</p>
           <p className='font-light text-[14px]'>Trial period for both employer and worker to evaluate fit before making a permanent hiring decision.</p>
           </div>
           <div className='mt-3'>
           <p className='font-medium flex items-center'><GoDotFill className='text-secondary text-2xl'/>Training and Development:</p>
           <p className='font-light text-[14px]'>Training services to improve candidate skills and increase their employability.</p>
           </div>
           <div className='mt-3'>
           <p className='font-medium flex items-center'><GoDotFill className='text-secondary text-2xl' />On-Site Management:</p>
           <p className='font-light text-[14px]'>Overseeing the temporary workers placed at a client's location and managing day-to-day operations.</p>
           </div>
         </div>
       </div>


       <div className='bg-[#F5F5FF] flex flex-col justify-center p-7 border border-[#1A77B9]/50 rounded-lg'>
         <h3 className='font-bold text-xl'>Talent Architects</h3>
       
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />End-to-End Recruitment</p>
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />HR Consulting (Coaching & Well-being)</p>
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />Recruitment Jury Organization & Support</p>
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />Executive Search</p>
       
         <h3 className='font-bold text-xl mt-3'>Flexible Recruitment Solutions:</h3>
        
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />Permanent Recruitment</p>
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />Temporary Staffing</p>
           <p className='font-light flex items-center mt-3'><GoDotFill className='text-secondary text-2xl' />Executive Search</p>
        
        </div>
      </div>
 
 
 
 
      </div>
    </div>
  );
 }
 
 
 export default Services;
 