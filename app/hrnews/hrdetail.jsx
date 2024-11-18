import React from 'react';
import image from '../assets/recruiterImage.png';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import dot from '../assets/dothr.png';
import Footer from '../components/Footer';

function Hrdetail() {
  return (
    <div>
      <div className='p-20'>
        <div className='relative'>
        <Image src={image} width={950} height={100} alt='recruiter'  className='relative mx-auto  mt-9'/>
        <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-24  object-cover'/>
        </div>

        <div className='mt-24 text-center'>
          <h1 className='text-[50px]'>How to Prepare for a Job Interview</h1>
          <Image src={dot} width={750} height={1} alt='dothr' className='mt-6 mx-auto' />
        </div>

        <div className='flex flex-col gap-9 mt-12 px-20'>
          <p className='text-[20px]'>Networking is one of the most powerful tools you can use during a job search. Whether you're looking to 
          change careers, find a new opportunity, or advance in your current position, building connections within your industry can significantly impact your chances of success.
          </p>
          <h3 className='text-[27px] font-bold'>Why Networking Matters</h3>
          <p className='text-[20px]'>Many jobs are not publicly advertised, meaning that word-of-mouth, personal referrals, and connections can open doors that might otherwise remain closed. Networking allows you to learn about these hidden
             opportunities, seek guidance from industry professionals, and make a lasting impression that could lead to a job offer.</p>
           <h3 className='text-[27px] font-bold'>How to Network Effectively</h3>
           <p className='text-[20px]'>Effective networking requires more than just sending out a few LinkedIn requests. It's about nurturing genuine relationships with people in your field. Here are a few tips:</p>
           <ul className='list-disc pl-9'>
            <li className='text-[20px]'>Attend industry events, conferences, and webinars to meet new people.</li>
            <li className='text-[20px]'>Follow up with contacts by sending personalized emails or messages.</li>
            <li className='text-[20px]'>Offer help before asking for favors. Networking is a two-way street.</li>
            <li className='text-[20px]'>Stay active on LinkedIn by sharing updates, commenting on posts, and engaging with others.</li>
           </ul>
           <h3 className='text-[27px] font-bold'>The Long-Term Benefits</h3>
           <p className='text-[20px]'>Networking isn't just about finding a job today; it's about building relationships that will benefit you throughout your career. A strong professional network can provide support, mentorship, and job opportunities, no matter where your career path takes you.</p>
           <p className='text-[20px]'>In conclusion, if you're not already networking as part of your job search, you're missing out on valuable opportunities. Start building connections now, and you'll find that your job search becomes more effective and rewarding.</p>
        </div>

        <div className='p-7 border border-gray-300 flex flex-col gap-5 rounded-2xl m-16'>
          <h1 className='font-medium text-3xl'>Leave a comment</h1>
          <input type="text" placeholder='Your comment' className='border border-gray-300 p-3 bg-[#C6C6E2]/20 placeholder:align-text-top pb-36 rounded-3xl' />
          <button className='bg-secondary text-white p-3 w-[10%] rounded-3xl'>Submit</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Hrdetail;