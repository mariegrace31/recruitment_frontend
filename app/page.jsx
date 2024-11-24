"use client"
import { useRef } from 'react';
import Image from "next/image";
import employer from './assets/employer.png';
import "./globals.css";
import candidate from './assets/candidate.png';
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Jobs from "./components/Jobs";
import AvailableJobs from "./components/AvailableJobs";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Suscribe from "./components/Suscribe";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import Hr from "./components/Hr";
import Footer from "./components/Footer";

export default function Home() {

  const testimonialsRef = useRef(null);

  const handleScrollToTestimonials = () => {
    setTimeout(() => {
      if (testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 2000);
  };

  return (
    <section>
      <div className="relative bg-cover bg-center bg-[url('./assets/hero.png')] h-[100vh]">
        <div className="absolute inset-0 bg-primary opacity-85 z-0"></div>
        <div className="relative z-10 h-[100vh] flex flex-col justify-center">
          <div className="flex flex-col gap-7 md:gap-14 justify-center text-center w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-white font-black text-3xl md:text-6xl leading-none">
              TEMPORARY WORK <br /> & RECRUITMENT AGENCY
            </h1>
            <p className="text-white font-light text-[18px] w-[80%] md:w-[56%] mx-auto">
              Investing in people shaping in better future investing in people shaping in better future
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-tertiary border border-gray-400 text-black p-2 px-4 rounded-2xl font-medium hover:bg-secondary hover:text-white">
                Get Started
              </button>
              <button className="border border-gray-400 p-2 rounded-2xl text-white hover:bg-secondary">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white p-4 lg:p-20 gap-9 lg:gap-32 mt-16 ">
        <div className="p-4 bg-gray-100 py-5 rounded-lg">
          <div className="flex bg-gradient-center p-3 md:p-8 rounded-lg ">
            <div className="flex flex-col gap-2 lg:gap-5 w-[70%] md:w-[60%]">
              <h1 className="font-bold text-[14px] lg:text-xl">For employers</h1>
              <p className="text-sm lg:text-lg font-light">Contact & connect with skilled candidates ready to make an impact. Let's build a strong team together.</p>
              <button className="bg-primary text-white font-bold w-[90%] lg:w-[50%] text-[12px] lg:text-sm rounded-3xl p-2 lg:p-3">Contact Us</button>
            </div>
            <Image src={employer} width={170} height={100} alt="Employer png" />
          </div>
        </div>
        <div className="p-4 bg-gray-100 py-5 rounded-lg">
          <div className="flex bg-gradient-center p-8 rounded-lg ">
            <div className="flex flex-col gap-2 lg:gap-5 w-[60%]">
              <h1 className="font-bold text-[14px] lg:text-xl">For candidates</h1>
              <p className="text-sm lg:text-lg font-light">Apply & join a team that values talent, growth, & opportunity. We're excited to see what you can bring to the table.</p>
              <button className="bg-primary text-white font-bold w-[90%] lg:w-[50%] rounded-3xl text-[12px] lg:text-sm p-3">Register</button>
            </div>
            <Image src={candidate} width={170} height={100} alt="Candidate png" />
          </div>
        </div>
      </div>

      <Link
        href="#testimonials"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToTestimonials();
        }}
        className="flex items-center gap-3 mx-auto w-[80%] lg:w-[20%] justify-center font-medium text-lg mb-16 p-3 hover:bg-secondary hover:text-white rounded-3xl group"
      >
        See customers stories
        <BsArrowDownRightCircleFill className="text-secondary text-lg group-hover:text-white" />
      </Link>

      <Jobs />
      <AvailableJobs />
      <Brands />
      <Services />
      <Suscribe />

      <div ref={testimonialsRef} id="testimonials">
        <Testimonials />
      </div>
      <Hr />
      <Footer />
    </section>
  );
}
