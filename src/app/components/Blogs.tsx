"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getBlogPosts } from '@/lib/serverUtils'
export default function Blogs() {
  const [posts, setPosts] = useState<any>([])
  const router = useRouter();

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
    <section id="blogs" className="flex min-h-screen py-8 overflow-hidden">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mt-10 mb-16 drop-shadow-md">
          Read Our Blogs
        </h2>

        <motion.div 
          className="flex space-x-8 p-8 overflow-x-scroll scrollbar-hide"
          drag="x"
          dragConstraints={{ right: 0, left: -((posts.length - 1) * 384) }} // Adjust based on card width + gap
        >
          {posts.map((post: {
            slug: string
            title: string
            publishDate: string
            description: string
            imageUrl: string
          }) => (
            <div
            key={post.slug}
            onClick={() => router.push(`/blogs/${post.slug}`)} 
            className="w-full block text-white p-4 bg-[#080116] border border-gray-200 rounded-lg shadow transition-shadow duration-300"
            >
            <img
              className="object-cover w-full h-64 mb-4 rounded-lg"
              src={post.imageUrl}
              alt={post.title}
            />
            <h3 className="text-xl md:text-3xl font-semibold ">
              {post.title}
            </h3>
            <p className="md:text-lg font-light  mt-2">
              {post.description}
            </p>
            <p className="text-sm font-medium  mt-4">
              Published at: {post.publishDate}
            </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

