
import React from "react";
import Link from "next/link";

export default function Blogs({posts}: any) {
  return (
    <section id="blogs" className="flex min-h-screen py-8 bg-black">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mt-10 mb-16 drop-shadow-md">
          Read Our Blogs
        </h2>

        <div className="relative w-full overflow-x-auto scroll-smooth scrollbar-hide ">
          <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 snap-x snap-mandatory">
            {posts.map(
              (post: {
                slug: string;
                title: string;
                publishDate: string;
                description: string;
                imageUrl: string;
              }) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="flex-shrink-0 w-86 sm:w-96 bg-[#080116] border border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer snap-center"
                >
                  <img
                    className="object-cover w-full h-48 sm:h-64 rounded-t-lg"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base font-light text-gray-300 mt-2">
                      {post.description}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-400 mt-4">
                      Published on: {post.publishDate}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
