"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function StoriesSlider() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef(null);

  const stories = [
    {
      id: 1,
      title: "Ijtema-e-Qurbani 2025",
      description:
        "Qurbani: Witness how unity and love bring hope to thousands of families.",
      video: "/video1.mp4",
     
    },
    {
      id: 2,
      title: "Education for All",
      description:
        "Transforming lives through quality education and resources.",
      video: "/video2.mp4",
    },
    {
      id: 3,
      title: "Healthcare Reaches Remote Areas",
      description:
        "Mobile clinics bringing medical care to underserved communities.",
      video: "/video3.mp4",
    },
   {
      id: 4,
      title: "Healthcare Reaches Remote Areas",
      description:
        "Mobile clinics bringing medical care to underserved communities.",
      video: "/video3.mp4",
    },
     {
      id: 5,
      title: "Education for All",
      description:
        "Transforming lives through quality education and resources.",
      video: "/video2.mp4",
    },
    
  ];

  const scrollToIndex = (index) => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.offsetWidth;
      scrollContainer.current.scrollTo({
        left: index * (containerWidth * 0.6),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollRight = () => {
    if (activeIndex < stories.length - 1) scrollToIndex(activeIndex + 1);
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;
    const preventScroll = (e) => e.preventDefault();
    container.addEventListener("wheel", preventScroll, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-x-0 w-246 ml-35 mt-80 h-[300px] overflow-hidden rounded-b-3xl -z-10">
        <img
          src="/Slider.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-30">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Stories of Hope and{" "}
          <span className="text-red-600">Humanity</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-sm max-w-3xl mx-auto">
          Watch how your support transforms lives — from Qurbani drives to food
          aid, education, and community programs around the world.
        </p>
      </div>

      {/* Slider */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div
          ref={scrollContainer}
          className="flex overflow-hidden space-x-6 snap-x snap-mandatory px-4 select-none justify-center"
        >
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`relative flex-shrink-0 snap-center rounded-2xl overflow-hidden  bg-black group transition-all duration-500 ${
                activeIndex === index
                  ? "w-[70%] sm:w-[50%] md:w-[80%] scale-105 z-20"
                  : "w-[60%] sm:w-[65%] md:w-[80%] "
              }`}
            >
              {isPlaying === index ? (
                <>
                  <video
                    src={story.video}
                    controls
                    autoPlay
                    className="w-full h-96 object-cover"
                  />
                  <button
                    onClick={() => setIsPlaying(null)}
                    className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={story.thumbnail}
                    className="w-full h-96 object-cover"
                  />
                  <div
                    onClick={() => setIsPlaying(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all cursor-pointer"
                  >
                    <div className="bg-white rounded-full p-4 sm:p-6 shadow-2xl transform  transition-transform">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 fill-red-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-xl text-white mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      {story.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-red-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          disabled={activeIndex === 0}
          className="absolute left-27 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hidden sm:flex z-30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={scrollRight}
          disabled={activeIndex === stories.length - 1}
          className="absolute right-27 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hidden sm:flex z-30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
}
