import React from 'react';

function Cta() {

  return (
    <section id="download">
      <div className="max-w-6xl mt-20 mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-teal-50 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Ready to give our a app a try?</h3>
                {/* <p className="text-white text-lg opacity-75">We have a generous free tier available to get you started right away.</p> */}
              </div>

              {/* CTA button */}
              <div >
              <a className="appstorebtn w-full h-8 mb-4 sm:w-auto sm:mb-0" href="https://apps.apple.com/us/app/spotify-new-music-and-podcasts/id324684580?itsct=apps_box_badge&amp;itscg=30200" target="_blank" rel="noreferrer">
                  <img className="h-16" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1310601600&h=e49e169c7275536c6c3a2aac56e43a1d" alt="Download on the App Store"/>
                </a>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
