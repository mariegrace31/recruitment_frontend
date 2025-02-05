"use client";
import React, { useState } from 'react';
import { TbBriefcase } from 'react-icons/tb';
import Navbar2 from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { RiEdit2Fill } from "react-icons/ri";
import { LuArrowRight } from "react-icons/lu";
import Link from 'next/link';

function HomeEdit() {
  const scrollContent = () => {
    const container = document.querySelector(".scrollable-content");
    if (container) {
      container.scrollLeft += 300;
    } else {
      console.log("Scrollable container not found");
    }
  };

  const [jobs, setJobs] = useState([
      {
        id: 1,
        title: 'Software Engineer',
        type: ['Full Time', 'Part Time'],
        description: 'Join our tech team to develop innovative solutions. Minimum 3 years of experience required.',
      },
      {
        id: 2,
        title: 'Tutor',
        type: ['Full Time', 'Part Time'],
        description: 'As a Tutor, you will provide individualized academic support to students of various ages and levels.',
      },
      {
        id: 3,
        title: 'Graphic Designer',
        type: ['Full Time', 'Part Time'],
        description: 'As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.',
      },
      {
        id: 4,
        title: 'Web Designer',
        type: ['Full Time', 'Part Time'],
        description: 'As a Web Designer, you will be responsible for the visual design and development of our website.',
      },
    ]);

    const deleteJob = (id) => {
      setJobs(jobs.filter((job) => job.id !== id));
    };
  
  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-7">
          <div className="flex justify-between">
            <h3 className="text-3xl font-medium">Website - Landing page</h3>
            <button className="text-[16px] text-white p-2 px-3 rounded-sm bg-lk_button">
              Save changes
            </button>
          </div>
          <hr className="w-full mt-2 mx-auto border-black/30" />

          <div className="flex gap-5">
            <div>
              <h3 className="font-medium text-[16px] my-7">
                <span className="text-primary_dash">01:</span> Hero Section
              </h3>
              <div className="flex flex-col gap-4">
                <h4 className="text-[13px]">Title</h4>
                <p className="text-[13px] p-2 border border-gray-300 flex py-4 gap-3 items-center rounded-sm">
                  TEMPORARY WORK & RECRUITMENT AGENCY <RiEdit2Fill />
                </p>
                <h4 className="text-[13px]">Subtitle</h4>
                <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Investing in people shaping a better future <RiEdit2Fill />
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-[16px] my-7">
                  <span className="text-primary_dash">02:</span> Recruitment Process - Staffing Agency
                </h3>
                <button
                  className="text-2xl bg-black text-white p-2 rounded-full"
                  onClick={scrollContent}
                >
                  <LuArrowRight />
                </button>
              </div>
              <div className="flex gap-5 overflow-x-auto w-[250%] scrollable-content">
                <div className="flex flex-col gap-3">
                  <h4 className="text-[13px] flex gap-3 items-center">
                    Find your perfect Match and Apply <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                    Let us know what kind of job you're looking for and let your skills shine; highlight your experience
                    and qualifications that match the job requirements.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[13px] flex gap-3 items-center">
                    Screening Process <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                    We will review your application to see if your skills and experience match the job. We might ask you
                    to take a short online test to demonstrate your skills.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[13px] flex gap-3 items-center">
                    Meeting the hiring team <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                    Meeting the Team Face to face interview: If you're a good fit, you will have an interview with one
                    of our recruiters. We'll discuss the job, your experience, and answer any questions you have.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[13px] flex gap-3 items-center">
                    Work with the client company <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                    You'll start working directly with the company that hired you through our agency. We'll be your
                    point of contact and provide support throughout your employment.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[13px] flex gap-3 items-center">
                    Job offer and Training <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                    We'll help you negotiate a great offer that meets your needs. Training for success: We will provide
                    any necessary training or orientation so you're ready to hit the ground running at your new job.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-5 mt-5'>
            <div className='w-[35%]'>
              <h3 className="font-medium text-[16px] my-7">
                 <span className="text-primary_dash">03:</span> Available Jobs
              </h3>
              <div className="flex flex-col gap-3">
              <h4 className="text-[13px] flex gap-3 items-center">
                Exciting Job Opportunities Available! <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                   We're hiring! If you're passionate, dedicated, and looking for a rewarding career, we have multiple job openings across various fields.
                   Whether you're interested in supporting a kitchen team, providing
                   care as a nanny, maintaining a clean and organized home, or driving with care and precision, we have the perfect role for you. 
                  </p>
              </div>
            </div>

            <div className=" overflow-hidden" >
              <div className='flex justify-between items-center'>
              <h3 className="font-medium text-[16px] my-7">
                <span className="text-primary_dash">04:</span> Job Cards
              </h3>
              <button
                  className="text-2xl bg-black text-white p-2 rounded-full"
                  onClick={scrollContent}
                >
                  <LuArrowRight />
                </button>
              </div>
              
              <div >
              <div className="flex gap-5 overflow-x-auto w-[250%] scrollable-content">
     
                 {jobs.map((job) => (
                   <div
                   key={job.id}
                   className='flex flex-col justify-between border h-[28vh] w-[28vh] border-primary_dash p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'
                     >
                  <div className='flex flex-col gap-3'>
                 <h1 className='font-medium text-[14px]'>{job.title}</h1>
                 <div className='flex gap-9'>
                 {job.type.map((t, index) => (
                 <p
                 key={index}
                 className='flex items-center text-[9px] gap-1 text-gray-400'
                 >
                 <TbBriefcase className='text-gray-400' />
                 {t}
               </p>
             ))}
           </div>
           <p className='text-[12px]'>{job.description}</p>
         </div>
         <div className='flex justify-between items-center'>
           <button
             onClick={() => deleteJob(job.id)}
             className='underline text-[11px] text-[#FF2929]/50'
           >
                 Delete this job
                 </button>
                 <Link href='/edit'>
                 <button
                 className='bg-[#E0E6F7] py-2 px-4 rounded-md text-[11px] text-primary_dash group-hover:bg-primary_dash group-hover:text-white'
                  >
                  Edit this Job
                 </button>
                   </Link>
          
                 </div>
                 </div>
                 ))}

               </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className='flex gap-8 mt-8'>
            <div>
              <h3 className='text-[16px] font-medium my-10'>Our Services</h3>
              <div className='flex gap-8'>
                <div className='w-[45%]'>
                  <h3 className="font-medium text-[16px] my-7">
                    <span className="text-primary_dash">01:</span> Workforce Solutions
                  </h3>
                  <div className='flex flex-col gap-4'>
                  <h4 className="text-[13px] flex gap-3 items-center justify-between">
                  Temporary staffing: <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Workers to fill short-term positions in various sectors, such as; house staff (Babysitting/Nanny, Housekeeping/Maid, Personal Assistants, Drivers, Gardener, Tutor), catering staff, web specialist, etc. 
                  </p>

                  <h4 className="text-[13px] flex gap-3 items-center justify-between">
                  Temp-to-Perm Staffing: <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Trial period for both employer and worker to evaluate fit before making a permanent hiring decision. 
                  </p>

                  <h4 className="text-[13px] flex gap-3 items-center justify-between">
                  Training and Development: <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Training services to improve candidate skills and increase their employability. 
                  </p>

                  <h4 className="text-[13px] flex gap-3 items-center justify-between">
                  On-Site Management: <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Overseeing the temporary workers placed at a client's location and managing day-to-day operations. 
                  </p>
                  </div>
                </div>

                <div>
                <h3 className="font-medium text-[16px] my-7">
                    <span className="text-primary_dash">02:</span> Talent Architects
                  </h3>
                  <div className='flex flex-col gap-5'>
                  <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                  End-to-End Recruitment <RiEdit2Fill />
                 </p>
                 <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                 HR Consulting (Coaching & Well-being) <RiEdit2Fill />
                </p>
                <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                Recruitment Jury Organization & Support <RiEdit2Fill />
                </p>
                <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                Executive Search <RiEdit2Fill />
                </p>

                <p className='font-medium text-[16px] my-6'>Flexible Recruitment Solutions</p>
                <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-cente justify-between rounded-sm">
                Permanent Recruitment <RiEdit2Fill />
                </p>
                <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                Temporary Staffing <RiEdit2Fill />
                </p>
                <p className="text-[13px] p-2 border border-gray-300 flex gap-3 items-center justify-between rounded-sm">
                Executive Search <RiEdit2Fill />
                </p>

                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className='text-[16px] font-medium my-10'>News Letter subscribe</h3>
              <div className="flex flex-col gap-3 ">
              <h4 className="text-[13px] flex gap-3 items-center justify-between mt-6">
              Stay Informed and Ahead of the Curve. <RiEdit2Fill />
                  </h4>
                  <p className="text-[13px] p-2 border border-gray-300 py-4 flex gap-3 items-center rounded-sm">
                  Subscribe to our newsletter for the latest updates, exclusive insights, and valuable information delivered straight to your inbox. 
                  </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HomeEdit;
