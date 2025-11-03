import React from "react";

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Building Dignity,<br />
            Opportunity, and <span className="text-red-600">Hope</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Selam-Evi is a humanitarian organization committed to uplifting communities 
            affected by poverty, conflict, and natural disasters. We provide vital healthcare 
            support, educational assistance, women empowerment programs, and relief aid 
            to widows, orphans, and vulnerable families. Our work extends across Syria, 
            Gaza, Turkey, and beyond, bringing hope and dignity where it’s needed most.
          </p>
          <p className="text-gray-700 mb-8">
            With the help of dedicated volunteers, partners, and donors, Selam-Evi continues 
            to build sustainable solutions that create lasting impact.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-semibold transition">
            Lear More
          </button>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <img
              src="/Group 1.png" 
              alt=""
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="absolute top-0 right-0 w-6 h-full bg-red-600 rounded-tr-md rounded-br-md z-0"></div>
        </div>
      </div>
    </section>
  );
}
