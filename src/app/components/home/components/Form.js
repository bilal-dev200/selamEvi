"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServiceStore } from "@/app/store/Servicestore";
import { useProgramStore } from "@/app/store/programStore";

export default function DonationFormModal({
  open,
  onCancel,
  selectedService,
  selectedProgram,
  donationType,
  donationFrequency,
  amount,
}) {
  const [donationFrequencyState, setDonationFrequencyState] = useState(
    donationFrequency || "One-Time"
  );
  const [donationTypeState, setDonationTypeState] = useState(
    donationType || "Zakat"
  );
  const [paymentOption, setPaymentOption] = useState("Credit/Debit Card");
  const [selectedServiceOption, setSelectedServiceOption] = useState("");
  const [selectedProgramOption, setSelectedProgramOption] = useState("");
  const [amountState, setAmountState] = useState(amount || "");
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const modalRef = useRef(null);

  const services = useServiceStore((state) => state.services);
  const fetchServices = useServiceStore((state) => state.fetchServices);

  const programs = useProgramStore((state) => state.programs);
  const fetchPrograms = useProgramStore((state) => state.fetchPrograms);

  useEffect(() => {
    if (open) {
      fetchServices?.();
      fetchPrograms?.();
      if (selectedService) setSelectedServiceOption(selectedService);
      if (selectedProgram) setSelectedProgramOption(selectedProgram);
      if (donationType) setDonationTypeState(donationType);
      if (donationFrequency) setDonationFrequencyState(donationFrequency);
      if (amount) setAmountState(amount);
    }
  }, [
    open,
    selectedService,
    selectedProgram,
    donationType,
    donationFrequency,
    amount,
    fetchServices,
    fetchPrograms,
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCancel();
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onCancel]);

  const handleServiceChange = (e) => {
    const id = e.target.value;
    setSelectedServiceOption(id);
    if (id) setSelectedProgramOption("");
  };

  const handleProgramChange = (e) => {
    const id = e.target.value;
    setSelectedProgramOption(id);
    if (id) setSelectedServiceOption("");
  };

  const handleDonate = async () => {
    if (!amountState || !userDetails.name || !userDetails.email) {
      alert("Please fill all required fields.");
      return;
    }
const handleModalClose = () => {
  setIsModalVisible(false);
  // ✅ Reset after small delay to fix disable state issue
  setTimeout(() => {
    setSelectedService("");
    setSelectedProgram("");
  }, 300);
};

    const transactionId = `TX${Date.now()}`;
    const payload = {
      transaction_id: transactionId,
      status: "pending",
      amount: parseFloat(amountState),
      currency_code: "USD",
      payment_through:
        paymentOption === "Credit/Debit Card"
          ? "credit_card"
          : paymentOption === "PayPal"
          ? "paypal"
          : "bank_transfer",
      category_id: 1,
      support_program: selectedProgramOption
        ? Number(selectedProgramOption)
        : null,
      support_service: selectedServiceOption
        ? Number(selectedServiceOption)
        : null,
      name: userDetails.name,
      email: userDetails.email,
      address: userDetails.address,
      telephone: userDetails.phone,
    };

    try {
      setLoading(true);
      const res = await fetch(
        "http://salam-evi-nestjs.vapedepablo.com/transactions/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Donation submitted successfully!");
        onCancel();
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-[#001B44]/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden"
          >
            <button
              onClick={onCancel}
              className="absolute top-2 right-3 text-3xl text-gray-600 hover:text-black transition"
            >
              &times;
            </button>

            <div className="bg-[#22305B] text-white py-4 px-6 text-xl font-semibold mt-5">
              Quick & Easy Donate
            </div>

            <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh] relative text-black">
              {/* Frequency */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Select Donation Frequency
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["One-Time", "Monthly", "Yearly"].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setDonationFrequencyState(freq)}
                      className={`px-4 py-2 rounded font-medium ${
                        donationFrequencyState === freq
                          ? "bg-[#BC153F] text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Enter Your Own Amount"
                    value={amountState}
                    onChange={(e) => setAmountState(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Donation Type
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {["Zakat", "Sadqah", "Donation" , "Campaign-specific"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationTypeState(type)}
                      className={`px-4 py-2 rounded font-medium ${
                        donationTypeState === type
                          ? "bg-[#BC153F] text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Support a Service
                  </h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${
                      selectedProgramOption ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    value={selectedServiceOption}
                    onChange={handleServiceChange}
                    disabled={!!selectedProgramOption}
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Support a Program
                  </h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${
                      selectedServiceOption ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    value={selectedProgramOption}
                    onChange={handleProgramChange}
                    disabled={!!selectedServiceOption}
                  >
                    <option value="">Select Program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["name", "email", "address"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={userDetails[field]}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, [field]: e.target.value })
                      }
                      className="border border-gray-300 rounded px-4 py-2"
                    />
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Payment Options</h3>
                <div className="flex flex-wrap items-center gap-6">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentOption === option}
                        onChange={() => setPaymentOption(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleDonate}
                  disabled={loading}
                  className="bg-[#BC153F] hover:bg-[#A0122B] cursor-pointer text-white font-semibold py-3 px-8 rounded disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Donate Now"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
