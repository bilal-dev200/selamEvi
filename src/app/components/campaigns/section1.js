import React from "react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 bg-white">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="absolute -bottom-4 -left-3 w-40 h-36 bg-red-600 rounded-tr-3xl z-0"></div>
        <img
          src="/improving.png"
          alt="Improving Lives"
          className="relative z-10 w-full max-w-md h-auto object-cover rounded-xl"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-snug">
          Why our
          <span className="text-red-600"> Events & <br /> Campaigns </span>
          Matter
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          Our events are more than gatherings — they unite people, raise vital awareness, and inspire generosity for meaningful causes. Each campaign transforms that support into direct impact, providing essential healthcare, quality education, and urgent relief for vulnerable communities. Together, they bridge hope and action, ensuring lasting change where it’s needed most.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Our campaigns take that inspiration a step further by delivering direct aid where it matters most. From providing healthcare and education to emergency relief and rebuilding lives, each campaign translates awareness into action. Together, they ensure that every contribution makes a real difference, turning hope into lasting impact.
        </p>
      </div>
    </div>
  );
};

export default Section1;
