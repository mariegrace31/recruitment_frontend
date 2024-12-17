"use client"
import React, { useState } from 'react';

function Suscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
   
    const mailtoLink = `mailto:lkgrouprw@gmail.com?subject=Newsletter Subscription&body=Please subscribe me to your newsletter. My email: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative bg-coverr bg-cover bg-center h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A77B9] to-[#333872] opacity-90 z-0"></div>

      <div className="relative z-10 flex flex-col gap-2 lg:gap-4 items-center justify-center text-white mt-1 lg:mt-24 p-2 lg:p-5">
        <h1 className="text-xl text-center lg:text-5xl font-bold mb-4">
          Stay Informed and Ahead of the Curve.
        </h1>
        <p className="mb-0 lg:mb-6 text-sm text-center lg:text-lg">
          Subscribe to our newsletter for the latest updates, exclusive insights, and valuable information delivered straight to your inbox.
        </p>

        <div className="w-full max-w-md p-4 bg-opacity-100">
          <div className="bg-white/0 backdrop-brightness-100 p-4 rounded-lg shadow-md">
            <input
              type="email"
              id="email"
              className="border-none focus:outline-none border-b-gray-400 bg-transparent p-3 text-white placeholder:text-gray-300 placeholder:text-[15px] placeholder:font-light"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr className="mb-4" />
            <button
              onClick={handleSubscribe}
              className="w-full bg-secondary text-white py-2 px-4 rounded-sm text-sm lg:text-lg font-medium"
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suscribe;
