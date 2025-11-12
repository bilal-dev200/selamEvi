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
      isHydrated: false, // ✅ new

      setSelectedService: (service) => {
        console.log("Selected service:", service);
        set({ selectedService: service });
      },

      fetchServices: async () => {
        set({ loading: true });
        try {
          const res = await fetch("https://salam-evi.plantinart.com/services/list");
          if (!res.ok) throw new Error("Failed to fetch services");
          const data = await res.json();
          const reversed = (data?.data || []).reverse();
          console.log("Fetched services:", reversed);
          set({ services: reversed });
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
        // ✅ Called after hydration
        state?.set({ isHydrated: true });
      },
    }
  )
);
