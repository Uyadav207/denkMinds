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
    <div className="relative w-56 h-56 rounded-full overflow-hidden transition-all duration-300">
      <Image
        src={image}
        alt={`${name}'s picture`}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      </div>

{/* Name and Role with Updated Style */}
<div className="flex flex-col items-center justify-center">
<h3 className="text-lg font-semibold text-gray-900">{name}</h3>
<p className="text-lg text-gray-600 mb-2]">{role}</p>
</div>

{/* Social Media Icons Below Role */}
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

)

export default TeamCard
