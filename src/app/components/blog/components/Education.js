"use client";
import React from "react";

const stories = [
  {
    id: 1,
    title: "Bringing Healthcare to Remote Villages",
    description:
      "SolarE+ field clinics are reaching more remote hospitals to serve every patient.",
    imageSrc: "/Ijteema2.png",
  },
  {
    id: 2,
    title: "Education for Every Child",
    description:
      "Through our school support programs, hundreds of children are returning to classrooms.",
    imageSrc: "/news1.png",
  },
  {
    id: 3,
    title: "Winter Relief 2025: Warmth for Families",
    description:
      "Our volunteers distributed blankets and food to families battling harsh winters.",
    imageSrc: "/news2.png",
  },
];

export default function Bringing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="mb-12 ">
        <h2 className="text-[40px] font-bold text-gray-900 mb-2">
          Education for Every Child
        </h2>
        <p className="text-gray-600 text-[12px]">
          Explore updates, success stories, and the impact your support creates
          across communities.
        </p>
      </div>

      {/* Story Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={story.imageSrc}
                alt={story.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">{story.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{story.description}</p>
              <a className="mt-2 inline-block text-red-600 font-semibold text-sm hover:underline cursor-pointer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-bl-2xl font-semibold transition">
          Load More
        </button>
      </div>
    </div>
  );
}
