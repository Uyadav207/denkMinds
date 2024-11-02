import React from 'react'

import Image from 'next/image'

const Mission = () => {
  return (
    <section
      id="mission"
      className="min-h-screen w-full flex justify-center items-center  "
    >
      <div className="relative overflow-hidden bg-[#0e090c] flex justify-center items-center min-h-[50vh] w-full text-white px-6  ">
        <div className="absolute left-[50px] sm:left-[100px] top-5 md:top-10 md:left-[200px] z-10">
          <Image
            src={'/quotes.svg'}
            alt="quote"
            className="h-20 w-20 md:h-40 md:w-40"
            width={64}
            height={64}
          />
        </div>

        <div className="relative flex w-full xl:w-3/4 space-x-4 items-start justify-start z-10">
          <div className="flex flex-col w-full xl:flex-row  items-center xl:space-x-20 space-y-4">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white xl:leading-none">
              Our Mission
            </h2>
            <div className="w-full text-justify">
              <blockquote className="italic w-full font-normal text-lg xl:text-lg text-gray-200 leading-relaxed">
                &ldquo;At denkMinds, we are dedicated to crafting AI-powered
                solutions that go beyond technology, addressing real-world
                challenges and making a tangible impact. Our products are
                meticulously designed with a focus on quality and reliability,
                ensuring they meet the highest standards for both performance
                and durabilit .&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        <div
          className="absolute w-[500px] h-[500px] -left-[100px] -top-[250px] z-0"
          style={{ filter: 'blur(250px)', backgroundColor: '#da58a680' }}
        ></div>

        <div
          className="absolute w-[700px] h-[700px] -right-[350px] -bottom-[350px] z-0"
          style={{ filter: 'blur(250px)', backgroundColor: '#666bd180' }}
        ></div>
      </div>
    </section>
  )
}

export default Mission
