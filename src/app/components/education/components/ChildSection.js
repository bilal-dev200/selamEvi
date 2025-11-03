import React from "react";

export default function ChildJourneySection() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            A <span className="text-red-600">Child’s Journey</span>
            <br />
            to Learning
          </h2>

          <p className="text-gray-600 mt-6  sm:text-[14px] leading-relaxed max-w-lg">
            When 10-year-old Fatima in Gaza had to leave school because her family 
            couldn’t afford books or fees, her dreams began to fade. Through Spleen Girl’s 
            education support program, she received school supplies, uniforms, and the 
            chance to return to her classroom.
          </p>

          <p className="text-gray-600 mt-4 sm:text-[14px] leading-relaxed max-w-lg">
            Today, Fatima is thriving in her studies. Filled with hope, and dreaming of 
            becoming a doctor — proof that education can transform lives.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end">
          <div className=" lg:w-[400px] ">
            <img
              src="/e-3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
