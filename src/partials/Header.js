import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Transition from '../utils/Transition.js';
// import Dropdown from '../utils/Dropdown';
import logo from '../images/logoIcon.png';

function Header(props) {

const [mobileNavOpen, setMobileNavOpen] = useState(false);
const [top, setTop] = useState(true);

const trigger = useRef(null);
const mobileNav = useRef(null);
const location = useLocation();

// close the mobile menu on click outside
useEffect(() => {
const clickHandler = ({ target }) => {
  if (!mobileNav.current || !trigger.current) return;
  if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
  setMobileNavOpen(false);
};
document.addEventListener('click', clickHandler);
return () => document.removeEventListener('click', clickHandler);
});

// close the mobile menu if the esc key is pressed
useEffect(() => {
const keyHandler = ({ keyCode }) => {
  if (!mobileNavOpen || keyCode !== 27) return;
  setMobileNavOpen(false);
};
document.addEventListener('keydown', keyHandler);
return () => document.removeEventListener('keydown', keyHandler);
});

// detect whether user has scrolled the page down by 10px 
useEffect(() => {
const scrollHandler = () => {
  window.pageYOffset > 10 ? setTop(false) : setTop(true)
};
window.addEventListener('scroll', scrollHandler);
return () => window.removeEventListener('scroll', scrollHandler);
}, [top]);  

return (
<header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
  <div className="max-w-6xl mx-auto px-5 sm:px-6">
    <div className="flex items-center justify-between h-20 md:h-20">

      {/* Site branding */}
      <div className="flex-shrink-0 mr-4 ">
        {/* Logo */}
        <Link to="/" className="block" aria-label="Cruip" >
          <img className="w-fit h-20" src={logo} alt="audimojis" />
        </Link>
      </div>
      {/* Website Name */}
      {/* <h1><strong>Audiotrocities</strong></h1> */}

      {/* Desktop navigation */}
      <nav className="hidden md:flex md:flex-grow">
      {/* <img src={logo} alt="audimojis"/> */}
        {/* Desktop menu links */}
        <ul className="flex flex-grow justify-end flex-wrap items-center">
        { location.pathname !== '/' ?
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
          </li>
          : null }
          { location.pathname === '/' &&
          <>
            <a href='#home' className='page-scroll text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>Home</a>
            <a href='#features' className='page-scroll text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>Overview</a>
            <a href='#features-blocks' className='page-scroll text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>Services</a>
          </>
        }
        { location.pathname === '/contact-us' &&
        <li>
          <HashLink smooth to="/contact-us#hours" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Hours</HashLink>
        </li>
        }
        <li>
              <Link to="/team" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Team</Link>
        </li>
        {/* {
          location.pathname === '/about' ?
          <>
            <a href='#intro' className='page-scroll text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>About us</a>
            <a href='#team' className='page-scroll text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>Team</a>
          </>
      :
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
            </li>
            } */}
          {/* Take out Tutorials for now */}
          {/* <li>
            <Link to="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
              Tutorials
            </Link>
          </li> */}
          {/* Take out Blog for now */}
          {/* <li>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
        </li>  */}
          <li> 
          <Link to="/new-patient" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">New Patient</Link>
          </li>
          {/* 1st level: hover */}
          {/* <Dropdown title="Resources">
            <li>
              <Link to="/treatments" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">What We Treat</Link>
            </li>
            <li>
              <Link to="/new-patient" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">New Patient</Link>
            </li>
            <li>
              <HashLink smooth to="/contact-us#hours" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Hours</HashLink>
            </li>
          </Dropdown> */}
          
          <li>
              <Link to="/contact-us" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact us</Link>
            </li>
        </ul>

        {/* Desktop sign in links */}
        <ul className="flex flex-grow justify-end flex-wrap items-center">
          {/* <li>
            <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
          </li>
          <li>
            <Link to="/signup" className="btn-sm text-gray-200 bg-teal-50 hover:bg-yellow-50 ml-3">
              <span>Sign up</span>
              <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
              </svg>                  
            </Link>
          </li> */}
        </ul>

      </nav>

      {/* Mobile menu */}
      <div className="flex md:hidden">

        {/* Hamburger button */}
        <button
          ref={trigger}
          className={`hamburger ${mobileNavOpen && 'active'}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>

        {/*Mobile navigation */}
        <div ref={mobileNav}>
          <Transition
            show={mobileNavOpen}
            tag="nav"
            id="mobile-nav"
            className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
            enter="transition ease-out duration-200 transform"
            enterStart="opacity-0 -translate-y-2"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveStart="opacity-100"
            leaveEnd="opacity-0"              
          >
          <ul className="px-5 py-2">
          { location.pathname === '/' ?
          <li>
            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href='#home' className='page-scroll flex text-gray-600 hover:text-gray-900 py-2'>Home</a>
            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href='#features' className='page-scroll flex text-gray-600 hover:text-gray-900 py-2'>Overview</a>
            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href='#features-blocks' className='page-scroll flex text-gray-600 hover:text-gray-900 py-2'>Features</a>
          </li>
          :
          <li>
            <Link to="/" className="flex text-gray-600 hover:text-gray-900 py-2">Home</Link>
          </li>
          }
          { location.pathname === '/contact-us' &&
          <li>
            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href='#hours' className='page-scroll flex text-gray-600 hover:text-gray-900 py-2'>Hours</a>
          </li>
        }
          <li>
              <Link to="/team" className="flex text-gray-600 hover:text-gray-900 py-2">Team</Link>
        </li>
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
              <ul className="pl-4">
                <li>
                  <Link to="/treatments" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">What We Treat</Link>
                </li>
                <li>
                  <Link to="/new-patient" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">New Patient</Link>
                </li>
                <li>
                <HashLink smooth to="/contact-us#hours" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Hours</HashLink>
                </li>
              </ul>
            </li>
              <li className="py-2 my-2 border-b border-gray-200">
              <Link to="/contact-us" className="flex text-gray-600 hover:text-gray-900 py-2">Contact us</Link>
            </li>
              {/* <li>
                <Link to="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> */}
          </ul>
          </Transition>
        </div>

      </div>

    </div>
  </div>
</header>
);
}

export default Header;
