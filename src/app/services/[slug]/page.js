"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useServiceStore } from "../../store/Servicestore";
import Together from "@/app/components/our-work/components/Together";
import LatestStories from "@/app/components/home/components/LatestStories";
import FAQSection from "@/app/components/home/components/FAQSection";
import Hero from "../hero";

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
            `http://salam-evi-nestjs.vapedepablo.com/services/${slug}`
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
        Service not found — please go back.
      </div>
    );

  return (
    <div className="bg-white font-[Rubik,sans-serif]">
      <Hero />

      {/* ✅ Dynamic Sections */}
      {Array.isArray(service.details) && service.details.length > 0 ? (
        service.details.map((detail, index) => {
          const imageUrl =
            detail?.images?.[0]?.image_path &&
            `${baseUrl}${detail.images[0].image_path}`;

          const isRedSection =
            detail.title?.toLowerCase().includes("together") ||
            detail.title?.toLowerCase().includes("difference");

          const isReverse = index % 3 !== 0;

          return (
            <React.Fragment key={detail.id || index}>
              <section
                className={`py-20 px-6 md:px-16 transition-all duration-500 ${
                  isRedSection
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div
                  className={`flex flex-col ${
                    imageUrl ? "md:flex-row" : ""
                  } ${isReverse ? "md:flex-row-reverse" : ""} items-center gap-10`}
                >
                  {/* ✅ Text Section */}
                  <div
                    className={`w-full ${
                      imageUrl ? "md:w-1/2 text-left" : "text-center"
                    }`}
                  >
                    <h2
                      className={`text-3xl font-bold mb-4 ${
                        isRedSection ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {detail.title}
                    </h2>

                    {detail.description && (
                      <div
                        className={`text-base leading-relaxed mb-6 ${
                          isRedSection ? "text-white/90" : "text-gray-700"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: detail.description,
                        }}
                      />
                    )}

                    {/* ✅ Bullets */}
                    {Array.isArray(detail.bullets) &&
                      detail.bullets.length > 0 && (
                        <ul
                          className={`space-y-3 mt-4 ${
                            isRedSection ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {detail.bullets.map((b) => (
                            <li
                              key={b.id}
                              className="flex items-start gap-3 text-base"
                            >
                              {/* Icon (if available) */}
                              {b.icon ? (
                                <img
                                  src={`${baseUrl}${b.icon}`}
                                  alt="icon"
                                  className="w-6 h-6 object-contain"
                                />
                              ) : (
                                <span className="text-red-500 font-bold text-lg mt-1">
                                  •
                                </span>
                              )}
                              <span>{b.text}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>

                  {/* ✅ Image Section */}
                  {imageUrl && (
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={imageUrl}
                        alt={detail.title || "Service Detail"}
                        className="rounded-xl w-full object-cover max-h-[400px]"
                      />
                    </div>
                  )}
                </div>

                {/* ✅ Special red section cards (for stats etc.) */}
                {isRedSection && (
                  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {Array.isArray(detail.bullets) &&
                      detail.bullets.map((b) => (
                        <div
                          key={b.id}
                          className="bg-white text-gray-900 rounded-xl p-6 shadow-md text-center"
                        >
                          {b.icon && (
                            <img
                              src={`${baseUrl}${b.icon}`}
                              alt="icon"
                              className="mx-auto mb-3 w-10 h-10 object-contain"
                            />
                          )}
                          <h4 className="font-semibold text-lg mb-2">
                            {b.title || "—"}
                          </h4>
                          <p className="text-sm text-gray-600">{b.text}</p>
                        </div>
                      ))}
                  </div>
                )}
              </section>

              {index === 1 && <div className="bg-white h-20 w-full"></div>}
            </React.Fragment>
          );
        })
      ) : (
        <div className="text-center text-gray-500 py-20">
          No service details available.
        </div>
      )}

      {/* ✅ Footer Sections */}
      <div className="bg-gray-50">
        <Together />
      </div>
      <LatestStories />
      <FAQSection />
    </div>
  );
}
