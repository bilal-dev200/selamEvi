"use client";
import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center text-white px-4 sm:px-8 md:px-16 bg-center bg-cover"
        style={{ backgroundImage: "url('/b-d1.png')" }}
      >

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-[500] leading-tight text-red-500 text-center">
            Education{" "}
            <span className="text-white">for Brighter Futures</span>
          </h1>


          <p className="mt-3 sm:mt-4 text-[10px] sm:text-[12px] md:text-[13px] font-light text-gray-200 tracking-wide max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-25 text-center font-nunito">
            We believe every child deserves access to learning, no matter their circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
