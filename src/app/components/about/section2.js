"use client";
import React from "react";

const Section2 = () => {
  return (
    <section className="relative w-full flex justify-center items-center px-6 py-16 bg-white overflow-hidden">
      <div className="relative w-[90%] lg:w-[80%]">
        {/* Wrapper that changes layout at 1000px */}
        <div className="relative flex flex-col [@media(min-width:1000px)]:block">
          {/* 🖼 Image */}
          <img
            src="/help.png"
            alt="Selam-Evi"
            className="w-full [@media(min-width:1000px)]:w-[70%] h-[300px] sm:h-[380px] lg:h-[450px] object-cover rounded-xl shadow-lg z-0"
          />

          {/* 🔴 Red Box */}
          <div
            className="text-white mt-6 [@media(min-width:1000px)]:mt-0 prx-8
                        py-8 lg:px-14 lg:py-10
                       w-full [@media(min-width:1000px)]:w-[65%]
                       rounded-tl-[5%] rounded-tr-[40%] rounded-br-[0%] rounded-bl-[0%]
                       shadow-2xl z-10
                       [@media(min-width:1000px)]:absolute [@media(min-width:1000px)]:top-1/2 
                       [@media(min-width:1000px)]:left-[40%] [@media(min-width:1000px)]:transform 
                       [@media(min-width:1000px)]:-translate-y-1/2"
            style={{
              backgroundColor: "#D21C17B0"
            }}
          >
           <div className="text-center sm:text-left">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl  mb-4 leading-snug pr-3">
              From a Seed of Compassion <br className="hidden sm:block" /> to a Beacon of Hope
            </h2>

            <p className="text-sm font-nunito lg:text-base mb-3 leading-relaxed opacity-95">
              Selam-Evi began with a simple yet powerful vision, ensuring everyone has access to healthcare, education, and dignity. What started as a small act of compassion has grown into a nationwide movement of hope.
            </p>

            <p className="text-sm font-nunito lg:text-base leading-relaxed opacity-95">
              With the support of our volunteers, partners, and donors, we create sustainable solutions that uplift lives. Guided by compassion, dignity, and empowerment, Selam-Evi strives to bring lasting change and help families rebuild their futures with strength and hope.
            </p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
