import React, { } from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../utils/Modal';


function HeroHome() {

  // const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" x2="100%" y1="0%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#a3ccd2" offset="65%" />
              <stop stopColor="#8cc0c7" offset="90%" />
              <stop stopColor="#5ea6b0" offset="90%" />
              <stop stopColor="#19818e" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-24 md:pb-20">

          

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
              {/* <h1 className="text-2xl md:text-4xl font-bold italic leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Empowering Our Community One Person At A Time.</h1> */}
                <img className="mx-auto" src={require('../images/narfBuilding.jpeg').default} width="700" height="auto" alt="Hero" />
                {/* <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg> */}
              </div>
              {/* <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button> */}
              <a className="absolute top-full flex items-center transform -translate-y-1/2 rounded-full font-medium group p-4 shadow-lg bg-gradient-to-t from-teal-5 to-white hover:text-teal-50" href="#features-blocks">
                <span className="ml-6 mr-6">Our Services</span>
              </a>
            </div>
{/* Section header */}
<div className="text-center pb-12 md:pb-16 md:pt-10">
            <h1 className="text-2xl md:text-3xl font-bold italic leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Empowering Our Community One Person At A Time.</h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-50 to-yellow-50">Northern Arizona Rehabilitation and Fitness</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">To promote, enhance, and facilitate the quality of life and the recovery of normal movement for our patients through skilled therapeutic intervention.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link to="/contact-us" className="btn text-white bg-teal-50 hover:bg-yellow-50 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Schedule Appointment</Link>
                </div>
                {/* <div>
                  <a className="btn page-scroll text-white bg-teal-50 hover:bg-yellow-50 w-40 h-12 sm:w-auto sm:ml-4" href="#features">Learn more</a>
                </div> */}
              </div>
            </div>
          </div>
            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;