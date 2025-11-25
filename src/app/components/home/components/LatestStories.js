"use client";
import { useEffect } from "react";
import { useBlogStore } from "../../../store/useBlogStore";
import { useRouter } from "next/navigation";

export default function LatestStories({
  title = "Latest News & Inspiring Stories",
  subtitle = "Explore updates, success stories, and the impact your support creates across communities.",
  showLoadMore = true, // optional button visibility
}) {
  const { blogs, fetchBlogs, loading, error } = useBlogStore();
  const router = useRouter();

  useEffect(() => {
    if (blogs.length === 0) fetchBlogs();
  }, [blogs, fetchBlogs]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dynamic Heading */}
      <div className="text-left mb-8">
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900">
          {title} 
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">{subtitle}</p>
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => router.push(`/blog/${blog.slug}`)}
            className="cursor-pointer  overflow-hidden  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="px-4 py-3 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2 text-black">
                {blog.title}
              </h3>
              <p className="text-black text-sm line-clamp-3 mb-3">
                {blog.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
              </p>

              {/* Read More button — stops card click bubbling */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 👈 stop card click
                 router.push(`/blog/${blog.slug}`);
                }}
                className="text-[#E7000B] text-sm font-semibold self-start hover:text-red-900 mt-auto cursor-pointer "
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Load More button */}
      {showLoadMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => router.push("/blog")}
            className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            See All
          </button>
        </div>
      )}
    </section>
  );
}
