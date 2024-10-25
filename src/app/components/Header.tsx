import React from 'react';
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div>
          <a href="/">
            <img src={'/logo.png'} alt="Pentamorphs Logo" className="h-16 w-16" /> 
          </a>
        </div>
        <nav className="flex space-x-6">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            About
          </a>
          <a 
            href="#team" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Team
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
