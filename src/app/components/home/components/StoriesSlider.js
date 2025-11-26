"use client";
import React, { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function StoriesSlider() {
  const [isPlaying, setIsPlaying] = useState(null);

  const stories = [
    {
      id: 1,
      title: "Ijtema-e-Qurbani 2025",
      description: "Witness how unity brings hope to thousands of families.",
      video: "/video1.mp4",
      thumbnail: "/efforts1.png",
    },
    {
      id: 2,
      title: "Education for All",
      description: "Transforming lives through quality education.",
      video: "/video2.mp4",
      thumbnail: "/Serve2.png",
    },
    {
      id: 3,
      title: "Healthcare Support",
      description: "Mobile clinics bringing medical care.",
      video: "/video3.mp4",
      thumbnail: "/Serve1.png",
    },
  ];

  return (
    <section className="relative py-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center">
        Stories of Hope and<span className="text-red-600"> Humanity</span>
      </h2>

      {/* 🔥 Added More Gap Below the Subheading (your request #2) */}
      <p className="text-gray-600 mt-3 font-nunito max-w-2xl mx-auto text-center mb-20">
        Discover how your generosity creates change through Qurbani efforts, food relief, education, and worldwide community programs.
      </p>

      {/* Background Image */}
      <div className="absolute inset-0 top-40 w-[95%] mx-auto h-[95vh] rounded-3xl overflow-hidden pt-22">
        <img
          src="/slider1.png"
          className="w-full h-full object-fill"
          alt="bg"
        />
      </div>

      {/* Slider Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-[80vh] -mt-16">

        {/* Arrows */}
        <div className="swiper-button-prev custom-arrow-left !left-3">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <ChevronLeft className="text-red-600 w-6 h-6" />
          </div>
        </div>

        <div className="swiper-button-next custom-arrow-right !right-3">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <ChevronRight className="text-red-600 w-6 h-6" />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="rounded-3xl"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              
              {/* 🔥 Increased the height of each video (your request #1) */}
              <div className="w-full h-[420px] md:h-[500px] relative rounded-3xl overflow-hidden">

                {isPlaying === story.id ? (
                  <video
                    src={story.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={story.thumbnail}
                    className="w-full h-full object-cover object-center"
                    alt={story.title}
                  />
                )}

                {/* Play Button */}
                {isPlaying !== story.id && (
                  <button
                    onClick={() => setIsPlaying(story.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-2xl">
                      <Play className="text-red-600 w-10 h-10" />
                    </div>
                  </button>
                )}

                {/* Close Button */}
                {isPlaying === story.id && (
                  <button
                    onClick={() => setIsPlaying(null)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                  >
                    <X className="w-6 h-6 text-red-600" />
                  </button>
                )}
              </div>

              {/* Text Content */}
              <div className="mt-6 px-2 ">
                <h3 className="text-2xl font-semibold">{story.title}</h3>
                <p className="text-gray-600 max-w-xl  mt-2">
                  {story.description}
                </p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
