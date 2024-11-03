import React from 'react'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden"
    >
      <div className="absolute inset-0"></div>
      <div className="absolute w-[70rem] h-[70rem] bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-20 animate-pulse"></div>
      <div className="absolute w-[40rem] h-[40rem] bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-30 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-transparent transform border-2 border-dotted border-white shadow-lg -rotate-45 opacity-30 animate-pulse"></div>




      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl">
  <img 
    src="/logo.PNG" 
    alt="Logo" 
    className="w-96 h-auto" 
  />
</main>

    </section>
  )
}

export default Home
