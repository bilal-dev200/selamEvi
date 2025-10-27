"use client";
import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center text-white px-4 sm:px-8 md:px-16 bg-center bg-cover"
        style={{ backgroundImage: "url('/Ijteema2.png')" }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-red-500">
            Stories{" "}
            <span className="text-white">That Inspire Hope</span>
          </h1>
 

          <p className="mt-4 text-[12px] font-light text-gray-200 tracking-wide  sm:mx-20">
           We believe every child deserves access to learning, no matter their circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
