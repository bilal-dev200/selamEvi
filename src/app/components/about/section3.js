"use client";
import React, { useState } from "react";
import DonationFormModal from "../../components/Form"; 

const services = [
  {
    title: "Healthcare Support",
    desc: "Supplying hospital equipment and mobile medical services.",
    image: "/Serve1.jpeg",
  },
  {
    title: "Educational Support",
    desc: "Helping schools, students, and teachers thrive.",
    image: "/Serve2.jpeg",
  },
  {
    title: "Women Empowerment",
    desc: "Providing workshops & pathways to self-reliance for vulnerable women.",
    image: "/Serve3.jpeg",
  },
  {
    title: "Orphan & Child Care",
    desc: "Giving vulnerable children meals, care, education & hope in Syria & beyond.",
    image: "/Serve4.jpeg",
  },
  {
    title: "Ijtama-e-Qurbani",
    desc: "Delivering fresh meat in Syria & Gaza during Eid.",
    image: "/Serve5.jpeg",
  },
  {
    title: "Disaster Relief",
    desc: "Immediate support during humanitarian crises.",
    image: "/Serve6.jpeg",
  },
];

export default function Section3() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl text-black md:text-4xl font-bold mb-3">
        How We Serve <span className="text-red-600">Communities</span> in Need
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Our services span across healthcare, education, empowerment, and emergency relief.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-[490px] rounded-md overflow-hidden group shadow-lg transition-transform"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />


            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-start items-start p-5 z-10 text-left">
              <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
              <p className="text-sm mb-4 max-w-[80%] text-black/80">{service.desc}</p>
              <button
                onClick={() => setIsModalVisible(true)}
                className="text-black bg-white px-5 py-2 rounded-[60px] text-sm border border-black cursor-pointer hover:bg-gray-100 transition"
              >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Single Modal (outside loop) */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </section>
  );
}
