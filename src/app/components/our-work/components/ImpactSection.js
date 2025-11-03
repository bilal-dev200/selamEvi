import React from "react";
import { FaHospitalAlt, FaGraduationCap, FaUsers, FaSchool } from "react-icons/fa";

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

        {/* Stats Section */}
        <div className="space-y-6 mt-10">
          <div className="flex items-center space-x-3">
            <FaHospitalAlt className="text-red-600 text-xl" />
            <span className="text-gray-800 font-medium text-sm sm:text-base">
              50+ Healthcare Camps Organized
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaGraduationCap className="text-red-600 text-xl" />
            <span className="text-gray-800 font-medium text-sm sm:text-base">
              5,000+ Children Educated
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaUsers className="text-red-600 text-xl" />
            <span className="text-gray-800 font-medium text-sm sm:text-base">
              10,000+ Families Helped
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaSchool className="text-red-600 text-xl" />
            <span className="text-gray-800 font-medium text-sm sm:text-base">
              20+ Schools Supported
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
