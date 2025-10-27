"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "How are my donations used?",
    answer:
      "Your donations directly fund our programs such as healthcare support, orphan and widow assistance, education, and emergency relief. We ensure transparency and accountability in every project.",
  },
  {
    question: "Can I donate to a specific cause?",
    answer:
      "Yes! You can choose to donate to specific causes such as education, healthcare, or emergency relief when making your contribution.",
  },
  {
    question: "Do you provide updates on ongoing projects?",
    answer:
      "Absolutely! We keep our donors informed with regular updates, reports, and impact stories so you can see the difference your contribution makes.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, donations are tax-deductible to the extent allowed by law. You’ll receive a receipt for your records after donating.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Got Questions?
            <br />
       We’ve Got Answers!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            Find answers to the most common questions about donating, supporting,
            and our programs. If you need more help, feel free to reach out!
          </p>
        </div>

        {/* Right Side — FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg p-5 transition-all duration-300 border ${
                openIndex === index
                  ? "bg-[#E7000B]/10 border-[#E7000B]/40 shadow-sm"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-[#E7000B] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700 flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
