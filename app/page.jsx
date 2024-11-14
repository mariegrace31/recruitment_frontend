import Image from "next/image";
import employer from './assets/employer.png';
import "./globals.css";
import candidate from './assets/candidate.png';
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Jobs from "./components/Jobs";

export default function Home() {
  return (
    <section>
       <div className="relative bg-cover bg-center bg-[url('./assets/hero.png')] h-[100vh]">
      <div className="absolute inset-0 bg-primary opacity-85 z-0"></div>
       <div className="relative z-10 h-[100vh] flex flex-col justify-center">
        <div className="flex flex-col gap-14 justify-center text-center w-[60%] mx-auto">
          <h1 className="text-white font-black text-6xl leading-none">
            TEMPORARY WORK <br /> & RECRUITMENT AGENCY
          </h1>
          <p className="text-white font-light text-[18px] w-[56%] mx-auto">
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
    <div className="grid grid-cols-2 bg-white p-20 gap-32 mt-16 ">
      <div className="p-4 bg-gray-100 py-5 rounded-lg">
        <div className="flex bg-gradient-center p-8 rounded-lg ">
          <div className="flex flex-col gap-5 w-[60%]">
          <h1 className="font-bold text-xl">For employers</h1>
          <p className="text-lg font-light">Investing in people shaping in better future investing in people shaping in better future</p>
          <button className="bg-primary text-white font-bold w-[50%] rounded-3xl p-3">Post Your Job</button>
          </div>
          <Image
           src={employer}
           width={170}
           height={100}
           alt="Employer png"
          />
        </div>
      </div>
      <div className="p-4 bg-gray-100 py-5 rounded-lg">
        <div className="flex bg-gradient-center p-8 rounded-lg ">
          <div className="flex flex-col gap-5 w-[60%]">
          <h1 className="font-bold text-xl">For candidates</h1>
          <p className="text-lg font-light">Investing in people shaping in better future investing in people shaping in better future</p>
          <button className="bg-primary text-white font-bold w-[40%] rounded-3xl p-3">Register</button>
          </div>
          <Image
           src={candidate}
           width={170}
           height={100}
           alt="Candidate png"
          />
        </div>
      </div>
    </div>
    <button className="flex items-center gap-3 mx-auto font-medium text-lg mb-16 p-3 hover:bg-secondary hover:text-white rounded-3xl group">
  See customers stories 
  <BsArrowDownRightCircleFill className="text-secondary text-lg group-hover:text-white" /> 
</button>
<Jobs />
    </section>
   
  );
}
