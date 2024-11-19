"use client";

import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import logo from '../assets/secondlogo.png';
import { FaCaretDown } from "react-icons/fa";
import Link from 'next/link';
import line from '../assets/navline.svg';

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-[80%] bg-[#C6C6E2] fixed top-0 left-1/2 transform -translate-x-1/2 z-30 rounded-b-2xl flex justify-between items-center p-3">
      <div className="flex gap-5 items-center">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Logo"
          priority
        />
        <h4 className="text-secondary font-medium text-xl">RECRUITMENT</h4>
      </div>
      <div className="flex gap-8 items-center">
        <Image src={line} width={5} height={10} alt='svg' />

        <Link href="/" className={`text-secondary font-medium text-[15px] ${pathname === '/' ? 'underline ' : ''}`}>
          Home
        </Link>

        <Link href="/about" className={`flex items-center gap-1 text-secondary font-medium text-[15px] ${pathname === '/about' ? 'underline' : ''}`}>
          About us <FaCaretDown />
        </Link>
        
        <Link href="/jobboard" className={`text-secondary font-medium text-[15px] ${pathname === '/jobboard' ? 'underline' : ''}`}>
          Job Board
        </Link>

        <Link href="/hrnews" className={`text-secondary font-medium text-[15px] ${pathname === '/hrnews' ? 'underline' : ''}`}>
          HR News & Tips
        </Link>

        <Link href="/contact" className={`text-secondary font-medium text-[15px] ${pathname === '/contact' ? 'underline' : ''}`}>
          Contact
        </Link>

        <Image src={line} width={5} height={10} alt='svg' />
      </div>
      <div className="flex gap-5">
        <button className="bg-primary text-white rounded-3xl font-medium px-5 py-2 text-[15px] hover:bg-secondary cursor-pointer">
          Login
        </button>
        <button className="bg-tertiary border border-gray-400 text-black p-2 px-4 rounded-3xl font-medium text-[15px] hover:bg-secondary cursor-pointer hover:text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
