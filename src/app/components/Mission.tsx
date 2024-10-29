import React from 'react'
import Image from 'next/image'

const Mission = () => (
  <section
    id="mission"
    className="flex flex-col items-center justify-center min-h-screen bg-gray"
  >
    <h1 className="text-3xl md:text-5xl font-extrabold text-Black text-center mb-12 drop-shadow-md">
      Our Mission
    </h1>
    <div className="bg-[#22223b] px-10 py-20 rounded-2xl shadow-lg text-white w-4/5 mx-auto transition-transform transform hover:scale-105">
      <div className="w-full flex items-center justify-center">
        <Image
          src={'/quote.svg'}
          alt="quote"
          className="h-20 w-20 md:h-24 md:w-24"
          width={64}
          height={64}
        />
      </div>
      <div className="text-white w-full md:w-3/4 xl:w-1/2 mx-auto mt-8 text-center">
        <p className="text-lg md:text-2xl leading-relaxed tracking-wide">
          At{' '}
          <span className="bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            PentaMorphs
          </span>
          , we craft AI-powered products designed for real-world impact,
          prioritizing quality, reliability, and exceptional user satisfaction.
        </p>
      </div>
    </div>
  </section>
)

export default Mission
