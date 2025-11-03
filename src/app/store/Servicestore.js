import { create } from "zustand";
import { persist } from "zustand/middleware"; // optional: refresh safe

export const useServiceStore = create(
  persist(
    (set) => ({
      selectedService: null,
      setSelectedService: (service) => set({ selectedService: service }),
    }),
    { name: "service-store" } // localStorage me save
  )
);
