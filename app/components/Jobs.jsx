import React from 'react';
import icon from '../assets/jobIcon.png';
import hr from '../assets/hrjob.png';
import Image from 'next/image';


function Jobs() {
 return (
   <div className='flex flex-col lg:flex-row mx-auto justify-center bg-tertiary p-5 lg:p-14 gap-12 lg:gap-32'>
     <Image src={icon} width={650} height={100} alt='job illustrator' />
     <div className='flex flex-col gap-4 w-[100%]'>
     <h1 className='text-[12px] lg:text-lg font-medium'>Recruitment Process</h1>
       <div className='flex flex-col gap-3 mt-4'>
         <h3 className='font-semibold text-[13px] lg:text-[19px]'>Find your perfect Match and Apply</h3>
         <p className='text-[13px] w-[100%]'>Let us know what kind of job you're looking for and let your skills shine; highlight your experience and qualifications that match the job requirements.</p>
         <Image src={hr} width={430} height={100} alt='line' />
       </div>
       <div className='flex flex-col gap-3 mt-3'>
         <h3 className='font-semibold text-[13px] lg:text-[19px]'>Screening Process</h3>
         <p className='text-[13px] w-[100%]'>We will review your application to see if your skills and experience match the job. We might ask you to take a short online test to demonstrate your skills.</p>
         <Image src={hr} width={430} height={100} alt='line' />
       </div>
       <div className='flex flex-col gap-3 mt-3' >
         <h3 className='font-semibold text-[13px] lg:text-[19px]'>Meeting the Team</h3>
         <p className='text-[13px] w-[100%]'>Face to face interview: If you're a good fit, you will have an interview with one of our recruiters, We'll discuss the job.
           Your experience and answer any questions you have <span className='font-medium text-[13px]'> Meet the client: In some cases you might meet with the hiring manager at the company where the job is located</span> </p>
           <Image src={hr} width={430} height={100} alt='line' />
       </div>
       <div className='flex flex-col gap-3 mt-3'>
         <h3 className='font-semibold text-[13px] lg:text-[19px]'>Job offer and Training</h3>
         <p className='text-[13px] w-[100%]'>We'll help you negotiate a great offer that meets your needs. Training for success: We will provide any necessary training or orientation so you're ready to hit the ground running at your new job.</p>
         <Image src={hr} width={430} height={100} alt='line' />
         </div>
       <div className='flex flex-col gap-3 mt-3'>
         <h3 className='font-semibold text-[13px] lg:text-[19px]'>Work with the client company</h3>
         <p className='text-[13px] w-[100%]'>You'll start working directly with the company that hired you through our agency. We'll be your point of contact and provide support throughout your employment.</p>
       </div>
     </div>
   </div>
 )
}


export default Jobs;
