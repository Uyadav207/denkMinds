import React from 'react'
import Forms from './forms/Forms'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons' // Import icons
import { faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  return (
    <section id="contact" className="flex flex-col md:flex-row min-h-screen bg-background-home opacity-80" >
      <div className="w-full md:w-2/5 text-white flex flex-col pt-20 transition-opacity duration-300 p-10 ">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
          Say Hello!
        </h2>
        <div className="flex justify-center">
          <Forms />
        </div>
      </div>
      <div className="w-full md:w-3/5 text-white flex flex-col pt-20 transition-opacity duration-300 p-10">
        <h2 className="text-5xl font-bold text-white mb-4">
          <span className="text-[#FFA1DF]">Stop in</span>, get to know us, and let's see how we can work together.
          {/* Stop by our <span className="text-violet-400">studio</span> and share
          your thoughts on your project. */}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-8">
          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <p className="text-xl">Reichenhainer Str 37,</p>
              <p className="text-xl">Chemnitz, Saxony, Germany</p>
              <p className="pt-10 text-xl">
                <Link
                  href="https://maps.app.goo.gl/UappjGQQoEHy8CZw6"
                  className="underline-onhover text-[#FFA1DF] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                >
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  <span className="hover-color-text underline-white pl-3">
                    Map
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Us */}

          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <p className="text-xl pb-4">Get to know us</p>
              <div className="flex mt-4 md:mt-0 gap-9">
                <Link
                  href="https://www.linkedin.com/company/denkminds/"
                  className="hover:text-[#FFA1DF]"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                  href="https://x.com/denkminds"
                  className="hover:text-[#FFA1DF]"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Twitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </Link>
                <Link
                  href="mailto:denkminds@gmail.com"
                  className="hover:text-[#FFA1DF]"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Send us an email"
                >
                  <FontAwesomeIcon icon={faAt} size="2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
