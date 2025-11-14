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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Shaping a <span className="text-red-600">Better</span> Tomorrow
          </h2>
          <p className="text-gray-600 text-base sm:text-sm mb-5 leading-relaxed">
            At the heart of our mission is a simple belief: every individual
            deserves access to education, healthcare, and opportunities that
            lead to a dignified life. We envision a world where no child goes to
            bed hungry, where families have the resources they need to thrive,
            and where communities are empowered to break the cycle of poverty.
          </p>
          <p className="text-gray-600 text-base sm:text-sm mb-8 leading-relaxed">
            Our vision is to create sustainable change that lasts for
            generations. By working hand in hand with local communities and
            global partners, we aim to build a future rooted in compassion,
            equity, and hope—where lives are transformed, not just for today,
            but for tomorrow.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
