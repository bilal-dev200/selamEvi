"use client";
import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[120vh] bg-cover bg-center flex flex-col justify-center text-white px-6 sm:px-10 md:px-20"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div>
          <h1 className="text-4xl  md:text-5xl  leading-tight text-center font-semibold ">
            Changing Lives <br /> Through <span className="text-red-600">Compassionate Action</span>
          </h1>
          <p className="mt-4 text-[15px] font-nunito font-light text-gray-200 text-center ">
            Selam-Evi empowers communities through healthcare, education, women empowerment, and humanitarian relief across Syria, Gaza, and Türkiye. Join us in creating lasting change through trusted Islamic charity services.
          </p>
        </div>
      </div>
    </div>
  );
}
