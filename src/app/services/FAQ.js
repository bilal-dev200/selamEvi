"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation"; // App Router ka hook
import { Plus, X } from "lucide-react";
import FaqList from "../services/FaqList";

export default function FAQ() {
  const params = useParams();
  const slug = params.slug; // URL me jo slug hai

  // Pehli FAQ hamesha open
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = FaqList[slug] || [];

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
          {faqs.length === 0 ? (
            <p className="text-gray-500">No FAQs available for this category.</p>
          ) : (
            faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg p-5 border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">
                    {index + 1}. {faq.question}
                  </span>

                  {openIndex === index ? (
                    <X className="w-5 h-5 text-gray-700 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-700 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
 