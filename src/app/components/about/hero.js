import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white px-8 md:px-20"
      style={{ backgroundImage: "url('/Group2.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 pt-[100px]">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white text-center">
         Together, <span className='text-red-600'> We’re Building </span> a Better Tomorrow  
        </h1>
        <p className="mt-4 text-base font-light text-gray-200 tracking-wide  text-center font-nunito">
          Selam-Evi is a non-profit organization dedicated to healthcare, education, empowerment, orphan care, Qurbani aid, and earthquake relief.
        </p>

      </div>
    </div>
  )
}

export default Hero