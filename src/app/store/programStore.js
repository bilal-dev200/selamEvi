import { create } from "zustand";

export const useProgramStore = create((set, get) => ({
  programs: [],
  loading: false,
  fetched: false, // ✅ to prevent re-fetch

  fetchPrograms: async () => {
    if (get().fetched) return; // 👈 prevent multiple API calls

    set({ loading: true });
    try {
      const res = await fetch("https://salam-evi.plantinart.com/programs/list");
      const result = await res.json();

      if (result?.status && Array.isArray(result.data)) {
        const formatted = result.data
          .reverse()
          .map((item) => ({
            id: item.id,
            title: item.title,
            description:
              item.description ||
              "This initiative brings hope and change to those in need.",
            img: `http://salam-evi-nestjs.vapedepablo.com/uploads/${item.image}`,
            raised: 4500,
            goal: 10000,
          }));

        set({ programs: formatted, fetched: true });
      }
    } catch (err) {
      console.error("Error fetching programs:", err);
    } finally {
      set({ loading: false });
    }
  },
}));
