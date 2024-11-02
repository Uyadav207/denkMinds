import React from 'react'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen p-8 bg-gray overflow-hidden"
    >

      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-start text-left space-y-4 md:w-2/3">
          {/* Funky Title */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-snug text-gray-800 funky-title">
            Hi! We are <span >_____</span>, <br />a{' '}
            <span>young & innovative </span> Germany
            <br />
            based <span>Startup </span>.
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed funky-subtitle">
          {/* We leverage technology and sustainability to craft innovative solutions that make an impact. */}
          </p>

          {/* <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="px-6 py-3 text-white rounded-lg shadow-lg gradient-button transition duration-300"
            >
              Learn More
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-lg shadow-lg gradient-outline-button transition duration-300"
            >
              Live Demo
            </a>
          </div> */}
        </div>
      </main>
    </section>
  )
}

export default Home
