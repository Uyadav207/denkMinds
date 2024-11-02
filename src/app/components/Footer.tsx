import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import icons
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 bg-black text-white flex flex-col justify-center transition-opacity duration-300 p-10 pb-30">
        <div className='flex mt-4 md:mt-0 gap-9 md:pl-5'>
          <Link href="https://www.linkedin.com/in/denkminds/" className='hover:text-violet-500' target="_blank" rel="noopener noreferrer" title="Follow us on LinkedIn">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </Link>
          <Link href="https://x.com/denkminds" className='hover:text-violet-500' target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
            <FontAwesomeIcon icon={['fab', 'x-twitter']} size="2x" />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-3/5 bg-black text-white flex flex-col justify-center transition-opacity duration-300 p-10 pb-30">
        <div className="flex flex-col xl:flex-row justify-between py-8">
          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <Link href="/privacy" className="underline-onhover text-violet-500 hover:text-white">
                <span className="text-xl hover-color-text underline-white">Privacy Policy</span>
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex mt-4 md:mt-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <p>&copy; {new Date().getFullYear()} denkMinds. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>DISCLAIMER: This website does not belong to a real company. It is a Planspiel Web Engineering project.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
