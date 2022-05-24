import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logoIcon.png';


function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Narf">
                <img src={logo} alt="audimojis"/>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="text-gray-800 font-medium mb-2">Address</h6>
            <p className='text-gray-600 text-sm'>480 S. Willard St Cottonwood, AZ 86326</p>
            <h6 className="text-gray-800 font-medium mt-2 mb-2">Phone</h6>
            <p className='text-gray-600 text-sm'>928-649-9726</p>
            <h6 className="text-gray-800 font-medium mt-2 mb-2">Hours</h6>
            <p className='text-gray-600 text-sm mb-1'>7AM - 6PM Tuesday - Friday</p>
            <p className='text-red-600 text-sm'>*Closed Saturday - Monday</p>
            {/* <ul className="text-sm">
              <li className="mb-2">
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</Link>
              </li>                           
            </ul> */}
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/treatments" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/team" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact-us" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact us</Link>
              </li>
              <li className="mb-2">
                <Link to="/new-patient" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">New Patients</Link>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/contact-us#hours" className="smooth-scroll text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Hours</HashLink>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
            </ul>
          </div> */}

          {/* 5th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  Success message 
                  <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p>
                </div>
              </div>
            </form>
          </div>           */}

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a href="https://www.google.com/search?q=northern+arizona+rehab+and+fitness&rlz=1C5CHFA_enUS939US939&sxsrf=ALeKk01GrOB8Kt4JBAPwqzUz-jI3EGUq2A%3A1618265615150&ei=D8Z0YJDFCMmUtAbi0rTABA&oq=norther&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIFCAAQkQIyBQguEJECMgoILhCHAhCxAxAUMgUIABCRAjIFCAAQkQIyBQguEJECMgUIABCxAzIFCAAQsQMyDQguEIcCEMcBEK8BEBQ6BwgjELADECc6BwgAEEcQsAM6EAguEMcBEKMCELADEMgDEEM6CgguELADEMgDEENKBQg4EgExUKMJWKMJYLUQaAFwAngAgAGPAYgBjQKSAQMwLjKYAQCgAQGqAQdnd3Mtd2l6yAEPwAEB&sclient=gws-wiz" target="_blank" rel="noreferrer"  className="flex justify-center items-center text-gray-900 hover:text-yellow-50 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Google">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16 relative top-3 left-3 md:top-4 md:left-4 fill-current bi bi-google" fill="currentColor" viewBox="0 0 32 32">
               <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg>
              </a>
            </li>
            {/* <li className="ml-4">
              <Link to="#" className="flex justify-center items-center text-gray-900 hover:text-gray-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172"><g transform="translate(25.8,25.8) scale(0.7,0.7)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none" stroke="none"></path><g fill="#000000" stroke="none"><path d="M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z"></path></g></g></g></svg>
              </Link>
            </li> */}
            <li className="ml-4">
              <a href="https://www.facebook.com/norazrehab" target="_blank" rel="noreferrer"  className="flex justify-center items-center text-gray-900 hover:text-yellow-50 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-12 h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Northern Arizona Rehabilitation & Fitness LLC. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
