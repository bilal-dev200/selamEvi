"use client";

import React from "react";

const Section4 = () => {
  const items = [
    {
      img: "/lives1.png",
      text: "Over 5,000 meals served during Ramadan 2024, bringing comfort to struggling families.",
      size: "large",
    },
    {
      img: "/lives2.png",
      text: "Rebuilt 15 classrooms after the Turkey–Syria earthquake, providing safe spaces for children.",
      size: "small",
    },
    {
      img: "/lives3.png",
      text: "Healthcare camp treated 1,200 patients in Syria, offering vital medical care and support.",
      size: "large",
    },
    {
      img: "/lives4.png",
      text: "Winter Relief distributed 5,000 blankets in Gaza to protect families from cold.",
      size: "small",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Looking Back at{" "}
          <span className="text-red-600">Lives</span> We’ve{" "}
          <span className="text-red-600">Touched</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Each moment reflects a story of hope, compassion, and lasting change — reminding us of the lives
          touched and the communities transformed.
        </p>
      </div>

      {/* Image Grid (Custom Widths) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 pb-28">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 
              ${item.size === "large" ? "w-full sm:w-[70%]" : "w-full sm:w-[28%]"}`}
          >
            <img
              src={item.img}
              alt={`Impact ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <p className="text-black text-sm sm:text-base px-4 py-3 font-bold">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Red Footer with Arrows (Behind Images Slightly) */}
      <div className="absolute  mb-4 bottom-0 left-0 w-full bg-[#E7000B] py-10 flex justify-center items-center space-x-4 rounded-t-[60px] z-0 mt-10">
        <button className="bg-white text-[#E7000B] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition">
          ‹
        </button>
        <button className="bg-[#E7000B] border-2 border-amber-50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition">
          ›
        </button>
      </div>
    </section>
  );
};

export default Section4;
