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
      {/* Background Image Behind Slider */}
      <div className="absolute inset-0 top-24 w-[95%] mx-auto h-[400px] rounded-3xl overflow-hidden mt-12">
        <img 
          src="/slider1.png"
          className="w-full h-full object-fill"
          alt="bg"
        />
      </div>

      {/* Slider Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        
        {/* Custom Arrows (white bg + red icon) */}
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
          slidesPerView={1.2}
          centeredSlides
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="py-12"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={story.id}>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full bg-black">

                {isPlaying === index ? (
                  <>
                    {/* VIDEO TOP SE START HOGA */}
                    <video
                      src={story.video}
                      autoPlay
                      controls
                      className="w-full h-[400px] object-cover object-top"
                    />
                    <button
                      onClick={() => setIsPlaying(null)}
                      className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
                    >
                      <X className="text-white" />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={story.thumbnail}
                      className="w-full h-[400px] object-contain object-cover"
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* CENTER Play Button */}
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setIsPlaying(index)}
                    >
                      <div className="bg-white p-5 rounded-full shadow-xl">
                        <Play className="text-red-600 w-10 h-10" />
                      </div>
                    </div>

                    {/* Text bottom */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                      <p className="text-sm text-gray-300">{story.description}</p>
                    </div>
                  </>
                )}

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
