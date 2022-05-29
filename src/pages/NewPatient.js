import React from 'react';
import { Link } from 'react-router-dom';
import forms from '../images/Patientforms.pdf';
import Header from '../partials/Header';

import Footer from '../partials/Footer';

function NewPatient() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="relative">

          {/* Illustration behind content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -mb-64 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                {/* <circle cx="155" cy="443" r="64" /> */}
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-20 pb-12 md:pt-20 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* 404 content */}
                <h1 className="h2 mb-4">New Patient Info</h1>
                <p className='text-left'>To help expedite your first visit, please download, print and complete these forms. Bring them with you when you come in for your first visit. If you choose to fill out the patient form packet at our office, please arrive 10-15 minutes before your appointment to allow enough time to get them completed before your appointment. If you have any questions give us a call.</p>
                <div className="mt-8 flex md:flex-row flex-col md:justify-around w-full md:gap-16">
                  <a href={forms} target="_blank" rel="noreferrer" className="btn text-white bg-teal-50 hover:bg-yellow-50 md:w-1/3 mb-4 sm:w-auto sm:mb-0">Patient Forms</a>
                  <Link to="/contact-us" className="btn text-white bg-teal-50 hover:bg-yellow-50 md:w-1/3 mb-4 sm:w-auto sm:mb-0">Contact Us</Link>
                  {/* <Link to="/" className="btn text-white bg-teal-50 hover:bg-yellow-50 mb-4 md:w-1/3 sm:w-auto sm:mb-0">Home</Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default NewPatient;