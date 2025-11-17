"use client"
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is Selam-Evi and what does it do?",
    answer:
    "Selam-Evi is a trusted Islamic charity foundation in Türkiye dedicated to providing healthcare, education, women empowerment, and humanitarian relief programs. It supports vulnerable families and communities across Türkiye, Syria, and Gaza through sustainable welfare initiatives."
  },
  {
    question: "How can I donate to Selam-Evi programs?",
    answer:
    "You can easily donate online through our secure donation portal. Selam-Evi accepts Zakat, Sadqah, and general charity donations to support healthcare, education, orphan care, and emergency relief projects across regions in need."
  },
  {
    question: " Is my donation to Selam-Evi Zakat-eligible?",
    answer:
    "Yes, Selam-Evi ensures that all Zakat contributions are distributed according to Islamic principles. Your Zakat directly supports eligible beneficiaries, including widows, orphans, and families affected by poverty or crisis."
  },
  {
    question: " Which countries does Selam-Evi provide support to?",
    answer:
    " Selam-Evi operates from Türkiye and extends its humanitarian programs to Syria, Gaza, and other regions affected by conflict and poverty. Our mission is to bring hope and essential aid wherever it’s needed most."
  },
   {
    question: " How does Selam-Evi ensure transparency and trust in donations?",
    answer:
    " Selam-Evi follows strict accountability and transparency measures. Every donation is allocated to its intended cause, and regular updates are shared with donors to show the real impact of their contributions on communities in need."
  },
];

export default function FAQSectionService() {
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
