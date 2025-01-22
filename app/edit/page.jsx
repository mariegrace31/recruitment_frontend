"use client"
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { TbBriefcase } from 'react-icons/tb';
import { RiLoader2Line } from "react-icons/ri";
import Modal from '../components/Modal';

function Edit() {
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
    {
      id: 5,
      title: 'Marketing Specialist',
      type: ['Full Time', 'Part Time'],
      description: 'Drive our marketing campaigns and expand brand visibility. Experience in digital marketing preferred.',
    },
    {
      id: 6,
      title: 'HR Manager',
      type: ['Full Time', 'Part Time'],
      description: 'Manage HR operations and enhance our recruitment strategies. 5 years of experience in HR is required.',
    },
    {
      id: 7,
      title: 'Caring Nanny Needed',
      type: ['Full Time', 'Part Time'],
      description: 'Seeking a compassionate and dependable Nanny to provide exceptional care and support for child',
    },
    {
      id: 8,
      title: 'Reliable Maid Needed',
      type: ['Full Time', 'Part Time'],
      description: 'Looking for a hardworking and trustworthy Maid to help maintain a clean and organized home.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEditJob = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  return (
    <section className='flex'>
      <Sidebar />
      <div>
        <h1 className="font-semibold text-2xl px-10 pt-10">Edit and delete jobs</h1>
        <div className='grid grid-cols-4 gap-12 w-[100%] p-10 mx-auto'>
          {jobs.map((job) => (
            <div
              key={job.id}
              className='flex flex-col justify-between h-[30vh] w-[30vh] border border-primary_dash p-3 py-4 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'
            >
              <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-[16px]'>{job.title}</h1>
                <div className='flex gap-9'>
                  {job.type.map((t, index) => (
                    <p key={index} className='flex items-center text-[11px] gap-1 text-gray-400'>
                      <TbBriefcase className='text-gray-400' />
                      {t}
                    </p>
                  ))}
                </div>
                <p className='text-sm'>{job.description}</p>
              </div>
              <div className='flex justify-between items-center'>
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  className='underline text-[12px] text-[#FF2929]/50'
                >
                  Delete this job
                </button>
                <button
                  onClick={() => handleEditJob(job)}
                  className='bg-[#E0E6F7] py-2 px-3 rounded-md text-[12px] text-primary_dash group-hover:bg-primary_dash group-hover:text-white'
                >
                  Edit this Job
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className='flex items-center gap-1 border border-primary_dash/50 py-2 px-4 rounded-3xl text-[17px] mx-auto mt-4'>< RiLoader2Line />Load more</button>
      </div>

      {/* Modal for editing job */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          job={currentJob}
        />
      )}
    </section>
  );
}

export default Edit;