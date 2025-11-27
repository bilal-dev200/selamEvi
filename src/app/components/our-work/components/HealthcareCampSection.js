// export default function HealthcareCampSection() {
//   return (
//     <section className="bg-white flex items-center justify-center  lg:px-12 py-16">
//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">
        
//         {/* Left Background Image Section */}
//         <div className="relative text-white p-16 lg:p-10 -ml-12 ">
//           {/* Background Image */}
//           <img
//             src="/slider1.png" 
//             alt=""
//             className="absolute inset-0 w-full h-full  object-cover"
//           />

//           {/* Red Overlay */}
//           <div className="absolute inset-0 "></div>

//           {/* Text Content */}
//           <div className="relative z-10">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//              Children's Wellness Program
//             </h2>

//             <p className="text-[10px] leading-relaxed mb-6 opacity-90">
//              Selam-Evi’s Children’s Wellness Program is a trusted Islamic charity initiative in Türkiye dedicated to improving children’s health, education, and overall well-being. Through medical care, nutritional aid, and learning support, we empower vulnerable children in Türkiye, Syria, and Gaza to build brighter futures. 


//             </p>

//             <p className="text-[10px] leading-relaxed mb-8 opacity-90">
//             Donate online for Zakat or Sadqah to support child welfare and humanitarian relief programs.

//             </p>

//             <button className="border border-white text-white px-6 py-2  hover:bg-white hover:text-red-700 transition  rounded-bl-[15px]">
//               Read More
//             </button>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex justify-center lg:justify-end">
//           <img
//             src="/o-w1.png"
//             alt="Healthcare Camp"
//             className="rounded-none sm:rounded-2xl shadow-lg w-full  object-cover h-[500px] 
// "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";

export default function HealthcareCampSection() {
  return (
    <section className="bg-white flex items-center justify-center lg:px-12 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">
        
        {/* Left Background Image Section */}
        <div className="relative text-white p-16 lg:p-10 -ml-12">
          {/* Background Image */}
          <Image
            src="/slider1.png"
            alt="Children's Wellness Program"
            width={700}
            height={500}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Red Overlay */}
          <div className="absolute inset-0"></div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Children&apos;s Wellness Program
            </h2>

            <p className="text-[10px] leading-relaxed mb-6 opacity-90">
              Selam-Evi&apos;s Children&apos;s Wellness Program is a trusted Islamic charity initiative in Türkiye dedicated to improving children&apos;s health, education, and overall well-being. Through medical care, nutritional aid, and learning support, we empower vulnerable children in Türkiye, Syria, and Gaza to build brighter futures.
            </p>

            <p className="text-[10px] leading-relaxed mb-8 opacity-90">
              Donate online for Zakat or Sadqah to support child welfare and humanitarian relief programs.
            </p>

            <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-red-700 transition rounded-bl-[15px]">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/o-w1.png"
            alt="Healthcare Camp"
            width={500}
            height={500}
            className="rounded-none sm:rounded-2xl shadow-lg w-full object-cover h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
