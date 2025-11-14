// src/components/Navbar.js
"use client";
import React, { useState } from "react";
import { Menu, X, Calculator } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DonationFormModal from "./Form";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  return (
    <nav className="absolute top-0 w-full text-white z-50">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20 py-3">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/projectlogo.png"
            alt="Sefa Evi Logo"
            className="w-[120px] h-[120px] object-contain rounded-md"
          />
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/about" className="cursor-pointer">About</Link>
          <Link href="/services" className="cursor-pointer">Services</Link>
          <Link href="/campaigns" className="cursor-pointer">Campaigns</Link>
          <Link href="/contact" className="cursor-pointer">Contact us</Link>
          <Link href="/blog" className="cursor-pointer">Blog</Link>
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Calculator
            className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition"
            onClick={() => router.push("/donate")}
          />
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold cursor-pointer"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link href="/" className="cursor-pointer">Home</Link>
            <Link href="/about" className="cursor-pointer">About</Link>
            <Link href="/services" className="cursor-pointer">Services</Link>
            <Link href="/campaigns" className="cursor-pointer">Campaigns</Link>
            <Link href="/contact" className="cursor-pointer">Contact us</Link>
            <Link href="/blog" className="cursor-pointer">Blog</Link>

            <div className="flex items-center gap-2">
              <Calculator
                className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition"
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/donate");
                }}
              />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalVisible(true);
                }}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold cursor-pointer"
              >
                Donate Now
              </button>
            </div>
          </ul>
        </div>
      )}

      {/* Donation Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </nav>
  );
}
