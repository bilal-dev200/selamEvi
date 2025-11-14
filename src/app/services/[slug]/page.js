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
    <div className="bg-white font-[Rubik,sans-serif]">
      <Hero />

      {/* Dynamic Sections */}
      {Array.isArray(service.details) && service.details.length > 0 ? (
        service.details.map((detail, index) => {
          const imageUrl =
            detail?.images?.[0]?.image_path &&
            `${baseUrl}${detail.images[0].image_path}`;

          const isEventsSection = detail.title?.toLowerCase().includes("events & campaigns");
          const isSupportSection = detail.title?.toLowerCase().includes("support learning");
          const isTogetherSection =
            detail.title?.toLowerCase().includes("together") ||
            detail.title?.toLowerCase().includes("difference");
          const isChildJourneySection =
            detail.title?.toLowerCase().includes("child’s journey") ||
            detail.title?.toLowerCase().includes("childs journey");

          // ===== Events & Campaigns Section =====
          if (isEventsSection) {
            return (
              <section key={detail.id || index} className="py-20 px-6 md:px-16 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold mb-6 leading-snug text-black tracking-wide">
                      {detail.title}
                    </h2>
                    {detail.description && (
                      <div
                        className="text-gray-700 text-base leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                    )}
                    {Array.isArray(detail.bullets) && detail.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {detail.bullets.map(b => (
                          <li key={b.id} className="flex items-start gap-3 text-base">
                            {b.icon ? (
                              <img src={`${baseUrl}${b.icon}`} alt="icon" className="w-6 h-6 mt-1" />
                            ) : (
                              <span className="text-red-600 font-bold text-lg mt-1">•</span>
                            )}
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {imageUrl && (
                    <div className="w-full md:w-1/2 flex justify-center border-none">
                      <img
                        src={imageUrl}
                        alt={detail.title}
                        className="w-full h-full object-cover rounded-2xl "
                      />
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // ===== How We Support Learning Section =====
          if (isSupportSection) {
            return (
              <section key={detail.id || index} className="flex flex-col md:flex-row w-full py-20">
                {imageUrl && (
                  <div className="w-full md:w-1/2">
                    <img
                      src={imageUrl}
                      alt={detail.title}
                      className="w-full h-full object-cover rounded-l-2xl md:rounded-l-3xl rounded-r-none ml-12"
                    />
                  </div>
                )}
                <div className="w-full md:w-1/2 bg-red-700 text-white flex flex-col justify-center px-10 py-12 rounded-r-2xl md:rounded-r-3xl">
                  <h2 className="text-4xl font-bold mb-6 leading-snug">{detail.title}</h2>
                  {detail.description && (
                    <div
                      className="text-white/90 mb-6 text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: detail.description }}
                    />
                  )}
                  {Array.isArray(detail.bullets) && detail.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {detail.bullets.map(b => (
                        <li key={b.id} className="flex items-start gap-3 text-base">
                          {b.icon ? (
                            <img src={`${baseUrl}${b.icon}`} alt="icon" className="w-6 h-6 object-contain mt-1" />
                          ) : (
                            <span className="text-white font-bold text-lg mt-1">•</span>
                          )}
                          <span>{b.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            );
          }

          // ===== Together We Make a Difference Section =====
          if (isTogetherSection) {
            return (
              <section key={detail.id || index} className=" text-white pt-20 px-6 md:px-16" style={{
                backgroundImage: "url('/slider1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{detail.title}</h2>
                  {detail.description && (
                    <div
                      className="text-white/90 text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: detail.description }}
                    />
                  )}
                </div>
                {Array.isArray(detail.bullets) && detail.bullets.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-8 ">
                    {detail.bullets.map(b => (
                      <div
                        key={b.id}
                        className="bg-white text-gray-900 rounded-tr-[60px] p-8 pb-0 shadow-lg flex-1 min-w-[220px] max-w-[250px] text-center hover:scale-105 transition-transform"
                      >
                        {b.icon && (
                          <img
                            src={`${baseUrl}${b.icon}`}
                            alt="icon"
                            className="mx-auto mb-4 w-12 h-12 object-contain"
                          />
                        )}
                        <h3 className="text-2xl font-bold text-red-600 mb-2">{b.title || "—"}</h3>
                        <p className="text-gray-700 font-medium text-base">{b.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          }

          // ===== A Child’s Journey to Learning Section =====
          if (isChildJourneySection) {
            return (
              <section key={detail.id || index} className="py-20 px-6 md:px-16 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold mb-6 leading-snug  text-black tracking-wide mt-5">
                      {detail.title}
                    </h2>
                    {detail.description && (
                      <div
                        className="text-gray-700 text-base leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                    )}
                    {Array.isArray(detail.bullets) && detail.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {detail.bullets.map(b => (
                          <li key={b.id} className="flex items-start gap-3 text-base">
                            {b.icon ? (
                              <img src={`${baseUrl}${b.icon}`} alt="icon" className="w-6 h-6 mt-1" />
                            ) : (
                              <span className="text-red-600 font-bold text-lg mt-1">•</span>
                            )}
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {imageUrl && (
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={imageUrl}
                        alt={detail.title}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // ===== Default Normal Section =====
          return (
            <section key={detail.id || index} className="py-20 px-6 md:px-16 bg-white">
              <h2 className="text-3xl font-bold mb-4">{detail.title}</h2>
              {detail.description && (
                <div
                  className="text-gray-700 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                />
              )}
            </section>
          );
        })
      ) : (
        <div className="text-center text-gray-500 py-20">No service details available</div>
      )}

      {/* Footer */}
      <Together />
      <LatestStories />
      <FAQSection />
    </div>
  );
}
