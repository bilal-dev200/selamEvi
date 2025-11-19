// // import { create } from "zustand";
// // import { persist } from "zustand/middleware"; // optional: refresh safe

// // export const useServiceStore = create(
// //   persist(
// //     (set) => ({
// //       selectedService: null,
// //       setSelectedService: (service) => set({ selectedService: service }),
// //     }),
// //     { name: "service-store" } 
// //   )
// // );

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useServiceStore = create(
//   persist(
//     (set) => ({
//       services: [],              // ✅ all services
//       loading: false,            // ✅ loading state
//       selectedService: null,     // ✅ for detail page

//       setSelectedService: (service) => set({ selectedService: service }),

//       fetchServices: async () => {  // ✅ API call here
//         set({ loading: true });
//         try {
//           const res = await fetch("http://salam-evi-nestjs.vapedepablo.com/services/list");
//           if (!res.ok) throw new Error("Failed to fetch services");
//           const data = await res.json();
//           set({ services: (data?.data || []).reverse() });
//         } catch (error) {
//           console.error("Error fetching services:", error);
//         } finally {
//           set({ loading: false });
//         }
//       },
//     }),
//     { name: "service-store" }
//   )
// );
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useServiceStore = create(
  persist(
    (set, get) => ({
      services: [],
      loading: false,
      selectedService: null,
      isHydrated: false, // ✅ hydration flag

      setSelectedService: (service) => {
        console.log("Selected service:", service);
        set({ selectedService: service });
      },

      fetchServices: async () => {
        const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;       // API base
        const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;  // Image base

        set({ loading: true });

        try {
          const res = await fetch(`${BASE_URL}/services/list`);
          if (!res.ok) throw new Error("Failed to fetch services");

          const data = await res.json();
          const servicesData = Array.isArray(data?.data) ? data.data : [];

          const reversed = servicesData.reverse().map((item) => ({
            ...item,
            image: item.service_image_link ? `${IMG_URL}/${item.service_image_link}` : undefined, // ❌ no fallback
          }));

          set({ services: reversed });
          console.log("Fetched services:", reversed);

        } catch (error) {
          console.error("Error fetching services:", error);
        } finally {
          set({ loading: false });
          console.log("Fetch complete ✅");
        }
      },
    }),
    {
      name: "service-store",
      onRehydrateStorage: () => (state) => {
        state?.set({ isHydrated: true });
        console.log("Service store hydrated ✅");
      },
    }
  )
);
