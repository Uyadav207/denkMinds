import React from "react";
import TeamCard from "./cards/TeamCard";
import { teamMembers } from "../../data/teamData";

const Team = () => (
	<section
		id="team"
		className="flex items-center justify-center min-h-screen py-8 bg-gradient-to-b from-[#0d0221] via-[#1c1746] to-[#080115]"
	>
		<div className="w-full">
			<h2 className="text-4xl md:text-5xl font-bold text-white text-center mt-10 mb-16 drop-shadow-md">
				Behind the Bot: Our Team
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2">
				{teamMembers.map((member, index) => (
					<div key={index} className="w-full">
						{" "}
						<TeamCard
							index={index}
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
);

export default Team;