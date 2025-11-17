"use client";
import React from "react";

const Section5 = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/shapping.png"
            alt="Making a Difference"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-cover "
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Building a Better <span className="text-[#E7000B]">Tomorrow</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Selam-Evi brings healing, education, and hope to communities in need every day.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-900 text-sm sm:text-base">
            <li className="[&::marker]:text-[#E7000B]">
              Equipping hospitals with vital tools and medical aid.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Delivering mobile care to remote and needy areas.

            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Supporting schools to build brighter, educated futures.
            </li>
            <li className="[&::marker]:text-[#E7000B]">

              Empowering women through skills and opportunities.
            </li>
            <li className="[&::marker]:text-[#E7000B]">


              Caring for widows and orphans with love and dignity.

            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Organizing Qurbani drives in Syria, Gaza, and beyond.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Providing quick relief during quakes and disasters.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section5;
