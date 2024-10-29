import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  role: string
  image: string
  linkedinUrl: string
  githubUrl: string
  portfolioUrl: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  linkedinUrl,
  githubUrl,
  portfolioUrl,
}) => (
  <div className="group flex flex-col items-center text-center space-y-4 w-48 mx-auto">
    {/* Circular Profile Image */}
    <div className="relative w-40 h-40 rounded-full overflow-hidden">
      <Image
        src={image}
        alt={`${name}'s picture`}
        layout="fill"
        objectFit="cover"
        className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      {/* Social Icons on Hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        <div className="flex space-x-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            <FaGlobe size={24} />
          </a>
        </div>
      </div>
    </div>

    {/* Name and Role */}
    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
)

export default TeamCard
