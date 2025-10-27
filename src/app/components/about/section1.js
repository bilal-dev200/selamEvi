import React from "react";

const Section1 = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our <span className="text-[#E7000B]">Mission & Vision</span>
          </h2>

          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
            With the help of dedicated volunteers, partners, and donors,
            Selam-Evi continues to build sustainable solutions that create
            lasting impact.
          </p>

          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mb-6">
            <button className="bg-[#E7000B] hover:bg-[#b80009] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-md transition">
              Mission
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-md transition">
              Vision
            </button>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Selam-Evi is a humanitarian organization committed to uplifting
            communities affected by poverty, conflict, and natural disasters. We
            provide vital healthcare support, educational assistance, women
            empowerment programs, and relief aid to widows, orphans, and
            vulnerable families. Our work extends across Syria, Gaza, Turkey,
            and beyond — bringing hope and dignity where it’s needed most.
          </p>
          <br/>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      With the help of dedicated volunteers, partners, and donors, Selam-Evi continues to build sustainable solutions that create lasting impact.
  </p>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <div className="relative w-[80%] sm:w-[70%] md:w-[90%] lg:w-[70%]">
            {/* Back Image */}
            <img
              src="/camp.png"
              alt="Camp"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[80px] w-[70%] sm:w-[60%] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] object-cover shadow-lg z-10"
              style={{ borderTopRightRadius: "30%" }}
            />

            {/* Front Image */}
            <img
              src="/ceremony.png"
              alt="Ceremony"
              className="relative z-20 mt-[180px] sm:mt-[150px] mx-auto md:ml-[40px] w-[70%] sm:w-[60%] md:w-[300px] h-[200px] sm:h-[230px] md:h-[250px] object-cover shadow-lg border-[6px] border-white"
              style={{ borderTopLeftRadius: "30%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
