import React from 'react'

function Brands() {
  return (
    <div className="relative bg-[url('./assets/section.png')] h-[45vh] lg:h-[76vh] bg-[length:110%_110%] bg-center lg:bg-left p-4 lg:p-20 ">
      <div className='flex flex-col gap-10 lg:gap-16 mt-2 lg:mt-16 w-[38%] lg:w-[30%]'>
      <h1 className=' text-sm lg:text-4xl font-bold text-white'><span className='text-secondary'>Collaboration</span> With Top Brands</h1>
      <p className='text-white text-xs lg:text-lg'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an.</p>
      <button className='text-white border border-gray-500 w-[100%] lg:w-[48%] p-1 lg:p-2 text-xs lg:text-lg rounded-2xl hover:bg-secondary'>View all Brands</button>
      </div>
     
    </div>
  )
}

export default Brands;