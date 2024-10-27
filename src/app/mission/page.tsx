import React from 'react'

const Mission = () => (
  <div>
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg text-white w-full h-screen mx-auto ">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-white">
        Our Mission{' '}
      </h1>

      <div className="text-white w-full md:w-3/4 xl:w-1/2 mx-auto mt-12 text-justify">
        <p className="text-lg md:text-xl  leading-relaxed">
          Our mission at{' '}
          <span className="bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            PentaMorphs{' '}
          </span>
          is to craft AI-powered solutions for modern world to prioritize
          quality, reliability, and user satisfaction. We are dedicated to:
        </p>

        <ul className="mt-8 text-lg space-y-3">
          <li className="flex items-start">
            <span className="mr-2 text-white">•</span>
            <p>
              <span className="text-gray-400 text-lg md:text-xl">
                Innovative Excellence:
              </span>{' '}
              <span className="italic font-medium text-lg md:text-xl">
                Integrating advanced AI with best practices to deliver products
                that genuinely add value to users’ lives.
              </span>
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">•</span>
            <p>
              <span className="text-gray-400 text-lg md:text-xl">
                Audience-Centric Design:{' '}
              </span>
              <span className="italic font-medium text-lg md:text-xl">
                Building products that are approachable, engaging, and
                inspiring, fostering trust and long-term user engagement.
              </span>
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">•</span>
            <p>
              <span className="text-gray-400 text-lg md:text-xl">
                Smart and Focused Work Ethic:{' '}
              </span>
              <span className="italic font-medium text-lg md:text-xl">
                Blending smart strategies with diligence to continually improve,
                set new standards, and exceed expectations.
              </span>
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">•</span>
            <p>
              <span className="text-gray-400 text-lg md:text-xl">
                Continuous Learning & Growth:{' '}
              </span>
              <span className="italic font-medium text-lg md:text-xl">
                Encouraging a culture of learning within our team, constantly
                evolving with industry advancements to stay at the forefront of
                AI and tech innovation.
              </span>
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">•</span>
            <p>
              <span className="text-gray-400 text-lg md:text-xl">
                Commitment to Sustainability:{' '}
              </span>
              <span className="italic font-medium text-lg md:text-xl">
                Prioritizing sustainable practices in our development processes
                to minimize our environmental footprint, while creating tech
                that aligns with long-term ecological and social responsibility.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Mission
