import React from 'react';
import TeamCard from './cards/TeamCard';
import { teamMembers } from '../../data/teamData';

const Team = () => (
  <section id="team" className="flex items-center justify-center min-h-screen bg-gray- p-8">
    <div className="max-w-6xl w-full">
      <h2 className="text-4xl font-bold text-violet-600 text-center mb-10">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedinUrl={member.linkedinUrl}
            githubUrl={member.githubUrl}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
