'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [hasShadow, setHasShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home') // Track active link

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
      setActiveLink(targetId) // Set active link when clicked
    }
    if (isMenuOpen) {
      toggleMenu() // Close mobile menu after navigation
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out header ${isVisible
            ? 'transform translate-y-0'
            : 'transform -translate-y-full'
          } ${hasShadow ? 'shadow-md' : 'shadow-none'}`}
      >
        <div className="container mx-auto flex justify-between space-x-7 items-center p-4">
          <div className="flex items-center space-x-2 md:flex">
            <p className="text-white font-bold text-2xl">denkMinds</p>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-7 bg-black p-2 pr-4 pl-4 rounded-3xl border-black">
              {['home', 'mission', 'team', 'contactform'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleScroll(e, section)}
                  className={`transition
                              ${activeLink === section ? ' text-black bg-white rounded-full p-1 text-sm pr-2 pl-2' : ' text-white'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:hidden right-0 top-0">
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
          <div>
            <button disabled className="bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-blue-600">
              Launch App
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-gray bg-opacity-50 z-40"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="fixed right-0 top-0 w-64  h-full shadow-lg header z-50 backdrop-filter backdrop-blur-lg"
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ stiffness: 100 }}
              >
                <div className="flex justify-between items-center p-4 top-0 right-0">
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
                <nav className="flex flex-col p-4 space-y-4 header backdrop-filter min-h-screen">
                  {['home', 'mission', 'team', 'contactform'].map((section) => (
                    <Link
                      key={section}
                      href={`#${section}`}
                      onClick={(e) => handleScroll(e, section)}
                      className={`bg-gray-100 text-black text-center p-3 rounded-lg font-bold transition duration-200 
                                  ${activeLink === section ? 'bg-white text-black' : ''}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  ))}
                  <div>
                    <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-blue-600">
                      Launch App
                    </button>
                  </div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
