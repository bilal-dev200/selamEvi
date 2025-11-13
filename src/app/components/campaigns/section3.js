"use client";
import React from "react";
import { Heart, Building2, Users, GraduationCap } from "lucide-react";

export default function Section3() {
  const stats = [
    {
      icon: <Building2 className="w-10 h-10 text-[#E7000B] mx-auto" />,
      number: "20+",
      title: "Hospitals Equipped",
      description: "Providing vital medical equipment and mobile health units.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#E7000B] mx-auto" />,
      number: "10,000+",
      title: "Orphans Supported",
      description: "Ensuring care, education, and brighter futures.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#E7000B] mx-auto" />,
      number: "50+",
      title: "Schools Assisted",
      description: "Strengthening education with resources and support.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#E7000B] mx-auto" />,
      number: "100,000+",
      title: "Beneficiaries Reached",
      description: "Changing lives through healthcare, education, and relief.",
    },
  ];

  return (
    <section>
      {/* Background Image Section */}
      <div
        className="relative h-[420px] sm:h-[460px] lg:h-[500px] text-white text-center py-16 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/slider1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-10 sm:mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Together, We Make a Difference
          </h2>
          <p className="text-sm sm:text-base text-red-100 mb-6">
            Your support brings healthcare, education, and hope to thousands.
          </p>
        </div>
      </div>

      {/* Stats / Cards Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 -mt-36 sm:-mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-tr-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">{stat.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.number}
            </h2>
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              {stat.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
