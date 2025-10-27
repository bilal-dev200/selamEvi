import React from 'react'

const Hero = () => {
  return (
    <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
        style={{ backgroundImage: "url('/contactbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

<div className="relative w-full h-screen flex flex-col items-center justify-center px-4 pt-[100px]">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white text-center">
    Contact 
  </h1>
  <p className="mt-4 text-lg md:text-xl font-light text-gray-200 tracking-wide  text-center">
    Selam-Evi is dedicated to healthcare, education, women empowerment, 
  </p>
</div>
      </div>
  )
}

export default Hero