import type React from "react";
import "./Timeline.css";

const Timeline: React.FC = () => {
	const milestones = [
		{
			number: 1,
			title: "Form Team & Ideation",
			details:
				"We began by assembling a dynamic team & defining the vision for our AI-based Smart Security Assessment, ensuring clear roadmap.",
		},
		{
			number: 2,
			title: "User Stories & Prototyping",
			details:
				"We transitioned into crafting detailed user stories and prototypes, outlining the tool's core functionalities.",
		},
		{
			number: 3,
			title: "Development and Integration",
			details:
				"Focused development of the front-end, back-end, and AI integration marked a significant step toward realizing our tool.",
		},
		{
			number: 4,
			title: "Security and Compliance",
			details:
				"Strengthening security measures and adhering to compliance frameworks ensured reliability and trust.",
		},
		{
			number: 5,
			title: "Launch Our AI Cyber Security Tool",
			details:
				"With rigorous testing and feedback, we're gearing up to launch our MVP, redefining cybersecurity with AI innovation.",
		},
	];

	return (
		<section
			id="milestone"
			className="justify-center items-center min-h-screen py-8"
		>
			<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mt-8 mb-12 sm:mt-10 sm:mb-16 drop-shadow-md">
				The Milestones That Shaped Us
			</h2>
			<div
				id="timeline"
				className="w-full flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
			>
				<div className="timeline-container">
					{milestones.map((point) => (
						<div key={point.number} className="timeline-point">
							<p>{point.number}</p>
							<div className="popup">
								<div className="popup-number">{point.number}</div>
								<div className="popup-details">
									<div className="popup-title">{point.title}</div>
									{point.details}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Timeline;

