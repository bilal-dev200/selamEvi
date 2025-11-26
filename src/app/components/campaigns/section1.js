import React from "react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 bg-white">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="/improving.png"
          alt="Improving Lives"
          className="relative z-10 w-full max-w-md h-auto object-cover rounded-xl"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
         Why Our 
          <span className="text-red-600"> Events & <br /> Campaigns </span>
          Matter
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          Selam Evi’s events and campaigns play a vital role in delivering hope and empowerment to vulnerable communities. Through initiatives in healthcare, education, food aid, and women empowerment, we ensure that every contribution directly impacts lives in need across Turkey and beyond.

        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Each campaign reflects our mission of compassion, dignity, and sustainable change. From Qurbani distributions to child healthcare camps and disaster relief efforts, Selam Evi connects generous donors with meaningful causes, creating a lasting ripple of goodness that uplifts families and strengthens communities.

        </p>
      </div>
    </div>
  );
};

export default Section1;
