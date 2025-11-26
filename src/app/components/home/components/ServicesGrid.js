// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import DonationFormModal from "../components/Form";
// import { useServiceStore } from "@/app/store/Servicestore";

// export default function ServicesGrid() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   // const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const router = useRouter();
//   // const setSelectedService = useServiceStore((state) => state.setSelectedService);

//   // useEffect(() => {
//   //   const fetchServices = async () => {
//   //     try {
//   //       const res = await fetch("http://salam-evi-nestjs.vapedepablo.com/services/list");
//   //       if (!res.ok) throw new Error("Failed to fetch services");
//   //       const data = await res.json();
//   //       setServices((data?.data || []).reverse());
//   //     } catch (error) {
//   //       console.error("Error fetching services:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchServices();
//   // }, []);

//     const { services, fetchServices } = useServiceStore();
//  useEffect(() => {
//     fetchServices();
//   }, [fetchServices]);
//     console.log("Store services in component:", services); // ✅ check here too

//   const handleNavigate = (service) => {
//     setSelectedService(service);
//     router.push(`/services/${service.slug}`);
//   };

//   const handleDonateClick = (service) => {
//     setSelectedService(service); // Pass selected service to modal
//     setIsModalVisible(true);
//   };

//   return (
//     <section className="py-16 px-6 md:px-20 bg-white text-center">
//       <h2 className="text-3xl text-black md:text-4xl font-bold mb-3">
//         How We Serve <span className="text-red-600">Communities</span> in Need
//       </h2>
//       <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//         Our services span across healthcare, education, empowerment, and emergency relief.
//       </p>

//       {loading ? (
//         <p className="text-gray-500 text-lg mt-10">Loading services...</p>
//       ) : services.length === 0 ? (
//         <p className="text-gray-500 text-lg mt-10">No services found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => {
//             const imageUrl = `http://salam-evi-nestjs.vapedepablo.com/uploads/${service.service_image_link}`;

//             return (
//               <div
//                 key={service.id || index}
//                 onClick={() => handleNavigate(service)}
//                 className="relative h-[490px] rounded-md overflow-hidden group shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
//               >
//                 <img
//                   src={imageUrl}
//                   alt={service.title || "Service image"}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-start items-start p-5 z-10 text-left bg-gradient-to-t from-white/90 via-white/60 to-transparent">
//                   <h3 className="text-xl font-bold mb-2 text-black">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm mb-4 max-w-[80%] text-black/80 line-clamp-3">
//                     {service.description || "No description available."}
//                   </p>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDonateClick(service);
//                     }}
//                     className="text-black bg-white px-5 py-2 rounded-[60px] text-sm border border-black hover:bg-gray-100 transition"
//                   >
//                     Donate Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       <DonationFormModal
//         open={isModalVisible}
//         onCancel={() => setIsModalVisible(false)}
//       />
//     </section>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DonationFormModal from "../components/Form";
import { useServiceStore } from "@/app/store/Servicestore";

export default function ServicesGrid() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const router = useRouter();

  const { services, loading, fetchServices } = useServiceStore();

  // 🔥 ENV BASE URL
  const IMG_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleNavigate = (service) => {
    setSelectedService(service);
    router.push(`/services/${service.slug}`);
  };

  const handleDonateClick = (service) => {
    setSelectedService(service);
    setIsModalVisible(true);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl text-black md:text-5xl font-semibold mb-3">
        <span className="text-red-600">Selam-Evi</span> Programs
      </h2>

      <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-nunito">
        Support lives through Zakat, Sadaqah, and welfare programs with Selam Evi.
      </p>

      {loading ? (
        <p className="text-gray-500 text-lg mt-10">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-gray-500 text-lg mt-10">No services found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // 🔥 NEW — image from ENV
            const imageUrl = `${IMG_BASE}/${service.service_image_link}`;

            return (
              <div
                key={service.id || index}
                onClick={() => handleNavigate(service)}
                className="relative h-[490px] rounded-md overflow-hidden group shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={imageUrl}
                  alt={service.title || "Service image"}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 flex flex-col justify-start items-start p-5 z-10 text-left">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {service.title}
                  </h3>

                  <p className="text-sm mb-4 max-w-[80%] text-black/80 line-clamp-3 font-light">
                    {service.description || "No description available."}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDonateClick(service.id);
                    }}
                    className="text-black bg-white px-5 py-2 rounded-[60px] text-sm border border-black hover:bg-gray-100 transition"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <DonationFormModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        selectedService={selectedService}
      />
    </section>
  );
}
