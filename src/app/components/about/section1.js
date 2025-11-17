import React from "react";

const Section1 = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900    mb-6">
            Mission &<span className="text-[#E7000B]">  Vision</span>
          </h2>

          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
            To create a compassionate and self-reliant society where every individual has access to healthcare, education, and the opportunity to live with dignity, regardless of circumstance.
          </p>

          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mb-6">
            <button className="bg-[#E7000B] hover:bg-[#b80009] text-white px-5 sm:px-6 py-3 sm:py-3.5 font-semibold rounded-md transition">
              Mission
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-5 sm:px-6 py-3 sm:py-3.5 font-semibold rounded-md transition">
              Vision
            </button>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
           Selam-Evi strives to serve humanity through impactful initiatives in healthcare, education, and empowerment. By providing hospital equipment, mobile medical care, educational support, women empowerment, widow and orphan assistance, Qurbani programs in Syria and Gaza, and Turkey–Syria earthquake relief efforts, Selam-Evi aims to bring hope, stability, and long-term change to communities in need.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            With the help of dedicated volunteers, partners, and donors, Selam-Evi continues to build sustainable solutions that create lasting impact.
          </p>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <div className="relative w-[80%] sm:w-[70%] md:w-[90%] lg:w-[75%]">
            {/* Back Image */}
            <img
              src="/camp.png"
              alt="Camp"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[80px] w-[70%] sm:w-[60%] md:w-[320px] h-[300px] sm:h-[350px] md:h-[420px] object-cover shadow-lg z-10"
              style={{ borderTopRightRadius: "30%" }}
            />

            {/* Front Image */}
            <img
              src="/ceremony.png"
              alt="Ceremony"
              className="relative z-20 mt-[180px] sm:mt-[150px] mx-auto md:ml-[40px] w-[70%] sm:w-[60%] md:w-[320px] h-[220px] sm:h-[240px] md:h-[260px] object-cover shadow-lg border-[6px] border-white"
              style={{ borderTopLeftRadius: "30%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
