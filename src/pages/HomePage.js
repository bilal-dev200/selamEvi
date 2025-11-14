"use client";
import DonationFormModal from "@/app/components/home/components/Form";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [donationType, setDonationType] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("");
  const [amount, setAmount] = useState("");

  const [services, setServices] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [serviceRes, programRes] = await Promise.all([
          fetch("https://salam-evi.plantinart.com/services/list"),
          fetch("https://salam-evi.plantinart.com/programs/list"),
        ]);
        const serviceData = await serviceRes.json();
        const programData = await programRes.json();
        setServices(serviceData.data || []);
        setPrograms(programData.data || []);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[120vh] bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20 "
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
<div className="relative -mt-16 md:-mt-15 z-20 flex justify-center px-3 sm:px-6 text-black">
  <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] overflow-hidden rounded-lg border border-red-600 bg-white p-6">
    <div className="bg-[#f3f6f9] p-2 flex flex-wrap gap-2 items-center justify-start w-auto">
      {/* Service Dropdown */}
      <select
        value={selectedService}
        onChange={(e) => {
          setSelectedService(e.target.value);
          setSelectedProgram("");
        }}
        disabled={!!selectedProgram || loading}
        className={`bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto ${
          selectedProgram ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <option value="">Services</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.title}
          </option>
        ))}
      </select>

      {/* Program Dropdown */}
      <select
        value={selectedProgram}
        onChange={(e) => {
          setSelectedProgram(e.target.value);
          setSelectedService("");
        }}
        disabled={!!selectedService || loading}
        className={`bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto ${
          selectedService ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <option value="">Program</option>
        {programs.map((program) => (
          <option key={program.id} value={program.id}>
            {program.title}
          </option>
        ))}
      </select>

      {/* Donation Frequency */}
      <select
        value={donationFrequency}
        onChange={(e) => setDonationFrequency(e.target.value)}
        className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto"
      >
        <option value="">Single Payment</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      {/* Amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter your own amount"
        className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto"
      />

      {/* Donation Type */}
      <select
        value={donationType}
        onChange={(e) => setDonationType(e.target.value)}
        className="bg-[#f3f6f9] border border-gray-300 rounded-md p-2 w-full md:w-auto"
      >
        <option value="">Sadaqah</option>
        <option value="Zakat">Zakat</option>
        <option value="Donation">Donation</option>
        <option value="Campaign-specific">Campaign Specific</option>
      </select>
    </div>

    {/* Quick Donate Button */}
    <div className="mt-4">
      <button
        onClick={() => setIsModalVisible(true)}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-bl-[70px]"
      >
        Quick Donate
      </button>
    </div>
  </div>
</div>

      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        selectedService={selectedService}
        selectedProgram={selectedProgram}
        donationType={donationType}
        donationFrequency={donationFrequency}
        amount={amount}
      />
    </div>
  );
}
