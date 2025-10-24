import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#b10000] text-gray-800 pb-10">
      {/* White Inner Section */}
      <div className="bg-white mx-3 sm:mx-6 md:mx-10 lg:mx-16 pt-12 pb-6 shadow-sm -mt-6 rounded-t-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + Social Icons */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/logo.png"
              alt="Selam Evi Yardım Derneği"
              className="w-36 sm:w-40 object-contain"
            />
            <div className="flex space-x-4 mt-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-700 hover:text-[#b10000] transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-base">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About us",
                "Events & Campaigns",
                "Our Work",
                "Contact us",
                "Donation",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#b10000] cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-base">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Ijtama-e-Qurbani</li>
              <li>Educational Support</li>
              <li>Healthcare & Hospitals</li>
              <li>Earthquake Relief Initiatives</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-base">
              Contact Information
            </h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>
                <span className="font-medium text-gray-800">Address:</span>{" "}
                Abc Road 123 Street
              </li>
              <li>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                +44 1478-8901
              </li>
              <li>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                info@selamevi.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t mt-10 pt-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 text-center md:text-left">
            <p className="mb-2 md:mb-0">
              Copyright © 2025 BAITUSSALAM USA. All rights reserved.
            </p>
            <p className="space-x-1">
              <a href="#" className="hover:text-[#b10000]">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#b10000]">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
