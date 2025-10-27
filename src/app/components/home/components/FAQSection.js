"use client"
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

export default function FAQSection() {
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
            Find answers to the most common questions about donating, supporting, and our programs.
            If you need more help, feel free to reach out!
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
