"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What types of events and campaigns does Selam Evi organize?",
    answer:
      "Selam Evi hosts a variety of initiatives, including healthcare camps, Qurbani drives, food aid distributions, educational support programs, and women empowerment workshops, all designed to uplift vulnerable communities.",
  },
  {
    question: "How can I participate in Selam Evi events or campaigns?",
    answer:
      " You can get involved by volunteering, donating, or sponsoring a campaign. Visit our official campaign page to register or learn about upcoming events in your region.",
  },
  {
    question: "How does Selam Evi ensure that campaign donations reach those in need?",
    answer:
      " Every campaign is monitored, audited, and verified by Selam Evi’s field teams and local partners. We ensure your contributions are used transparently and effectively to serve the intended communities.",
  },
  {
    question: "Can I dedicate my donation to a specific campaign or event?",
    answer:
      " Yes, you can choose to support a specific initiative such as Healthcare Support, Orphan Care, or Disaster Relief when making your donation. Each campaign page provides this option",
  },
   {
    question: "How can I stay updated on Selam Evi’s events and campaign results?",
    answer:
      " You can follow Selam Evi on social media, subscribe to our newsletter, or visit our Impact page to view stories, reports, and updates on recent campaigns and their outcomes.",
  },
];

export default function CampaignsFAQ() {
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
                  ? " shadow-sm"
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
