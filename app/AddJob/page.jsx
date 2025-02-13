"use client";
import React, { useState } from "react";
import Navbar2 from '../components/navbar2';
import Sidebar from '../components/sidebar';
import { BsFillCloudUploadFill } from "react-icons/bs";

function AddJob({ addNewJob }) {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [position, setPosition] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !description) {
      alert("Please fill in all required fields");
      return;
    }

    const newJob = {
      title: position,
      desc: description,
      company: companyName,
      salary,
      jobType,
      location,
      contact,
      email,
      overview,
      logo: uploadedFileName,
      link: "/jobdetail",
    };

    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const savedJobboard = JSON.parse(localStorage.getItem("jobboard")) || [];

    savedJobs.push(newJob);
    savedJobboard.push(newJob);

    localStorage.setItem("jobs", JSON.stringify(savedJobs));
    localStorage.setItem("jobboard", JSON.stringify(savedJobboard));

    setUploadedFileName("");
    setPosition("");
    setJobType("");
    setDescription("");
    setOverview("");
    setCompanyName("");
    setSalary("");
    setLocation("");
    setContact("");
    setEmail("");

    router.push("/jobboard");
  };

  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="flex justify-between p-5">
            <h1 className="text-3xl font-semibold">Add New Job</h1>
            <button onClick={handleSubmit} className="bg-[#2196F3] p-1 px-4 text-[14px] text-white rounded-md">
              Submit
            </button>
          </div>
          <hr className="w-[97%] mx-auto border-black/30" />
          <div className="grid grid-cols-3 gap-16 p-5">
            <div>
              <h2 className="font-medium text-lg">Job Card</h2>
              <div className="flex flex-col mt-9 gap-4">
                <h3 className="text-[15px]">Position</h3>
                <input
                  type="text"
                  className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <h3 className="text-[15px]">Type</h3>
                <input
                  type="text"
                  className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                />
                <h3 className="text-[15px]">Card Description</h3>
                <textarea
                   className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 w-full resize-none overflow-hidden break-words"
                   rows="5"
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <h2 className="font-medium text-lg">Job Details</h2>
              <div className="flex flex-col mt-9 gap-4">
                <h3>Position</h3>
                <input
                  type="text"
                  className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Overview"
                  className="border border-black/30 p-1 rounded-sm pb-44 text-[14px] outline-primary_dash/30"
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h2 className="font-medium text-lg">Hiring Company</h2>
              <div className="flex flex-col mt-9 gap-4">
                <h3>Hiring Company Name</h3>
                <input
                  type="text"
                  className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="cv"
                  className="flex items-center justify-center border border-black/30 p-1 gap-2 w-full"
                >
                  <BsFillCloudUploadFill className="text-black/30 text-[15px]" />
                  <span className="text-black/30 text-[12px] font-light">
                    {uploadedFileName || "Upload Company Logo"}
                  </span>
                </label>
                <h3 className="mt-10">Monthly Salary</h3>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
                <h3>Job Type</h3>
                <input type="text"
                 placeholder='Full time' 
                 value={jobType}
                 onChange={(e) => setJobType(e.target.value)}
                 className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
                <h3>Location</h3>
                <input type="text"
                 placeholder='Enter location'
                 value={location}
                 onChange={(e) => setLocation(e.target.value)} 
                 className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
                <h3>Contact Us</h3>
                <input type="text"
                 placeholder='Phone number'
                 value={contact}
                 onChange={(e) => setContact(e.target.value)}
                 className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
                <h3>Email</h3>
                <input type="email"
                 placeholder='Enter email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
