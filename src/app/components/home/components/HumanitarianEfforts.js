"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useProgramStore } from "../../../store/programStore";
import DonationFormModal from "./Form";

export default function HumanitarianEfforts({
  initialCount = 8,
  showLoadMore = true,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { programs, fetchPrograms, loading } = useProgramStore();
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const router = useRouter();

  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  const displayedPrograms = useMemo(() => {
    if (programs.length === 0) return [];
    const fullList = [];
    while (fullList.length < visibleCount) {
      fullList.push(
        ...programs.slice(
          0,
          Math.min(programs.length, visibleCount - fullList.length)
        )
      );
    }
    return fullList;
  }, [programs, visibleCount]);

  return (
    <div className="bg-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Ongoing <span className="text-red-600">Humanitarian</span> Efforts
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          These initiatives bring immediate relief and long-term change to those
          who need it most.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading programs...</p>
        ) : (
          displayedPrograms.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => router.push("/campaigns")}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[12px] mb-4">
                    {item.description}
                  </p>

                  {/* Mobile-Style Slider */}
                  <input
                    type="range"
                    min={0}
                    max={ 50}
                    value={item.raised}
                    readOnly
                    className="w-full h-2 bg-gray-200 rounded-full accent-red-600 cursor-pointer mb-4 transition-all duration-700"
                  />

                  {/* Donate Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalVisible(true);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-bl-[70px]"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Load More */}
      {showLoadMore && displayedPrograms.length < 12 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-6 py-2 bg-red-600 text-white font-semibold  hover:bg-red-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
}
