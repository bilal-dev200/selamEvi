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

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const IMG_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [serviceRes, programRes] = await Promise.all([
          fetch(`${BASE_URL}/services/list`),
          fetch(`${BASE_URL}/programs/list`),
        ]);
        const serviceData = await serviceRes.json();
        const programData = await programRes.json();

        const servicesWithImages = (serviceData.data || []).map((s) => ({
          ...s,
          image: s.service_image_link ? `${IMG_BASE}/${s.service_image_link}` : "/placeholder.jpg",
        }));

        setServices(servicesWithImages);
        setPrograms(programData.data || []);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [BASE_URL, IMG_BASE]);

  const dropdownStyle = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='red' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1rem 1rem",
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[120vh] bg-cover bg-center flex flex-col justify-center text-white px-4 md:px-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl leading-tight text-red-600 mt-[200px]">
           Donate <span className="text-white"> for Better Lives </span>
          </h1>
          <p className="mt-4 text-[12px] md:text-sm font-light text-gray-200 tracking-wide max-w-[670px]">
            Selam-Evi is dedicated to healthcare, education, women empowerment,
            and relief programs across Syria, Gaza, Turkey and beyond.
          </p>
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-light transition mt-6"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Quick Donate Box */}
      <div className="relative -mt-16 z-20 flex justify-center px-3 sm:px-6 text-black">
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] overflow-hidden rounded-lg border border-red-600 bg-[#edf3ff] p-6">
          <div className="bg-[#EDF3FF] p-2 flex flex-wrap gap-2 items-center justify-start text-[16px]">
            {/* Service Dropdown */}
            <select
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value);
                setSelectedProgram("");
              }}
              disabled={!!selectedProgram || loading}
              className={`bg-[#E1E1E1] border border-gray-300 rounded-md p-2 w-full md:w-auto appearance-none pr-2 text-[16px] ${
                selectedProgram ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={dropdownStyle}
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
              className={`bg-[#E1E1E1] border border-gray-300 rounded-md p-2 w-full md:w-auto appearance-none pr-2 ${
                selectedService ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={dropdownStyle}
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
              className="bg-[#E1E1E1] border border-gray-300 rounded-md p-2 w-full md:w-auto appearance-none pr-8"
              style={dropdownStyle}
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
              placeholder="Enter your amount"
              className="bg-[#E1E1E1] border border-gray-300 rounded-md p-2 w-full md:w-auto text-[16px]"
            />

            {/* Donation Type */}
            <select
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              className="bg-[#E1E1E1] border border-gray-300 rounded-md p-2 w-full md:w-auto appearance-none pr-8"
              style={dropdownStyle}
            >
              <option value="Sadqah">Sadqah</option>
              <option value="Zakat">Zakat</option>
              <option value="Donation">Donation</option>
              <option value="Campaign-specific">Campaign Specific</option>
            </select>
          </div>

          {/* Quick Donate Button */}
          <div className="mt-4">
            <button
              onClick={() => setIsModalVisible(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-light py-5 rounded-bl-[70px]"
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
        IMG_BASE={IMG_BASE} 
      />
    </div>
  );
}
