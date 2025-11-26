import React from "react";

export default function HealthcareCampSection({
  imagePrimary = "/e-1.png",
}) {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 " >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-[42px] font-semibold text-gray-900 leading-tight">
            Why Our {" "}
            <span className="text-red-600">Events &amp; Campaigns</span> Matter
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Our events are more than gatherings — they unite people, raise vital
            awareness, and inspire long-term community support. Each campaign
            transforms the support we offer into tangible, lasting results,
            providing essential healthcare, hygiene education, and targeted
            relief where it’s needed most.
          </p>
        </div>

        {/* RIGHT: Image Section */}
        <div className="relative w-full flex items-center justify-center mt-10 md:mt-0">
          <div className="relative z-20 w-[90%] sm:w-[80%] md:w-[85%] lg:w-[95%] rounded-xl overflow-hidden">
            <img
              src={imagePrimary}
              alt="Healthcare"
              className="object-cover w-full h-auto rounded-xl transition-transform duration-500 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
