import React from 'react';
import logo from '../assets/loginlogo.png';
import line from '../assets/loginline.png';
import Link from 'next/link';
import Image from 'next/image';

function Password() {
  return (
    <div className='bg-[#1A77B9]/10 flex justify-center h-[100vh]'>
      <div className='my-auto w-[35%] flex flex-col gap-8'>
         <Image src={logo} width={100} height={100} alt='logo' className='mx-auto' />
         <div className='flex flex-col gap-10'>
          <div className='rounded-md border-l-4 border-[#1A77B9] bg-white py-4 px-5'>
          <h2 className='text-[14px] font-semibold text-center'>Forgot Password</h2>
          <p className='text-[14px] font-light mt-3'>Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>
          </div>
          <div className='bg-white w-[100%] flex flex-col gap-4 justify-center p-12 border border-[#1A77B9]/50 rounded-sm'>
            <h3 className='text-[14px]'>Email Address</h3>
            <input type="email" placeholder='Email Address' required className='border border-[#523F69]/50 placeholder:text-[8px] placeholder:text-black/50 px-2 py-[4px] bg-[#1A77B9]/10 rounded-md'/>
            <button className='text-[14px] bg-[#1A77B9] text-white p-1 rounded-md w-[40%] self-end'>Get New Password</button>
            <Image src={line} width={300} height={100} alt='line' className='w-[420px] mx-auto' />
            <div className='flex justify-between'>
              <Link href='/' className='text-[11px] hover:underline hover:text-[#1A77B9]'>Go to the website</Link>
              <Link href='/login' className='text-[11px] hover:underline hover:text-[#1A77B9]'>Login</Link>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Password;