import { create } from "zustand";
import { persist } from "zustand/middleware";

const BASE_IMAGE_URL = "https://salam-evi.plantinart.com/uploads";

export const useBlogStore = create(
  persist(
    (set) => ({
      blogs: [],
      loading: false,
      error: null,

      // Fetch blogs from API
      fetchBlogs: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("https://salam-evi.plantinart.com/blogs/list");
          const json = await res.json();

          if (json.status && Array.isArray(json.data)) {
            // Update each blog: full image URL + slug cleanup
            const blogsWithFullImage = json.data.map((b) => ({
              ...b,
              image: b.image ? `${BASE_IMAGE_URL}/${b.image}` : null,
              slug: b.slug.replace(/\s+/g, "-"), // spaces → hyphens
            }));
            set({ blogs: blogsWithFullImage, loading: false });
          } else {
            set({
              error: json.message || "Failed to fetch blogs",
              loading: false,
            });
          }
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },
    }),
    {
      name: "blogs-storage", // localStorage key name
      getStorage: () => localStorage,
    }
  )
);
