import React from 'react';

function Suscribe() {
  return (
    <div className="relative bg-coverr bg-cover bg-center h-[60vh] flex items-center justify-center">
  
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-90 z-0"></div>

      <div className="relative z-10 flex flex-col gap-2 lg:gap-4 items-center justify-center text-white mt-1 lg:mt-24 p-2 lg:p-5">
        <h1 className="text-xl lg:text-5xl font-bold mb-4">
          Subscribe to our Newsletter to get Information
        </h1>
        <p className="mb-6 text-sm lg:text-lg">
          Aenean quam tortor ullamcorper at aliquet at bibendum sit amet magna
          praesent eu tincidunt
        </p>

        <div className="w-full max-w-md p-4 bg-opacity-100">
          <div className="bg-white/0 backdrop-brightness-100 p-4 rounded-lg shadow-md">
            <h3 className="text-[13px] mb-2 text-gray-400">Enter Your Email</h3>
            <hr className="mb-4" />
            <button className="w-full bg-secondary text-white py-2 px-4 rounded-sm text-sm lg:text-lg font-medium">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suscribe;
