import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    // 👇 Red only visible on sides & bottom
    <footer className="bg-[#b10000] text-gray-800 pb-9 ">
      {/* 👇 White box starts from the top (no red above) */}
      <div className="bg-white  mx-4 md:mx-10 lg:mx-10 pt-12 pb-6 shadow-sm -mt-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          
          {/* Logo + Social Icons */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/footer.png"
              alt="Selam Evi Yardım Derneği"
              className="w-40 object-contain"
            />
            <div className="flex space-x-4 mt-2">
              <a  className="text-gray-700 hover:text-[#b10000]">
                <Facebook className="w-5 h-5" />
              </a>
              <a  className="text-gray-700 hover:text-[#b10000]">
                <Instagram className="w-5 h-5" />
              </a>
              <a  className="text-gray-700 hover:text-[#b10000]">
                <Youtube className="w-5 h-5" />
              </a>
              <a  className="text-gray-700 hover:text-[#b10000]">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a  className="hover:text-[#b10000] cursor-pointer">Home</a></li>
              <li><a  className="hover:text-[#b10000] cursor-pointer">About us</a></li>
              <li><a  className="hover:text-[#b10000] cursor-pointer">Events & Campaigns</a></li>
              <li><a  className="hover:text-[#b10000] cursor-pointer">Our Work</a></li>
              <li><a  className="hover:text-[#b10000] cursor-pointer">Contact us</a></li>
              <li><a  className="hover:text-[#b10000] cursor-pointer">Donation</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Ijtama-e-Qurbani</li>
              <li>Educational support</li>
              <li>Healthcare & Hospitals</li>
              <li>Earthquake Relief Initiatives</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
            <ul className="text-sm space-y-2">
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
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p className="mb-2 md:mb-0">Copyright 2025 © BAITUSSALAM USA</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
