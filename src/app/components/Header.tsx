'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setIsScrolled(window.scrollY > 90)

      // Determine which section is active based on scroll position
      const sections = ['home', 'mission', 'team', 'contactform']
      let currentSection = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`transition-all duration-700 bg-white fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={'/logo.png'}
              alt="Pentamorphs Logo"
              className="h-16 w-16"
              width={64}
              height={64}
            />
          </Link>
          <p className="font-bold text-xl">PentaMorphs</p>
        </div>

        <nav className="flex space-x-6">
          <Link
            href="#home"
            className={`cursor-pointer ${
              activeSection === 'home'
                ? 'text-violet-600 font-bold'
                : 'text-gray-700'
            } hover:text-green-600`}
          >
            Home
          </Link>
          <Link
            href="#mission"
            className={`cursor-pointer ${
              activeSection === 'mission'
                ? 'text-violet-600 font-bold'
                : 'text-gray-700'
            } hover:text-green-600`}
          >
            Mission
          </Link>
          <Link
            href="#team"
            className={`cursor-pointer ${
              activeSection === 'team'
                ? 'text-violet-600 font-bold'
                : 'text-gray-700'
            } hover:text-green-600`}
          >
            Team
          </Link>
          <Link
            href="#contactform"
            className={`cursor-pointer ${
              activeSection === 'contactform'
                ? 'text-violet-600 font-bold'
                : 'text-gray-700'
            } hover:text-green-600`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
