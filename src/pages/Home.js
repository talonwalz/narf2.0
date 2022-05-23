import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
// import FeaturesWorld from '../partials/FeaturesWorld';
// import News from '../partials/News';
import Cta from '../partials/Cta';
import Mission from '../partials/Mission';
import Footer from '../partials/Footer';
import SmoothScroll from 'smooth-scroll' 

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
  offset: "40"
})

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <FeaturesWorld /> */}
        {/* <News /> */}
        <Mission />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;