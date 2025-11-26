// src/components/SupportLearningSection.jsx
import React from "react";

export default function SupportSection() {
  return (
    <section className="flex flex-col items-center px-4
     sm:px-6 py-10 sm:py-16">
      <div className="max-w-6xl w-full relative">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 relative items-center">
          
          {/* Left Image */}
          <div className="relative z-20 md:-mr-10">
            <img
              src="/e-2.png"
              alt="Learning"
              className="w-full md:w-[780px] object-cover rounded-md"
            />
          </div>

          {/* Right Red Box */}
          <div className="relative mt-8 md:mt-0  ">
            <div className="absolute md:static md:translate-y-17 bg-[#AE1C17] text-white p-6 sm:p-10 md:p-14 lg:p-16 md:h-[500px] md:w-[630px] ">
              
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold -mt-6 leading-tight">
                How We Support <br className="hidden sm:block" /> Learning
              </h2>

              <p className="text-[14px] sm:text-[15px] mt-3 mb-6 text-[#FFFFFFB2] opacity-90">
                From classrooms to scholarships, our programs open doors for brighter futures.
              </p>

              <ul className="space-y-4 text-[14px] sm:text-[15px]">
                <li className="flex items-start">
                  <span className="font-semibold">
                    <span className="text-xl">●</span> Schools Assisted
                    <br />
                    <span className="ml-4 text-[#FFFFFFB2]">
                      Providing resources, books, and safe learning spaces.
                    </span>
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold">
                    <span className="text-lg">●</span> Scholarships & Fees
                    <br />
                    <span className="ml-4 text-[#FFFFFFB2]">
                      Supporting children who cannot afford education.
                    </span>
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold">
                    <span className="text-lg">●</span> Teacher Training
                    <br />
                    <span className="ml-4 text-[#FFFFFFB2]">
                      Empowering educators with skills to inspire young minds.
                    </span>
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold">
                    <span className="text-lg">●</span> Digital Learning Access
                    <br />
                    <span className="ml-4 text-[#FFFFFFB2] ">
                      Delivering tools and technology for modern education.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
