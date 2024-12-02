"use client"
import React, {useState} from 'react';
import image from '../assets/recruiterImage.jpeg';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import dot from '../assets/dothr.png';
import Footer from '../components/Footer';
import { FaTimes } from 'react-icons/fa';
import blog2 from '../assets/blog4.jpeg';

function Hrdetail4() {
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
          <h1 className='text-[20px] lg:text-[50px]'>Ace Your First Interview: How to Impress and Get the Job.</h1>
          <Image src={dot} width={820} height={1} alt='dothr' className='mt-3 lg:mt-6 mx-auto' />
        </div>

        <div className='flex flex-col gap-4 lg:gap-9 mt-6 lg:mt-12 px-5 lg:px-20'>
          <p className='text-[15px] lg:text-[20px] leading-9'>That first interview is crucial - it's your chance to shine! Those first few minutes are make-or-break, especially when it comes to showing your personality and convincing the interviewer you're the right fit. If you're well-prepared, you'll be in the best position to succeed!</p>
          <p className='text-[15px] lg:text-[20px] leading-9'>Think of the interview as a sporting event! It's all about preparation, stress management, motivation, and the drive to win.</p>

          <p className='text-[15px] lg:text-[20px] font-bold'>Get Ready to Impress:</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Prepare Like a Pro: </span> Plan your interview meticulously. Spend at least half a day, or even longer, writing down everything you need to know before you meet the recruiter.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Know Your Stuff: </span> Start by making a detailed list of your skills, knowledge, and experience. Outline your professional journey - include dates, projects, and key achievements. Refresh your memory.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Be Specific:  </span> Remember the exact names and roles of your past employers. Hesitation doesn't convey the seriousness every candidate should demonstrate. Prepare specific examples to support your claims. </li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Highlight Your Strengths: </span>Write down your strengths and areas for improvement. Be ready for the classic questions like “Tell us about your strengths and areas for improvement.” Be honest and realistic! Avoid overselling yourself or underestimating your abilities. Just be you!</li>
           </ul>

           <p className='text-[15px] lg:text-[20px] font-bold'>The Day of the Interview:</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Dress to Impress: </span> Make a great first impression by paying close attention to your appearance. Choose a professional and polished look!</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Be Professional, Not Formal: </span>  Be friendly but maintain a respectful distance. Remember, the interview isn't a casual conversation. They're evaluating your skills, experience, and how you react to unfamiliar situations.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Be Authentic and Concise:  </span>Be natural, brief, and clear. Explain your reasons for applying. </li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Engage the Interviewer: </span>Make them feel comfortable. Ask insightful and constructive questions about the role to show your genuine interest and to get valuable information.</li>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Listen and Respond: </span> Pay attention to their responses and use them as opportunities to expand on your experience.</li>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Finish Strong: </span>Don't slack off after the handshake. Wait until you're outside the door before letting your guard down!</li>
           </ul>

           <p className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Remember: </span> A great first impression can be the key to landing your dream job. By preparing thoroughly and showcasing your skills with confidence, you'll put yourself in the best position to succeed.</p>
           <p className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Ready to impress? </span> Start practicing now!</p>

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

export default Hrdetail4;