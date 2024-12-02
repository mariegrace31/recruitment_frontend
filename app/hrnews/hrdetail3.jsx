"use client"
import React, {useState} from 'react';
import image from '../assets/recruiterImage.jpeg';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import dot from '../assets/dothr.png';
import Footer from '../components/Footer';
import { FaTimes } from 'react-icons/fa';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import blog3 from '../assets/blog3.jpeg';

function Hrdetail3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='p-5 lg:p-20'>
        <div className='relative'>
        <Image src={blog3} width={990} height={60} alt='recruiter'  className='relative mx-auto bg-gray-300 p-2 rounded-3xl mt-20  lg:mt-9'/>
        <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24  object-cover'/>
        </div>

        <div className='mt-12 lg:mt-24 text-center'>
          <h1 className='text-[20px] lg:text-[60px]'>Cracking the Code: How to Read Job Ads Like a Pro.</h1>
          <Image src={dot} width={820} height={1} alt='dothr' className='mt-3 lg:mt-6 mx-auto' />
        </div>

        <div className='flex flex-col gap-4 lg:gap-9 mt-6 lg:mt-12 px-5 lg:px-20'>
          <p className='text-[15px] lg:text-[20px] leading-9'><span className='font-bold'>Tired of applying for jobs and getting nowhere?</span> It might be time to upgrade your job ad reading skills! Job ads aren't just lists of requirements - they're treasure maps to your dream career.</p>

          <p className='text-[15px] lg:text-[20px] leading-9 font-bold'>Here's how to decipher them like a pro:</p>

          <p className='text-[16px] lg:text-[23px] font-bold'>1. The First Impression</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Eye-Catching Style: </span>Does the ad look polished? A professional design and clear language tell you the employer values their recruitment process.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Competition's Hot: </span>Many organizations are vying for top talent. Ads should be unique and stand out - that's a good sign.</li>
           </ul>

           <p className='text-[16px] lg:text-[23px] font-bold'>2. Reading Between the Lines</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Your Perfect Fit: </span>The job title often highlights the desired status. Make sure you meet the requirements (like specific job classifications, transfer options, etc.). If you're a contract worker, avoid applying if the ad only mentions “statutory recruitment”.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Where You Stand: </span>The responsibilities section outlines your place in the organization's structure. If you're aiming for a specific level of responsibility, make sure it matches.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>The Employer's Wish List: </span>The employer has carefully chosen their words. Analyze each responsibility listed, as it reveals their needs and your potential future.</li>
           </ul>

           <p className='text-[16px] lg:text-[23px] font-bold'>3. Decode the Profile:</p>

            <ul className='list-disc'>
              <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> The “Must-Have” List: </span>The words used in the profile description (like education, experience, and skills) reveal what the employer wants. Compare your qualifications.</li>
              <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Hidden Clues: </span>Phrases like <span className='font-medium'>“perfect command of administrative procedures”</span> and <span className='font-medium'>“solid experience, ideally acquired…”</span> have different implications. Pay close attention to these nuances.</li>
            </ul>

            <p className='text-[16px] lg:text-[23px] font-bold'>4. Beyond the Basics:</p>

             <ul className='list-disc'>
             <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Dig Deeper:</span> Don't be shy! Research the organization, its projects, environment, and leaders.</li>
             <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>The Clock is Ticking: </span>A deadline signals urgency. If you miss it, don't give up! Contact the department to see if they're still accepting applications.</li>
            </ul>  

            <p className='text-[16px] lg:text-[23px] font-bold'>Here's the Bottom Line:</p>

            <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Master the Art:</span> Read job ads carefully, analyzing every word and nuance</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Match the Profile: </span>Ensure your profile aligns with the employer's expectations. Find Your Passion: Research the organization to make sure you&#39;re truly interested in the opportunity.</li>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Be Strategic:</span> Don't apply to every ad; choose those that align with your skills and goals.</li>
            </ul> 

            <p className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Remember:</span> A successful application means adapting your profile to the employer's needs and showcasing your skills in a clear, engaging way.</p>
            <p className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'> Ready to land your dream job?</span> Start with a strong job ad analysis</p>

        </div>

        <div className='p-2 lg:p-7 border border-gray-300 flex flex-col gap-5 rounded-2xl m-0 mt-6 lg:m-16'>
          <h1 className='font-medium text-[15px] lg:text-3xl'>Leave a comment</h1>
          <input type="text" placeholder='Your comment' className='border border-gray-300 p-3 bg-[#C6C6E2]/20 placeholder:align-text-top placeholder:text-sm lg:placeholder:text-lg pb-10 lg:pb-36 rounded-3xl' />
          <button onClick={handleSubmit} className='bg-secondary text-white p-2 lg:p-3 w-[35%] lg:w-[10%] text-sm lg:text-lg rounded-3xl'>Submit</button>
        </div>

      </div>

        {/* Modal */}
        {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-primary/50 z-50'>
          <div className='bg-white p-5 rounded-2xl shadow-lg w-[80%] lg:w-[100%] max-w-md'>
          <button onClick={closeModal} className='text-gray-600 hover:text-black'>
                <FaTimes className='text-2xl' />
              </button>
            <div className='flex flex-col gap-5 items-center'>
              <h2 className='font-medium text-secondary text-lg lg:text-xl'>Oops</h2>
              <p className='text-[15px] lg:text-[18px] text-black text-center'>Sorry! You need to log in to share your thoughts. Log in now and let us know what you think!</p>
              <button className='font-semibold underline text-secondary text-[18px]'>Login</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Hrdetail3;