"use client";
import React, { useState } from "react";
import Navbar2 from '../components/navbar2';
import Sidebar from '../components/sidebar';
import { BsFillCloudUploadFill } from "react-icons/bs";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import logo from '../assets/loginlogo.png';

function EditJob() {
  const [jobDetails, setJobDetails] = useState({
    position: "Software Engineer",
    type: "Full time",
    description: "Manage HR operations and enhance our recruitment strategies. 5 years of experience in HR is required.",
    overview: "Tempor incididunt ut labore et dolore magna aliqua...",
    responsibilities: "Veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    requiredSkills: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
    companyName: "LK Recruitment",
    salary: "Depends on the experience",
    jobType: "Full time or part time",
    location: "Rwanda/Kigali",
    contact: "+250 795 460 410",
    email: "contact@lkrecrutementrw.com"
  });

  const [companyLogo, setCompanyLogo] = useState(logo);

  const handleChange = (field, value) => {
    setJobDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(URL.createObjectURL(file));
    }
  };

  const handleDeleteLogo = () => {
    setCompanyLogo(null);
  };

  const handleSave = () => {
    console.log("Saved Job Details:", jobDetails);
  };

  return (
    <div>
      <Navbar2 />
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <div className='flex justify-between p-5'>
            <h1 className='text-3xl font-semibold'>Edit Job</h1>
            <button onClick={handleSave} className='bg-[#2196F3] p-1 px-4 text-[14px] text-white rounded-md'>
              Save Changes
            </button>
          </div>
          <hr className='w-[97%] mx-auto border-black/30' />
          <div className='grid grid-cols-3 gap-16 p-5'>

          <div>
              <h2 className='font-medium text-lg'>Job Card</h2>
              <div className='flex flex-col mt-9 gap-4'>
                <h3 className='text-[15px]'>Position</h3>
                <input 
                  type="text" 
                  value={jobDetails.position} 
                  onChange={(e) => handleChange("position", e.target.value)}
                  className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' 
                />
                <h3 className='text-[15px]'>Type</h3>
                <input 
                  type="text" 
                  value={jobDetails.type} 
                  onChange={(e) => handleChange("type", e.target.value)}
                  className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' 
                />
                <h3 className='text-[15px]'>Card Description</h3>
                <textarea 
                  value={jobDetails.description} 
                  onChange={(e) => handleChange("description", e.target.value)}
                  className='border border-black/30 p-1 rounded-sm pb-10 text-[14px] outline-primary_dash/30' 
                />
              </div>
            </div>

            {/* Job Details */}
            <div>
              <h2 className='font-medium text-lg'>Job Details</h2>
              <div className='flex flex-col mt-9 gap-4'>
                <h3>Position</h3>
                <input type="text" value={jobDetails.position} onChange={(e) => handleChange("position", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <h3>Overview</h3>
                <textarea value={jobDetails.overview} onChange={(e) => handleChange("overview", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px] pb-10' />
                <h3>Job Description</h3>
                <textarea value={jobDetails.description} onChange={(e) => handleChange("description", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px] pb-10' />
                <h3>Responsibilities</h3>
                <textarea value={jobDetails.responsibilities} onChange={(e) => handleChange("responsibilities", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px] pb-10' />
                <h3>Required Skills</h3>
                <textarea value={jobDetails.requiredSkills} onChange={(e) => handleChange("requiredSkills", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px] pb-10' />
              </div>
            </div>

            {/* Hiring Company */}
            <div>
              <h2 className='font-medium text-lg'>Hiring Company</h2>
              <div className='flex flex-col mt-9 gap-4'>
                <h3>Company Name</h3>
                <input type="text" value={jobDetails.companyName} onChange={(e) => handleChange("companyName", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="flex items-center justify-center border border-black/30 p-1 gap-2 w-full cursor-pointer">
                  <BsFillCloudUploadFill className="text-black/30 text-[15px]" />
                  <span className="text-black/30 text-[12px] font-light">
                    {companyLogo ? "Change Company Logo" : "Upload Company Logo"}
                  </span>
                </label>
                {companyLogo && (
                  <div className="flex gap-2 items-center">
                    <Image src={companyLogo} width={100} height={100} alt='logo' className='w-12' />
                    <MdDelete className="text-red-400 text-xl cursor-pointer" onClick={handleDeleteLogo} />
                  </div>
                )}
                <h3>Monthly Salary</h3>
                <input type="text" value={jobDetails.salary} onChange={(e) => handleChange("salary", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <h3>Job Type</h3>
                <input type="text" value={jobDetails.jobType} onChange={(e) => handleChange("jobType", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <h3>Location</h3>
                <input type="text" value={jobDetails.location} onChange={(e) => handleChange("location", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <h3>Contact Us</h3>
                <input type="text" value={jobDetails.contact} onChange={(e) => handleChange("contact", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
                <h3>Email</h3>
                <input type="email" value={jobDetails.email} onChange={(e) => handleChange("email", e.target.value)} className='border border-black/30 p-1 rounded-sm text-[14px]' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditJob;