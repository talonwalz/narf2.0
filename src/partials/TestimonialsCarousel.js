import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function TestimonialsCarousel() {

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const [items] = useState([
    {
      img: 'testimonial-01.jpg',
      alt: 'Testimonial 01',
      quote: '“ I cannot say enough about the exemplary quality of physical therapy I received at Northern Arizona Rehabilitation and Fitness! All of the staff and therapists genuinely care about their clients. When you walk in, you feel welcomed and valued. There is no one-size-fits-all plan of care there. “',
      name: 'Stacy',
      role: 'CEO & Co-Founder',
      team: '@Dropbox',
      link: '#0'
    },
    {
      img: 'testimonial-02.jpg',
      alt: 'Testimonial 02',
      quote: '“ These men and women are awesome! I had gone there years ago and when I needed rehab again a few years back I chose a different rehab for help. What a mistake. I finally have relief and healing at NARF!“',
      name: 'Johnny',
      role: 'Head of Design',
      team: '@Shopify',
      link: '#0'
    },
    {
      img: 'testimonial-03.jpg',
      alt: 'Testimonial 03',
      quote: '“ I received therapy for issues with range of motion after caner treatment. The staff was professional and very committed to their patients outcomes. Could not recommend them more highly."',
      name: 'Steve',
      role: 'Backend Lead',
      team: '@Google',
      link: '#0'
    },
    {
      img: 'testimonial-03.jpg',
      alt: 'Testimonial 03',
      quote: '“ I have been going to them for the past 4 months for shoulder issues. I find the staff knowledgeable, compassionate and professional... always. I highly recommend them."',
      name: 'Carol',
      role: 'Backend Lead',
      team: '@Google',
      link: '#0'
    }
  ]);

  const testimonials = useRef(null);

  const stopAutorotate = () => {
    setAutorotate(null);
  }

  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height = testimonials.current.children[active].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, autorotate])

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-b border-gray-200">
        <div className="py-12 md:py-24">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h2 className="h2 mb-4">See What Our Patients Are Saying About Us</h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p> */}
          </div>
          {/* Carousel area */}
          <div className="max-w-3xl mx-auto">

            {/* Carousel */}
            <div className="relative mt-20" data-aos="zoom-y-out">

              {/* Testimonials */}
              <div className="relative flex items-start border-2 border-teal-50 rounded bg-white z-10" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className="text-center px-12 py-8 pt-20 mx-4 md:mx-0"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 -translate-y-8"
                    enterEnd="opacity-100 scale-100"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 translate-y-8"
                  >
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-teal-50" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                      {/* <img className="relative rounded-full" src={require(`../images/${item.img}`).default} width="96" height="96" alt={item.alt} /> */}
                    </div>
                    <blockquote className="text-sm sm:text-base font-medium mb-4">{item.quote}</blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">{item.name}</cite>
                    {/* <div className="text-gray-600">
                      <span>{item.role}</span> <a className="text-blue-600 hover:underline" href={item.href}>{item.team}</a>
                    </div> */}
                  </Transition>
                ))}

              </div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-yellow-50 shadow-md hover:shadow-lg transform -translate-x-2 md:-translate-x-1/2"
                  onClick={() => { setActive(active === 0 ? items.length - 1 : active - 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-4 h-4 fill-current text-teal-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-yellow-50 shadow-md hover:shadow-lg transform translate-x-2 md:translate-x-1/2"
                  onClick={() => { setActive(active === items.length - 1 ? 0 : active + 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-4 h-4 fill-current text-teal-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;