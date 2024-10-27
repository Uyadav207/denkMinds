import React from 'react'
import TeamCard from './cards/TeamCard.tsx'
import { teamMembers } from '../../data/teamData.ts'

const Team = () => (
  <section id="team" className="py-20">
    <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">
      Our Team
    </h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      ))}
    </div>
  </section>
)

export default Team
