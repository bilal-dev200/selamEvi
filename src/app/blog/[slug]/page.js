"use client";
import { useParams } from "next/navigation";
import { useBlogStore } from "../../store/useBlogStore";
import Banner from "@/app/components/detail/components/Banner";

export default function BlogDetails() {
  const { slug } = useParams();
  const { blogs } = useBlogStore();

  const blog = blogs.find((b) => b.slug === slug);

//   console.log('first', blog.content)

  if (!blog) {
    return (
      <div className="p-8 min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 text-center text-xl font-semibold">
          Blog not found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white font-[Rubik,sans-serif]">
      {/* Banner */}
      <Banner />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog content exactly as API provides */}
        <div
          className="max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Explore more stories on our platform!
          </p>
        </div>
      </section>
    </div>
  );
}
