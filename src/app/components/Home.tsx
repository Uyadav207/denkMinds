import React from 'react'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-noise flex items-center justify-center min-h-screen p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background-home"></div>
      <div className="absolute w-[70rem] h-[70rem] bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-20"></div>
      <div className="absolute w-[40rem] h-[40rem] bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-30"></div>
      <div className="absolute w-80 h-80 bg-transparent transform border border-dotted border-white shadow-lg -rotate-45 opacity-30"></div>




      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl">
  <img 
    src="/logo2.webp" 
    alt="Logo" 
    className="w-112 h-auto" 
  />
</main>

    </section>
  )
}

export default Home
