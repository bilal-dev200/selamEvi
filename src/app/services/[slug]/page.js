"use client"; 
import React from "react";
import { useServiceStore } from "../../store/Servicestore";
import Together from "@/app/components/our-work/components/Together";
import LatestStories from "@/app/components/home/components/LatestStories";
import FAQSection from "@/app/components/home/components/FAQSection";
import Hero from "../hero";

export default function ServiceDetailPage() {
  const service = useServiceStore((state) => state.selectedService);

  if (!service)
    return (
      <div className="h-screen flex justify-center items-center text-xl text-red-600">
        Service not found — please go back.
      </div>
    );

  const baseUrl = "http://salam-evi-nestjs.vapedepablo.com/uploads/";

  const dummyBullets = [
    { title: "20+ Hospitals Equipped", text: "Supporting healthcare facilities" },
    { title: "10,000+ Orphans Helped", text: "Providing education & essentials" },
    { title: "50+ Shelters Assisted", text: "Restoring hope for families" },
    { title: "15,000+ Meals Served", text: "Feeding communities in crisis" },
  ];

  return (
    <div className="bg-[#FFFFFF] font-[Rubik,sans-serif]">
      {/* 🔹 HERO BANNER */}
      <Hero />

      {/* 🔹 DYNAMIC SECTIONS */}
      {service.details?.map((detail, index) => {
        const imageUrl =
          detail?.images?.[0]?.image_path
            ? `${baseUrl}${detail.images[0].image_path}`
            : "/efforts.jpg";

        const isRedBg = index === 1 || index === 2;
        const hasCards = index === 1 || index === 2;
        const showImage = index !== 2;

        // Force image on right for "A Child’s Journey to Learning"
        const isReverse =
          detail.title === "A Child’s Journey to Learning"
            ? false
            : index === 1 || index === 3;

        const bullets = detail.bullets?.length > 0 ? detail.bullets : dummyBullets;

        return (
          <React.Fragment key={detail.id}>
            {/* 🔸 MAIN SECTION */}
            <section
              className={`py-20 px-6 md:px-16 transition-all duration-500 ${
                isRedBg ? "bg-red-600 text-white" : "bg-white text-gray-900"
              }`}
            >
              <div
                className={`flex flex-col ${
                  showImage ? "md:flex-row" : ""
                } ${isReverse ? "md:flex-row-reverse" : ""} items-center gap-10`}
              >
                {/* LEFT TEXT */}
                <div
                  className={`w-full ${
                    showImage ? "md:w-1/2 text-left" : "text-center"
                  }`}
                >
                  <h2
                    className={`text-2xl md:text-3xl font-bold mb-4 ${
                      isRedBg ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {detail.title}
                  </h2>

                  <div
                    className={`text-base leading-relaxed mb-6 ${
                      isRedBg ? "text-white/90" : "text-gray-700"
                    }`}
                    dangerouslySetInnerHTML={{ __html: detail.description }}
                  />

                  {/* ✅ WHITE CARDS (always white regardless of bg) */}
                  {hasCards && (
                    <div
                      className={`${
                        index === 2
                          ? "flex flex-wrap justify-center gap-4 mt-10"
                          : "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
                      }`}
                    >
                      {bullets.map((b, i) => (
                        <div
                          key={i}
                          className="rounded-lg shadow-md p-4 border border-gray-200 bg-white text-gray-800"
                        >
                          <h4 className="font-semibold text-lg mb-1">
                            {b.title}
                          </h4>
                          <p className="text-sm text-gray-600">{b.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ✅ IMAGE */}
                {showImage && (
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={imageUrl}
                      alt={detail.title}
                      className="rounded-xl  w-full object-cover max-h-[400px]"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* 🧱 WHITE GAP BETWEEN TWO RED SECTIONS */}
            {index === 1 && <div className="bg-white h-20 w-full"></div>}
          </React.Fragment>
        );
      })}

      {/* 🔹 STATIC SECTIONS */}
      <div className="bg-gray-50">
        <Together />
      </div>
      <LatestStories />
      <FAQSection />
    </div>
  );
}
