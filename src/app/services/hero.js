"use client";
import React from "react";
import { servicesData } from "./servicesData";

export default function Hero({ slug }) {
  const service = servicesData[slug];
  console.log("slug", slug);

  // fallback if slug doesn't exist
  // if (!service) {
  //   return (
  //     <div className="py-20 text-center text-red-500 font-bold">
  //       Invalid service slug
  //     </div>
  //   );
  // }

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center text-white px-4 sm:px-8 md:px-16 bg-center bg-cover"
        style={{ backgroundImage: `url('${service.banner}')` }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-red-500">{service.titleRed} </span>
            <span className="text-white">{service.titleWhite}</span>
          </h1>

          <p className="mt-4 text-[13px] font-light text-gray-200 tracking-wide max-w-lg mx-auto">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
