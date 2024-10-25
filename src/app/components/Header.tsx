import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div>
          <Link href="/">
            <img src={'/logo.png'} alt="Pentamorphs Logo" className="h-16 w-16" /> 
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link 
            href="#about" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            About
          </Link>
          <Link 
            href="#team" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Team
          </Link>
          <Link 
            href="#contact" 
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
