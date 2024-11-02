import React from 'react';

const Footer = () => {
  return (
<section className="flex flex-col md:flex-row justify-center">
      <div className="w-full text-white flex flex-col p-10 pb-30 text-center">
        <div className="flex flex-col justify-center">
        <p>&copy; {new Date().getFullYear()} denkMinds. All rights reserved.</p>
        <p>DISCLAIMER: This website does not belong to a real company. It is a Planspiel Web Engineering project.</p>
        </div>
      </div>
    </section>

  );
};

export default Footer;
