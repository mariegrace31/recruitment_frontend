import Image from "next/image";

export default function Home() {
  return (
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
  );
}
