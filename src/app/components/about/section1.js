import React from "react";

const Section1 = () => {
  return (
    <section className="py-6 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Flex container: stacks on mobile, side-by-side on large screens */}
        <div className="flex flex-col flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 w-full lg:w-[70%]">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              Our<span className="text-[#E7000B]"> Mission & Vision</span>
            </h2>

            <p className="mt-6 text-gray-700 text-base leading-relaxed w-full ">
              To create a compassionate and self-reliant society where every individual has access to healthcare, education, and the opportunity to live with dignity, regardless of circumstance.
            </p>

            {/* Mission & Vision Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <button className="bg-[#D21C17] hover:bg-[#c7000a] text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl">
                Our Mission
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-md transition-all duration-300">
                Our Vision
              </button>
            </div>

            {/* Detailed Mission & Vision Text */}
            <div className="mt-10 space-y-5 text-gray-700 text-base leading-relaxed w-full lg:w-full">
              <p>
                Selam-Evi strives to serve humanity through impactful initiatives in healthcare, education, and empowerment. By providing hospital equipment, mobile medical care, educational support, women empowerment, widow and orphan assistance, Qurbani programs in Syria and Gaza, and Turkey–Syria earthquake relief efforts, Selam-Evi aims to bring hope, stability, and long-term change to communities in need.
              </p>
              <p>
                With the help of dedicated volunteers, partners, and donors, Selam-Evi continues to build sustainable solutions that create lasting impact.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="relative w-full flex justify-center">
              <img
                src="/camp.png"
                alt="Selam-Evi Humanitarian Work"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-fit
                           h-80 sm:h-130 
                           object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
