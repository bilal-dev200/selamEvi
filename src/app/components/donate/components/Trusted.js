"use client";
import React from "react";

export default function TrustedOrganizations() {
  const logos = [
    "/Frame1.png",
    "/Frame2.png",
    "/Frame3.png",
    "/Frame4.png",
    "/Frame5.png",
  ];

  return (
    <div className="bg-white py-20 text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Trusted by Leading Organizations
      </h2>
      <p className="text-gray-500 mb-10">
        We are grateful to our partners whose generosity and trust help us reach more lives every day.
      </p>

      {/* Logos Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="scroll-container flex w-max animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        /* ✅ Ye fix hai hover par rukne ke liye */
        .scroll-container:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
