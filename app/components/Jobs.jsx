import React from 'react';
import icon from '../assets/jobIcon.png';
import hr from '../assets/hrjob.png';
import Image from 'next/image';

function Jobs() {
  return (
    <div className='flex bg-tertiary p-16 gap-28'>
      <Image src={icon} width={650} height={100} alt='job illustrator' />
      <div className='flex flex-col gap-4 w-[40%]'>
      <h1 className='text-sm font-medium'>JOB OPPORTUNITIES</h1>
      <h3 className='font-semibold text-2xl'>Manage an efficient and effective CX operation</h3>
        <div className='flex flex-col gap-3 mt-4'>
          <h3 className='font-semibold text-[19px]'>Manage an efficient and effective CX operation</h3>
          <p className='text-[13px] w-[82%]'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and
          effective CX operation Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation
          </p>
          <Image src={hr} width={430} height={100} alt='line' />
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <h3 className='font-semibold text-[19px]'>Manage an efficient and effective CX operation</h3>
          <p className='text-[13px] w-[82%]'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and
          effective CX operation Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation
          </p>
          <Image src={hr} width={430} height={100} alt='line' />
        </div>
        <div className='flex flex-col gap-3 mt-3' >
          <h3 className='font-semibold text-[19px]'>Manage an efficient and effective CX operation</h3>
          <p className='text-[13px] w-[82%]'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and
          effective CX operation Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an efficient and effective CX operation
          </p>
        </div>
      </div>
    </div>
  )
}

export default Jobs;