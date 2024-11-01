import React from "react"
import Forms from "./forms/Forms"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = () => {
  return (
    <section
      id="contactform"
      className="flex flex-col md:flex-row min-h-screen sm:pt-16"
    >
      <div className="w-full md:w-2/5 bg-contactus-gradient text-white flex flex-col pt-20 transition-opacity duration-300 p-10">
        <h2 className="text-6xl font-bold text-white text-center mb-8">
          Say Hello!
        </h2>
        <div className="flex justify-center">
          <Forms />
        </div>
      </div>
      <div className="w-full md:w-3/5 bg-media-gradient text-white flex flex-col pt-20 transition-opacity duration-300 p-10">
        <h2 className="text-5xl font-bold text-white mb-4">
          <span className="text-violet-400">Stop in</span>, get to know us, and let's see how we can work together.
          {/* Stop by our <span className="text-violet-400">studio</span> and share
          your thoughts on your project. */}
        </h2>

        <div className="flex flex-col xl:flex-row gap-10 py-8">
          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <p className="text-xl">Reichenhainer Str 37,</p>
              <p className="text-xl">Chemnitz, Saxony, Germany</p>
              <p className="pt-10 text-xl">
                <Link href="https://maps.app.goo.gl/UappjGQQoEHy8CZw6" className="underline-onhover text-violet-500 hover:text-white" target="_blank" rel="noopener noreferrer" title="Open in Google Maps">
                  <FontAwesomeIcon icon={['fas', 'location-dot']} size="1x" />
                  <span className="hover-color-text underline-white pl-3">Map</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <Link href="mailto:contact.pentamorphs@gmail.com" className="flex items-center gap-2 underline-onhover hover:text-violet-500" title="Send us an email" >
                  {/* <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" /> */}
                  <p className="hover-color-text underline-purple">contact.pentamorphs@gmail.com</p>
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
