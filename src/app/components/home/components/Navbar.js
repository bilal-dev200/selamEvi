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
    <nav className="absolute top-0 w-full text-white z-50 font-light">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:px-20">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/projectlogo.png"
            alt="Sefa Evi Logo"
            className="w-[120px] h-[120px] object-contain rounded-md"
          />
        </div>

        {/* Center Menu (Desktop: >945px) */}
        <ul className="hidden [@media(min-width:945px)]:flex items-center gap-8">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/about" className="cursor-pointer">About us</Link>
          <Link href="/services" className="cursor-pointer">Services</Link>
          <Link href="/campaigns" className="cursor-pointer">Campaigns</Link>
          <Link href="/contact" className="cursor-pointer">Contact us</Link>
          <Link href="/blog" className="cursor-pointer">Blog</Link>
        </ul>

        {/* Right Actions (Desktop: >945px) */}
        <div className="hidden [@media(min-width:945px)]:flex items-center gap-2">
          <Calculator
            className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition"
            onClick={() => router.push("/donate")}
          />
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-red-500  text-white px-6 py-3 rounded-bl-2xl  transition"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button (<=945px) */}
        <button
          className="[@media(max-width:945px)]:block hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown (<=945px) */}
      {menuOpen && (
        <div className="[@media(max-width:945px)]:block hidden bg-transparent backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link href="/" className="cursor-pointer">Home</Link>
            <Link href="/about" className="cursor-pointer">About us</Link>
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
                className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-bl-2xl font-light transition"
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
