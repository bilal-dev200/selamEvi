"use client";

import React from "react";

const Section4 = () => {
  const items = [
    {
      img: "/lives1.png",
      text: "Over 5,000 meals served during Ramadan 2024, bringing comfort to struggling families.",
      side: "left",
    },
    {
      img: "/lives2.png",
      text: "Rebuilt 15 classrooms after the Turkey–Syria earthquake, providing safe spaces for children.",
      side: "right",
    },
    {
      img: "/lives3.png",
      text: "Healthcare camp treated 1,200 patients in Syria, offering vital medical care and support.",
      side: "left",
    },
    {
      img: "/lives4.png",
      text: "Winter Relief distributed 5,000 blankets in Gaza to protect families from cold.",
      side: "right",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Looking Back at <span className="text-red-600">Lives</span> We’ve{" "}
          <span className="text-red-600">Touched</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Each moment reflects a story of hope, compassion, and lasting change —
          reminding us of the lives touched and the communities transformed.
        </p>
      </div>

      {/* Custom Rows Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 px-12 pb-28">
        {/* ✅ Row 1 — Left big, Right small */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left (big) */}
          <div className="w-full sm:w-[68%] rounded-xl overflow-hidden bg-white shadow-md flex flex-col">
            <img
              src={items[0].img}
              alt="Impact 1"
              className="w-full h-[450px] object-cover"
            />
            <p className="text-black text-sm sm:text-base px-4 py-3 font-bold">
              {items[0].text}
            </p>
          </div>

          {/* Right (small) */}
          <div className="w-full sm:w-[30%] rounded-xl overflow-hidden bg-white shadow-md flex flex-col">
            <img
              src={items[1].img}
              alt="Impact 2"
              className="w-full h-[450px] object-cover"
            />
            <p className="text-black text-sm sm:text-base px-4 py-3 font-bold">
              {items[1].text}
            </p>
          </div>
        </div>

        {/* ✅ Row 2 — Left small, Right big */}
        <div className="flex flex-col sm:flex-row-reverse gap-6">
          {/* Left (small) */}
          <div className="w-full sm:w-[30%] rounded-xl overflow-hidden bg-transparent  flex flex-col">
            <img
              src={items[2].img}
              alt="Impact 3"
              className="w-full h-[450px] object-cover"
            />
            <p className="text-white text-sm sm:text-base px-4 py-3 font-bold">
              {items[2].text}
            </p>
          </div>

          {/* Right (big) */}
          <div className="w-full sm:w-[68%] rounded-xl overflow-hidden bg-transparent  flex flex-col text-white">
            <img
              src={items[3].img}
              alt="Impact 4"
              className="w-full h-[450px] object-cover"
            />
            <p className="text-white text-sm sm:text-base px-4 py-3 font-bold">
              {items[3].text}
            </p>
          </div>
        </div>
      </div>

      {/* Red Footer with Arrows */}
     <div className="absolute bottom-0 left-0 w-full bg-[#E7000B] py-10 flex justify-center items-center gap-4 rounded-b-[60px] z-0 h-[300px]">

  {/* Left Button - White with Red Arrow */}
  <button className="bg-white text-[#E7000B] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-gray-200 transition mt-52">
    ‹
  </button>

  {/* Right Button - Red with White Arrow + White Border */}
  <button className="bg-[#E7000B] border-2 border-white text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-white hover:text-[#E7000B] transition mt-52">
    ›
  </button>

</div>

    </section>
  );
};

export default Section4;
