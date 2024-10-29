import React from "react"
import Forms from "./forms/Forms"

const ContactForm = () => {
  return (
    <section id="contactform" className="flex min-h-screen">
      <div className="w-2/5 bg-violet-700 p-10 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Say Hello!
        </h2>
        <div className="flex justify-center">
          <Forms />
        </div>
      </div>
      <div className="w-3/5 bg-gray-900 p-10 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold  text-white mb-4">
          Stop by our <span className="text-violet-400">studio</span> and share
          your thoughts on your project.
        </h2>
        <p className="text-lg text-2xl mb-8 p-4">
          We always have great coffee....
        </p>
      </div>
    </section>
  )
}

export default ContactForm
