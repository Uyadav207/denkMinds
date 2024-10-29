import React from 'react'
import Image from 'next/image'

const Mission = () => (
  <section
    id="mission"
    className="flex flex-col items-center justify-center min-h-screen bg-gray border border-red"
  >
    <h1 className="text-2xl md:text-4xl font-bold text-violet-600 text-center mb-10">
      Our Mission{' '}
    </h1>
    <div className="bg-[#22223b] px-8 py-16 rounded-xl shadow-lg text-white w-4/5 mx-auto">
      <div className="w-full flex items-center justify-center">
        <Image
          src={'/quote.svg'}
          alt="quote"
          className="h-16 w-16"
          width={64}
          height={64}
        />
      </div>
      <div className="text-white w-full md:w-3/4 xl:w-1/3 mx-auto mt-12 text-center">
        <p className="text-lg md:text-2xl  leading-relaxed">
          At{' '}
          <span className="bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            PentaMorphs{' '}
          </span>
          we craft AI-powered products designed for real-world impact,
          prioritizing quality, reliability, and exceptional user satisfaction.
        </p>
      </div>
    </div>
  </section>
)

export default Mission
