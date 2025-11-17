import React from "react";

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            About 
          <span className="text-red-600"> Selam Evi</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Selam-Evi is a trusted Islamic charity foundation in Türkiye dedicated to supporting those in need through your Online Donation. We provide healthcare aid, education support, and empowerment for women, widows, and orphans.


          </p>
          <p className="text-gray-700 mb-8">
            Our charity services in Türkiye extend to Syria, Gaza, and beyond, bringing hope to vulnerable families. Donate now, give your Zakat or Sadqah Donation, and help us create a lasting impact with compassion and care.

          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <img
              src="/Group1.png"
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
