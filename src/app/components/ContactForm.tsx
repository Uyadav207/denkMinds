import React from "react"
import Forms from "./forms/Forms"

const ContactForm = () => {
  return (
    <section
      id="contactform"
      className="flex flex-col md:flex-row min-h-screen"
    >
      <div className="w-full md:w-2/5 bg-contactus-gradient text-white flex flex-col justify-center  transition-opacity duration-300 hover:opacity-95">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Say Hello!
        </h2>
        <div className="flex justify-center">
          <Forms />
        </div>
      </div>
      <div className="w-full md:w-3/5 bg-media-gradient p-10 text-white flex flex-col justify-center transition-opacity duration-300 hover:opacity-95">
        <h2 className="text-4xl font-bold text-white mb-4">
          Stop by our <span className="text-violet-400">studio</span> and share
          your thoughts on your project.
        </h2>
        <p className="text-lg mb-8 p-4">
          We always have great coffee....
        </p>
      </div>
    </section>
  )
}

export default ContactForm
