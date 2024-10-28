'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`transition-all duration-700 bg-white ${
        isScrolled ? 'shadow-md fixed top-0' : ''
      } w-full z-10 `}
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
            href="#about"
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="#team"
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Team
          </Link>
          <Link 
            href="#contactform" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
