"use client";
import React, { useState } from "react";
import DonationFormModal from "../app/components/home/components/Form";

export default function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[120vh] bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-red-500 mt-[200px]">
            Empowering <span className="text-white">Lives.</span>
            <br />
            <span className="text-white"> Healing Communities.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-gray-200 tracking-wide max-w-[670px]">
            Selam-Evi is dedicated to healthcare, education, women empowerment,
            and relief programs across Syria, Gaza, Turkey and beyond.
          </p>

          <button
            onClick={() => setIsModalVisible(true)}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Quick Donate Box */}
      <div className="relative -mt-16 md:-mt-15 z-20 flex justify-center">
        <div className="md:w-[80%] overflow-hidden rounded-lg border border-red-200 p-3 bg-white">
          <div className="bg-[#f3f6f9] p-3 flex flex-col md:flex-row gap-4 items-center justify-between">
            <select className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto">
              <option>Services</option>
              <option>Health</option>
              <option>Education</option>
              <option>Food Support</option>
            </select>

            <select className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto">
              <option>Program</option>
              <option>Ramadan</option>
              <option>Winter Relief</option>
              <option>Qurbani</option>
            </select>

            <select className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto">
              <option>Single Payment</option>
              <option>Monthly</option>
            </select>

            <input
              type="number"
              placeholder="Enter your own amount"
              className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto"
            />

            <select className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto ">
              <option>Sadaqah</option>
              <option>Zakat</option>
              <option>Donation</option>
            </select>
          </div>

          <button
            onClick={() => setIsModalVisible(true)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-bl-[70px]"
          >
            Quick Donate
          </button>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
}
