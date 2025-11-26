import React from 'react'

const Hero = () => {
  return (
    <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
        style={{ backgroundImage: "url('/campaigns.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

<div className="relative w-full h-screen flex flex-col items-center justify-center px-4 pt-[100px]">
  <h1 className="text-4xl md:text-6xl font- leading-tight text-white text-center">
    <span className='text-red-600'>Events & Campaigns </span> That Drive Change
  </h1>
  <p className="mt-4 text-lg md:text-xl font-light font-nunito text-gray-200 tracking-wide  text-center">
    Explore how Selam-Evi’s initiatives reach those who need help the most. one project at a time.
  </p>
</div>
      </div>
  )
}

export default Hero