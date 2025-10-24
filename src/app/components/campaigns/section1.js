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
          Improving Lives with <br /> Care and{" "}
          <span className="text-red-600">Compassion</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          Sukan Ev’in is dedicated to aiding vulnerable communities by focusing
          on health, education, and humanitarian support. We believe that every
          individual deserves access to quality medical care, the opportunity to
          learn, and the security of basic human needs.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Beyond immediate relief, Sukan Ev’in is committed to creating
          long-term, sustainable solutions that empower families and
          communities. Through our programs, we foster child education, nurture
          hope, and open doors to brighter futures. Our mission is guided by
          compassion, dignity, and the vision of building a world where no one
          is left behind.
        </p>
      </div>
    </div>
  );
};

export default Section1;
