"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import lines from '../assets/linegroup.png';
import dot from '../assets/dothr.png';
import Footer from '../components/Footer';
import { FaTimes } from 'react-icons/fa';
import blog2 from '../assets/blog2.png';

function Hrdetail2() {
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
          <h1 className='text-[20px] lg:text-[50px]'>One Africa, One HR: LK Recruitment Rwanda Embraces the Agenda 2063 for a
          Thriving Future</h1>
          <Image src={dot} width={820} height={1} alt='dothr' className='mt-3 lg:mt-6 mx-auto' />
        </div>

        <div className='flex flex-col gap-4 lg:gap-9 mt-6 lg:mt-12 px-5 lg:px-20'>
          <p className='text-[15px] lg:text-[20px] leading-9'>LK Recruitment Rwanda recently participated in the “One Africa, One HR” Summit, held at the Kigali Convention Center in Kigali, Rwanda. This landmark event brought together leading HR professionals from across the African continent, emphasizing the shared vision of a prosperous and integrated Africa by 2063, a vision that aligns perfectly with our core values.</p>

          <p className='text-[15px] lg:text-[20px] leading-9'>At LK Recruitment, we go beyond traditional recruitment. We believe in building a brighter future by:</p>

           <ul className='list-disc'>
            <li className='text-[15px] lg:text-[20px] leading-9'> <span className='font-bold text-[16px] lg:text-[22px]'>Empowering Individuals: </span>Providing the right training, competitive salaries, and benefits to help people reach their full potential.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Driving Positive Change: </span>We help navigate the evolving business landscape, ensuring our clients and their employees thrive in a dynamic environment.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Integrating Social Responsibility: </span>We embed social and environmental responsibility into everything we do, from our business operations to our decision-making. This commitment to Corporate Social Responsibility (CSR0) is fundamental to our culture, defining our values and shaping who we are as an organization.</li>
            <li className='text-[15px] lg:text-[20px] mt-2 leading-9'><span className='font-bold text-[16px] lg:text-[22px]'>Promoting Diversity, Equity, and Inclusion: </span>We believe in a world where everyone has the opportunity to succeed, and we actively champion diversity, equity, and inclusion within our organization.</li>
           </ul>

           <p className='text-[15px] lg:text-[20px] leading-9'>The summit provided a valuable platform for engaging with other HR professionals and candidates. We were proud to showcase our commitment to the Agenda 2063 at our booth, where we connected with numerous stakeholders, discussing our unique approach to talent sourcing and placement. We actively participated in the dynamic discussions surrounding the future of HR in Africa, particularly its role in achieving the goals of the Agenda 2063. We were inspired by the insightful presentations and panel discussions, which shed light on the objectives for 2063 and the necessary evolution of management practices to achieve them.</p>
           <p className='text-[15px] lg:text-[20px] leading-9'>We are committed to incorporating these valuable insights into our own practices and initiatives.
           LK Recruitment Rwanda firmly believes that investing in human capital is the key to achieving the aspirations of the Agenda 2063. We are committed to collaborating with other organizations and stakeholders to drive initiatives that will help create a more skilled, resilient, and inclusive workforce across the continent.</p>
           <p className='text-[15px] lg:text-[20px] leading-9'>The &quot;One Africa, One HR&quot; summit was an enriching experience. We are proud to have contributed to this vital event alongside our team. We are committed to contributing to the positive transformation of the African workforce and helping achieve a brighter future for the continent.</p>
           <p className='text-[15px] lg:text-[20px]] leading-9'>Learn more about LK Recruitment Rwanda&#39;s commitment to the Agenda 2063 and how we are partnering with businesses and individuals to shape the future of Africa.</p>
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

export default Hrdetail2;