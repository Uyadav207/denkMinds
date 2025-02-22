import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

interface TeamCardProps {
	index: number;
	name: string;
	role: string;
	image: string;
	linkedinUrl: string;
	githubUrl: string;
	portfolioUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
	index,
	name,
	role,
	image,
	linkedinUrl,
	githubUrl,
	portfolioUrl,
}) => (
	<div
		className={`group flex p-3 flex-col w-full overflow-hidden mb-9 border-1  border-gray-700 border-t-0 border-b-0 bg-transparent text-center mx-auto transition-all duration-300 hover:bg-[#272278] hover:bg-opacity-20 ${(index === 1 || index === 4) && "md:border-r md:border-l"}`}
	>
		{/* Profile Image */}
		<div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 mx-auto transition-all duration-300">
			<Image
				src={image}
				alt={`${name}'s picture`}
				fill
				sizes="256px"
				className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-300 object-cover object-top"
			/>
		</div>
		{/* Name */}
		<h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
		{/* Role */}
		<p className="text-lg text-gray-400 mb-6">{role}</p>
		{/* Social Media Icons */}
		<div className="flex justify-center space-x-6">
			<a
				href={linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-400 hover:text-[#FFA1DF]"
			>
				<FaLinkedin size={24} />
			</a>
			<a
				href={githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-400 hover:text-[#FFA1DF]"
			>
				<FaGithub size={24} />
			</a>
			{portfolioUrl && (
				<a
					href={portfolioUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#FFA1DF]"
				>
					<FaGlobe size={24} />
				</a>
			)}
		</div>
	</div>
);

export default TeamCard;