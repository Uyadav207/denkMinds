"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserShield,
	faClipboardCheck,
	faMagnifyingGlass,
	faChartLine,
	faBell,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const services = [
	{
		icon: faUserShield,
		title: "Human-in-the-Loop Approach",
		description:
			"Ensures user consent for tasks like scanning and folder creation, providing complete control and accuracy.",
	},
	{
		icon: faClipboardCheck,
		title: "Multi-Standard Compliance Support",
		description:
			"Supports compliance standards like OWASP, PCI DSS, ISO 27001, GDPR, and HIPAA, catering to industries such as finance and healthcare.",
	},
	{
		icon: faMagnifyingGlass,
		title: "Customizable Scans",
		description:
			"Offers flexible passive and active scanning options tailored to diverse security needs.",
	},
	{
		icon: faChartLine,
		title: "Centralized Dashboard",
		description:
			"Provides a unified view of vulnerabilities, scan statuses, and threats, helping teams prioritize and resolve issues effectively.",
	},
	{
		icon: faBell,
		title: "Real-Time CVE Updates",
		description:
			"Delivers instant notifications about new vulnerabilities, ensuring up-to-date threat intelligence.",
	},
	{
		icon: faFileLines,
		title: "Report Generation",
		description:
			"Automatically generate required documentation and reports for audits and compliance.",
	},
];


export default function Services() {
	return (
		<section className="py-20 px-4 bg-background-home" id="services">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					{/* <motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className="px-4 py-2 rounded-full bg-[#7156db]/10 text-[#7156db] text-sm font-medium"
					>
						Services
					</motion.span> */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-4xl md:text-5xl font-bold text-white"
					>
						Solution Built to Strengthen Security
					</motion.h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl hover:bg-[#7156db]/5 transition-all duration-300 flex flex-col items-center text-center"
						>
							<div className="mb-6 inline-block p-4 rounded-full bg-[#7156db]/10 text-[#7156db] group-hover:bg-[#7156db]/20 transition-colors duration-300">
								<FontAwesomeIcon icon={service.icon} className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold text-white mb-4">
								{service.title}
							</h3>
							<p className="text-gray-400 mb-6">{service.description}</p>
							<a
								href="/"
								className="inline-flex items-center text-[#7156db] hover:text-[#8d76e6] transition-colors"
							>
								Try App
								<svg
									className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Arrow Icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

