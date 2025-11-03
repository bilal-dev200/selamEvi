"use client";
import React, { useState } from "react";
import { Modal } from "antd";

const DonationFormModal = ({ open, onCancel }) => {
  const [donationType, setDonationType] = useState("Zakat");
  const [frequency, setFrequency] = useState("One-Time");
  const [paymentMethod, setPaymentMethod] = useState("Card");

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      width={650}
      centered
      className="donation-modal"
      styles={{
        content: {
          borderRadius: "16px",
          overflow: "hidden",
        },
        body: {
          padding: "0px",
        },
      }}
    >
      <div className="bg-white rounded-2xl max-h-[85vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Header */}
        <div className="bg-[#1b2b6b] text-white text-lg md:text-xl font-semibold rounded-t-2xl px-5 py-3 sticky top-0 z-10">
          Make a Difference with Your Donation
        </div>

        {/* Body Content */}
        <div className="p-6">
          {/* Frequency */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Donation Frequency</h3>
            <div className="flex flex-wrap items-center gap-7">
              {["One-Time", "Monthly"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    frequency === freq
                      ? "bg-[#BC153F] text-white border-[#BC153F]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {freq}
                </button>
              ))}

              <input
                type="number"
                placeholder="Enter Amount"
                className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full sm:w-48"
              />
            </div>
          </div>

          {/* Donation Type */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Donation Type</h3>
            <div className="flex flex-wrap gap-6">
              {["Zakat", "Sadaqah", "General", "Campaign"].map((type) => (
                <button
                  key={type}
                  onClick={() => setDonationType(type)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    donationType === type
                      ? "bg-[#BC153F] text-white border-[#BC153F]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Service & Program */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold mb-2 text-sm">Support a Service</h3>
              <select className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm">
                <option>Select an Option</option>
                <option>Education</option>
                <option>Health</option>
                <option>Food Distribution</option>
              </select>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">Support a Program</h3>
              <select className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm">
                <option>Select an Option</option>
                <option>Water Wells</option>
                <option>Ramadan Aid</option>
                <option>Orphan Sponsorship</option>
              </select>
            </div>
          </div>

          {/* Your Details */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Your Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-sm">Payment Options</h3>
            <div className="flex flex-wrap gap-4">
              {["Card", "PayPal", "Bank Transfer"].map((method) => (
                <label key={method} className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="accent-[#BC153F]"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <div className="">
            <button className="bg-[#BC153F] hover:bg-red-700 text-white text-sm px-6 py-2 rounded-full transition duration-200">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DonationFormModal;
