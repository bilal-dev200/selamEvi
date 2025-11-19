"use client";

import React, { useState, useEffect } from "react";
import DonationFormModal from "./home/components/Form";

export default function Section3() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 ENV URLS
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const IMG_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  // ✅ Fetch Services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${BASE_URL}/services/list`);
        if (!res.ok) throw new Error("Failed to fetch services");

        const data = await res.json();

        setServices((data?.data || []).reverse());
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [BASE_URL]);

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl text-black md:text-4xl font-bold mb-3">
        How We Serve <span className="text-red-600">Communities</span> in Need
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Our services span across healthcare, education, empowerment, and emergency relief.
      </p>

      {/* Loading / Empty UI */}
      {loading ? (
        <p className="text-gray-500 text-lg mt-10">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-gray-500 text-lg mt-10">No services found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // 🔥 Image now uses ENV base
            const imageUrl = service.service_image_link
              ? `${IMG_BASE}/${service.service_image_link}`
              : "/placeholder.jpg";

            return (
              <div
                key={service.id || index}
                className="relative h-[490px] rounded-md overflow-hidden group shadow-lg transition-transform hover:scale-[1.02]"
              >
                {/* Image */}
                <img
                  src={imageUrl}
                  alt={service.title || "Service image"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => (e.target.src = "/placeholder.jpg")}
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-start items-start p-5 z-10 text-left bg-gradient-to-t from-white/90 via-white/60 to-transparent">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 max-w-[80%] text-black/80 line-clamp-3">
                    {service.description || "No description available."}
                  </p>

                  <button
                    onClick={() => setIsModalVisible(true)}
                    className="text-black bg-white px-5 py-2 rounded-[60px] text-sm border border-black cursor-pointer hover:bg-gray-100 transition"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </section>
  );
}
