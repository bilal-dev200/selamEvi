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
        <div className="relative z-10 max-w-3xl  sm:ml-0 md:ml-40 -mt-10 sm:-mt-16 md:-mt-30 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mx-30">
            Donation
          </h1>
          <p className="mt-4 text-[13px]  font-light text-gray-200 text-center mx-20 max-w-xl">
            Selam-Evi is dedicated to healthcare, education, women empowerment
          </p>
        </div>
      </div>
    </div>
  );
}
