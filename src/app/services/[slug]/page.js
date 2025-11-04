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
        // ✅ Only fetch if details are missing
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

  const dummyBullets = [
    { title: "20+ Hospitals Equipped", text: "Supporting healthcare facilities" },
    { title: "10,000+ Orphans Helped", text: "Providing education & essentials" },
    { title: "50+ Shelters Assisted", text: "Restoring hope for families" },
    { title: "15,000+ Meals Served", text: "Feeding communities in crisis" },
  ];

  return (
    <div className="bg-[#FFFFFF] font-[Rubik,sans-serif]">
      <Hero />

      {/* ✅ Dynamic Service Details */}
      {Array.isArray(service.details) && service.details.length > 0 ? (
        service.details.map((detail, index) => {
          const imageUrl = detail?.images?.[0]?.image_path
            ? `${baseUrl}${detail.images[0].image_path}`
            : "/efforts.jpg";

          const isRedBg = index === 1 || index === 2;
          const hasCards = index === 1 || index === 2;
          const showImage = index !== 2;

          const isReverse =
            detail.title === "A Child’s Journey to Learning"
              ? false
              : index === 1 || index === 3;

          const bullets = detail.bullets?.length ? detail.bullets : dummyBullets;

          return (
            <React.Fragment key={detail.id || index}>
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
                      dangerouslySetInnerHTML={{
                        __html: detail.description || "",
                      }}
                    />

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

                  {showImage && (
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={imageUrl}
                        alt={detail.title || "Service Detail"}
                        className="rounded-xl w-full object-cover max-h-[400px]"
                      />
                    </div>
                  )}
                </div>
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

      <div className="bg-gray-50">
        <Together />
      </div>
      <LatestStories />
      <FAQSection />
    </div>
  );
}