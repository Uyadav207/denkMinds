import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-8 md:px-20 space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Text and Buttons Container */}
        <div className="flex flex-col items-start text-left space-y-6 md:w-2/3">
          <h1 className="text-5xl font-bold leading-tight">
          Evolving Your Ideas with{' '}
            <span className="text-indigo-600">Innovation</span> and{' '}
            <span className="text-green-600">technology</span>
          </h1>

          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
          Drive transformative innovation through adaptable, cutting-edge technology, empowering solutions that evolve with every challenge.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
              Learn More
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Logo Container */}
        <div className="flex items-center justify-end">
          <Image
            src="/logo.png"
            alt="Illustration"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        
      </main>
    </div>
  )
}

export default Home
