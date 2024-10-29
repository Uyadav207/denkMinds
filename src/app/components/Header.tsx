'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [hasShadow, setHasShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY === 0) {
        setIsVisible(true)
        setHasShadow(false)
      } else {
        setIsVisible(scrollY > 90)
        setHasShadow(scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // Toggle menu visibility
  }

  // Function to handle smooth scrolling
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (isMenuOpen) {
      toggleMenu() // Close mobile menu after navigation
    }
  }

  return (
    <>
      {/* Conditionally render the header */}
      {!isMenuOpen && (
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
            isVisible
              ? 'transform translate-y-0'
              : 'transform -translate-y-full'
          } ${hasShadow ? 'shadow-md' : 'shadow-none'}`}
          style={{ backgroundColor: '#efefef' }}
        >
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Pentamorphs Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </Link>
              <p className="text-black font-bold text-lg">PentaMorphs</p>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className={`hidden md:flex space-x-4`}>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, 'home')}
                className="text-black hover:text-violet-500"
              >
                Home
              </a>
              <a
                href="#mission"
                onClick={(e) => handleScroll(e, 'mission')}
                className="text-black hover:text-violet-500"
              >
                Mission
              </a>
              <a
                href="#team"
                onClick={(e) => handleScroll(e, 'team')}
                className="text-black hover:text-violet-500"
              >
                Team
              </a>
              <a
                href="#contactform"
                onClick={(e) => handleScroll(e, 'contactform')}
                className="text-black hover:text-violet-500"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
      )}

      {/* Sliding Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-50 z-40"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed right-0 top-0 w-64 bg-white h-full shadow-lg z-50 backdrop-filter backdrop-blur-lg" // Add backdrop-filter for blur
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="text-black"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <Link
                  href="#home"
                  onClick={(e) => handleScroll(e, 'home')}
                  className="bg-gray-100 text-black text-center p-3 rounded-lg font-bold transition duration-200 hover:bg-violet-500 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="#mission"
                  onClick={(e) => handleScroll(e, 'team')}
                  className="bg-gray-100 text-black text-center p-3 rounded-lg font-bold transition duration-200 hover:bg-violet-500 hover:text-white"
                >
                  Mission
                </Link>
                <Link
                  href="#team"
                  onClick={(e) => handleScroll(e, 'team')}
                  className="bg-gray-100 text-black text-center p-3 rounded-lg font-bold transition duration-200 hover:bg-violet-500 hover:text-white"
                >
                  Team
                </Link>
                <Link
                  href="#contactform"
                  onClick={(e) => handleScroll(e, 'contactform')}
                  className="bg-gray-100 text-black text-center p-3 rounded-lg font-bold transition duration-200 hover:bg-violet-500 hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
