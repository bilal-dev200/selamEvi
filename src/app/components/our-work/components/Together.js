"use client"
import React, { useState } from "react";
import DonationFormModal from "../../home/components/Form";

const Together = () => {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      {/* Background image with red overlay */}
      <img
        src="/difference.png"  // अपने background image का सही path यहाँ डालें
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-red-600 opacity-10"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-2">
          Together, We Can Do More
        </h1>
        <p className="text-white text-xs md:text-sm mb-6 max-w-xl">
          Join Selam-Evi in bringing hope, care, and change to those who need it most.
        </p>
        <button
          onClick={() => setIsModalVisible(true)}
className="border border-white text-white px-6 py-2 cursor-pointer rounded-bl-[15px]" >
          Donate Now
        </button>
      </div>

      {/* Donation Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default Together;
