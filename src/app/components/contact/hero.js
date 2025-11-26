"use client";

import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
      style={{ backgroundImage: "url('/contactbg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 pt-[100px]">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white text-center">
          Contact 
        </h1>
        <p className="mt-4 font-nunito text-lg md:text-xl font-light text-gray-200 tracking-wide text-center max-w-2xl">
          Selam-Evi is dedicated to healthcare, education, and women's empowerment.

        </p>

        {/* Red Button */}
        <button className="mt-8 bg-[#D21C17] text-white font-semibold py-3 px-8 rounded-2xl shadow-md hover:bg-red-700 transition-all duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
