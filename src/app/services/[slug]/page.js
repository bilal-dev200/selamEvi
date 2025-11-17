"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useServiceStore } from "../../store/Servicestore";
import Hero from "../hero";
import Together from "@/app/components/our-work/components/Together";
import LatestStories from "@/app/components/home/components/LatestStories";
import FAQSection from "@/app/components/home/components/FAQSection";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { selectedService } = useServiceStore();
  const [service, setService] = useState(selectedService);
  const [loading, setLoading] = useState(true);

  const baseUrl = "http://salam-evi-nestjs.vapedepablo.com/uploads/";

  useEffect(() => {
    const fetchService = async () => {
      try {
        if (!service?.details) {
          const res = await fetch(
            `http://salam-evi-nestjs.vapedepablo.com/${slug}`
          );
          const data = await res.json();
          setService(data.data);
        }
      } catch (err) {
        console.error("Error fetching service:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-lg text-gray-500">
        Loading service...
      </div>
    );

  if (!service)
    return (
      <div className="h-screen flex justify-center items-center text-xl text-red-600">
        Service not found
      </div>
    );

  return (
    <div className="bg-white font-[Rubik,sans-serif] space-y-40">
      <Hero />

      {/* Dynamic Sections */}
      {Array.isArray(service.details) && service.details.length > 0 ? (
        service.details.map((detail, index) => {
          const imageUrl =
            detail?.images?.[0]?.image_path &&
            `${baseUrl}${detail.images[0].image_path}`;

          const title = detail.title?.toLowerCase() || "";

          const isEventsSection = title.includes("events & campaigns");
          const isSupportSection = title.includes("support learning");
          const isTogetherSection =
            title.includes("together") || title.includes("difference");
          const isChildJourneySection =
            title.includes("child’s journey") ||
            title.includes("childs journey");

          // ================================
          // 1️⃣ Events & Campaigns Section
          // ================================
          if (isEventsSection) {
            return (
              <section key={index} className="py-20 px-6 md:px-16 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold mb-6 text-black leading-snug">
                      {detail.title}
                    </h2>

                    {detail.description && (
                      <div
                        className="text-gray-700 leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                    )}

                    {Array.isArray(detail.bullets) && (
                      <ul className="space-y-3">
                        {detail.bullets.map((b) => (
                          <li key={b.id} className="flex gap-3 text-base">
                            {b.icon ? (
                              <img
                                src={`${baseUrl}${b.icon}`}
                                className="w-6 h-6 object-contain mt-1"
                              />
                            ) : (
                              <span className="text-red-600 text-lg font-bold">
                                •
                              </span>
                            )}
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {imageUrl && (
                    <div className="w-full md:w-1/2">
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // ================================
          // 2️⃣ Support Learning Section
          // ================================
          if (isSupportSection) {
  return (
    <section
      key={index}
      className="bg-white flex items-center justify-center px-4 lg:px-12 py-20 w-full"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">

        {/* LEFT IMAGE (BIGGER HEIGHT LIKE YOUR REFERENCE) */}
        {imageUrl && (
          <div className="relative w-full h-[480px] lg:h-[600px] rounded-3xl overflow-hidden ml-0">
            <img
              src={imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />

            {/* DARK OVERLAY SAME LIKE HEALTHCARE CAMP */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}

        {/* RIGHT RED CONTENT AREA */}
        <div className="w-full bg-[#b42e2a] text-white px-10 py-14 rounded-3xl lg:rounded-r-3xl lg:-ml-6 mt-10 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {detail.title}
          </h2>

          {detail.description && (
            <div
              className="text-white/90 text-sm leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />
          )}

          {/* BULLETS */}
          {Array.isArray(detail.bullets) && (
            <ul className="space-y-3 mt-4">
              {detail.bullets.map((b) => (
                <li key={b.id} className="flex gap-3">
                  {b.icon ? (
                    <img
                      src={`${baseUrl}${b.icon}`}
                      className="w-6 h-6 mt-1"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">•</span>
                  )}
                  <span className="text-sm">{b.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}


          // ================================
          // 3️⃣ Together We Make a Difference (FIXED)
          // ================================
if (isTogetherSection) {
  return (
    <section
      key={index}
      className="relative text-white px-4 pt-40 pb-40 bg-cover bg-center rounded-tr-[80px]"
      style={{
        backgroundImage: "url('/difference.png')", 
        height:"550px"// same as ImpactPage
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 rounded-tr-[80px]"></div>

      {/* TITLE + DESCRIPTION */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-widest">
          {detail.title}
        </h2>

        {detail.description && (
          <div
            className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
        )}
      </div>

      {/* CARDS — same layout as ImpactPage */}
      <div
        className="
          relative bottom-0 left-1/2 -translate-x-1/2
          w-full max-w-6xl px-4 pb-10
          flex flex-wrap justify-center gap-4 z-20 mt-28
        "
      >
        {detail.bullets?.map((b, index) => (
          <div
            key={b.id || index}
            className="
              bg-white shadow-lg rounded-tr-3xl
              p-4 text-center
              min-w-[200px] max-w-[250px]
              transition-transform duration-300
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {b.icon && (
              <img
                src={`${baseUrl}${b.icon}`}
                className="w-12 h-12 mx-auto mb-2 object-contain"
                alt=""
              />
            )}

            <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


          // ================================
          // 4️⃣ Child’s Journey Section
          // ================================
          if (isChildJourneySection) {
            return (
              <section key={index} className="py-20 px-6 md:px-16 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold mb-6">{detail.title}</h2>

                    {detail.description && (
                      <div
                        className="text-gray-700 mb-6"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                    )}

                    {Array.isArray(detail.bullets) && (
                      <ul className="space-y-3">
                        {detail.bullets.map((b) => (
                          <li key={b.id} className="flex gap-3">
                            {b.icon ? (
                              <img
                                src={`${baseUrl}${b.icon}`}
                                className="w-6 h-6 mt-1"
                              />
                            ) : (
                              <span className="text-red-600 text-lg font-bold">
                                •
                              </span>
                            )}
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {imageUrl && (
                    <div className="w-full md:w-1/2">
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // ================================
          // 5️⃣ Default Section
          // ================================
          return (
            <section key={index} className="py-20 px-6 md:px-16 bg-white">
              <h2 className="text-3xl font-bold mb-4">{detail.title}</h2>
              {detail.description && (
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                />
              )}
            </section>
          );
        })
      ) : (
        <div className="text-center text-gray-500 py-20">
          No service details available
        </div>
      )}

      <Together />
      <LatestStories />
      <FAQSection />
    </div>
  );
}
