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

  // Prefill & reset logic
  useEffect(() => {
    if (open) {
      fetchServices?.();
      fetchPrograms?.();
      if (selectedService) setSelectedServiceOption(selectedService);
      if (selectedProgram) setSelectedProgramOption(selectedProgram);
      if (donationType) setDonationTypeState(donationType);
      if (donationFrequency) setDonationFrequencyState(donationFrequency);
      if (amount) setAmountState(amount);
    } else {
      setSelectedServiceOption("");
      setSelectedProgramOption("");
      setDonationTypeState("Zakat");
      setDonationFrequencyState("One-Time");
      setAmountState("");
      setUserDetails({ name: "", email: "", address: "", phone: "" });
      setPaymentOption("Credit/Debit Card");
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

  // Close modal on outside click
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
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden py-11"
          >
            <button
              onClick={onCancel}
              className="absolute top-2 right-3 text-3xl text-gray-600 hover:text-black transition"
            >
              &times;
            </button>

            <div className="bg-[#22305B] text-white py-4 px-6 text-xl font-semibold">
              Quick & Easy Donate
            </div>

            <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh] relative text-black">

              {/* Donation Frequency & Amount */}
              <div className="space-y-4">
                {/* Heading */}


                {/* Grid: Frequency buttons + Amount input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  {/* Donation Frequency */}
                  <div className="flex flex-col">
                    <label className="font-semibold text-gray-800 text-lg mb-4">
                      Select Donation Frequency
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["One-Time", "Monthly", "Yearly"].map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setDonationFrequencyState(freq)}
                          className={`px-4 py-2 rounded font-medium transition-all duration-200 ${donationFrequencyState === freq
                            ? "bg-[#BC153F] text-white shadow-md"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="flex flex-col">
                    <label htmlFor="donationAmount" className="font-semibold text-gray-800 text-lg mb-4">
                      Enter Your Own Amount
                    </label>
                    <input
                      id="donationAmount"
                      type="number"
                      placeholder="£ Amount"
                      value={amountState}
                      onChange={(e) => setAmountState(e.target.value)}
                      className="border border-gray-300 px-4 py-2 rounded w-full sm:w-48 md:w-56 focus:outline-none focus:ring-2 focus:ring-[#BC153F]"
                    />
                  </div>
                </div>


                {/* Info text */}
                <p className="text-gray-600 text-sm mt-2">
                  With just <span className="font-semibold">£25</span>, you can provide a struggling family with enough food to stay nourished.
                </p>
              </div>


              {/* Donation Type */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 text-lg">Donation Type</h3>
                <div className="flex flex-wrap gap-3">
                  {["Zakat", "Sadqah", "Donation", "Campaign-specific"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationTypeState(type)}
                      className={`px-4 py-2 rounded font-medium transition-all duration-200 ${donationTypeState === type
                        ? "bg-[#BC153F] text-white shadow-md"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-lg">Support a Service</h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${selectedProgramOption ? "opacity-50 cursor-not-allowed" : ""}`}
                    value={selectedServiceOption}
                    onChange={handleServiceChange}
                    disabled={!!selectedProgramOption}
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-lg">Support a Program</h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${selectedServiceOption ? "opacity-50 cursor-not-allowed" : ""}`}
                    value={selectedProgramOption}
                    onChange={handleProgramChange}
                    disabled={!!selectedServiceOption}
                  >
                    <option value="">Select Program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>{program.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-3">
                <h3 className="text-gray-800 font-bold text-xl">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["name", "email", "address"].map((field) => (
                    <div key={field} className="flex flex-col">
                      <label
                        htmlFor={field}
                        className="text-gray-800 font-bold mb-1"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        value={userDetails[field]}
                        onChange={(e) =>
                          setUserDetails({ ...userDetails, [field]: e.target.value })
                        }
                        className="border border-gray-300 px-4 py-2 rounded w-full sm:w-48 md:w-56 focus:outline-none focus:ring-2 focus:ring-[#BC153F]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-col sm:w-1/2">
                  <label htmlFor="phone" className="text-gray-800  font-bold mb-1">
                    Telephone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    className="border border-gray-300 px-4 py-2 rounded w-full sm:w-48 md:w-56 focus:outline-none focus:ring-2 focus:ring-[#BC153F]"
                  />
                </div>
              </div>



              {/* Payment Options */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 text-lg">Payment Options</h3>
                <div className="flex flex-wrap items-center gap-6">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentOption === option}
                        onChange={() => setPaymentOption(option)}
                        className="accent-[#BC153F] w-5 h-5"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
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
