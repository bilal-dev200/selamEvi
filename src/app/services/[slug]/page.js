"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useServiceStore } from "../../store/Servicestore";
import Hero from "../hero";
import Together from "@/app/components/our-work/components/Together";
import LatestStories from "@/app/components/home/components/LatestStories";
import FAQ from "@/app/services/FAQ";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  // const { selectedService } = useServiceStore();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 ENV URLs
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const IMG_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchService = async () => {
      try {
        // if (!service?.details) {
          const res = await fetch(`${BASE_URL}/services/findby/${slug}`);
          const data = await res.json();
          setService(data.data);
        // }
      } catch (err) {
        console.error("Error fetching service:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug, BASE_URL]);

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

  const section1 = service.details?.[0];
  const section2 = service.details?.[1];
  const section3 = service.details?.[2];
  const section4 = service.details?.[3];

  return (
    <div className="bg-white font-[Rubik,sans-serif] space-y-40">
      <Hero slug={slug} />

      {/* Section 1 */}
      {section1 && (
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold mb-6 text-black leading-snug">
                {section1.title}
              </h2>
              {section1.description && (
                <div
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: section1.description }}
                />
              )}
              {Array.isArray(section1.bullets) && (
                <ul className="space-y-3">
                  {section1.bullets.map((b) => (
                    <li key={b.id} className="flex gap-3 text-base">
                      {b.icon ? (
                        <img
                          src={`${IMG_BASE}/${b.icon}`}
                          className="w-6 h-6 object-contain mt-1"
                        />
                      ) : (
                        <span className="text-red-600 text-lg font-bold">•</span>
                      )}
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section1.images?.[0]?.image_path && (
              <div className="w-full md:w-1/2">
                <img
                  src={`${IMG_BASE}/${section1.images[0].image_path}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Section 2 */}
      {section2 && (
        <section className="bg-white flex items-center justify-center px-4 lg:px-12 py-20 w-full">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">
            {section2.images?.[0]?.image_path && (
              <div className="relative w-full h-[480px] lg:h-[600px] rounded-3xl overflow-hidden ml-0">
                <img
                  src={`${IMG_BASE}/${section2.images[0].image_path}`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            )}
            <div className=" bg-[#b42e2a] text-white px-10 py-14 rounded-3xl lg:rounded-r-3xl lg:-ml-6 mt-10 lg:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{section2.title}</h2>
              {section2.description && (
                <div
                  className="text-white/90 text-sm leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: section2.description }}
                />
              )}
              {Array.isArray(section2.bullets) && (
                <ul className="space-y-3 mt-4">
                  {section2.bullets.map((b) => (
                    <li key={b.id} className="flex gap-3">
                      {b.icon ? (
                        <img src={`${IMG_BASE}/${b.icon}`} className="w-6 h-6 mt-1" />
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
      )}

      {/* Section 3 */}
      {section3 && (
        <section
          className="relative text-white px-4 pt-40 pb-40 bg-cover bg-center rounded-tr-[80px] sm:pt-32 sm:pb-32 md:pt-40 md:pb-40"
          style={{ backgroundImage: "url('/difference.png')" }}
        >
          <div className="absolute inset-0 bg-black/10 rounded-tr-[80px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-widest">{section3.title}</h2>
            {section3.description && (
              <div
                className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section3.description }}
              />
            )}
          </div>
          <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-4 relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 z-20">
            {section3.bullets?.map((b, index) => (
              <div
                key={b.id || index}
                className="bg-white shadow-lg rounded-tr-3xl p-4 text-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%] transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {b.icon && (
                  <img
                    src={`${IMG_BASE}/${b.icon}`}
                    className="w-12 h-12 mx-auto mb-2 object-contain"
                    alt=""
                  />
                )}
                <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 4 */}
      {section4 && (
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold mb-6 text-black">{section4.title}</h2>
              {section4.description && (
                <div
                  className="text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: section4.description }}
                />
              )}
              {Array.isArray(section4.bullets) && (
                <ul className="space-y-3">
                  {section4.bullets.map((b) => (
                    <li key={b.id} className="flex gap-3">
                      {b.icon ? (
                        <img src={`${IMG_BASE}/${b.icon}`} className="w-6 h-6 mt-1" />
                      ) : (
                        <span className="text-red-600 text-lg font-bold">•</span>
                      )}
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section4.images?.[0]?.image_path && (
              <div className="w-full md:w-1/2">
                <img
                  src={`${IMG_BASE}/${section4.images[0].image_path}`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}
          </div>
        </section>
      )}

      <Together />
      <LatestStories />
      <FAQ />
    </div>
  );
}
