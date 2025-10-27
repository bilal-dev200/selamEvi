import React from "react";

export default function ImpactPage() {
  const stats = [
 {
      img: "/Mask1.png",
      number: "20+",
      title: "Hospitals Equipped",
      description:
        "Providing vital medical equipment and mobile health units.",
    },
    {
      img: "/Mask2.png",
      number: "10,000+",
      title: "Orphans Supported",
      description: "Ensuring care, education, and brighter futures.",
    },
    {
      img: "/Mask3.png",
      number: "50+",
      title: "Schools Assisted",
      description: "Strengthening education with resources and support.",
    },

     {
      img: "/Mask4.png",
      number: "100,000+",
      title: "Beneficiaries Reached",
      description: "Changing lives through healthcare, education, and relief.",
    },
  
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Background Section with Rounded Top Corners */}
      <div
        className="relative h-[600px] text-white text-center py-20 px-4 rounded-tl-[80px] rounded-tr-[80px] overflow-hidden"
        style={{
          backgroundImage: "url('/difference.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-5xl mt-20 mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Together, We Make a Difference
          </h1>
          <p className="text-[15px] text-red-100">
            Your support brings healthcare, education, and hope to thousands.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-45 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
        {stats.map((stat, index) => (
     <div
            key={index}
            className="bg-white shadow-lg rounded-tr-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={stat.img}
              alt={stat.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            {/* number + title ek line me */}
            <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
              <h2 className="text-[14px] font-bold text-gray-900">{stat.number}</h2>
              <h3 className="text-[12px] font-semibold text-gray-800">
                {stat.title}
              </h3>
            </div>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
