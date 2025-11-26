"use client";
import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center text-white px-4 sm:px-8 md:px-16 bg-center bg-cover"
        style={{ backgroundImage: "url('/education.png')" }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto sm:ml-0 md:ml-32 lg:ml-40 text-center sm:text-left mt-10 sm:mt-0 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-red-500">
            Education{" "}
            <span className="text-white">for Brighter Futures</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-[13px] font-nunito font-light text-gray-200 tracking-wide max-w-lg mx-auto sm:mx-30">
            We believe every child deserves access to learning, no matter their
            circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
