import Image from 'next/image';
import Navbar2 from '../components/navbar2';
import Sidebar from '../components/sidebar';
import React from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import CEO from '../assets/team1.png';
import Soc from '../assets/socr.png';
import dja from '../assets/dja.jpeg';
import values from '../assets/values.png';

function AboutEdit() {
  return (
    <div>
      <Navbar2 />
      <div className='flex'>
        <Sidebar />
        <div className="w-full p-7">
          <div className="flex justify-between">
            <h3 className="text-3xl font-semibold">Website - About Us</h3>
            <button className="text-[16px] text-white p-2 px-3 rounded-sm bg-lk_button">Save changes</button>
          </div>
          <hr className="w-full mt-2 mx-auto border-black/30" />
          <h3 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>01:</span>Hero Section</h3>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-4 w-[30%]'>
              <h4 className='text-[12px]'>Title</h4>
              <p className='text-[12px] border border-gray-300 p-2 flex gap-10 justify-between items-center'>Learn the story behing Lk Recruitment <RiEdit2Fill className='text-[15px]' /></p>
            </div>
            <div className='flex flex-col gap-4 w-[75%]'>
              <h4 className='text-[12px]'>About Us</h4>
              <p className='text-[12px] border border-gray-300 p-2 flex gap-3 justify-center '>LK RECRUITMENT is a staffing and recruitment agency based in Rwanda. Our mission focuses on investing in 
                people and shaping a better future through empowerment, social responsibility, and promoting diversity, equity,
                and inclusion. The agency offers a talent-focused approach, providing the right training, competitive salaries,
                and a strong commitment to making a positive social impact.<RiEdit2Fill className='text-5xl' /></p>
            </div>
          </div>

          <div className='flex justify-between my-7'>
            <h3 className='font-medium text-[16px] my-7'><span className='text-primary_dash'>02:</span>Our amazing team</h3>
            <button className='text-primary_dash font-medium text-[16px] underline'>Add new</button>
          </div>

          <div className='grid grid-cols-2 gap-10 mx-auto'>
            <div className='flex gap-4 items-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h3 className='text-[14px] text-gray-400'>About the employee</h3>
                  <button className='text-[14px] text-red-400'>Delete</button>
                </div>
                <p className='flex gap-2 text-[15px]'>Welcome! My name is LONETE Kelly, and I'm the CEO of LK RECRUITMENT. For over 15 years, I've been driven
                   by a simple yet powerful belief: Every individual has the potential to achieve...<RiEdit2Fill className='text-5xl' /></p>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Name</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Kelly <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Position</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Chief Executive Officer <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                </div>
              </div>
              <Image src={CEO} width={100} height={100} alt='pic' className='w-44' />
            </div>

            <div className='flex gap-4 items-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h3 className='text-[14px] text-gray-400'>About the employee</h3>
                  <button className='text-[14px] text-red-400'>Delete</button>
                </div>
                <p className='flex gap-2 text-[15px]'>"Live by lifting others" - Davido Adeleke This quote deeply resonates with me.
                I believe in building a world where everyone has the opportunity to shine.I'm AYIVUGWE Socrate, and I'm passionate about or...<RiEdit2Fill className='text-5xl' /></p>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Name</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Socrate <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Position</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Hiring Manager <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                </div>
              </div>
              <Image src={Soc} width={100} height={100} alt='pic' className='w-44' />
            </div>

            <div className='flex gap-4 items-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h3 className='text-[14px] text-gray-400'>About the employee</h3>
                  <button className='text-[14px] text-red-400'>Delete</button>
                </div>
                <p className='flex gap-2 text-[15px]'>My name is Keza Djasmine,
                I am an administrative assistant at LK Recruitment. With a passion for efficient organization and a strong attention to detail, I am specialize in providing exceptional support<RiEdit2Fill className='text-5xl' /></p>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Name</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Djasmine <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[13px] text-gray-400'>Position</h1>
                    <p className='flex items-center gap-3 text-[14px]'>Administrative Assistant <RiEdit2Fill className='text-[17px]' /> </p>
                  </div>
                </div>
              </div>
              <Image src={dja} width={100} height={100} alt='pic' className='w-44' />
            </div>

          </div>
          <div className='flex mt-8 gap-12 mx-auto'>
            <div>
            <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>03:</span>Why Choose Us</h2>
            <div className='grid grid-cols-2 gap-2 w-[100%]'>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Tailored staffing solutions<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>LK RECRUITMENT provides customized hiring options, from temporary roles to permanent positions, ensuring the best match for your business needs.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Expertise and Efficiency<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>With deep industry knowledge and a fast, streamlined hiring process, we make recruitment smooth and hassle-free.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Commitment to Diversity and Responsibility<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We prioritize diversity, inclusion, and social responsibility, helping you build a strong, socially conscious workforce.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Quality Assurance<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We maintain high standards in candidate selection and placement to ensure client satisfaction.</p>
              </div>
            </div>
            </div>

            <div className='w-[90%]'>
            <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>04:</span>Our Values</h2>
            <Image src={values} width={100} height={100} alt='values' className='w-[230%]' />
            </div>
           
          </div>

          <div className='flex gap-5 mt-9 mx-auto'>
            <div className='flex flex-col gap-2 w-[58%] '>
              <h4 className='flex justify-between items-center text-[14px]'>What is a Temporary Work Agency?<RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>A temporary work agency is a company that matches businesses in need
                 of temporary staff with qualified individuals looking for short-term employment opportunities. Benefits: Provides flexibility for businesses
                 to meet fluctuating staffing needs, helps individuals gain valuable work experience, and offers a cost-effective solution for both parties.</p>
            </div>
            <div className='flex flex-col gap-6'>
            <div className='flex gap-3'>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 01</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>Businesses contact us with their staffing requirements.</p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 02</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We source and screen qualified and trained candidates from our pool of temporary workers.</p>
            </div>
            </div>
            <div className='flex gap-3'>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 03</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We match the best-suited candidates with the job requirements and facilitate the placement process.</p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 04</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We provide ongoing support and assistance to ensure a successful temporary work arrangement.</p>
            </div>
            </div>
            </div>
           
          </div>

          <div className='mt-3'>
          <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>05:</span>Our Mission and Vision</h2>
          <div className='grid grid-cols-2 gap-10'>
          <div className='flex flex-col gap-2 w-[90%]'>
            <h4 className='flex justify-between items-center text-[14px]'>Our Mission<RiEdit2Fill className='text-[17px]' /></h4>
            <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>With LK Recruitment , you can expect a Commitment to Social Impact: We are passionate about making a positive difference in the world, and we strive to create a more sustainable and equitable future</p>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>
            <h4 className='flex justify-between items-center text-[14px]'>Our vision<RiEdit2Fill className='text-[17px]' /></h4>
            <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>At LK Recruitment we believe in building a brighter future by promoting Diversity, Equity, and Inclusion: We believe in a world where everyone has the opportunity to succeed, and we actively champion diversity, equity, and inclusion within our organization.</p>
          </div>
          </div>
          </div>

          <button className="text-[16px] text-white p-2 px-3 rounded-sm bg-lk_button mt-5">Save changes</button>

        </div>
      </div>
    </div>
  )
}

export default AboutEdit;