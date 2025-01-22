"use client";
import React, { useState } from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoSettingsOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";
import manage from '../assets/manage.png';
import appearance from '../assets/appearence.png';
import application from '../assets/application.png';
import Image from 'next/image';
import { LuGitCommitHorizontal } from "react-icons/lu";
import Link from 'next/link';
import { CiLogout } from "react-icons/ci";
import line from '../assets/sidebarline.png';

function Sidebar() {

  const [expandedSections, setExpandedSections] = useState({
    manageJobs: false,
    managePages: false,
    appearance: false,
    applications: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => {
      const newState = {
        ...prevState,
        [section]: !prevState[section],
      };
      console.log("Updated State:", newState);
      return newState;
    });
  };

  return (
    <div className='bg-lk_bg w-[20%]  min-h-screen p-4'>
      <div className='flex gap-1 text-xl items-center -mt-16'>
        <HiMiniBars3 className='text-primary_dash' />
        <h1 className='text-[18px] flex items-center gap-1'>LK RECRUITMENT</h1>
      </div>

      <div className='mt-20 flex flex-col gap-8'>
        <Link href='/' className='flex text-primary_2 items-center text-[16px] gap-2'>
          <TbLayoutDashboardFilled className='text-[18px]' />
          Dashboard
        </Link>

        <div>
          <div className='flex justify-between items-center'>
            <h3 className='flex text-primary_2 items-center text-[16px] gap-2'>
              <PiBagSimpleFill className='text-[18px]' />
              Manage jobs
            </h3>
            {expandedSections.manageJobs ? (
              <IoChevronUp
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('manageJobs')}
              />
            ) : (
              <IoChevronDown
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('manageJobs')}
              />
            )}
          </div>
          {expandedSections.manageJobs && 
          
          <div className="pl-8 mt-2 flex flex-col gap-2">
            <Link href='/Jobs' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />View jobs Listing</Link>
            <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Add New Job</Link>
            <Link href='/edit' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Edit/Delete Jobs</Link>
          </div>
          
          }
        </div>

        <div>
          <div className='flex justify-between items-center'>
            <div className="flex gap-2 items-center">
              <Image src={manage} width={50} height={1} alt='icon' className='w-5' />
              <h3 className="text-[16px] text-primary_2">Manage pages</h3>
            </div>
            {expandedSections.managePages ? (
              <IoChevronUp
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('managePages')}
              />
            ) : (
              <IoChevronDown
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('managePages')}
              />
            )}
          </div>
          {expandedSections.managePages &&
           <div className="pl-8 mt-2 flex flex-col gap-2">
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Landing age</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />About us</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />HR News & Tips</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Contact Us</Link>
         </div>
          }
        </div>

        <div>
          <div className='flex justify-between items-center'>
            <div className="flex gap-2 items-center">
              <Image src={appearance} width={50} height={1} alt='icon' className='w-4' />
              <h3 className="text-[16px] text-primary_2">Appearance</h3>
            </div>
            {expandedSections.appearance ? (
              <IoChevronUp
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('appearance')}
              />
            ) : (
              <IoChevronDown
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('appearance')}
              />
            )}
          </div>
          {expandedSections.appearance && 
           <div className="pl-8 mt-2 flex flex-col gap-2">
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Customization</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Nav/Menu</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Footer</Link>
         </div>
          }
        </div>

        <div>
          <div className='flex justify-between items-center'>
            <div className="flex gap-2 items-center">
              <Image src={application} width={50} height={1} alt='icon' className='w-5' />
              <h3 className="text-[16px] text-primary_2">Applications</h3>
            </div>
            {expandedSections.applications ? (
              <IoChevronUp
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('applications')}
              />
            ) : (
              <IoChevronDown
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('applications')}
              />
            )}
          </div>
          {expandedSections.applications &&
           <div className="pl-8 mt-2 flex flex-col gap-2">
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Job Applications</Link>
           <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Export Application</Link>
         </div>
          }
        </div>

  
        <div>
          <div className='flex justify-between items-center'>
            <h3 className="text-[16px] text-primary_2 flex gap-2 items-center">
              <IoSettingsOutline className='text-[18px]' />
              Settings
            </h3>
            {expandedSections.settings ? (
              <IoChevronUp
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('settings')}
              />
            ) : (
              <IoChevronDown
                className="text-[18px] text-primary_2 cursor-pointer"
                onClick={() => toggleSection('settings')}
              />
            )}
          </div>
          {expandedSections.settings &&
            <div className="pl-8 mt-2 flex flex-col gap-2">
            <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />General Settings</Link>
            <Link href='#' className='flex gap-1 items-center text-[14px] text-lk_black_2 transform transition-transform duration-200 hover:scale-105'><LuGitCommitHorizontal className='text-xl' />Admin Password</Link>
          </div>
           }
        </div>
        <div className='mt-auto'>
          <Image src={line} width={100} height={10} alt='hr' className='w-52 mx-auto' />
          <button className='flex gap-1 text-gray-400 items-center font-extralight text-[16px] mt-4'><CiLogout />Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;