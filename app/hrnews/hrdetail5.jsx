"use client"
import React, {useState} from 'react';
import image from '../assets/recruiterImage.jpeg';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import dot from '../assets/dothr.png';
import Footer from '../components/Footer';
import { FaTimes } from 'react-icons/fa';
import blog2 from '../assets/blog5.jpeg';

function Hrdetail5() {
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
        <Image src={blog2} width={990} height={60} alt='recruiter'  className='relative mx-auto bg-gray-300 p-2 rounded-3xl mt-20  lg:mt-9'/>
        <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 lg:-mt-24  object-cover'/>
        </div>

        <div className='mt-12 lg:mt-24 text-center'>
          <h1 className='text-[20px] lg:text-[50px]'>Your CV: Showcasing Your Experience Like a Boss.</h1>
          <Image src={dot} width={820} height={1} alt='dothr' className='mt-3 lg:mt-6 mx-auto' />
        </div>

        <div className='flex flex-col gap-4 lg:gap-9 mt-6 lg:mt-12 px-5 lg:px-20'>
          <p className='text-[15px] lg:text-[20px] leading-9'>We all live with our CVs, not on paper, but through our daily conversations. Think about the times you've met someone new and they ask,<span className='font-bold'>“So, what do you do?”</span> Or when you're catching up with friends and you share, “I'm working on this project...” These are all moments where we&#39;re presenting our experience.</p>

          <p className='text-[15px] lg:text-[20px] leading-9'>But putting all of this information on paper to capture a recruiter's attention among countless other applicants is a different beast! <br />
          A standout CV can lead to an interview - that's the goal! It's about making them want to know more about you.</p>
          <p className='text-[15px] lg:text-[20px] leading-9'><span className='font-bold'>What are the essentials? How do you translate it all onto that magic piece of paper?</span> <br />
          First, remember that recruiters love clear, well-presented, concise CVs - easy to read, easy to digest. Make sure your CV is up-to-date and objectively reflects your professional journey.</p>

          <p className='font-bold text-[15px] lg:text-[20px]'>Crafting Your CV:</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Reflect and Refine: </span>Take the time to carefully analyze your career and personal journey. Create a detailed list of your education, experiences, and skills. Be meticulous with dates and titles.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Highlight Your Wins: </span> From this list, identify the most impactful and defining achievements. These could be successful projects, goals you've reached, or moments you've shined.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Tell Your Story: </span> Expand on these key experiences. What were the challenges? What tools did you use? How did you approach the task? What were the results? Use concrete examples to illustrate your achievements.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Show, Don't Just Tell: </span>Highlighting your professional wins showcases your skills and boosts your credibility. You're leading the recruiter towards your career highlights, showcasing your potential.</li>
           </ul>

           <p className='font-bold text-[15px] lg:text-[20px]'>Making It Stand Out:</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Don't Be Afraid to Shine: </span>Showcase those standout achievements with a more detailed description. Use precise language, include some numbers or metrics, and avoid long-winded sentences. Keep it interesting!</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Stay Authentic: </span> Remember that your CV is a foundation for the interview. Don't embellish your experience - an experienced recruiter will spot inconsistencies.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Focus on What Matters: </span> If you have a long career, don't dwell on early roles. Emphasize recent experience.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Express Your Vision: </span>Clearly outline your career goals. You've done the hard work of self-reflection, now show the recruiter your vision for the future. Showcase your dedication and how you've excelled throughout your journey.</li>
           </ul>

           <p className='font-bold text-[15px] lg:text-[20px]'>Your CV is more than just a document - it&#39;s a roadmap to your future. Make it
           stand out!</p>
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

export default Hrdetail5;