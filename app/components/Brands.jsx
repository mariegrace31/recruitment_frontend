import React from 'react';
import companies from '../assets/companies.png'
import Image from 'next/image';

function Brands() {
  return (
    <div className="flex gap-32 bg-[url('./assets/brandsBg.png')] h-[45vh] lg:h-[90vh] bg-center p-4 lg:p-20 ">
      <div className='flex flex-col gap-10 lg:gap-16 mt-2 lg:mt-16 w-[40%] '>
      <h1 className=' text-sm lg:text-4xl font-bold text-white'><span className='text-secondary'>Collaboration</span> With Top Brands</h1>
      <p className='text-white text-xs lg:text-lg'>We're proud to collaborate with top brands to bring you exceptional opportunities, innovative solutions, and mutual success. Together, we're creating strong partnerships that drive growth, deliver value, and pave the way for future achievements.</p>
      <button className='text-white border border-gray-500 w-[100%] lg:w-[38%] p-1 lg:p-2 text-xs lg:text-lg rounded-3xl hover:bg-secondary'>View all Brands</button>
      </div>
      <Image src={companies} width={600} height={20} alt='companies' />
     
    </div>
  )
}

export default Brands;