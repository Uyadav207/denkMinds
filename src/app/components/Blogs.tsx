import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getBlogPosts } from '@/lib/serverUtils'

export default function Blogs() {
  const [posts, setPosts] = useState<any>([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getBlogPosts()
        setPosts(response)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section id="blogs" className="flex  min-h-screen py-8">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mt-10 mb-16 drop-shadow-md">
          Read Our Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {posts.map(
            (post: {
              slug: string
              title: string
              publishDate: string
              description: string
            }) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="w-full block text-white p-6 bg-[#272278] border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl md:text-3xl font-semibold ">
                  {post.title}
                </h3>
                <p className="md:text-lg font-light  mt-2">
                  {post.description}
                </p>
                <p className="text-sm font-medium  mt-4">
                  Published at: {post.publishDate}
                </p>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
