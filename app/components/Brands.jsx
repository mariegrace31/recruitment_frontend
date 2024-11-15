import React from 'react'

function Brands() {
  return (
    <div className="relative bg-[url('./assets/section.png')] h-[76vh] bg-[length:110%_110%] bg-left p-20 ">
      <div className='flex flex-col gap-16 mt-16 w-[30%]'>
      <h1 className='text-3xl font-bold text-white'><span className='text-secondary'>Collaboration</span> With Top Brands</h1>
      <p className='text-white'>Manage an efficient and effective CX operation Manage an efficient and effective CX operation, Manage an.</p>
      <button className='text-white border border-gray-500 w-[40%] p-2 rounded-2xl hover:bg-secondary'>View all Brands</button>
      </div>
     
    </div>
  )
}

export default Brands;