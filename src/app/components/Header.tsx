"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("home");

	const pathname = usePathname();
	const isHomePage = pathname === "/";

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsVisible(scrollY === 0 || scrollY > 90);
		};

		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const observerOptions = {
			rootMargin: "0px 0px -25% 0px",
			threshold: 0.3,
		};

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setActiveLink(entry.target.id);
				}
			}
		}, observerOptions);

		const sections = ["home", "mission", "milestone", "team", "blogs", "contact"];
		for (const sectionId of sections) {
			const sectionElement = document.getElementById(sectionId);
			if (sectionElement) {
				observer.observe(sectionElement);
			}
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleScroll = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		targetId: string,
	) => {
		event.preventDefault();

		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const headerHeight = 70;
			const targetPosition = targetElement.offsetTop - headerHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});

			setTimeout(() => {
				setActiveLink(targetId);
			}, 500);
		}

		if (isMenuOpen) toggleMenu();
	};

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
					isVisible ? "transform translate-y-0" : "transform -translate-y-full"
				}`}
			>
				<div className="container mx-auto flex justify-between items-center p-4">
					<Link href="/">
						<p className="text-white font-bold text-2xl">denkMinds</p>
					</Link>

					{isHomePage && (
						<div className="hidden md:flex items-center space-x-6">
							<nav className="flex space-x-7 bg-white bg-opacity-20 backdrop-blur shadow-lg p-2 rounded-3xl border-black text-lg">
								{[
									"home",
									"mission",
									"milestone",
									"team",
									"blogs",
									"contact",
								].map((section) => (
									<a
										key={section}
										href={`#${section}`}
										onClick={(e) => handleScroll(e, section)}
										className={`transition ${
											activeLink === section
												? "text-black bg-white rounded-full px-2"
												: "text-white"
										}`}
									>
										{section.charAt(0).toUpperCase() + section.slice(1)}
									</a>
								))}
							</nav>
						</div>
					)}

					<div className="flex items-center space-x-4">
						<button
							type="button"
							onClick={() => window.open("https://mira-denkminds.vercel.app/login", "_blank")}
							className="bg-[#080115] hidden md:block text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-transparent border-2 border-violet-900 cursor-not-allowebg-[#080115] hidden md:block text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-transparent border-2 border-violet-900"
						>
							Launch App
						</button>

						<button
							type="button"
							onClick={toggleMenu}
							aria-label="Toggle menu"
							className="md:hidden"
						>
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</div>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg"
							onClick={toggleMenu}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<motion.div
								className="fixed top-0 left-0 w-full h-full shadow-lg bg-transparent z-50 backdrop-filter backdrop-blur-lg background"
								initial={{ x: "100%" }}
								animate={{ x: "0%" }}
								exit={{ x: "100%" }}
								transition={{ stiffness: 100 }}
							>
								<div className="flex justify-between items-center p-4">
									<button
										type="button"
										onClick={toggleMenu}
										aria-label="Close menu"
										className="text-white"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
										<title>Close</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
								<nav className="flex flex-col p-6 space-y-6 min-h-screen bg-gray-900  backdrop-blur-lg rounded-lg shadow-lg">
									{isHomePage ? (
										[
											"home",
											"mission",
											"milestone",
											"team",
											"blogs",
											"contact",
										].map((section) => (
											<Link
												key={section}
												href={`#${section}`}
												onClick={(e) => handleScroll(e, section)}
												className={`bg-white text-black text-center p-4 rounded-lg font-bold transition duration-200 
                      shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                      ${activeLink === section ? "bg-white text-black shadow-lg" : ""}`}
											>
												{section.charAt(0).toUpperCase() + section.slice(1)}
											</Link>
										))
									) : (
										<Link
											href="/"
											className="bg-white text-black text-center p-4 rounded-lg font-bold transition duration-200 
                        shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
										>
											Home
										</Link>
									)}
									<button
										type="button"
										disabled
										className="bg-transparent text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-transparent border-2 border-violet-900 opacity-70 cursor-not-allowed"
									>
										Launch App
									</button>
								</nav>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};

export default Header;
