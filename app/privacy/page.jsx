import React from 'react';
import hr from '../assets/abouthr.png';
import lines from '../assets/linegroup.png';
import Image from 'next/image';

function Privacy() {
  return (
    <div className='bg-white'>
      <div className='p-7 lg:p-20'>
      <div className='bg-gray-300 relative p-2 rounded-lg w-[100%] lg:w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-16 lg:p-44 relative'>
          <h1 className='text-white text-center text-xl lg:text-5xl'>Terms of services & Privacy Policy</h1>
          <Image src={hr} width={400} height={1} alt='hr' className='mx-auto mt-4 z-10 w-[140px] lg:w-[350px]' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 z-10 object-cover'/>
      <div className='flex justify-center gap-5 items-center mt-5'>
        <hr className='w-[15%] lg:w-[10%] border border-gray-400' />
      <h2 className='text-[18px] text-center lg:text-4xl font-medium'>Terms of Service and Privacy Policy</h2>
      <hr className='w-[15%] lg:w-[10%] border border-gray-400' />
      </div>
      
      <div className='flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-8 p-5 lg:p-20'>
        <h3 className='font-bold text-[16px] lg:text-[20px]'>1. Introduction</h3>
        <p className='text-[13px] lg:text-[17px]'>Welcome to LK Recruitment Rwanda (www.lkrecruitementrw.com). This document outlines the Terms of Service (TOS) and Privacy Policy governing your use of our website and services. By accessing or using our website, you agree to be bound by these terms.</p>
        <h3 className='font-bold text-[16px] lg:text-[20px]'>2. Terms of Service</h3>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>2.1. Eligibility</h4>
        <p className='text-[13px] lg:text-[17px]'>You must be at least 18 years old to use our website and services. If you are under 18, you may only use our website with the supervision of a parent or legal guardian.</p>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>2.2. User Accounts</h4>
        <p className='text-[13px] lg:text-[17px]'>To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username, password, and any other information. You are solely responsible for all activities that occur under your account.</p>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>2.3. Content</h4>
        <p className='text-[13px] lg:text-[17px]'>You are responsible for all content you submit to our website, including your profile information, resumes, and messages. You agree to use our website for lawful purposes only and to comply with all applicable laws and regulations. You may not submit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, vulgar, or otherwise objectionable.</p>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>2.4. User Conduct</h4>
        <p className='text-[13px] lg:text-[17px]'>You agree not to use our website to:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• Engage in any activity that is unlawful or violates these Terms of Service.</p>
          <p className='text-[13px] lg:text-[17px]'>• Infringe on the intellectual property rights of others.</p>
          <p className='text-[13px] lg:text-[17px]'>• Upload viruses or other malicious code.</p>
          <p className='text-[13px] lg:text-[17px]'>• Interfere with the operation of our website or servers.</p>
          <p className='text-[13px] lg:text-[17px]'>• Access or use our website in any way that is not expressly permitted by these Terms of Service.</p>
        </div>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>2.5. Termination</h4>
        <p className='text-[13px] lg:text-[17px]'>We may terminate your access to our website at any time, without notice, for any reason, including, but not limited to, violation of these Terms of Service.</p>
        <h3 className='font-bold text-[16px] lg:text-[20px]'>3. Privacy Policy</h3>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>3.1. Information We Collect</h4>
        <p className='text-[13px] lg:text-[17px]'>We collect personal information that you provide to us, such as:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• Your name, email address, phone number, and other contact information.</p>
          <p className='text-[13px] lg:text-[17px]'>• Your resume, cover letter, and other job-related information.</p>
          <p className='text-[13px] lg:text-[17px]'>• Information about your job preferences and skills.</p>
          <p className='text-[13px] lg:text-[17px]'>• Your location and other demographic information.</p>
        </div>
        <p className='text-[13px] lg:text-[17px] font-medium'>We also collect information automatically, such as:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• Your IP address.</p>
          <p className='text-[13px] lg:text-[17px]'>• Your browser type and operating system.</p>
          <p className='text-[13px] lg:text-[17px]'>• The pages you visit on our website.</p>
          <p className='text-[13px] lg:text-[17px]'>• The links you click on our website.</p>
        </div>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>3.2. How We Use Your Information</h4>
        <p className='text-[13px] lg:text-[17px] font-medium'>We use your personal information for the following purposes:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• To provide and improve our services.</p>
          <p className='text-[13px] lg:text-[17px]'>• To process your job applications.</p>
          <p className='text-[13px] lg:text-[17px]'>• To match you with relevant job opportunities.</p>
          <p className='text-[13px] lg:text-[17px]'>• To communicate with you about your job applications and other relevant information.</p>
          <p className='text-[13px] lg:text-[17px]'>• To send you marketing and promotional materials.</p>
          <p className='text-[13px] lg:text-[17px]'>• To analyze our website traffic and user behavior.</p>
        </div>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>3.3. Data Sharing</h4>
        <p className='text-[13px] lg:text-[17px] font-medium'>We may share your personal information with third parties, such as:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• Our partner companies, who help us provide our services.</p>
          <p className='text-[13px] lg:text-[17px]'>• Potential employers, for job applications.</p>
          <p className='text-[13px] lg:text-[17px]'>• Service providers, who help us with website maintenance and operation.</p>
          <p className='text-[13px] lg:text-[17px]'>• Law enforcement, if required by law.</p>
        </div>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>3.4. Data Security</h4>
        <p className='text-[13px] lg:text-[17px]'>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no website or online service can guarantee complete security.</p>
        <h4 className='text-[14px] lg:text-[18px] font-medium'>3.5. Your Rights</h4>
        <p className='text-[13px] lg:text-[17px] font-medium'>You have the right to:</p>
        <div>
          <p className='text-[13px] lg:text-[17px]'>• Access your personal information.</p>
          <p className='text-[13px] lg:text-[17px]'>• Correct any inaccurate information.</p>
          <p className='text-[13px] lg:text-[17px]'>• Delete your personal information.</p>
          <p className='text-[13px] lg:text-[17px]'>• Opt out of marketing communications.</p>
          <p className='text-[13px] lg:text-[17px]'>• Restrict processing of your data.</p>
        </div>
        <h3 className='font-bold text-[16px] lg:text-[20px]'>4. Changes to Our Policy</h3>
        <p className='text-[13px] lg:text-[17px]'>We may update our Terms of Service and Privacy Policy from time to time. We will notify you of any material changes by posting a notice on our website.</p>
        <h3>5. Contact Us</h3>
        <p className='text-[13px] lg:text-[17px]'>If you have any questions about our Terms of Service or Privacy Policy, please contact us at: <span className='font-medium'>Email: lkgrouprw@gmail.com</span></p>
        <h3 className='font-bold text-[16px] lg:text-[20px]'>6. Governing Law</h3>
        <p className='text-[13px] lg:text-[17px]'>These Terms of Service and Privacy Policy shall be governed by and construed in accordance with the laws of Rwanda.</p>
      </div>
      </div>
    </div>
  )
}

export default Privacy;