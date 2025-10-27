import React from 'react'

const Section2 = () => {
  return (
<section className="relative w-full flex justify-center items-center px-6 py-16 bg-white overflow-hidden">
  <div className="relative w-[90%] md:w-[80%]">
    {/* Image Box */}
    <div className="relative">
      <img
        src="/help.png"
        alt="Selam-Evi"
        className="w-[70%] h-[400px] object-cover rounded-xl shadow-lg z-0"
      />

      {/* Transparent Red Box */}
      <div
        className="absolute top-1/2 left-[40%] transform -translate-y-1/2 
                   text-white 
                   px-10 py-8 md:px-14 md:py-10
                   w-[65%] rounded-tl-[5%] rounded-tr-[40%] rounded-br-[0%] rounded-bl-[0%]
                   shadow-2xl z-10"
        style={{
          backgroundColor: "#E7000B", // same red but 60% opacity
          backdropFilter: "blur(1px)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          How Selam-Evi Began and <br /> Where We Are Today
        </h2>

        <p className="text-sm md:text-base mb-3 leading-relaxed opacity-95">
          Selam-Evi was founded with a simple yet powerful belief: every person
          deserves access to healthcare, education, and dignity.
        </p>

        <p className="text-sm md:text-base leading-relaxed opacity-95">
          With the help of dedicated volunteers, partners, and donors, Selam-Evi
          continues. At the heart of our work are values that guide every step
          we take — compassion, dignity, and empowerment. We believe in not only
          providing immediate relief but also creating opportunities for
          long-term change, helping families rebuild their lives with strength
          and hope.
        </p>
      </div>
    </div>
  </div>
</section>





  )
}

export default Section2