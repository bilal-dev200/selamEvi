import { create } from "zustand";

export const useProgramStore = create((set, get) => ({
  programs: [],
  loading: false,
  fetched: false,

  fetchPrograms: async () => {
    if (get().fetched) return;

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

    set({ loading: true });

    try {
      const res = await fetch(`${BASE_URL}programs/list`);
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
            img: `${IMG_URL}/${item.image}`,
            raised: Number(item.total_transaction_amount),
            goal: item.required_total_amount,
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
