"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ImpactPage({ showHeader = true, titleText, descriptionText }) {
  const stats = [
    { img: "/Mask1.png", number: "800K+", title: "Healthcare Recipients", description: "Providing accessible healthcare across communities." },
    { img: "/Mask2.png", number: "2.5K+", title: "Orphans Supported", description: "Nurturing orphaned children with education." },
    { img: "/Mask3.png", number: "405+", title: "Educational Institutions", description: "Empowering communities through education." },
    { img: "/Mask4.png", number: "1.8M+", title: "Qurbani Beneficiaries", description: "Delivering Qurbani meat to millions of needy people." },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
  };

  return (
    <div className="bg-gray-50 relative">
      <div
        className="relative text-white px-4 pt-24 pb-36 rounded-tr-[80px] bg-cover bg-center sm:pb-40 sm:min-h-[600px] md:min-h-[500px]"
        style={{ backgroundImage: "url('/difference.png')" }}
      >
        {/* Title & Description */}
        {showHeader && (
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-widest">{titleText || "Making a Difference Together"}</h1>
            <p className="text-sm md:text-base text-red-100 max-w-2xl mx-auto">
              {descriptionText || "Your support helps deliver healthcare, education, and hope through trusted Islamic charity services in Türkiye."}
            </p>
          </div>
        )}

        {/* Cards Section — bottom aligned for all screens */}
       <div className="relative lg:absolute bottom-0  transform  w-full  px-4 flex flex-wrap justify-around gap-2 ">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white shadow-lg rounded-tr-3xl p-8 text-center
                 w-full sm:w-[45%] md:w-[40%] lg:w-[23%]
                 flex flex-col justify-end transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
    >
      <img src={stat.img} alt={stat.title} className="w-12 h-12 mx-auto mb-2" />
      <div className="flex flex-col items-center justify-center gap-1 mb-1">
        <h2 className="text-lg font-bold text-gray-900">{stat.number}</h2>
        <h3 className="text-sm font-semibold text-gray-800">{stat.title}</h3>
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{stat.description}</p>
    </motion.div>
  ))}
</div>


        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 z-0 rounded-tr-[80px]"></div>
      </div>
    </div>
  );
}
