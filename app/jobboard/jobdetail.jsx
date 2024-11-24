"use client"
import React, { useState } from "react";
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import Link from 'next/link';
import { MdOutlineContentCopy } from "react-icons/md";
import { PiShareFatFill } from "react-icons/pi";
import logo from '../assets/navLogo.png';
import gray from '../assets/grayhr.png';
import Footer from '../components/Footer';
import emoji from '../assets/emoji.png';
import { BsFillCloudUploadFill } from "react-icons/bs";
 

function Jobdetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false);

  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSubmittedModalOpen(true);
  };

  const closeSubmittedModal = () => {
    setIsSubmittedModalOpen(false);
  };

  return (
    <div>
      <div className='bg-primary p-11 lg:p-52'>
        <h1 className='text-white text-center text-3xl lg:text-6xl'>Job Details</h1>
        <Image src={hr} width={250} height={1} alt='hr' className='mx-auto mt-4' />
      </div>

      <div className='bg-white p-7 lg:p-32 flex gap-12 lg:gap-32'>
      <div className='w-[50%] h-[800px] overflow-y-auto border-b-gray-400'>
        <h1 className='text-xl lg:text-3xl font-medium'>Software Dev</h1>
        <div className='flex flex-col gap-6 lg:gap-11 border border-gray-400 py-5 p-3 mt-10 rounded-lg'>
          <h1 className='text-sm lg:text-xl'>Overview</h1>
          <p className='text-[12px] lg:text-[14px]'>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labogggris nisi ut galiquip ex ea commodo consequat.
             Duis aute irure dolor inelit esse cillum dolore eu fugiat nu sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='text-[12px] lg:text-[14px]'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
          <p className='text-[12px] lg:text-[14px]'>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
        </div>
        <div
      className='flex flex-col gap-8 border border-gray-400border-b-gray-400 py-5 p-3 mt-10 rounded-lg h-[852px]'
    >
      <div>
      <h1 className="text-xl">Job Description</h1>
      <p className="text-[12px] lg:text-[14px] mt-6">
        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in elit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='text-[12px] lg:text-[14px] mt-7'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
     
      <h1 className="text-xl mt-7">Responsabilities</h1>
      <p className="text-[12px] lg:text-[14px] mt-7">
        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in elit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='text-[12px] lg:text-[14px] mt-7'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
     
      <h1 className="text-xl mt-7">Required Skills</h1>
      <p className="text-[12px] lg:text-[14px] mt-7">
        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in elit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='text-[12px] lg:text-[14px] mt-7'>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
  
      </div> 
      </div>

      </div>

      <div className='flex flex-col gap-24 w-[50%] -mt-52'>
        <div className='bg-secondary p-4 w-[100%] py-10 border-4 border-white rounded-xl'>
          <div className='flex items-center gap-2 mt-10 mb-20'>
          <Image
          src={logo}
          width={40}
          height={40}
          alt="Logo"
        />
            <div className='flex flex-col'>
              <h2 className='text-white font-light'>Company</h2>
              <h3 className='text-4xl text-white'>Mayllos</h3>
            </div>
          </div>
          <div className='flex justify-between mb-4'>
            <h3 className='font-light text-[#ECEDF2]'>Monthly Salary:</h3>
            <p className='font-light text-[#ECEDF2]'>200,000 Rwf</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Type:</h3>
            <p className='font-light text-[#ECEDF2]'> Full Time, Part Time</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Location:</h3>
            <p className='font-light text-[#ECEDF2]'> Kigali/Rwanda</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Job Type:</h3>
            <p className='font-light text-[#ECEDF2]'>Full Time, Part Time</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>Contact Us:</h3>
            <p className='font-light text-[#ECEDF2]'>0784 673 524</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[#ECEDF2]'>E-mail:</h3>
            <p className='font-light text-[#ECEDF2]'>info.mayllos@gmail.com</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='text-center'>
          <button className='bg-white text-black p-2 w-[80%] mt-16 mb-12 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl' onClick={handleModalToggle}>Apply now</button>
          </div>
         
        </div>

        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
          <div className="bg-secondary border border-gray-400 w-[90%] max-w-lg p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-secondary bg-white/50 text-4xl p-1 px-3 rounded-3xl"
              onClick={handleModalToggle}
            >
              &times;
            </button>
            <h2 className="text-[38px] my-4 text-center text-white">Apply for this Job</h2>
            <Image src={hr} width={310} height={1} alt='hr' className='mx-auto mt-4' />
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-10">
              <div>
                <label htmlFor="email" className="block text-[20px] text-gray-100 font-light mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 bg-secondary rounded-md p-3 text-white placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[20px] text-gray-100 font-light mb-3 mt-8">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[20px] text-white font-light mb-3 mt-8 ">Why should we hire you?</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Type your message"
                  className="w-full border  bg-secondary h-28  border-gray-300 text-white rounded-md p-3 placeholder:text-gray-200 placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border border-gray-300 rounded-md p-2 cursor-pointer">
            <input
              type="file"
              id="cv"
              accept=".doc,.docx,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="cv"
              className="flex items-center justify-center h-16 gap-2 w-full"
            >
              <BsFillCloudUploadFill className="text-gray-200 text-xl" />
              <span className="text-gray-200 text-[15px] font-light">
                {uploadedFileName || "Upload CV (doc, docx, pdf)"}
              </span>
            </label>
          </div>
        </div>

              <button
                type="submit"
                className="bg-white text-black  text-[20px] w-full py-2 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      )}


          {/* Submitted Confirmation Modal */}
          {isSubmittedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
          <div className="bg-white w-[100%] max-w-md p-6 rounded-lg text-center">
            <div className="flex items-center gap-1 justify-center">
            <h2 className="text-4xl text-secondary mb-4">Great Job </h2>
            <Image src={emoji} width={40} height={20} alt="emoji" className="mb-2" />
            </div>
            
            <p className="text-gray-800 mt-5 mb-6">
            This to confirm that We have received your Application, and we will get back to you as soon as possible. Thank you!
            </p>
            <button
              className="text-black"
              onClick={closeSubmittedModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

        <div className='p-5 border border-gray-400 rounded-lg '>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-black/50 text-xl font-light'>Share with friends</h1>
              <Image src={gray} width={170} height={1} alt='hr' className='mt-2 ml-1' />
            </div>
            <p className='text-black/50 flex gap-1 items-center text-[13px]'>Copy link < MdOutlineContentCopy className='text-black/70 text-xl' /></p>
          </div>
          <div className='flex justify-between mt-10 items-center'>
          <div className='flex gap-3 items-center'>
          <Link href='#'><IoLogoWhatsapp   className='p-1 text-[40px] text-[#60D669] bg-white'/></Link>
          <Link href='#'><FaLinkedinIn   className='p-1 text-3xl bg-[#0076B2] rounded-[10px] text-white'/></Link>
          <Link href='#'><GrFacebookOption className='bg-[#1877F2] text-white text-3xl p-1 rounded-3xl' /></Link>
          </div>
          <PiShareFatFill className='text-3xl text-[#1A77B9]/50' />
          </div>
        </div>

      </div>

      </div>
      <Footer />
    </div>
  )
}

export default Jobdetail;