"use client";
import React from "react";

export default function ImpactPage() {
  const stats = [
    {
      img: "/Mask1.png",
      number: "20+",
      title: "Hospitals Equipped",
      description:
        "Providing vital medical equipment and mobile health units.",
    },
    {
      img: "/Mask2.png",
      number: "10,000+",
      title: "Orphans Supported",
      description: "Ensuring care, education, and brighter futures.",
    },
    {
      img: "/Mask3.png",
      number: "50+",
      title: "Schools Assisted",
      description: "Strengthening education with resources and support.",
    },
    {
      img: "/Mask4.png",
      number: "100,000+",
      title: "Beneficiaries Reached",
      description:
        "Changing lives through healthcare, education, and relief.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔴 Red Section with Cards Stuck at Bottom */}
      <div
        className="relative px-4 pt-24 pb-32 rounded-tr-[80px]"
        style={{
          backgroundImage: "url('/difference.png')",
          height: "660px",
          backgroundPosition: "center",
        }}
      >
        {/* Cards Section */}
        <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-72">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-tr-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={stat.img}
                alt={`Impact ${index + 1}`}
                className="w-16 h-16 mx-auto mb-4"
              />

              <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                <h2 className="text-[20px] font-bold text-gray-900">{stat.number}</h2>
                <h3 className="text-[18px] font-semibold text-gray-800">
                  {stat.title}
                </h3>
              </div>

              <p className="text-[16px] text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
