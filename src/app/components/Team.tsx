import React from 'react'
import TeamCard from './cards/TeamCard'
import { teamMembers } from '../../data/teamData'

const Team = () => (
  <section
    id="team"
    className="flex items-center justify-center min-h-screen p-8"
  >
    <div className="w-full">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 drop-shadow-md">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full"> {/* Wrapper div for full width */}
            <TeamCard
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
              portfolioUrl={member.portfolioUrl}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Team
