import React from "react";

const CompassionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-30 bg-white">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 max-w-lg">
        {/* Red Rounded Corner Shape (behind image) */}
        <div className="absolute -bottom-4 -left-4 w-45 h-45 bg-red-600  z-0"></div>

        {/* Image */}
        <img
          src="/Ijteema2.png"
          alt="Improving Lives"
          className="relative z-10 w-full h-auto object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
          Improving Lives with <br />Care and
          <span className="text-red-600"> Compassion</span>
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">

          Selam-Evi is a trusted Islamic charity foundation in Türkiye, devoted to transforming lives through compassion and service. Our work spans healthcare support, educational assistance, women's empowerment, and welfare and relief programs across Syria, Gaza, Türkiye, and beyond. Through every project, we aim to bring hope, dignity, and opportunity to those most in need.


        </p>

        <p className="text-gray-600 leading-relaxed">
          Beyond immediate relief, Selam-Evi is committed to creating long-term, sustainable solutions that empower families and communities. Through our programs, we foster self-reliance, nurture hope, and open doors to brighter futures. Every effort we make is guided by compassion, dignity, and the vision of building a world where no one is left behind.

        </p>
      </div>
    </div>
  );
};

export default CompassionSection;
