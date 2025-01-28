"use client";

import type React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShield,
	faRobot,
	faFileLines,
	faBolt,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useMemo, useState } from "react";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const Home: React.FC = () => {
	return (
		<section
			id="home"
			className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden bg-background-home bg-cover bg-center pt-20"
		>
			<div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
				<div className="w-full lg:w-1/2 text-white z-10">
					<h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-6">
						AI-Powered Security
						<br />
						<span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
							<TypeAnimation
								sequence={[
									"Analysis",
									1000,
									"Hardening",
									1000,
									"Compliance",
									1000,
								]}
								wrapper="span"
								speed={50}
								repeat={Number.POSITIVE_INFINITY}
							/>
						</span>
					</h1>
					<p className="text-lg mb-8 max-w-xl">
						Elevate your cybersecurity with our AI-driven platform. Analyze,
						harden, and comply with ease.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
					>
						Get Started
					</motion.button>
					<div className="mt-12 grid grid-cols-2 gap-6">
						<FeatureItem icon={faShield} text="Security Analysis" />
						<FeatureItem icon={faRobot} text="AI Chatbot Interface" />
						<FeatureItem icon={faFileLines} text="Compliance Reports" />
						<FeatureItem icon={faBolt} text="Automated Checks" />
					</div>
				</div>
				<div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
					<motion.div
						animate={{
							scale: [1, 1.05, 1],
							rotate: [0, 5, -5, 0],
						}}
						transition={{
							duration: 5,
							ease: "easeInOut",
							times: [0, 0.2, 0.5, 0.8, 1],
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 1,
						}}
						className="relative"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-30 blur-2xl" />
						<img
							src="/logo.png"
							alt="AI Security"
							className="w-96 h-auto relative z-10"
						/>
					</motion.div>
				</div>
			</div>
			<AnimatedBackground />
		</section>
	);
};

const FeatureItem: React.FC<{ icon: any; text: string }> = ({ icon, text }) => (
	<div className="flex items-center space-x-3">
		<div className="bg-white bg-opacity-10 p-2 rounded-full">
			<FontAwesomeIcon icon={icon} className="w-6 h-6 text-purple-300" />
		</div>
		<span className="text-sm">{text}</span>
	</div>
);

// const AnimatedBackground: React.FC = () => (
// 	<div className="absolute inset-0 overflow-hidden pointer-events-none">
// 		{[...Array(20)].map((_, i) => (
// 			<motion.div
// 				key={`animated-bg-${i}`}
// 				className="absolute bg-white bg-opacity-5 rounded-full"
// 				style={{
// 					width: Math.random() * 100 + 50,
// 					height: Math.random() * 100 + 50,
// 					left: `${Math.random() * 100}%`,
// 					top: `${Math.random() * 100}%`,
// 				}}
// 				animate={{
// 					scale: [1, 1.5, 1],
// 					opacity: [0.1, 0.3, 0.1],
// 				}}
// 				transition={{
// 					duration: Math.random() * 5 + 5,
// 					repeat: Number.POSITIVE_INFINITY,
// 					ease: "easeInOut",
// 				}}
// 			/>
// 		))}
// 	</div>
// );

const AnimatedBackground: React.FC = () => {
	const [circles, setCircles] = useState<
		{ width: number; height: number; left: string; top: string }[]
	>([]);

	useEffect(() => {
		// Only generate random circles on the client
		const generatedCircles = Array.from({ length: 20 }, () => ({
			width: Math.random() * 100 + 50,
			height: Math.random() * 100 + 50,
			left: `${Math.random() * 100}%`,
			top: `${Math.random() * 100}%`,
		}));
		setCircles(generatedCircles);
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{circles.map((circle, i) => (
				<motion.div
					key={`animated-bg-${i}`}
					className="absolute bg-white bg-opacity-5 rounded-full"
					style={{
						width: circle.width,
						height: circle.height,
						left: circle.left,
						top: circle.top,
					}}
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: Math.random() * 5 + 5,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
};

export default Home;

