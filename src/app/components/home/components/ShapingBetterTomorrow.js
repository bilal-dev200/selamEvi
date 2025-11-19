"use client";

import React from "react";

export default function ShapingBetterTomorrow() {
  return (
    <div className="bg-white py-16 px-8 lg:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left: Single Large Image */}
        <div className="relative w-full flex justify-center lg:justify-start">
          <img
            src="/mission1.png"
            alt="Making a Difference"
            className="w-full max-w-xl h-[400px] sm:h-[500px] lg:h-[600px] object-cover "
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            25,000 Lives Transformed <span className="text-red-600">Through Your </span> Support
          </h2>
          <p className="text-gray-600 text-base sm:text-sm mb-5 leading-relaxed">
            Every act of giving through Selam-Evi helps people to live with dignity. With over 400 community projects, 1.8 million Qurbani beneficiaries, and ₨1.6 billion spent on food aid, your support through Online Donation Türkiye continues to feed families, educate children, and deliver essential care where it’s needed most.

          </p>
          <p className="text-gray-600 text-base sm:text-sm mb-8 leading-relaxed">
            Each contribution builds hope and stability. From completing 1,000 homes and supporting 2,500 orphans to empowering 800,000 women and helping 65,000 people find shelter, your generosity through Sadqah Donation and donating online for Zakat strengthens communities.

          </p>
          <p className="text-gray-600 text-base sm:text-sm mb-8 leading-relaxed">
            Donate now to a Muslim charity foundation that creates lasting change through compassionate charity service in Türkiye.

          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
