"use client";
import { useState } from "react";

export default function ZakatCalculatorSection() {
  const [values, setValues] = useState({
    gold: "",
    money: "",
    savings: "",
    investment: "",
    liabilities: "",
    businessAssets: "",
    owed: "",
    outgoings: "",
  });

  // --- Utility functions for formatting and parsing ---
  const formatCurrency = (value) => {
    if (!value) return "";
    const numeric = value.replace(/[^\d.]/g, ""); // remove non-numeric
    if (numeric === "") return "";
    return "$" + Number(numeric).toLocaleString();
  };

  const parseNumber = (value) => {
    const numeric = value.replace(/[^\d.]/g, "");
    return parseFloat(numeric) || 0;
  };

  // --- Input handler with formatting ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: formatCurrency(value),
    }));
  };

  // --- Calculations ---
  const totalAssets =
    parseNumber(values.gold) +
    parseNumber(values.money) +
    parseNumber(values.savings) +
    parseNumber(values.investment) +
    parseNumber(values.businessAssets) +
    parseNumber(values.owed);

  const totalLiabilities =
    parseNumber(values.liabilities) + parseNumber(values.outgoings);

  const netWorth = totalAssets - totalLiabilities;
  const zakatPayable = netWorth > 0 ? netWorth * 0.025 : 0;

  // --- UI (unchanged) ---
  return (
    <section className="py-26 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
         Don’t Guess, Use Our Zakat Calculator for Accurate Giving

        </h2>
        <p className="text-[#000000] mt-2 text-xs ">
          We’ve answered some of the most common questions to make your experience smooth and stress-free.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 text-black">
        {/* Left Side - Info */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow p-6">
  <ul className="space-y-4 list-none">
    {[
      "Easily calculate your Zakat on gold, silver, cash, savings, and investments. Our online calculator follows authentic Islamic guidelines to ensure accurate and fair results every time.",
      "Our Zakat calculator is designed according to Shariah rules, ensuring your calculation meets Islamic obligations for wealth purification and helping you fulfill your duty with confidence.",
      "From gold and silver to bank balances, business assets, and savings, the calculator covers every eligible category, helping you find your total payable Zakat with ease.",
      "No complex steps or confusion. Enter your assets, and the calculator instantly determines your due Zakat amount, saving time and ensuring complete accuracy.",
      "The calculator uses the latest Nisab rates based on gold and silver market values, helping you stay current and calculate your Zakat according to today’s standards.",
      "Know exactly what you owe before donating. With accurate calculation and transparent results, you can fulfill your Zakat confidently and contribute where it matters most.",
    ].map((text, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className=" text-red-600 rounded-full text-xl">● </span>
        <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
      </li>
    ))}
  </ul>
</div>


        {/* Right Side - Calculator */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
          <div className="bg-red-600 text-white py-5 px-6 text-2xl  text-center">
            Zakat Calculator
          </div>

          <div className="p-6 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[#D21C17] text-lg font-bold block">
                  Gold and Silver
                </label>
                <p className="text-black text-xs mb-1">
                  Value of Gold & Silver
                </p>
                <input
                  type="text"
                  name="gold"
                  value={values.gold}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="text-[#D21C17] text-lg font-bold">
                  Money
                </label>
                <p className="text-black text-xs mb-1">
                  Cash at Home & Bank Accounts
                </p>
                <input
                  type="text"
                  name="money"
                  value={values.money}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black text-sm font-semibold">
                  Other Savings
                </label>
                <input
                  type="text"
                  name="savings"
                  value={values.savings}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-black text-sm font-semibold">
                  Investment & Share Values
                </label>
                <input
                  type="text"
                  name="investment"
                  value={values.investment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[#D21C17] text-lg font-bold">
                  Short Term Liabilities
                </label>
                <p className="text-black text-xs mb-1">Money You Owe</p>
                <input
                  type="text"
                  name="liabilities"
                  value={values.liabilities}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-[#D21C17] text-lg font-bold">
                  Business Assets
                </label>
                <p className="text-black text-xs mb-1">Stock Value</p>
                <input
                  type="text"
                  name="businessAssets"
                  value={values.businessAssets}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black text-sm font-semibold">
                  Money Owed to You
                </label>
                <input
                  type="text"
                  name="owed"
                  value={values.owed}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-black text-sm font-semibold">
                  Other Outgoings Due
                </label>
                <input
                  type="text"
                  name="outgoings"
                  value={values.outgoings}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Total */}
            <div className="pt-4">
              <label className="text-black font-semibold text-sm mb-1 block">
                Total Zakat
              </label>
              <input
                type="text"
                value={`$${zakatPayable.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
