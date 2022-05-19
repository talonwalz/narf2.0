import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

function PageNotFound() {
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
                {/* <circle cx="155" cy="443" r="64" /> */}
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* 404 content */}
                <h1 className="h1 mb-4">Oh, No! Page not found!</h1>
                <div className="mt-8">
                  <Link to="/" className="btn text-white bg-teal-50 hover:bg-yellow-50">Go back home</Link>
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

export default PageNotFound;