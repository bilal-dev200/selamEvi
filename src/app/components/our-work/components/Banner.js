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
          <h1 className="text-3xl  md:text-5xl  leading-tight text-center ">
            Changing Lives
            <br />
            <span className="text-white">Through Compassionate Action</span>
          </h1>
          <p className="mt-4 text-[15px]   font-light text-gray-200 text-center ">
            Selam-Evi is dedicated to healthcare, education, women empowerment, and relief programs across Syria, Gaza, Turkey and beyond. Explore how Selam-Evi is transforming communities with healthcare, education, and humanitarian support.
          </p>
        </div>
      </div>
    </div>
  );
}
