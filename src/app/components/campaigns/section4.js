"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Section4 = () => {
  const items = [
    {
      img: "/lives1.png",
      text: "Over 5,000 meals served during Ramadan 2024, bringing comfort to struggling families.",
      side: "left",
    },
    {
      img: "/lives2.png",
      text: "Rebuilt 15 classrooms after the Turkey–Syria earthquake, providing safe spaces for children.",
      side: "right",
    },
    {
      img: "/lives3.png",
      text: "Healthcare camp treated 1,200 patients in Syria, offering vital medical care and support.",
      side: "left",
    },
    {
      img: "/lives4.png",
      text: "Winter Relief distributed 5,000 blankets in Gaza to protect families from cold.",
      side: "right",
    },
  ];

  // Check window width for responsive behavior
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900">
          Looking Back at <span className="text-red-600">Lives</span> We’ve{" "}
          <span className="text-red-600">Touched</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto font-nunito">
          Each moment reflects a story of hope, compassion, and lasting change — reminding us of the lives touched and the communities transformed.
        </p>
      </div>

      {/* Desktop Layout */}
      {!isMobile && (
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 px-12 pb-28">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-[68%] rounded-xl overflow-hidden bg-white shadow-md flex flex-col">
              <img src={items[0].img} alt="Impact 1" className="w-full h-[450px] object-cover" />
              <p className="text-black text-sm sm:text-base px-4 py-3 font-semibold">{items[0].text}</p>
            </div>
            <div className="w-full sm:w-[30%] rounded-xl overflow-hidden bg-white shadow-md flex flex-col">
              <img src={items[1].img} alt="Impact 2" className="w-full h-[450px] object-cover" />
              <p className="text-black text-sm sm:text-base px-4 py-3 font-semibold">{items[1].text}</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row-reverse gap-6">
            <div className="w-full sm:w-[30%] rounded-xl overflow-hidden bg-transparent flex flex-col">
              <img src={items[2].img} alt="Impact 3" className="w-full h-[450px] object-cover" />
              <p className="text-white text-sm sm:text-base px-4 py-3 font-semibold">{items[2].text}</p>
            </div>
            <div className="w-full sm:w-[68%] rounded-xl overflow-hidden bg-transparent flex flex-col text-white">
              <img src={items[3].img} alt="Impact 4" className="w-full h-[450px] object-cover" />
              <p className="text-white text-sm sm:text-base px-4 py-3 font-semibold">{items[3].text}</p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Slider */}
      {isMobile && (
        <div className="relative z-10 max-w-full px-4 sm:px-6 pb-24">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-slide",
              nextEl: ".next-slide",
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow-md bg-white">
                  <img src={item.img} alt={`Impact ${i + 1}`} className="w-full h-64 sm:h-72 object-cover" />
                  <p className="text-black text-sm sm:text-base px-4 py-3 font-semibold">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="prev-slide bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-gray-200 transition">
              <MdKeyboardArrowLeft />
            </button>
            <button className="next-slide bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-white hover:text-red-600 transition">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* Red Footer (optional for desktop and mobile) */}
      <div className="absolute bottom-0 left-0 w-full bg-[#D21C17] py-10 flex justify-center items-center gap-4 rounded-b-[60px] z-0 h-[300px] flex ">
        <button className="hidden lg:flex bg-white text-[#D21C17] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-gray-200 transition mt-15">
          <MdKeyboardArrowLeft />
        </button>
        <button className="hidden lg:flex bg-[#D21C17] border-2 border-white text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black hover:bg-white hover:text-[#E7000B] transition mt-15">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Section4;
