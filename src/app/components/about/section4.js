"use client"
import React, { useState } from "react";
import DonationFormModal from "../home/components/Form";


const Section4 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      {/* Background Section with Layered Backgrounds */}
      <div
        className="relative text-white text-center py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/slider1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Together, We Can Do More
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-red-100 mb-6 px-4">
            Join Selam-Evi in bringing hope, care, and change to those who need it most.
          </p>

          <button
                   onClick={() => setIsModalVisible(true)}
         className="border border-white text-white px-6 py-2 cursor-pointer rounded-bl-[15px]" >
                   Donate Now
                 </button>

         
               {/* Donation Modal */}
               <DonationFormModal
                 open={isModalVisible}
                 onCancel={() => setIsModalVisible(false)}
               />
        </div>
      </div>
    </div>
  );
};

export default Section4;
