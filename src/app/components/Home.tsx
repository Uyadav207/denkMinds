import React from 'react'

import { TypeAnimation } from 'react-type-animation'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden"
    >
      <div className="absolute inset-0"></div>
      <h1 className="text-3xl w-full sm:w-3/4 sm:text-4xl xl:text-6xl  xl:w-[45%] text-center absolute top-[70%] z-10 text-white font-bold p-2">
        Together we{' '}
        <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Thrive',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Develop',
              1000,
              'Collaborate',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
      <div className="absolute w-[70rem] h-[70rem] bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-20 animate-pulse"></div>
      <div className="absolute w-[40rem] h-[40rem] bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-30 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-30 animate-pulse"></div>

      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl">
        <img src="/logo.png" alt="Logo" className="w-96 h-auto" />
      </main>
    </section>
  )
}

export default Home
