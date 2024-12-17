"use client"
import React, { useState } from "react";
import hr from '../assets/abouthr.png';
import Image from 'next/image';
import logo from "../assets/thirdlogo.png";
import Footer from '../components/Footer';
import { BsFillCloudUploadFill } from "react-icons/bs";
import emailjs from "emailjs-com";
 

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


    emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        
      },
      (error) => {
        console.error("Error submitting application:", error.text);
        
      }
    );
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
        <h1 className='text-xl lg:text-3xl font-medium'>Software Dev</h1>
        <div className='flex flex-col gap-6 lg:gap-4 border border-gray-400 py-5 p-3 mt-5 lg:mt-10 rounded-lg'>
          <h1 className='text-[16px] lg:text-xl'>Overview</h1>
          <p className='text-[12px] lg:text-[14px]'>LK Recruitment Rwanda is seeking talented and experienced Software Designers 
            to join our team. We are looking for individuals passionate about creating innovative applications and software,
             with a strong understanding of design principles and a knack for problem-solving. If you have a passion for 
             coding, a vibrant creative mind, and a desire to build cutting-edge software solutions, we encourage you to apply.</p>
         </div>
      <div>

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Job Description</h1>
      <p className="text-[12px] lg:text-[14px]">
      As a Software Designer, you will be responsible for designing and implementing applications 
      and software that meet specific client needs. You will work closely with development teams to translate technical
       requirements into robust and performant software solutions. You will play a key role in creating intuitive and
        engaging user interfaces, ensuring an optimal user experience.</p>
        </div>
     

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Responsabilities</h1>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Design and Development:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Analyze functional and technical requirements for software projects. <br />
      Design robust and scalable software architectures. <br />
      Develop intuitive and engaging user interfaces (UI). <br />
      Write clean, efficient, and well-documented code. <br />
      Test and debug software applications to ensure stability and performance.</p>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Team Collaboration:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Work closely with development, design, and project management teams. <br />
       Participate in code reviews and brainstorming sessions. <br />
       Effectively communicate progress and challenges related to software development.</p>
      <h4 className="text-[12px] lg:text-[14px] font-medium">• Maintenance and Improvements:</h4>
      <p className="text-[12px] lg:text-[14px]">
      Update and improve existing software applications. <br />
      Resolve issues and bugs reported by users. <br />
      Propose enhancements to application functionality and usability.</p>
        </div>

        <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
        <h1 className="text-[16px] lg:text-xl">Required Skills.</h1>
      <p className="text-[12px] lg:text-[14px]">• Strong proficiency in one or more programming languages (e.g., Java, Python, C++, JavaScript).</p>
      <p className="text-[12px] lg:text-[14px]">• Experience in designing and developing web and/or mobile applications.</p>
      <p className="text-[12px] lg:text-[14px]">• Understanding of UI/UX design principles.</p>
      <p className="text-[12px] lg:text-[14px]">• Knowledge of software architecture concepts and database management.</p>
      <p className="text-[12px] lg:text-[14px]">• Ability to work independently and as part of a team.</p>
      <p className="text-[12px] lg:text-[14px]">• Excellent communication and problem-solving skills.</p>
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
            <p className='font-light text-[13px] lg:text-lg text-white/50'>+250 795 460 410</p>
          </div>
          <hr className='text-[#ECEDF2]'  />
          <div className='flex justify-between my-4'>
            <h3 className='font-light text-[13px] lg:text-lg text-white/50'>E-mail:</h3>
            <p className='font-light text-[13px] lg:text-lg text-white/50'>contact@lkrecrutementrw.com</p>
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
                  name="user_email"
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
                  name="user_number"
                  placeholder="Your Phone Number"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[15px] lg:text-[20px] text-white font-light mb-2 lg:mb-3 mt-5 lg:mt-8 ">Message</label>
                <textarea
                  id="message"
                  name="message"
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
              name="user_cv"
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
          <div className="bg-white w-[85%] lg:w-[100%] max-w-md p-4 lg:p-6 rounded-lg text-center">
            <div className="flex items-center gap-1 justify-center">
            <h2 className="text-xl lg:text-4xl text-secondary mb-4">Great Job </h2>
            
            </div>
            
            <p className="text-gray-800 mt-2 lg:mt-5 mb-4 lg:mb-6 text-[12px] lg:text-[19px] leading-8 lg:leading-9">
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

export default Jobdetail;
