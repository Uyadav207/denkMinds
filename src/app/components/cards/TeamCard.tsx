import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  role: string
  image: string
  linkedinUrl: string
  githubUrl: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedinUrl, githubUrl }) => (
  <div className="group bg-white shadow-md rounded-lg overflow-hidden w-60 h-80 transform transition duration-300 hover:scale-105 relative">
  <div className="relative h-3/4 w-full overflow-hidden">
    <Image
      src={image}
      alt={`${name}'s picture`}
      layout="fill"
      objectFit="cover"
       objectPosition="top"
      className="rounded-t-lg"
    />
  </div>
  <div className="absolute bottom-0 left-0 w-full text-center p-4 bg-opacity-60 ">
      <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-800">{role}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700">
            <FaLinkedin size={30} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
</div>
)

export default TeamCard
