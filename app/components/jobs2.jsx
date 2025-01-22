"use client"
import React, { useState } from 'react';
import { TbBriefcase } from 'react-icons/tb';

function Jobs() {
  
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const openEditModal = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentJob(null);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 w-[100%] p-8'>
     
      {jobs.map((job) => (
        <div
          key={job.id}
          className='flex flex-col justify-between border h-[32vh] w-[32vh] border-primary_dash p-4 py-8 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'
        >
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-[16px]'>{job.title}</h1>
            <div className='flex gap-9'>
              {job.type.map((t, index) => (
                <p
                  key={index}
                  className='flex items-center text-[11px] gap-1 text-gray-400'
                >
                  <TbBriefcase className='text-gray-400' />
                  {t}
                </p>
              ))}
            </div>
            <p className='text-sm'>{job.description}</p>
          </div>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => deleteJob(job.id)}
              className='underline text-[13px] text-[#FF2929]/50'
            >
              Delete this job
            </button>
            <button
              onClick={() => openEditModal(job)}
              className='bg-[#E0E6F7] py-2 px-4 rounded-md text-[13px] text-primary_dash group-hover:bg-primary_dash group-hover:text-white'
            >
              Edit this Job
            </button>
          </div>
        </div>
      ))}

      {/* Modal for Editing */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white w-[90%] max-w-md p-6 rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Edit Job</h2>
           
            <p className='mb-2'>Job Title: {currentJob?.title}</p>
            <button
              onClick={closeModal}
              className='bg-red-500 text-white py-1 px-3 rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
