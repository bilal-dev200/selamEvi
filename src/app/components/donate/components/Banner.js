"use client";
import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[120vh] flex flex-col justify-center text-white px-6 sm:px-10 md:px-20 bg-center bg-cover"
        style={{ backgroundImage: "url('/donatebanner.png')" }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto -mt-8 sm:-mt-12 md:-mt-20 px-4 sm:px-6 lg:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
            Donation
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-light text-gray-200 text-center mx-auto">
            Selam-Evi is dedicated to healthcare, education, women empowerment, 
          </p>
        </div>

      </div>
    </div>
  );
}
