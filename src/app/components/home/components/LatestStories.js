"use client";
import { useEffect } from "react";
import { useBlogStore } from "../../../store/useBlogStore";
import { useRouter } from "next/navigation";

export default function LatestStories() {
  const { blogs, fetchBlogs, loading, error } = useBlogStore();
  const router = useRouter();

  useEffect(() => {
    if (blogs.length === 0) fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Latest News & Inspiring Stories
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Discover the latest updates and stories from our platform
        </p>
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => router.push(`/blog/${blog.slug}`)}
            className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="px-4 py-3">
              <h3 className="text-lg font-bold mb-2 text-black">{blog.title}</h3>
              <p className="text-black text-sm line-clamp-3">
                {blog.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
