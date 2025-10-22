"use client"
import React, { useState } from 'react'
import DonationFormModal from '../components/Form';

const About = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
     <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
        style={{ backgroundImage: "url('/Group1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

<div className="relative w-full h-screen flex flex-col items-center justify-center px-4 pt-[100px]">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white text-center">
    Together, We’re Building a Better Tomorrow
  </h1>
  <p className="mt-4 text-lg md:text-xl font-light text-gray-200 tracking-wide  text-center">
    Learn about our journey, our mission, and the people we serve with compassion and care.
  </p>
</div>
      </div>
      {/* section */}

    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
           Our <span className="text-red-600"> Mission & Vision</span>
          </h2>
          <p className="text-gray-700 mb-6">
            With the help of dedicated volunteers, partners, and donors, Selam-Evi continues to build sustainable solutions that create lasting impact.
          </p>
         <div className="flex space-x-4">
  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold transition">
    Mission
  </button>
  <button className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 font-semibold transition">
    Vision
  </button>
</div>

          <p className="text-gray-700 mt-4">
            Selam-Evi is a humanitarian organization committed to uplifting communities affected by poverty, conflict, and natural disasters. We provide vital healthcare support, educational assistance, women empowerment programs, and relief aid to widows, orphans, and vulnerable families. Our work extends across Syria, Gaza, Turkey, and beyond, bringing hope and dignity where it’s needed most.
            <br/>
            With the help of dedicated volunteers, partners, and donors, Selam-Evi continues to build sustainable solutions that create lasting impact.
          </p>
          
        </div>

        {/* Right Column */}
       <div className="md:w-1/2 relative mt-8 left-[50px]">
  {/* Images Container */}
    {/* Camp Image - Back */}
    <img
      src="/camp.png"
      alt="Camp"
      className="shadow-md w-[300px] absolute left-[150px] z-10 h-[400px]"
      style={{ borderTopRightRadius: '30%' }}
    />

    {/* Ceremony Image - Front */}
    <img
      src="/ceremony.png"
      alt="Ceremony"
      className="rounded-md shadow-md w-[300px] h-[250px] relative z-20 mt-[150px]"
            style={{ borderTopLeftRadius: '30%' , border:"7px solid  white"}}

    />
  </div>

  {/* Decorative Red Bar */}
</div>

      
      
      
    </section>

    </div>
  )
}

export default About;