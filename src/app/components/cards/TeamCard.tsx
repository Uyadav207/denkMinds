import React from 'react'
import Image from 'next/image'

interface TeamCardProps {
  name: string
  role: string
  image: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
<img
      src={image}
      alt={`${name}'s picture`}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
)

export default TeamCard
