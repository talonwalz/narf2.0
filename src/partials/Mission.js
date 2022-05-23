import React, { } from 'react';
// import Transition from '../utils/Transition.js';

function Mission() {

//   const [tab, setTab] = useState(1);

//   const tabs = useRef(null);

//   const heightFix = () => {
//     if (tabs.current.children[tab-1]) {
//       tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
//     }
//   }

//   useEffect(() => {
//     heightFix()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tab])

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
          <p style={{textIndent: "40px"}} className='text-lg'>It is our mission to create an enjoyable family atmosphere and rewarding work environment where you are happy, love being here and can reach your individual aspirations and goals. Our entire staff is made up of very creative and high toned people who are committed to providing you with safe, effective and creative treatments. We promise to listen, understand and genuinely care about you and your condition. We will provide you with this level of service in a friendly, fun and compassionate atmosphere.</p>
          <br/>
          <p style={{textIndent: "40px"}} className='text-lg'>At Northern Arizona Rehabilitation & Fitness, PC we specialize in treatment for all injuries to the spine, shoulder, elbow, wrist/hand, hip, knee and foot/ankle. At any time during the day, our clinic is filled with athletes and non-athletes alike ranging in age from 5-100.</p>
          <br/>
          <p style={{textIndent: "40px"}} className='text-lg'>All our physical therapists are licensed by the state of Arizona and are actively involved in your program throughout the course of treatment. Your treatment will include a comprehensive initial examination and the development of an individualized treatment plan. Our rehabilitation environment allows for close supervision and personalized care; this ensures your program is performed safely and correctly. When it comes to physical therapy, we know you have a choice and we truly appreciate you choosing us!</p>

          {/* Section content */}
          <div className="pt-12 md:pt-10 md:grid md:grid-cols-12 md:gap-6">
          </div >
        </div >
      </div >
    </section >
  );
}

export default Mission;