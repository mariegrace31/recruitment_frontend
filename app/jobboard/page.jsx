"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBriefcase } from "react-icons/tb";
import hr from "../assets/abouthr.png";
import lines from "../assets/linegroup.png";
import dot from "../assets/dothr.png";
import Footer from "../components/Footer";

function Page() {
  const [jobs, setJobs] = useState([
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
    { title: "Web Designer", 
      desc: "As a Web Designer, you will be responsible for the visual design and development of our website.", 
      link: "/job3",
    },
    { title: "Reliable Maid Needed", desc: "Looking for a hardworking and trustworthy Maid to help maintain a clean and organized home.", link: "/job6" },
    { title: "Community Manager", desc: "Join us as a Community manager and make a lasting impact by fostering connections, promoting collaboration.", link: "/job8" },
    { title: "Chef Cook", desc: "As a Chef Cook, you will be responsible for preparing and cooking high-quality meals for our clients.", link: "/job12" },
    { title: "Admin assistant", desc: "As an Administrative Assistant, you will be responsible for providing comprehensive administrative support...", link: "/job10" },
    { title: "Commercial Assistant", desc: "As a Commercial Assistant, you will play a crucial role in supporting our sales efforts and ensuring smooth business...", link: "/job11" },
    { title: "Experienced Driver", desc: "Looking for a professional and reliable Driver to ensure smooth, safe, and timely transportation.", link: "/job7" },
 
  ]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    
    // Merge default jobs with saved ones, avoiding duplicates
    setJobs((prevJobs) => {
      const allJobs = [...prevJobs, ...savedJobs];
  
      // Remove duplicates based on job title
      const uniqueJobs = Array.from(new Map(allJobs.map(job => [job.title, job])).values());
  
      return uniqueJobs;
    });
  }, []);

  return (
    <div className="bg-[#F8FAFF]">
      <div className="p-5 lg:p-20">
        <div className="bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto">
          <div className="bg-primary relative rounded-lg p-16 lg:p-44 text-center text-white text-xl lg:text-6xl">
            Available Jobs
            <Image src={hr} width={120} height={1} alt="hr" className="mx-auto mt-4" />
          </div>
        </div>
        <Image src={lines} width={100} height={50} alt="lines" className="mx-auto -mt-32 lg:-mt-24 object-cover" />
        <Image src={dot} width={1150} height={1} alt="dothr" className="mt-5 lg:mt-24 mx-auto" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 p-6 lg:p-24">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-white hover:bg-[#E0E6F7] group"
              >
                <h1 className="font-bold text-lg">{job.title}</h1>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <p className="flex items-center gap-1">
                    <TbBriefcase /> Full Time
                  </p>
                  <p className="flex items-center gap-1">
                    <TbBriefcase /> Part Time
                  </p>
                </div>
                <p className="text-sm w-full overflow-hidden break-words line-clamp-3">{job.desc}</p>
                <Link
                  href={job.link}
                  className="bg-[#E0E6F7] p-2 rounded-md w-[40%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white text-center"
                >
                  More Details
                </Link>
              </div>
            ))
          ) : (
            <p>No jobs available at the moment.</p>
          )}
        </div>

        <div className="bg-primary p-4 lg:p-16 flex flex-col lg:flex-row justify-between items-center rounded-lg w-[94%] my-4 lg:my-14 mx-auto">
          <div className="flex flex-col gap-5 lg:gap-10 w-[90%] lg:w-[50%]">
            <h1 className="font-medium text-white text-[15px] text-center lg:text-left lg:text-[30px]">
              Ready to hire an employee?
            </h1>
            <p className="font-extralight text-center lg:text-left text-white text-[15px] lg:text-[20px]">
              Find your next great team member today! We're here to help you connect with top talent that will drive your business forward. Let's build your dream team.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-secondary text-[13px] mt-5 lg:mt-0 lg:text-[16px] text-white p-2 px-3 rounded-3xl font-medium">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;