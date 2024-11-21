"use client"

import React from 'react';

const Footer = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="w-full text-white flex flex-col md:flex-row p-5 gap-6 justify-between bg-[#0f0a25;]">
        <div className="flex items-center space-x-2 md:flex">
          <p className="text-white font-bold text-2xl">denkMinds</p>
        </div>
        <div className="flex flex-col items-start md:flex-row gap-5 pr-4">
          <button disabled className="underline-onhover text-gray-500 hover:text-white cursor-not-allowed inline-flex">
            <span className="hover-color-text underline-white">Privacy Policy</span>
          </button>
          <button className="underline-onhover text-gray-500 hover:text-white cursor-not-allowed inline-flex">
            <span className="hover-color-text underline-white">Terms & Conditions</span>
          </button>
        </div>
      </div>
      <div className="w-full text-gray-500 flex flex-col p-5 text-center">
        <div className="flex flex-col justify-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} denkMinds. All rights reserved.</p>
          <p className="text-sm">DISCLAIMER: This website does not belong to a real company. It is a Planspiel Web Engineering project.</p>
        </div>
      </div>
    </section>

  );
};

export default Footer;
