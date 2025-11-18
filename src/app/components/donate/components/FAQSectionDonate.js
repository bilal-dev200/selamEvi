"use client"
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "How does the Zakat Calculator work?",
    answer:
      "It calculates 2.5% of your zakatable assets like cash, gold, savings, and business income using updated nisab values.",
  },
  {
    question: "How is the Nisab value updated?",
    answer:
      "Selam Evi updates nisab based on current gold and silver market rates to ensure Sharia compliance.",
  },
  {
    question: "Can I use different currencies?",
    answer:
      "Yes, you can enter your assets in any currency, and the calculator will convert them automatically.",
  },
  {
    question: "Is my financial data stored?",
    answer:
      "No, the calculator is fully private and secure — your data is not saved or shared.",
  },
  {
    question: "Can I pay my Zakat directly?",
    answer:
      "Yes, after calculating, you can donate your Zakat instantly through Selam Evi’s secure donation system.",
  },
];

export default function FAQSectionDonate() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Got Questions?
            <br />
            We’ve Got Answers!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            Everything you need to know about using our Zakat Calculator.
          </p>
        </div>

        {/* Right Side (FAQ List) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 ${
                openIndex === index ? "bg-blue-50" : "bg-blue-50/40"
              } transition`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">
                  {index + 1}. {faq.question}
                </span>

                {openIndex === index ? (
                  <X className="w-4 h-4 text-gray-700" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-700" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
