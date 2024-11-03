'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY === 0 || scrollY > 90)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        console.log('hello')
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) 
  }

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveLink(targetId) 
      if (isMenuOpen) toggleMenu() 
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <p className="text-white font-bold text-2xl">denkMinds</p>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-7 bg-white bg-opacity-20 backdrop-blur shadow-lg p-2 rounded-3xl border-black">
              {['home', 'mission', 'team', 'contactform'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleScroll(e, section)}
                  className={`transition ${
                    activeLink === section ? 'text-black bg-white rounded-full p-1 text-sm' : 'text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </div>

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
          <button
            disabled
            className="bg-transparent text-white font-bold py-2 px-4 rounded-3xl transition duration-200 hover:bg-transparent border-2 border-violet-900 opacity-70 cursor-not-allowed"
          >
            Launch App
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="fixed top-0 left-0 w-full h-full shadow-lg bg-transparent z-50 backdrop-filter backdrop-blur-lg"
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ stiffness: 100 }}
              >
                <div className="flex justify-between items-center p-4">
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
                <nav className="flex flex-col p-4 space-y-4 min-h-screen">
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
                  <button
                    className="w-full bg-blue-700 text-white font-bold py-2 rounded-3xl transition duration-200 opacity-70 cursor-not-allowed"
                    disabled
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
  )
}

export default Header
