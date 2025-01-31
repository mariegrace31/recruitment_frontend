import React from 'react';
import Sidebar from '../components/sidebar';
import { IoArrowDownOutline } from "react-icons/io5";
import number from '../assets/150k.png';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import chart from '../assets/chart.png';
import Jobs from '../components/jobs2';
import Navbar2 from '../components/navbar2';


export default function Home() {
  const cards = [
    { title: "Applications", value: 107, percentage: 45 },
    { title: "Available Jobs", value: 305, percentage: 80 },
    { title: "CV Downloads", value: 30, percentage: 60 },
    { title: "Users", value: 10, percentage: 2 },
  ];

  return (
    <section >
      <Navbar2 />
      <div className='flex'>
      <Sidebar />
      <div className='w-[80%]'>
      <div className="flex gap-4 justify-center w-full items-start bg-white p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-primary_dash rounded-lg p-4 text-white font-bold flex flex-col justify-between w-[250px] h-[120px] shadow-lg"
        >
          <div className="text-[16px] font-extralight">{card.title}</div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium">{card.value}</div>

            <div className="relative w-16 h-16">

              <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>

              <div
                className="absolute inset-0 rounded-full border-4"
                style={{
                  background: `conic-gradient(#BACADC ${card.percentage}%, transparent ${card.percentage}% 100%)`,
                  clipPath: "circle(50% at 50% 50%)",
                }}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                {card.percentage}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex gap-8 p-7 justify-center">
      <div className="bg-lk_bg p-5 w-[32%] flex flex-col gap-10 rounded-lg">
        <div className="flex justify-between">
          <p className='text-[14px] text-black/50'>Website Visitors</p>
          <button className='flex items-center gap-1 text-primary_dash text-[12px] border border-primary_dash px-2 py-1 rounded-md'>Export<IoArrowDownOutline /></button>
        </div>
        <Image src={number} width={300} height={10} alt="number" className="w-40 mx-auto" />
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="flex gap-1 items-center text-[12px] text-black/40"><GoDotFill className="text-[20px] text-[#673AB7]" />Organic</p>
            <p className='text-[12px] text-primary_dash'>30%</p>
          </div>
          <hr className='border-black/10' />
          <div className="flex justify-between items-center">
            <p className="flex gap-1 items-center text-[12px] text-black/40"><GoDotFill className="text-[20px] text-[#3DA643]" />Social</p>
            <p className='text-[12px] text-primary_dash'>75%</p>
          </div>
          <hr className='border-black/10' />
          <div className="flex justify-between items-center">
            <p className="flex gap-1 items-center text-[12px] text-black/40"><GoDotFill className="text-[20px] text-[#000000]" />Direct</p>
            <p className='text-[12px] text-primary_dash'>61%</p>
          </div>
          <hr className='border-black/10' />
        </div>
      </div>

      <div className='bg-lk_bg p-5 rounded-lg w-[90%] flex flex-col justify-between'>
        <div className="flex gap-10">
        <p className="flex gap-1 items-center text-[12px] text-primary_dash"><GoDotFill className="text-[20px]" />All Available Jobs</p>
        <p className="flex gap-1 items-center text-[#3DA643] text-[12px]"><GoDotFill className="text-[20px]" />All Applications</p>
        <p className="flex gap-1 items-center text-[12px] text-black"><GoDotFill className="text-[20px]" />Download CV</p>
        <p className="flex gap-1 items-center text-[12px] text-[#523F69]"><GoDotFill className="text-[20px]" />All Users</p>
        <button className='text-[12px] px-3 py-1 border border-primary_dash text-primary_dash rounded-md ml-8'>View all Jobs</button>
        </div>
        <Image src={chart} width={250} height={10} alt="chart" className="w-[100%]" />

      </div>
    </div>

    <div>
      <Jobs />
    </div>
      </div>
      </div>
    </section>
   
  );
}
