"use client"
import React, { useState } from "react";
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import logo from "../assets/thirdlogo.png";
import Footer from '../components/Footer';
import emoji from '../assets/emoji.png';
import { BsFillCloudUploadFill } from "react-icons/bs";
 

function Jobdetail3() {
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
      <div className='bg-primary p-24 lg:p-52'>
        <h1 className='text-white text-center text-3xl lg:text-6xl'>Job Details</h1>
        <Image src={hr} width={250} height={1} alt='hr' className='mx-auto mt-4' />
      </div>

      <div className='bg-white p-6 lg:p-32 flex flex-col lg:flex-row gap-12 lg:gap-32'>
      <div className='w-[100%] lg:w-[50%] h-[calc(100%-Xpx)] lg:h-[800px] overflow-y-hidden lg:overflow-y-auto border-b-gray-400'>
        <h1 className='text-xl lg:text-3xl font-medium'>Web designer</h1>
        <div className='flex flex-col gap-6 lg:gap-4 border border-gray-400 py-5 p-3 mt-5 lg:mt-10 rounded-lg'>
          <h1 className='text-[16px] lg:text-xl'>Overview</h1>
          <p className='text-[12px] lg:text-[14px]'>LK Recruitment Rwanda is looking for a talented and experienced Web Designer to join our team. You will play a key role in shaping the visual identity and user experience of our website and other digital platforms.  We are searching for a creative and detail-oriented individual who is passionate about crafting beautiful and functional designs that engage our audience and contribute to our brand success.</p>
         </div>
      <div>

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Job Description</h1>
      <p className="text-[12px] lg:text-[14px]">
      As a Web Designer, you will be responsible for the visual design and development of our website and related digital materials. You will work closely with our team to translate our vision into a cohesive and user-friendly online experience.</p>
        </div>
     

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Responsabilities</h1>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Website Design:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Create wireframes, mockups, and prototypes to present design concepts for our website. <br />
      Design and develop user interfaces (UI) that are aesthetically pleasing, user-friendly, and optimized for various devices. <br />
      Ensure website design adheres to best practices for accessibility and usability <br />
      Collaborate with developers to implement designs and ensure seamless integration.</p>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Visual Assets:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Create high-quality visual assets for the website, including banners, icons, graphics, and illustrations. <br />
      Develop brand guidelines and ensure consistency in design across all platforms</p>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• User Experience (UX):</h4>
      <p className="text-[12px] lg:text-[14px]">
      Conduct user research and gather feedback to understand user needs and preferences. <br />
      Implement UX principles to create an intuitive and enjoyable user experience. <br />
      Optimize website layout and navigation for ease of use.</p>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Technical Skills:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Proficiency in web design software (Adobe Photoshop, Illustrator, InDesign, etc.) <br />
      Experience with HTML, CSS, and JavaScript. <br />
      Knowledge of responsive web design principles. <br />
      Understanding of web accessibility guidelines.</p>
        </div>

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Required Skills.</h1>
      <p className="text-[12px] lg:text-[14px]">• Strong portfolio showcasing website design projects.</p>
      <p className="text-[12px] lg:text-[14px]">• Excellent visual design skills and a keen eye for detail.</p>
      <p className="text-[12px] lg:text-[14px]">• Understanding of user interface (UI) and user experience (UX) principles.</p>
      <p className="text-[12px] lg:text-[14px]">• Proficient in web design software and tools.</p>
      <p className="text-[12px] lg:text-[14px]">• Experience with front-end development languages (HTML, CSS, JavaScript).</p>
      <p className="text-[12px] lg:text-[14px]">• Ability to work independently and as part of a team.</p>
      <p className="text-[12px] lg:text-[14px]">• Excellent communication and problem-solving skills.</p>
      <p className="text-[12px] lg:text-[14px]">• Passion for web design and user experience.</p>
        </div>
      
      </div> 

      </div>

      <div className='flex flex-col gap-24 w-[100%] lg:w-[50%] -mt-0 lg:-mt-52'>
        <div className='bg-secondary p-4 w-[100%] py-4 lg:py-10 border-4 border-white rounded-xl'>
          <div className='flex items-center gap-2 lg:gap-3 mt-5 lg:mt-10 mb-10 lg:mb-20'>
          <Image
          src={logo}
          width={40}
          height={40}
          alt="Logo"
          className="w-[40px] lg:w-[60px]"
        />
            <div className='flex flex-col'>
              <h2 className='text-white/50 text-[13px] lg:text-lg font-light'>Company</h2>
              <h3 className='text-[13px] lg:text-lg text-white'>LK RECRUITMENT RWANDA</h3>
            </div>
          </div>
          <div className='flex justify-between mb-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Monthly Salary:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'>Depending on experience</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Job Type:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'> Full Time, Part Time</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Job Location:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'> Kigali/Rwanda</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Contact Us:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'>0784 673 524</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>E-mail:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'>info.mayllos@gmail.com</p>
          </div>
          <hr className='text-[#ECEDF2]' />
          <div className='text-center'>
          <button className='bg-white text-black p-2 w-[80%] text-[13px] lg:text-lg mt-7 lg:mt-16 mb-8 lg:mb-12 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl' onClick={handleModalToggle}>Apply now</button>
          </div>
         
        </div>

        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
          <div className="bg-secondary border border-gray-400 w-[90%] max-w-lg p-3 lg:p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-secondary bg-white/50 text-2xl lg:text-4xl p-1 px-3 rounded-3xl"
              onClick={handleModalToggle}
            >
              &times;
            </button>
            <h2 className="text-[22px] lg:text-[38px] my-4 text-center text-white">Apply for this Job</h2>
            <Image src={hr} width={310} height={1} alt='hr' className='mx-auto mt-2 lg:mt-4 w-[170px] lg:w-[280px]' />
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-10">
              <div>
                <label htmlFor="email" className="block text-[15px] lg:text-[20px] text-gray-100 font-light mb-2 lg:mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 bg-secondary rounded-md p-2 lg:p-3 text-white placeholder:text-gray-300 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[15px] lg:text-[20px] text-gray-100 font-light mb-2 lg:mb-3 mt-5 lg:mt-8">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[15px] lg:text-[20px] text-white font-light mb-2 lg:mb-3 mt-5 lg:mt-8 ">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Type your message"
                  className="w-full border  bg-secondary h-20 lg:h-28  border-gray-300 text-white rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
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
              className="flex items-center justify-center h-12 lg:h-16 gap-2 w-full"
            >
              <BsFillCloudUploadFill className="text-gray-200 text-xl" />
              <span className="text-gray-200 text-[13px] lg:text-[15px] font-light">
                {uploadedFileName || "Upload CV (doc, docx, pdf)"}
              </span>
            </label>
          </div>
        </div>

              <button
                type="submit"
                className="bg-white text-black text-[14px] lg:text-[20px] w-full py-2 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl"
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
          <div className="bg-white w-[80%] lg:w-[100%] max-w-md p-6 rounded-lg text-center">
            <div className="flex items-center gap-1 justify-center">
            <h2 className="text-2xl lg:text-4xl text-secondary mb-4">Great Job </h2>
           
            </div>
            
            <p className="text-gray-800 mt-5 mb-6 leading-9">
            Thank you for applying to Lk Recruitment Rwanda. We are currently reviewing all applications and will reach out within four weeks if your qualifications match the position.
             If you don't hear from us by then, we have carefully reviewed your application but may not 
             have selected you for this role. We encourage you to check our website for future opportunities. <br />
             Thank you again for your interest. <br />
             Sincerely, <br />
             LK Recruitment Rwanda Limited.
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

      </div>

      </div>
      <Footer />
    </div>
  )
}

export default Jobdetail3;