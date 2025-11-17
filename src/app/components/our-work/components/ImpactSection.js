import React from "react";
import { FaHospitalAlt, FaGraduationCap, FaUsers, FaSchool } from "react-icons/fa";

const stats = [
  {
    icon: <FaHospitalAlt className="text-red-600 text-xl" />,
    title: "800K+ Healthcare Recipients",
    text: "Providing accessible healthcare across communities."
  },
  {
    icon: <FaGraduationCap className="text-red-600 text-xl" />,
    title: "2.5K+ Orphans Supported",
    text: "Nurturing orphaned children with education."
  },
  {
    icon: <FaUsers className="text-red-600 text-xl" />,
    title: "405+ Educational Institutions",
    text: "Empowering communities through education."
  },
  {
    icon: <FaSchool className="text-red-600 text-xl" />,
    title: "1.8M+ Qurbani Beneficiaries",
    text: "Delivering Qurbani meat to millions of needy people."
  },
];

const ImpactSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-14 bg-white">

      {/* LEFT SIDE IMAGE */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        <img
          src="/o-w2.png"
          alt=""
          className="w-full max-w-md md:max-w-full h-auto object-cover"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Creating Lasting Impact
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
          Every number represents a life touched and a community strengthened. With your support, Selam-Evi continues to spread hope and compassion across the world.
        </p>

        {/* Stats Section with heading + description */}
        <div className="space-y-6 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-1">{stat.icon}</div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
