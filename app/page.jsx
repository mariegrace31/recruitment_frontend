"use client"
import { useRef, useState } from 'react';
import "./globals.css";
import { BsArrowDownRightCircleFill, BsFillCloudUploadFill } from "react-icons/bs";
import Jobs from "./components/Jobs";
import AvailableJobs from "./components/AvailableJobs";
import Services from "./components/Services";
import Suscribe from "./components/Suscribe";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import Hr from "./components/Hr";
import hr from './assets/abouthr.png';
import employer from './assets/employer.png';
import candidate from './assets/candidate.png';
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Image from 'next/image';
import emailjs from "emailjs-com";


export default function Home() {

 const testimonialsRef = useRef(null);

 const handleScrollToTestimonials = () => {
   setTimeout(() => {
     if (testimonialsRef.current) {
       testimonialsRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
   }, 2000);
 };

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
      process.env.NEXT_PUBLIC_TEMPLATE_ID_2,
      e.target,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Your details have been sent!");
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("Failed to send your details. Please try again.");
      }
    );
  };

  const closeSubmittedModal = () => {
    setIsSubmittedModalOpen(false);
  };

  const [isApplyNowModalOpen, setIsApplyNowModalOpen] = useState(false);
  const handleApplyNowModalToggle = () => {
    setIsApplyNowModalOpen(!isApplyNowModalOpen);
  };
  const handleApplyNowSubmit = (e) => {
    e.preventDefault();
    setIsApplyNowModalOpen(false);
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
 

 return (
   <section>
     <div className="relative bg-cover bg-center bg-[url('./assets/hero.png')] h-[70vh] lg:h-[100vh]">
       <div className="absolute inset-0 bg-primary opacity-85 z-0"></div>
       <div className="relative z-10 h-[70vh] lg:h-[100vh] flex flex-col justify-center">
         <div className="flex flex-col gap-7 md:gap-14 justify-center text-center w-[90%] md:w-[60%] mx-auto">
           <h1 className="text-white font-black text-3xl md:text-6xl leading-none">
             TEMPORARY WORK <br /> & RECRUITMENT AGENCY
             </h1>
           <p className="text-white font-light text-[18px] lg:text-[25px] w-[80%] md:w-[56%] mx-auto">
             Investing in people shaping in better future
           </p>
           <div className="flex gap-4 justify-center">
            <Link href='/jobboard'>
             <button className="border border-gray-400 p-2 rounded-2xl text-white hover:bg-secondary">
               Explore Jobs
             </button>
             </Link>
           </div>
         </div>
       </div>
     </div>


     <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 lg:bg-white p-3 lg:p-20 gap-3 lg:gap-32 mt-0 lg:mt-16 ">
        <motion.div className="p-2 lg:p-4 bg-gray-100 py-3 lg:py-5 rounded-lg"
         initial={{ opacity: 0, y: 80 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
         viewport={{ once: false }}
        >
          <div className="flex bg-gradient-center items-center justify-center p-3 lg:p-8 rounded-lg ">
            <div className="flex flex-col gap-5 w-[100%] lg:w-[60%]">
              <h1 className="font-bold text-[16px] lg:text-xl">For employers</h1>
              <p className="text-[12px] lg:text-lg font-light">Looking for the perfect candidate? Share your requirements with us, and we'll connect you with the right talent to meet your needs.</p>
              <button className="bg-primary text-white text-[13px] lg:text-lg font-medium w-[65%] lg:w-[65%] rounded-3xl p-2 lg:p-3" onClick={handleModalToggle}>Send Details</button>
            </div>
            <Image src={employer} width={170} height={100} alt="Employer png" className='ml-2 lg:ml-5 w-[100px] h-[120px] lg:w-[200px] lg:h-[220px]' />
          </div>
        </motion.div>

        <motion.div className="p-2 lg:p-4 bg-gray-100 py-3 lg:py-5 rounded-lg"
        initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: false }}
        >
          <div className="flex bg-gradient-center items-center justify-center p-3 lg:p-8 rounded-lg ">
            <div className="flex flex-col gap-5  w-[100%] lg:w-[60%]">
              <h1 className="font-bold text-[16px] lg:text-xl">For candidates</h1>
              <p className="text-[12px] lg:text-lg font-light">Unlock your potential and take the next step in your career.Apply now, and our team will review your documents and get back to you.</p>
              <button className="bg-primary text-white text-[13px] lg:text-lg font-medium w-[70%] lg:w-[60%] rounded-3xl p-2 lg:p-3" onClick={handleApplyNowModalToggle}>Apply Now</button>
            </div>
            <Image src={candidate} width={170} height={100} alt="Candidate png" className='ml-2 lg:ml-5 w-[100px] h-[120px] lg:w-[200px] lg:h-[220px]' />
          </div>
        </motion.div>
      </div>

       {/* Modal */}
       {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
          <div className="bg-secondary border border-gray-400 w-[90%] max-w-lg p-3 lg:p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-secondary bg-white/50 text-2xl lg:text-4xl p-1 px-3 rounded-3xl"
              onClick={handleModalToggle}
            >
              &times;
            </button>
            <h2 className="text-[22px] lg:text-[22px] my-4 text-center text-white">Send your details</h2>
            <Image src={hr} width={310} height={1} alt='hr' className='mx-auto mt-2 lg:mt-2 w-[170px] lg:w-[180px]' />
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-0">
            <div>
                <label htmlFor="company name" className="block text-[12px] lg:text-[13px] text-gray-100 font-light mb-2 lg:mb-2 mt-4 lg:mt-2">Company Name</label>
                <input
                  type="text"
                  id="company name"
                  name="company"
                  placeholder="Company Name"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-1 lg:p-2 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-[12px] lg:text-[13px] text-gray-100 font-light mb-2 lg:mb-2 mt-5 lg:mt-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                   name="user_name"
                  placeholder="Enter your Names"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-1 lg:p-2 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[12px] lg:text-[13px] text-gray-100 font-light mb-2 lg:mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full border border-gray-300 bg-secondary rounded-md p-1 lg:p-2 text-white placeholder:text-gray-300 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[12px] lg:text-[13px] text-gray-100 font-light mb-2 lg:mb-2 mt-5 lg:mt-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="user_number"
                  placeholder="Your Phone Number"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-1 lg:p-2 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-[12px] lg:text-[13px] text-gray-100 font-light mb-2 lg:mb-2 mt-5 lg:mt-2">Your position in the company</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Position"
                  className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-1 lg:p-2 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[12px] lg:text-[13px] text-white font-light mb-2 lg:mb-2 mt-5 lg:mt-2 ">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Type your message"
                  className="w-full border  bg-secondary h-20 lg:h-20  border-gray-300 text-white rounded-md p-1 lg:p-2 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[13px] placeholder:font-light"
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
              className="flex items-center justify-center h-8 lg:h-10 gap-2 w-full"
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
                Send Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Apply Now Modal */}
     {isApplyNowModalOpen && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
         <div className="bg-secondary border border-gray-400 w-[90%] max-w-lg p-3 lg:p-4 rounded-lg relative">
           <button
             className="absolute top-2 right-2 text-secondary bg-white/50 text-2xl lg:text-4xl p-1 px-3 rounded-3xl"
             onClick={handleApplyNowModalToggle}
           >
             &times;
           </button>
           <h2 className="text-[22px] lg:text-[27px] my-4 text-center text-white">Apply Now</h2>
           <Image src={hr} width={310} height={1} alt='hr' className='mx-auto mt-2 lg:mt-2 w-[170px] lg:w-[150px]' />
           <form onSubmit={handleApplyNowSubmit} className="space-y-4 mt-10">
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
                  rows="3"
                  name="message"
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
          <div className="bg-white w-[80%] lg:w-[100%] max-w-md p-6 rounded-lg text-center">
            <div className="flex items-center gap-1 justify-center">
            <h2 className="text-2xl lg:text-4xl text-secondary mb-4">Great Job </h2>
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

     <Link
       href="#testimonials"
       onClick={(e) => {
         e.preventDefault();
         handleScrollToTestimonials();
       }}
       className="flex items-center gap-3 mx-auto w-[100%] lg:w-[20%] justify-center font-medium text-lg mb-0 lg:mb-16 p-3 bg-gray-100 lg:bg-white hover:bg-secondary hover:text-white rounded-none lg:rounded-3xl group"
     >
       See customers stories
       <BsArrowDownRightCircleFill className="text-secondary text-lg group-hover:text-white" />
     </Link>


     <Jobs />
     <AvailableJobs />
     <Services />
     <Suscribe />


     <div ref={testimonialsRef} id="testimonials">
       <Testimonials />
     </div>
     <Hr />
     <Footer />
   </section>
 );
}
