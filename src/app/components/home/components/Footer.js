"use client";
import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
   <footer className="bg-[#b10000] text-white relative">
  {/* Add padding-bottom to show red at bottom */}
  <div className="pb-12">

    {/* White inner container slightly narrower to reveal red on sides */}
    <div className="max-w-330 mx-auto bg-white px-5 -mt-12 pt-12 pb-10 shadow-lg">
      
      {/* Responsive Grid + Mobile Center Alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center sm:text-left">

        {/* Logo & Social */}
        <div className="flex flex-col items-center sm:items-start">
          <img 
            src="/footer.png" 
            alt="Selam Evi Yardım Derneği" 
            className="w-48 h-auto mb-6" 
          />
          <div className="flex justify-center sm:justify-start space-x-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <>
              <a
                key={i}
                href="#"
                aria-label={`Social ${i}`}
                className="text-gray-600 hover:text-[#b10000] transition-colors duration-200"
                >
                <Icon className="w-6 h-6" />
              </a>
              <span className={`${i === 3 ? "" : "border-l border-black"}`}/>
            </>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-5 font-nunito">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base inline-block">
            {[ "Home","About Us","Campaigns","Services","Contact Us","Donation"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#b10000] transition-colors block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-5 font-nunito">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base inline-block">
            {[
              "Emergency Relief",
              "Food Distribution",
              "Medical Assistance",
              "Education Support",
              "Clean Water Projects",
              "Shelter & Housing",
            ].map((service) => (
              <li key={service}>
                <Link
                  href={`/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                  className="hover:text-[#b10000] transition-colors block"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-5 font-nunito">
            Contact Information
          </h3>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base mx-auto sm:mx-0 max-w-xs">
            <li className="flex flex-col items-center sm:justify-between sm:flex-row gap-1 sm:gap-10">
              <span className="font-semibold text-gray-800">Address:</span>
              <span>123 , London, UK</span>
            </li>
            <li className="flex flex-col items-center sm:justify-between sm:flex-row gap-1 sm:gap-10">
              <span className="font-semibold text-gray-800">Phone:</span>
              <span>+44 1478 8901</span>
            </li>
            <li className="flex flex-col items-center sm:justify-between sm:flex-row gap-1 sm:gap-10">
              <span className="font-semibold text-gray-800">Email:</span>
              <span>info@selamevi.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 mt-12 pt-6">
        <div className="flex flex-col md:flex-row justify-center sm:justify-between items-center text-xs text-gray-500 gap-4 text-center">
          <p>© 2025 BAITUSSALAM USA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#b10000] transition">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline text-gray-400">|</span>
            <Link href="/privacy" className="hover:text-[#b10000] transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</footer>


  );
}