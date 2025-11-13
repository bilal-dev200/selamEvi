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
            // ✅ Safe conversion from string to number
            // const raised = item.total_transaction_amount
            //   ? Number(String(item.total_transaction_amount).replace(/[^0-9.-]+/g, ""))
            //   : 0;
            // const raised = item.total_transaction_amount
            //   ? item.total_transaction_amount
            //   : 0;

            // const goal = item.required_total_amount; // avoid divide by zero
            // console.log(raised, goal);
            console.log("item", item);


            const progressPercent = Math.min((item.raised / item.goal) * 100, 100);

            return (
              <div
                key={`${item.id}-${index}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => router.push("/campaigns")}
              >
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

                  {/* Progress Info */}
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>
                      Raised: <span className="text-gray-900">${item.raised}</span>
                    </span>
                    <span>
                      Goal: <span className="text-gray-900">${item.goal}</span>
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative w-full bg-gray-200 h-4 rounded-full mb-4">
                    <div
                      className="bg-red-600 h-4 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold">
                      {Math.round(progressPercent)}%
                    </span>
                  </div>

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
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-600 transition"
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
