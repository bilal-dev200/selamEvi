"use client";
import React from "react";

const Section5 = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/shapping.png"
            alt="Making a Difference"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            How We Create <span className="text-[#E7000B]">Impact</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Through a wide range of programs, Selam-Evi is changing lives every day.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-900">
            <li className="[&::marker]:text-[#E7000B]">
              Equipping hospitals and providing medical machinery.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Delivering mobile healthcare services to underserved areas.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Supporting schools and educational initiatives.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Empowering women through skills and opportunities.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Caring for widows and orphans with dignity.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Organizing Qurbani campaigns in Syria & Gaza.
            </li>
            <li className="[&::marker]:text-[#E7000B]">
              Providing emergency relief during disasters such as the Turkey–Syria earthquake.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section5;
