import React from 'react';
import Forms from './forms/Forms';

const ContactForm = () => {
  return (
    <section id="contactform" className="py-20">
      <h2 className="text-4xl font-bold text-violet-600 text-center mb-10">Contact Us</h2>
      <div className="container mx-auto w-full"> 
        <div className="flex justify-start"> 
          <Forms />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
