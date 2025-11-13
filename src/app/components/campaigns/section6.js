  import React from "react";
  import { Heart, Building2, Users, GraduationCap } from "lucide-react";

  const Section6 = () => {
    return (
      <div>
        {/* Background Section with Layered Backgrounds */}
        <div
          className="relative text-white text-center py-20 px-6 overflow-hidden"
       style={{
          backgroundImage: "url('/slider1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
          {/* Optional dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Together, We Make a Difference
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-red-100 mb-6 px-4">
              Join Selam-Evi in bringing hope, care, and change to those who need it most.
            </p>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

  {/* Centered Donate Button */}
  <button
    className="bg-red-700 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-md transition"
  >
    Donate Now
  </button>
</div>

        </div>
      </div>
    );
  };

  export default Section6;
