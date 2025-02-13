"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { TbBriefcase } from "react-icons/tb";
import { RiLoader2Line } from "react-icons/ri";
import Link from "next/link";
import Navbar2 from "../components/navbar2";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const predefinedJobs = [
      {
        title: "Software Engineer",
        desc: "Join our tech team to develop innovative solutions. Minimum 3 years of experience required.",
        link: "/jobdetail",
      },
      {
        title: "Caring Nanny Needed",
        desc: "Seeking a compassionate and dependable Nanny to provide exceptional care and support for children.",
        link: "/job5",
      },
      {
        title: "Content Creator",
        desc: "As a Content Creator, you will be the voice of our brand, responsible for developing and producing high-quality content.",
        link: "/job9",
      },
      {
        title: "Tutor",
        desc: "As a Tutor, you will provide individualized academic support to students of various ages and levels.",
        link: "/job4",
      },
      {
        title: "Graphic Designer",
        desc: "As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.",
        link: "/job2",
      },
      { title: "Web Designer", desc: "As a Web Designer, you will be responsible for the visual design and development of our website.", link: "/job3" },
      { title: "Reliable Maid Needed", desc: "Looking for a hardworking and trustworthy Maid to help maintain a clean and organized home.", link: "/job6" },
      { title: "Community Manager", desc: "Join us as a Community manager and make a lasting impact by fostering connections, promoting collaboration.", link: "/job8" },
      { title: "Chef Cook", desc: "As a Chef Cook, you will be responsible for preparing and cooking high-quality meals for our clients.", link: "/job12" },
      { title: "Admin assistant", desc: "As an Administrative Assistant, you will be responsible for providing comprehensive administrative support...", link: "/job10" },
      { title: "Commercial Assistant", desc: "As a Commercial Assistant, you will play a crucial role in supporting our sales efforts and ensuring smooth business...", link: "/job11" },
      { title: "Experienced Driver", desc: "Looking for a professional and reliable Driver to ensure smooth, safe, and timely transportation.", link: "/job7" },
    ];

    // Merge predefined jobs with saved jobs, avoiding duplicates
    const allJobs = [...predefinedJobs, ...savedJobs];

    // Remove duplicates based on job title
    const uniqueJobs = Array.from(new Map(allJobs.map(job => [job.title, job])).values());

    setJobs(uniqueJobs);
  }, []);

  const handleDeleteJob = (jobId) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <section>
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div>
          <h1 className="font-semibold text-2xl px-10 pt-10">Job listing</h1>
          <div className="grid grid-cols-4 gap-12 w-[100%] p-10 mx-auto">
            {jobs.length === 0 ? (
              <p>No jobs available.</p>
            ) : (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between h-[30vh] w-[30vh] border border-primary_dash p-3 py-4 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group"
                >
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-[16px]">{job.title}</h1>
                    <div className="flex gap-9">
                      {job.type?.map((t, idx) => (
                        <p key={idx} className="flex items-center text-[11px] gap-1 text-gray-400">
                          <TbBriefcase className="text-gray-400" />
                          {t}
                        </p>
                      ))}
                    </div>
                     <div className="flex gap-4 text-gray-400 text-sm">
                        <p className="flex items-center gap-1">
                            <TbBriefcase /> Full Time
                        </p>
                        <p className="flex items-center gap-1">
                          <TbBriefcase /> Part Time
                        </p>
                         </div>
                    <p className="text-sm">{job.desc || job.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="underline text-[12px] text-[#FF2929]/50"
                    >
                      Delete this job
                    </button>
                    <Link href="/edit">
                      <button
                        className="bg-[#E0E6F7] py-2 px-3 rounded-md text-[12px] text-primary_dash group-hover:bg-primary_dash group-hover:text-white"
                      >
                        Edit this Job
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="flex items-center gap-1 border border-primary_dash/50 py-2 px-4 rounded-3xl text-[17px] mx-auto mt-4">
            <RiLoader2Line /> Load more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
