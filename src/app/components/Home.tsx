import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8">
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-8 md:px-10 space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-start text-left space-y-6 md:w-2/3">
          <h1 className="text-5xl font-bold leading-tight">
          Evolving Your Ideas with{' '}
            <span className="text-violet-500">Innovation</span> and{' '}
            <span className="text-green-600">technology</span>
          </h1>

          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
          Drive transformative innovation through adaptable, cutting-edge technology, empowering solutions that evolve with every challenge.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-700 transition duration-400"
            >
              Learn More
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-transparent border border-violet-600 text-violet-600 rounded-lg shadow hover:bg-violet-600 hover:text-white transition duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Logo Container */}
        <div className="flex flex-col justify-end"> 
            <Image
                src="/rocket.gif"
                alt="logo_rocket"
                priority
                width={600}
                height={600}
                className="rounded-md"
            />
        </div>
      </main>
    </div>
  )
}

export default Home
