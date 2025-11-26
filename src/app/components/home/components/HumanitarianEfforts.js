"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useProgramStore } from "../../../store/programStore";
import DonationFormModal from "./Form";

export default function HumanitarianEfforts({
  initialCount = 8,
  showLoadMore = true,
  loadMoreStep = 8,
  showSlider = true,      // new prop
  showRaisedGoal = true,  // new prop
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const { programs, fetchPrograms, loading } = useProgramStore();
  const router = useRouter();

  // Fetch programs
  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  // Compute displayed programs
  const displayedPrograms = useMemo(() => {
    if (programs.length === 0) return [];
    const fullList = [];
    while (fullList.length < visibleCount && fullList.length < 20) {
      const sliceEnd = Math.min(programs.length, visibleCount - fullList.length);
      fullList.push(...programs.slice(0, sliceEnd));
    }
    return fullList;
  }, [programs, visibleCount]);

  const canLoadMore = displayedPrograms.length < 20;

  return (
    <div className="bg-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Our Ongoing <span className="text-red-600">Humanitarian</span> Efforts
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto w-full">
          These initiatives bring immediate relief and long-term change to those who need it most.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading programs...</p>
        ) : displayedPrograms.length === 0 ? (
          <p className="text-center text-gray-600 ">No campaigns available</p>
        ) : (
          displayedPrograms.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => router.push("/campaigns")}
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-[12px] mb-4">{item.description}</p>

                {/* Raised / Goal */}
                {showRaisedGoal && (
                  <div className="flex justify-between text-sm font-semibold text-black mb-2">
                    <span>Raised: ${item.raised}</span>
                    <span>Goal: ${item.goal}</span>
                  </div>
                )}

                {/* Slider */}
                {showSlider && (
                  <input
                    type="range"
                    min={0}
                    max={item.goal || 50}
                    value={item.raised}
                    readOnly
                    className="w-full h-2 bg-gray-200 rounded-full accent-red-600 cursor-pointer mb-4 transition-all duration-700"
                  />
                )}

                {/* Donate Now */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(item.id);
                    setIsModalVisible(true);
                  }}
                  className="w-full bg-[#D21C17] hover:bg-red-700 text-white font-semibold py-2 rounded-bl-[70px]"
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      {showLoadMore && canLoadMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + loadMoreStep, 20))}
            className="px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        selectedProgram={selectedProgram}
      />
    </div>
  );
}
