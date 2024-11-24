import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Privacy() {
  return (
    <section id="contact" className="w-full bg-background-home opacity-80 text-center" >
      <div className="text-white pt-20 transition-opacity duration-300 p-10">
        <h2 className="text-5xl font-bold text-white mb-4">
          Imprint
        </h2>

        <div className="text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto">
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Responsible for Content</p>
          <p className='text-lg'>denkMinds</p>
        </div>

        <div className='text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto'>
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Address</p>
          <p className="text-lg">Reichenhainer Str 37</p>
          <p className="text-lg">09126 Chemnitz</p>
          <p className="text-lg">Saxony, Germany</p>
          <p className="text-lg">
            <Link
              href="https://maps.app.goo.gl/UappjGQQoEHy8CZw6"
              className="underline-onhover text-[#FFA1DF] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
            >
              <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-sm" />

              <span className="hover-color-text underline-white pl-3">
                Map
              </span>
            </Link>
          </p>
        </div>


        <div className="text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto">
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Contact Information</p>
          <p className="text-lg my-1">
            <Link
              href="mailto:denkminds@gmail.com"
              className="underline-onhover text-[#FFA1DF] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              title="Open mail"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-sm" />

              <span className="hover-color-text underline-white pl-3">
                denkminds@gmail.com
              </span>
            </Link>

          </p>

          <p className='text-lg'>
            <Link
              href="tel:+49 157 54843828"
              className="underline-onhover text-[#FFA1DF] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              title="Call now"
            >
              <FontAwesomeIcon icon={faPhone} size="lg" className="text-sm" />

              <span className="hover-color-text underline-white px-3">
                +49 157 54843828
              </span>
            </Link>

            <Link
              href="tel:+49 157 54843830"
              className="underline-onhover text-[#FFA1DF] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              title="Call now"
            >
              <span className="hover-color-text underline-white">
                / +49 157 54843830
              </span>
            </Link>
          </p>
        </div>

        <div className="text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto">
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Legal Details</p>
          <p className='text-lg'>This website is part of a Planspiel Web Engineering project and does not represent a real company or business entity.</p>
        </div>

        <div className="text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto">
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Copyright</p>
          <p className='text-lg'>&copy; {new Date().getFullYear()} denkMinds. All rights reserved.</p>
        </div>

        <div className="text-white mt-12 text-justify w-full md:w-3/4 xl:w-1/2 mx-auto">
          <p className="text-lg font-bold md:text-xl  leading-relaxed">Disclaimer</p>

          <ul className="mt-8 text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-white">•</span>
              <p>
                <span className="font-bold text-lg md:text-xl">
                  Non-Commercial Use:
                </span>{' '}
                <span className="italic font-medium text-lg md:text-xl">
                  This website is for educational purposes only and does not conduct real business operations.
                </span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-white">•</span>
              <p>
                <span className="font-bold text-lg md:text-xl">
                  External Links:
                </span>{' '}
                <span className="italic font-medium text-lg md:text-xl">
                  We are not responsible for the content of external websites linked here. Responsibility for linked content lies solely with their respective operators.
                </span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-white">•</span>
              <p>
                <span className="font-bold text-lg md:text-xl">
                  Liability:
                </span>{' '}
                <span className="italic font-medium text-lg md:text-xl">
                  The content of this website is provided "as is" and without warranties of any kind.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}
