import React from 'react';
import Forms from './forms/Forms';

const ContactForm = () => {
  return (
    <section id="contactform" className="flex items-center justify-center min-h-screen p-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-4xl font-bold text-violet-600 text-center mb-8">Contact Us</h2>
        <div className="flex justify-center">
          <Forms />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
