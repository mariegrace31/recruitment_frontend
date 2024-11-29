"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../assets/secondlogo.png";
import { FaTimes } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";
import Link from "next/link";
import line from "../assets/navline.svg";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navbarBgColor = pathname === "/" ? "bg-white" : "bg-[#C6C6E2]";
  const mobileMenuBgColor = pathname === "/" ? "bg-white" : "bg-[#C6C6E2]";

  return (
    <nav
      className={`w-[85%] md:w-[80%] fixed top-0 left-[188px] md:left-1/2 transform -translate-x-1/2 z-30 rounded-b-2xl flex justify-between items-center px-3 py-2 md:p-3 ${navbarBgColor}`}
    >
      <div className="flex items-center gap-2">
        <Image src={logo} width={40} height={40} alt="Logo" priority />
        <h4 className="text-secondary font-medium text-[10px] md:text-xl">LK RECRUITMENT RWANDA</h4>
      </div>

      <div className="flex gap-3 lg:order-2 items-center">
        <button className="bg-primary text-white rounded-3xl font-medium px-3 py-1 text-[12px] md:px-5 md:py-2 md:text-[15px] hover:bg-secondary cursor-pointer">
          Login
        </button>
        <button className="bg-tertiary border hidden lg:flex border-gray-400 text-black rounded-3xl font-medium px-3 py-1 text-[12px] md:px-5 md:py-2 md:text-[15px] hover:bg-secondary cursor-pointer hover:text-white">
          Get Started
        </button>

        <button
          className="lg:hidden text-secondary text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <PiDotsThreeOutline className="border px-2 w-[100%] rounded-xl border-gray-400 text-2xl text-black" />}
        </button>
      </div>

      <div
        className={`absolute lg:static top-14 left-0 w-full lg:w-auto ${mobileMenuBgColor} lg:flex lg:gap-8 items-center px-4 py-3 lg:p-0 rounded-lg lg:rounded-none z-20 transition-all ${
          menuOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row gap-3 lg:gap-8 items-center">
          <div className="hidden lg:block">
            <Image src={line} width={5} height={10} alt="svg" />
          </div>

          <Link
            href="/"
            className={`text-secondary font-medium text-[15px] ${
              pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <hr className="border border-gray-300 lg:hidden w-[90%]" />

          <Link
            href="/about"
            className={`flex items-center gap-1 text-secondary font-medium text-[15px] ${
              pathname === "/about" ? "underline" : ""
            }`}
          >
            About us
          </Link>
          <hr className="border border-gray-300 lg:hidden w-[90%]" />

          <Link
            href="/jobboard"
            className={`text-secondary font-medium text-[15px] ${
              pathname === "/jobboard" ? "underline" : ""
            }`}
          >
            Job Board
          </Link>
          <hr className="border border-gray-300 lg:hidden w-[90%]" />

          <Link
            href="/hrnews"
            className={`text-secondary font-medium text-[15px] ${
              pathname === "/hrnews" ? "underline" : ""
            }`}
          >
            HR News & Tips
          </Link>
          <hr className="border border-gray-300 lg:hidden w-[90%]" />

          <Link
            href="/contact"
            className={`text-secondary font-medium text-[15px] ${
              pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </Link>

          <div className="hidden lg:block">
            <Image src={line} width={5} height={10} alt="svg" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export de