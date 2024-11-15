import React from 'react';

function Suscribe() {
  return (
    <div className="relative bg-cover bg-center bg-[url('/assets/imageMail.png')] h-[60vh] flex items-center justify-center">
      <div className='absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-85 z-0 flex flex-col gap-4 items-center justify-center text-white p-5'>
        <h1 className="text-4xl font-bold mb-4">Subscribe to our Newsletter to get Information</h1>
        <p className="mb-6 text-xs">Aenean quam tortor ullamcorper at aliquet at bibendum sit amet magna praesent eu tincidunt</p>
        <div className="w-full max-w-md">
          <h3 className="text-[12px] p-2 text-[#C9C1C1]">Enter Your Email</h3>
          <hr className="mb-7" />
          <button className="w-full bg-secondary text-white py-2 px-4 rounded-sm text-sm hover:bg-secondary">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suscribe;

