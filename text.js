// here is my jobboard page: import React from 'react';
// import hr from '../assets/abouthr.png';
// import lines from '../assets/linegroup.png';
// import Image from 'next/image';
// import dot from '../assets/dothr.png';
// import { TbBriefcase } from "react-icons/tb";
// import Footer from '../components/Footer';
// import Link from 'next/link';

// function page() {
//   return (
//     <div className='bg-[#F8FAFF]'>
//       <div className='p-5 lg:p-20'>
//       <div className='bg-gray-300 relative p-2 rounded-lg w-[90%] mt-20 mx-auto'>
//         <div className='bg-primary relative rounded-lg p-16 lg:p-44'>
//           <h1 className='text-white text-center text-xl lg:text-6xl'>Available Jobs</h1>
//           <Image src={hr} width={300} height={1} alt='hr' className='mx-auto mt-2 lg:mt-4 z-10 w-[120px]' />
//         </div>
//       </div>
//       <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24 z-10 object-cover'/>

//       <Image src={dot} width={1150} height={1} alt='dothr' className='mt-5 lg:mt-24 mx-auto' />

//       <div>
//        <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 w-[100%] p-6 lg:p-24 mx-auto'>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Software Engineer</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>Join our tech team to develop innovative solutions. Minimum 3 years of experience required.</p>
//           <Link href="/jobdetail">
//               <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                 More Details
//               </button>
//           </Link>
//          </div>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Caring Nanny Needed</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>Seeking a compassionate and dependable Nanny to provide exceptional care and support for children</p>
//           <Link href="/job5">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//            </div>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Content Creator</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As a Content Creator, you will be the voice of our brand, responsible for developing and producing high-quality..</p>
//           <Link href="/job9">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//               <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Tutor</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As a Tutor, you will provide individualized academic support to students of various ages and levels.</p>
//           <Link href="/job4">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//               <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Graphic Designer</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.....</p>
//           <Link href="/job2">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//               <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Web designer</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As a Web Designer, you will be responsible for the visual design and development of our website ...</p>
//           <Link href="/job3">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//               <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Reliable Maid Needed</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>Looking for a hardworking and trustworthy Maid to help maintain a clean and organized home.</p>
//           <Link href="/job6">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Community Manager</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>Join us as a Community manager and make a lasting impact by fostering connections, promoting collaboration.</p>
//           <Link href="/job8">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//            </div>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Chef Cook</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As a Chef Cook, you will be responsible for preparing and cooking high-quality meals for our clients.</p>
//           <Link href="/job12">
//                 <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//                   More Details
//                 </button>
//               </Link>
//               </div>
//         <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Admin assistant</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-sm'>As an Administrative Assistant, you will be responsible for providing comprehensive administrative support...</p>
//           <Link href="/job10">
//             <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//               More Details
//             </button>
//             </Link>
//             </div>
//           <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//           <h1 className='font-bold text-[16px] lg:text-lg'>Commercial Assistant</h1>
//           <div className='flex gap-9'>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//             <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//           </div>
//           <p className='text-xs'>As a Commercial Assistant, you will play a crucial role in supporting our sales efforts and ensuring smooth business...</p>
//           <Link href="/job11">
//             <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//               More Details
//             </button>
//           </Link>
//             </div>
//          <div className='flex flex-col gap-3 border border-secondary p-4 py-8 rounded-lg bg-[#FFF] hover:bg-[#E0E6F7] group'>
//            <h1 className='font-bold text-[16px] lg:text-lg'>Experienced Driver</h1>
//            <div className='flex gap-9'>
//              <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Full Time</p>
//              <p className='flex items-center text-[11px] gap-1 text-gray-400'><TbBriefcase className='text-gray-400' />Part Time</p>
//            </div>
//            <p className='text-sm'>Looking for a professional and reliable Driver to ensure smooth, safe, and timely transportation.</p>
//           <Link href="/job7">
//             <button className='bg-[#E0E6F7] p-2 rounded-md w-[45%] ml-auto text-[13px] text-secondary group-hover:bg-secondary group-hover:text-white'>
//               More Details
//             </button>
//           </Link>
//            </div>
//         </div>
//       </div>

//       <div className='bg-primary p-4 lg:p-16 flex flex-col lg:flex-row justify-between items-center rounded-lg w-[94%] my-4 lg:my-14 mx-auto'>
//         <div className='flex flex-col gap-5 lg:gap-10 w-[90%] lg:w-[50%]'>
//           <h1 className='font-medium text-white text-[15px] text-center lg:text-left lg:text-[30px]'>Ready to hire an employee?</h1>
//           <p className='font-extralight text-center lg:text-left text-white text-[15px] lg:text-[20px]'>Find your next great team member today! We're here to help you connect with top talent that will drive your business forward. Let's build your dream team.</p>
//         </div>
//         <button className='bg-secondary text-[13px] mt-5 lg:mt-0 lg:text-[16px] text-white p-2 px-3 rounded-3xl font-medium'>Contact Us Today</button>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   )
// }

// export default page; nad for each job when you click "more details" button it takes you to the job details (each job with it's own jobdetails page, this: "use client"
// import React, { useState } from "react";
// import hr from '../assets/abouthr.png';
// import Image from 'next/image';
// import logo from "../assets/thirdlogo.png";
// import Footer from '../components/Footer';
// import { BsFillCloudUploadFill } from "react-icons/bs";
// import emailjs from "emailjs-com";
 

// function Jobdetail() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false);

//   const [uploadedFileName, setUploadedFileName] = useState("");

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedFileName(file.name);
//     }
//   };

//   const handleModalToggle = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(false);
//     setIsSubmittedModalOpen(true);


//     emailjs
//     .sendForm(
//       process.env.NEXT_PUBLIC_SERVICE_ID,
//       process.env.NEXT_PUBLIC_TEMPLATE_ID,
//       e.target,
//       process.env.NEXT_PUBLIC_PUBLIC_KEY
//     )
//     .then(
//       (result) => {
//         console.log("Email sent successfully:", result.text);
        
//       },
//       (error) => {
//         console.error("Error submitting application:", error.text);
        
//       }
//     );
//   };

//   const closeSubmittedModal = () => {
//     setIsSubmittedModalOpen(false);
//   };

//   return (
//     <div>
//       <div className='bg-primary p-24 lg:p-52'>
//         <h1 className='text-white text-center text-3xl lg:text-6xl'>Job Details</h1>
//         <Image src={hr} width={250} height={1} alt='hr' className='mx-auto mt-4' />
//       </div>

//       <div className='bg-white p-6 lg:p-32 flex flex-col lg:flex-row gap-12 lg:gap-32'>
//       <div className='w-[100%] lg:w-[50%] h-[calc(100%-Xpx)] lg:h-[800px] overflow-y-hidden lg:overflow-y-auto border-b-gray-400'>
//         <h1 className='text-xl lg:text-3xl font-medium'>Software Dev</h1>
//         <div className='flex flex-col gap-6 lg:gap-4 border border-gray-400 py-5 p-3 mt-5 lg:mt-10 rounded-lg'>
//           <h1 className='text-[16px] lg:text-xl'>Overview</h1>
//           <p className='text-[12px] lg:text-[14px]'>LK Recruitment Rwanda is seeking talented and experienced Software Designers 
//             to join our team. We are looking for individuals passionate about creating innovative applications and software,
//              with a strong understanding of design principles and a knack for problem-solving. If you have a passion for 
//              coding, a vibrant creative mind, and a desire to build cutting-edge software solutions, we encourage you to apply.</p>
//          </div>
//       <div>

//         <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
//         <h1 className="text-[16px] lg:text-xl">Job Description</h1>
//       <p className="text-[12px] lg:text-[14px]">
//         As a Software Designer, you will be responsible for designing and implementing applications 
//         and software that meet specific client needs. You will work closely with development teams to translate technical
//         requirements into robust and performant software solutions. You will play a key role in creating intuitive and
//         engaging user interfaces, ensuring an optimal user experience.</p>
//         </div>
     

//         <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
//         <h1 className="text-[16px] lg:text-xl">Responsabilities</h1>
//       <h4 className="text-[12px] lg:text-[14px] font-medium">• Design and Development:</h4>
//       <p className="text-[12px] lg:text-[14px]">
//       Analyze functional and technical requirements for software projects. <br />
//       Design robust and scalable software architectures. <br />
//       Develop intuitive and engaging user interfaces (UI). <br />
//       Write clean, efficient, and well-documented code. <br />
//       Test and debug software applications to ensure stability and performance.</p>
//       <h4 className="text-[12px] lg:text-[14px] font-medium">• Team Collaboration:</h4>
//       <p className="text-[12px] lg:text-[14px]">
//       Work closely with development, design, and project management teams. <br />
//        Participate in code reviews and brainstorming sessions. <br />
//        Effectively communicate progress and challenges related to software development.</p>
//       <h4 className="text-[12px] lg:text-[14px] font-medium">• Maintenance and Improvements:</h4>
//       <p className="text-[12px] lg:text-[14px]">
//       Update and improve existing software applications. <br />
//       Resolve issues and bugs reported by users. <br />
//       Propose enhancements to application functionality and usability.</p>
//         </div>

//         <div className='flex flex-col gap-4 border border-gray-400 border-b-gray-400 py-5 p-3 mt-10 rounded-lg'>
//         <h1 className="text-[16px] lg:text-xl">Required Skills.</h1>
//       <p className="text-[12px] lg:text-[14px]">• Strong proficiency in one or more programming languages (e.g., Java, Python, C++, JavaScript).</p>
//       <p className="text-[12px] lg:text-[14px]">• Experience in designing and developing web and/or mobile applications.</p>
//       <p className="text-[12px] lg:text-[14px]">• Understanding of UI/UX design principles.</p>
//       <p className="text-[12px] lg:text-[14px]">• Knowledge of software architecture concepts and database management.</p>
//       <p className="text-[12px] lg:text-[14px]">• Ability to work independently and as part of a team.</p>
//       <p className="text-[12px] lg:text-[14px]">• Excellent communication and problem-solving skills.</p>
//         </div>
      
//       </div> 

//       </div>

//       <div className='flex flex-col gap-24 w-[100%] lg:w-[50%] -mt-0 lg:-mt-52'>
//         <div className='bg-secondary p-4 w-[100%] py-4 lg:py-10 border-4 border-white rounded-xl'>
//           <div className='flex items-center gap-2 lg:gap-3 mt-5 lg:mt-10 mb-10 lg:mb-20'>
//           <Image
//           src={logo}
//           width={40}
//           height={40}
//           alt="Logo"
//           className="w-[40px] lg:w-[60px]"
//         />
//             <div className='flex flex-col'>
//               <h2 className='text-white/50 text-[13px] lg:text-lg font-light'>Company</h2>
//               <h3 className='text-[13px] lg:text-lg text-white'>LK RECRUITMENT RWANDA</h3>
//             </div>
//           </div>
//           <div className='flex justify-between mb-4'>
//             <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Monthly Salary:</h3>
//             <p className='font-light text-[13px] lg:text-lg text-white/50'>Depending on experience</p>
//           </div>
//           <hr className='text-[#ECEDF2]' />
//           <div className='flex justify-between my-4'>
//             <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Job Type:</h3>
//             <p className='font-light text-[13px] lg:text-lg text-white/50'> Full Time, Part Time</p>
//           </div>
//           <hr className='text-[#ECEDF2]'  />
//           <div className='flex justify-between my-4'>
//             <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Job Location:</h3>
//             <p className='font-light text-[13px] lg:text-lg text-white/50'> Kigali/Rwanda</p>
//           </div>
//           <hr className='text-[#ECEDF2]'  />
//           <div className='flex justify-between my-4'>
//             <h3 className='font-light text-[13px] lg:text-lg text-white/50'>Contact Us:</h3>
//             <p className='font-light text-[13px] lg:text-lg text-white/50'>+250 795 460 410</p>
//           </div>
//           <hr className='text-[#ECEDF2]'  />
//           <div className='flex justify-between my-4'>
//             <h3 className='font-light text-[13px] lg:text-lg text-white/50'>E-mail:</h3>
//             <p className='font-light text-[13px] lg:text-lg text-white/50'>contact@lkrecrutementrw.com</p>
//           </div>
//           <hr className='text-[#ECEDF2]' />
//           <div className='text-center'>
//           <button className='bg-white text-black p-2 w-[80%] text-[13px] lg:text-lg mt-7 lg:mt-16 mb-8 lg:mb-12 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl' onClick={handleModalToggle}>Apply now</button>
//           </div>
         
//         </div>

//         {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
//           <div className="bg-secondary border border-gray-400 w-[90%] max-w-lg p-3 lg:p-6 rounded-lg relative">
//             <button
//               className="absolute top-2 right-2 text-secondary bg-white/50 text-2xl lg:text-4xl p-1 px-3 rounded-3xl"
//               onClick={handleModalToggle}
//             >
//               &times;
//             </button>
//             <h2 className="text-[22px] lg:text-[38px] my-4 text-center text-white">Apply for this Job</h2>
//             <Image src={hr} width={310} height={1} alt='hr' className='mx-auto mt-2 lg:mt-4 w-[170px] lg:w-[280px]' />
//             <form onSubmit={handleFormSubmit} className="space-y-4 mt-10">
//               <div>
//                 <label htmlFor="email" className="block text-[15px] lg:text-[20px] text-gray-100 font-light mb-2 lg:mb-3">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   placeholder="Email"
//                   className="w-full border border-gray-300 bg-secondary rounded-md p-2 lg:p-3 text-white placeholder:text-gray-300 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-[15px] lg:text-[20px] text-gray-100 font-light mb-2 lg:mb-3 mt-5 lg:mt-8">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="user_number"
//                   placeholder="Your Phone Number"
//                   className="w-full border  bg-secondary  text-white border-gray-300 rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-[15px] lg:text-[20px] text-white font-light mb-2 lg:mb-3 mt-5 lg:mt-8 ">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="3"
//                   placeholder="Type your message"
//                   className="w-full border  bg-secondary h-20 lg:h-28  border-gray-300 text-white rounded-md p-2 lg:p-3 placeholder:text-gray-200 placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-light"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col gap-4">
//           <div className="flex items-center gap-3 border border-gray-300 rounded-md p-2 cursor-pointer">
//             <input
//               type="file"
//               id="cv"
//               name="user_cv"
//               accept=".doc,.docx,.pdf"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//             <label
//               htmlFor="cv"
//               className="flex items-center justify-center h-12 lg:h-16 gap-2 w-full"
//             >
//               <BsFillCloudUploadFill className="text-gray-200 text-xl" />
//               <span className="text-gray-200 text-[13px] lg:text-[15px] font-light">
//                 {uploadedFileName || "Upload CV (doc, docx, pdf)"}
//               </span>
//             </label>
//           </div>
//         </div>
        
//         <button
//           type="submit"
//           className="bg-white text-black text-[14px] lg:text-[20px] w-full py-2 border border-black/80 hover:bg-yellow-500 hover:text-white hover:border-gray-400 font-medium rounded-3xl"
//           >
//           Apply Now
//         </button>
//       </form>
//     </div>
//   </div>
// )}

// {/* Submitted Confirmation Modal */}
//     {isSubmittedModalOpen && (
//        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm">
//           <div className="bg-white w-[85%] lg:w-[100%] max-w-md p-4 lg:p-6 rounded-lg text-center">
//             <div className="flex items-center gap-1 justify-center">
//             <h2 className="text-xl lg:text-4xl text-secondary mb-4">Great Job </h2>
            
//             </div>
            
//             <p className="text-gray-800 mt-2 lg:mt-5 mb-4 lg:mb-6 text-[12px] lg:text-[19px] leading-8 lg:leading-9">
//             Thank you for applying to Lk Recruitment Rwanda. We are currently reviewing all applications and will reach out soon if your qualifications match the position.
//              If you don't hear from us by then, we have carefully reviewed your application but may not 
//              have selected you for this role. We encourage you to check our website for future opportunities. <br />
//              Thank you again for your interest. <br />
//              Sincerely, <br />
//              LK Recruitment Rwanda Limited.
//             </p>
//             <button
//               className="text-black"
//               onClick={closeSubmittedModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       </div>

//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Jobdetail;. So I'm working on the dashboard where an admin can edit a job, add a job, etc. here is where an admin can edit, add or delete jobs: here is where an admin can add a new job: "use client"
// import React, { useState } from "react";
// import Navbar2 from '../components/navbar2';
// import Sidebar from '../components/sidebar';
// import { BsFillCloudUploadFill } from "react-icons/bs";

// function AddJob() {
  
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedFileName(file.name);
//     }
//   };

//   return (
//     <div>
//       <Navbar2 />
//       <div className='flex'>
//         <Sidebar />
//         <div className='w-full'>
//           <div className='flex justify-between p-5'>
//             <h1 className='text-3xl font-semibold'>Add New Job</h1>
//             <button className='bg-[#2196F3] p-1 px-4 text-[14px] text-white rounded-md'>Submit</button>
//           </div>
//           <hr className='w-[97%] mx-auto border-black/30' />
//           <div className='grid grid-cols-3 gap-16 p-5'>
//             <div>
//               <h2 className='font-medium text-lg'>Job Card</h2>
//               <div className='flex flex-col mt-9 gap-4'>
//                 <h3 className='text-[15px]'>Position</h3>
//                 <input type="text" className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' />
//                 <h3 className='text-[15px]'>Type</h3>
//                 <input type="text" className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' />
//                 <h3 className='text-[15px]'>Card Description <span className='text-[9px] text-red-300'>*90 characters max</span></h3>
//                 <input type="text" className='border border-black/30 p-1 rounded-sm pb-44 text-[14px] outline-primary_dash/30' />
//               </div>
//             </div>

//             <div>
//               <h2 className='font-medium text-lg'>Job Details</h2>
//               <div className='flex flex-col mt-9 gap-4'>
//                 <h3>Position</h3>
//                 <input type="text" className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' />
//                 <input type="text" placeholder='Overview' className='border border-black/30 p-1 rounded-sm pb-44 text-[14px] outline-primary_dash/30'/>
//                 <input type="text" placeholder='Job Description' className='border border-black/30 p-1 rounded-sm pb-44 text-[14px] outline-primary_dash/30' />
//               </div>
//             </div>

//             <div>
//               <h2 className='font-medium text-lg'>Hiring Company</h2>
//               <div className='flex flex-col mt-9 gap-4'>
//                 <h3>Hiring Company Name</h3>
//                 <input type="text" className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30' />
//                 <input type="file" accept=".doc,.docx,.pdf" onChange={handleFileChange} className="hidden"/>
//                  <label
//                     htmlFor="cv"
//                     className="flex items-center justify-center border border-black/30 p-1 gap-2 w-full">
//                     <BsFillCloudUploadFill className="text-black/30 text-[15px]" />
//                     <span className="text-black/30 text-[12px] font-light">
//                     {uploadedFileName || "Upload Company Logo"}
//                     </span>
//                     </label>
//                 <h3 className="mt-10">Monthly Salary</h3>
//                 <input type="text" placeholder='Enter amount' className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
//                 <h3>Job Type</h3>
//                 <input type="text" placeholder='Full time' className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
//                 <h3>Location</h3>
//                 <input type="text" placeholder='Enter location' className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
//                 <h3>Contact Us</h3>
//                 <input type="text" placeholder='Phone number' className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
//                 <h3>Email</h3>
//                 <input type="text" placeholder='Enter email' className='border border-black/30 p-1 rounded-sm text-[14px] outline-primary_dash/30 placeholder:text-[12px]' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddJob; and I want when he clicks the button "submit" the job should be added to the jobboard page(available jobs) and when it's button "more details" is clicked the user should see the details about the job. and it should be added here too on joblisting on the dashboard: "use client"
// import React, { useState } from 'react';
// import Sidebar from '../components/sidebar';
// import { TbBriefcase } from 'react-icons/tb';
// import { RiLoader2Line } from "react-icons/ri";
// import Link from 'next/link';
// import Navbar2 from '../components/navbar2';

// function Jobs() {
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: 'Software Engineer',
//       type: ['Full Time', 'Part Time'],
//       description: 'Join our tech team to develop innovative solutions. Minimum 3 years of experience is required.',
//     },
//     {
//       id: 2,
//       title: 'Tutor',
//       type: ['Full Time', 'Part Time'],
//       description: 'As a Tutor, you will provide individualized academic support to students of various ages and levels.',
//     },
//     {
//       id: 3,
//       title: 'Graphic Designer',
//       type: ['Full Time', 'Part Time'],
//       description: 'As a Graphic Designer, you will be the visual storyteller for our brand, crafting engaging and memorable designs.',
//     },
//     {
//       id: 4,
//       title: 'Web Designer',
//       type: ['Full Time', 'Part Time'],
//       description: 'As a Web Designer, you will be responsible for the visual design and development of our website.',
//     },
//     {
//       id: 5,
//       title: 'Chef Cook',
//       type: ['Full Time', 'Part Time'],
//       description: 'As a chef cook, you will be providing exceptional dining experiences.',
//     },
//     {
//       id: 6,
//       title: 'HR Manager',
//       type: ['Full Time', 'Part Time'],
//       description: 'Manage HR operations and enhance our recruitment strategies. 5 years of experience in HR is required.',
//     },
//     {
//       id: 7,
//       title: 'Caring Nanny Needed',
//       type: ['Full Time', 'Part Time'],
//       description: 'Seeking a compassionate and dependable nanny to provide exceptional care and support for children',
//     },
//     {
//       id: 8,
//       title: 'Reliable Maid Needed',
//       type: ['Full Time', 'Part Time'],
//       description: 'Looking for a hardworking and trustworthy maid to help maintain a clean and organized home.',
//     },
//   ]);

//   const handleDeleteJob = (id) => {
//     setJobs(jobs.filter((job) => job.id !== id));
//   };


//   return (
//     <section >
//       <Navbar2 />
//       <div className='flex'>
//       <Sidebar />
//       <div>
//         <h1 className="font-semibold text-2xl px-10 pt-10">Job listing</h1>
//         <div className='grid grid-cols-4 gap-12 w-[100%] p-10 mx-auto'>
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className='flex flex-col justify-between h-[30vh] w-[30vh] border border-primary_dash p-3 py-4 rounded-lg bg-[#F8FAFF] hover:bg-[#E0E6F7] group'
//             >
//               <div className='flex flex-col gap-3'>
//                 <h1 className='font-bold text-[16px]'>{job.title}</h1>
//                 <div className='flex gap-9'>
//                   {job.type.map((t, index) => (
//                     <p key={index} className='flex items-center text-[11px] gap-1 text-gray-400'>
//                       <TbBriefcase className='text-gray-400' />
//                       {t}
//                     </p>
//                   ))}
//                 </div>
//                 <p className='text-sm'>{job.description}</p>
//               </div>
//               <div className='flex justify-between items-center'>
//                 <button
//                   onClick={() => handleDeleteJob(job.id)}
//                   className='underline text-[12px] text-[#FF2929]/50'
//                 >
//                   Delete this job
//                 </button>
//                 <Link href='/edit'  >
//                 <button
//                   className='bg-[#E0E6F7] py-2 px-3 rounded-md text-[12px] text-primary_dash group-hover:bg-primary_dash group-hover:text-white'
//                 >
//                   Edit this Job
//                 </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className='flex items-center gap-1 border border-primary_dash/50 py-2 px-4 rounded-3xl text-[17px] mx-auto mt-4'>< RiLoader2Line />Load more</button>
//       </div>
//       </div>

//     </section>
//   );
// }

// export default Jobs; with an edit and delete buttons. So whether I need backend to do this, provide step by step what I need to do and the code to make this