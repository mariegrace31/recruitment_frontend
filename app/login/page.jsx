"use client"
import React, { useState } from 'react';
import logo from '../assets/loginlogo.png';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Image from 'next/image';
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import line from '../assets/loginline.png';
import Link from 'next/link';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='bg-[#1A77B9]/10 flex justify-center h-[100vh]'>
      <div className='my-auto w-[28%]'>
        <Image src={logo} width={100} height={100} alt='logo' className='mx-auto' />
        <div className='bg-white w-[100%] flex flex-col gap-4 justify-center p-12 border border-[#1A77B9]/50 rounded-md mt-9 '>
          <h3 className='text-[14px]'>Username or Email Address</h3>
          <input
            className='border border-[#523F69]/50 placeholder:text-[8px] placeholder:text-black/50 px-2 py-[4px] bg-[#1A77B9]/10 rounded-md'
            type="text"
            placeholder='Username'
            required
          />
          <h3 className='text-[14px]'>Password</h3>
          <div className='flex items-center border px-2 py-[4px] justify-between border-[#523F69]/50 bg-[#1A77B9]/10 rounded-md '>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder='Password'
              required
              className='placeholder:text-[8px] placeholder:text-black/50 bg-transparent outline-none text-[14px]'
            />
            {passwordVisible ? (
              <IoEyeOffOutline
                className='text-black/80 cursor-pointer'
                onClick={() => setPasswordVisible(false)}
              />
            ) : (
              <IoEyeOutline
                className='text-black/80 cursor-pointer'
                onClick={() => setPasswordVisible(true)}
              />
            )}
          </div>
          <div className='flex justify-between'>
            <div
              className='flex gap-1 items-center cursor-pointer'
              onClick={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <MdCheckBox className='text-[16px]' />
              ) : (
                <MdOutlineCheckBoxOutlineBlank className='text-[16px]' />
              )}
              <p className='text-[13px]'>Remember me</p>
            </div>
            <Link href='/password' className='text-[13px]'>Lost password</Link>
          </div>
          <Link href='/'>
            <button className='text-[14px] bg-[#1A77B9] text-white w-[100%] p-1 rounded-md'>Login</button>
          </Link>
          <Image src={line} width={200} height={100} alt='line' className='w-[350px] mx-auto' />
          <p className='text-[12px] text-center'>Don't have an account yet? <span className='text-[#1A77B9]'>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
