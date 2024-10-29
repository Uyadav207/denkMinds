import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="bg-purple-500 w-full flex flex-col md:flex-row justify-between px-8 md:px-10 py-8">
        {/* Logo */}
        <div className="flex mt-4 md:mt-0">
        <Link href="/">
            <img
              src={'/logo.png'}
              alt="Pentamorphs Logo"
              className="h-16 w-16"
              width={64}
              height={64}
            />
          </Link>
        </div>

        {/* Follow us section */}
        <div className="flex mt-4 md:mt-0">
          <div className="flex flex-col">
            <p className="text-xl capitalize font-bold pb-3">Follow us</p>
            <div className='flex gap-4'>
              <Link href="https://www.linkedin.com/in/pentamorphs/" target="_blank" rel="noopener noreferrer" title="Follow us on LinkedIn">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </Link>
              <Link href="https://x.com/PentaMorphs" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
                <FontAwesomeIcon icon={['fab', 'x-twitter']} size="2x" />
              </Link>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex mt-4 md:mt-0">
          <div className="flex flex-col">
            <p className="text-xl capitalize font-bold pb-3">Address</p>
            <Link href="https://maps.app.goo.gl/UappjGQQoEHy8CZw6" target="_blank" rel="noopener noreferrer" title="Open in Google Maps">
              <p>Reichenhainer Str 37,</p>
              <p>Chemnitz, Saxony, Germany</p>
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex mt-4 md:mt-0">
          <div className="flex flex-col">
            <p className="text-xl capitalize font-bold pb-3">Contact Us</p>
            <div className="flex items-center gap-4">
              <Link href="mailto:contact.pentamorphs@gmail.com" className="flex items-center gap-2" title="Send us an email">
                <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />
                <p>contact.pentamorphs@gmail.com</p>
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="bg-purple-700 w-full flex py-4 flex-col justify-center items-center">
        <p>&copy; {new Date().getFullYear()} PentaMorphs. All rights reserved.</p>
        <p>DISCLAIMER: This website does not belong to a real company. It is a Planspiel Web Engineering project.</p>
      </div>
    </footer>

  )
}

export default Footer