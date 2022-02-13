import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section id="features" className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h2 mb-4">Our Mission</h1>
            {/* <p className="text-xl text-gray-600">Pick any emoji and send it with sound.</p> */}
          </div>

          {/* Top image */}
          {/* <div className="pb-12 md:pb-16">
            <img src={require('../images/features-top-image.png').default} width="1104" height="325" alt="Features top" />
          </div> */}
          <p>It is our mission to create an enjoyable family atmosphere and rewarding work environment where you are happy, love being here and can reach your individual aspirations and goals. Our entire staff is made up of very creative and high toned people who are committed to providing you with safe, effective and creative treatments. We promise to listen, understand and genuinely care about you and your condition. We will provide you with this level of service in a friendly, fun and compassionate atmosphere.</p>
          <br/>
          <p>At Northern Arizona Rehabilitation & Fitness, PC we specialize in treatment for all injuries to the spine, shoulder, elbow, wrist/hand, hip, knee and foot/ankle. At any time during the day, our clinic is filled with athletes and non-athletes alike ranging in age from 5-100.</p>
          <br/>
          <p>All our physical therapists are licensed by the state of Arizona and are actively involved in your program throughout the course of treatment. Your treatment will include a comprehensive initial examination and the development of an individualized treatment plan. Our rehabilitation environment allows for close supervision and personalized care; this ensures your program is performed safely and correctly. When it comes to physical therapy, we know you have a choice and we truly appreciate you choosing us!</p>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Providing Exceptional Treatment on Land and in Water</h3>
                {/* <p className="text-xl text-gray-600">Tap the emoji to bring it to life. Audiomojis brings a whole new level to messaging.</p> */}
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-teal-50 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Our Gym</div>
                    <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-teal-50 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Our Pool</div>
                    <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                {/* <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-teal-50 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Example 3</div>
                    <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a> */}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/gymImg.jpeg').default} width="500" height="375" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-home-element-01.png').default} width="500" height="147" alt="Element 01" style={{ top: '22%' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={require('../images/features-home-element-02.png').default} width="500" height="158" alt="Element 02" style={{ top: '39%' }} />
                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={require('../images/features-home-element-03.png').default} width="500" height="167" alt="Element 03" style={{ top: '77%' }} /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/poolImg.jpg').default} width="500" height="375" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={require('../images/features-home-element-03.png').default} width="500" height="167" alt="Element 03" style={{ top: '18%' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={require('../images/features-home-element-02.png').default} width="500" height="158" alt="Element 02" style={{ top: '40%' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-home-element-01.png').default} width="500" height="147" alt="Element 01" style={{ top: '79%' }} /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                {/* <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-home-bg-01.png').default} width="500" height="375" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-home-element-01.png').default} width="500" height="147" alt="Element 01" style={{ top: '22%' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={require('../images/features-home-element-02.png').default} width="500" height="158" alt="Element 02" style={{ top: '39%' }} />
                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={require('../images/features-home-element-03.png').default} width="500" height="167" alt="Element 03" style={{ top: '77%' }} />
                  </div>
                </Transition> */}
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default FeaturesHome;
