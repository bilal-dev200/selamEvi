// src/components/Navbar.js
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DonationFormModal from "../components/Form"; // ✅ import your form modal component
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // ✅ added this

  return (
    <nav className="absolute top-0 w-full text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/projectlogo.png"
            alt="Sefa Evi Logo"
            className="w-[140px] h-[132.62px] object-contain rounded-md ml-8"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="#" className="cursor-pointer">Our Work</Link>
          <Link href="/campaigns"> Campaigns</Link>
          <Link href="/contact">Contact us</Link>

          <li className="cursor-pointer">Blog</li>
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 ml-20 rounded-md font-semibold cursor-pointer"
          >
            Donate Now
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Our Work</li>
            <li className="cursor-pointer">Events & Campaigns</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Blog</li>
            <button
              onClick={() => {
                setMenuOpen(false);
                setIsModalVisible(true);
              }}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold"
            >
              Donate Now
            </button>
          </ul>
        </div>
      )}

      {/* ✅ Single Modal (used for both desktop + mobile) */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </nav>
  );
}
