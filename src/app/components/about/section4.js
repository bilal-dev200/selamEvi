  import React from "react";
  import { Heart, Building2, Users, GraduationCap } from "lucide-react";

  const Section4 = () => {
    return (
      <div>
        {/* Background Section with Layered Backgrounds */}
        <div
          className="relative text-white text-center py-20 px-6 overflow-hidden"
          style={{
            backgroundImage: "url('/together.png'), url('/difference.png')",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#E7000B",
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
              Your support brings healthcare, education, and hope to thousands.
            </p>

            <button
              className="bg-[#E7000B] text-white border border-white/40 
                px-6 sm:px-8 py-2.5 sm:py-3 font-semibold rounded-lg 
                shadow-md hover:bg-[#b80009] transition"
            >
              Vision
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Section4;
