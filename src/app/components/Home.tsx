import React from 'react'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-noise flex items-center justify-center min-h-screen p-8 overflow-hidden"
      // style={{ backgroundImage: 'url(/noise-1.png)'}}
    >
      <div className="absolute inset-0 bg-background-home opacity-90"></div>
      <div className="absolute w-[70rem] h-[70rem] bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-20"></div>
      <div className="absolute w-[40rem] h-[40rem] bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-30"></div>
      <div className="absolute w-80 h-80 bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-30"></div>

      {/* Animated Shapes */}
      {/* <div className="absolute inset-0 z-0 shapes-container">
        <div className="shape shape-green"></div>
        <div className="shape shape-yellow"></div>
        <div className="shape shape-pink"></div>
        <div className="shape shape-blue"></div>
        <div className="shape shape-red"></div>
        <div className="shape shape-orange"></div>
        <div className="shape shape-purple"></div>
      </div> */}

      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-start text-left space-y-4 md:w-2/3">
          {/* Funky Title */}
          {/* <h1 className="text-5xl sm:text-6xl font-bold leading-snug text-gray-800 funky-title">
            Hi! We are <span className="text-gradient">_____</span>, <br />a{' '}
            <span className="text-gradient">young & innovative</span> Germany
            <br />
            based <span className="text-gradient">Startup</span>.
          </h1> */}

          {/* <p className="mt-4 text-lg text-gray-600 leading-relaxed funky-subtitle">
          We leverage technology and sustainability to craft innovative solutions that make an impact.
          </p> */}

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
