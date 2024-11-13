import Image from 'next/image';
import React from 'react';
import logo from '../assets/navLogo.png';
import { CgGitCommit } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="w-[75%] bg-tertiary fixed top-0 left-1/2 transform -translate-x-1/2 z-30 rounded-b-2xl flex justify-between items-center p-3">
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
        <CgGitCommit className="text-secondary text-3xl" />
        <Link href="#" className="text-secondary font-medium text-[15px]">Job Board</Link>
        <Link href="#" className="flex items-center gap-1 text-secondary font-medium text-[15px]">
          About us <FaCaretDown />
        </Link>
        <Link href="#" className="text-secondary font-medium text-[15px]">Candidates</Link>
        <Link href="#" className="text-secondary font-medium text-[15px]">Contact</Link>
        <CgGitCommit className="text-secondary text-3xl" />
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
