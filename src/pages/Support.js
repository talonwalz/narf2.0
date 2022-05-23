import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import Header from '../partials/Header';
import logo from '../images/logoIcon.png';

import Footer from '../partials/Footer';
import 'react-toastify/dist/ReactToastify.css';

function Support() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('gmail', 'template_7nlu4to', form.current, 'user_xEWI2orbMXf48SBIwv08s')
      .then((result) => {
          console.log(result.text);
          clearForm();
          confirmation();
      }, (error) => {
          failed();
          console.log(error.text);
      });
  };
  const clearForm = () => {
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
    setMessage('');
    setLoading(false);
  }
  const confirmation = () => {
    toast.success('Message Sent', {
      theme: 'colored',
      autoClose: 2500
    })
  }
  const failed = () => {
    toast.error('Message failed to send!',{
      theme: 'colored'
    })
  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow relative">
      {/* Illustration behind hero content */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-2" aria-hidden="true">
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
        {/* Contact section */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-20 pb-12 md:pt-20 md:pb-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2">Send Us A Message</h1>
                <p className='pt-4 text-lg'>Request an appointment, ask us a question about insurance, seek employment opportunities, etc.</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input onChange={e => setFirst(e.target.value)} id="first-name" name="first" value={first} type="text" className="form-input w-full text-gray-800" placeholder="Enter your first name" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input onChange={e=>setLast(e.target.value)} id="last-name" name="last" value={last} type="text" className="form-input w-full text-gray-800" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input onChange={e=>setEmail(e.target.value)} id="email" name="email" value={email} type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="subject">Phone Number <span className="text-red-600">*</span></label>
                    <input onChange={e=>setPhone(e.target.value)} id="phone number" name="phone number" value={phone} type="phone" className="form-input w-full text-gray-800" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="country">Subject</label>
                    <select id="country" name="subject" className="form-select w-full text-gray-500">
                      <option value="Schedule an Appointment">Schedule an Appointment</option>
                      <option value="Insurance Question">Insurance Question</option>
                      <option value="Employment Opportunities">Employment Opportunities</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea onChange={e=>setMessage(e.target.value)} id="message" name="message" value={message} rows="4" className="form-textarea w-full text-gray-800" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-4">
                  <div className="w-full px-3">
                    <button disabled={loading} type="submit" className="btn text-white bg-teal-50 hover:bg-yellow-50 w-full">Send</button>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  By clicking "send" you consent to allow Northern Arizona Rehab & Fitness to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>. Please allow us 1-2 business to get back to you. 
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-gray-100 to-gray-200">
 <div className="max-w-6xl mx-auto px-4 sm:px-6" id="hours">
   <div className="pt-16 pb-16 md:pt-20 md:pb-20">

     {/* Section header */}
     {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
       <h1 className="h1 mb-4" data-aos="zoom-y-out">Get in touch with our team</h1>
       <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Select a category to email the support team or contact us directly by using the form below.</p>
     </div> */}

     {/* Items */}
     <div className="max-w-sm mx-auto grid gap-6 items-center md:max-w-xl" data-aos-id-blocks>

       {/* 1st item */}
       <div className="relative flex flex-col p-6 bg-white  rounded shadow-xl" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-blocks]">
       <img className='m-auto w-2/3' src={logo} alt="Narf"/>
         <h4 className="md:text-2xl text-lg text-center font-bold mt-4">480 S. Willard St.</h4>
         <h4 className="md:text-2xl text-lg text-center font-bold mb-4">Cottonwood, AZ 86326</h4>
         <h4 className="md:text-xl text-lg text-center font-bold mb-4">928-649-9726</h4>
         <div className='flex justify-around px-10 text-lg'>
          <div className='flex-col '>
            <p className="text-gray-600">Monday</p>
            <p className="text-gray-600">Tuesday</p>
            <p className="text-gray-600">Wednesday</p>
            <p className="text-gray-600">Thursday</p>
            <p className="text-gray-600">Friday</p>
            <p className="text-gray-600">Saturday</p>
            <p className="text-gray-600">Saturday</p>
          </div>
          <div className='flex-col'>
            <p className="text-gray-600">Closed</p>
            <p className="text-gray-600">7AM-6PM</p>
            <p className="text-gray-600">7AM-6PM</p>
            <p className="text-gray-600">7AM-6PM</p>
            <p className="text-gray-600">7AM-6PM</p>
            <p className="text-gray-600">Closed</p>
            <p className="text-gray-600">Closed</p>
          </div>
         </div>
       </div>
     </div>

   </div>
 </div>
</section>
        {/* <button onClick={()=>confirmation()}>Success</button>
        <button onClick={()=>failed()}>Failed</button> */}
      </main>
    <ToastContainer />
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Support;

//  {/* Hero section */}
//  <section className="bg-gradient-to-b from-gray-100 to-gray-200">
//  <div className="max-w-6xl mx-auto px-4 sm:px-6">
//    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//      {/* Section header */}
//      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//        <h1 className="h1 mb-4" data-aos="zoom-y-out">Get in touch with our team</h1>
//        <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Select a category to email the support team or contact us directly by using the form below.</p>
//      </div>

//      {/* Items */}
//      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

//        {/* 1st item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//            <g transform="translate(8 8)" strokeWidth="2">
//              <path className="stroke-current text-blue-300" d="M23.778 8.222l-4.242 4.242M23.778 23.778l-4.242-4.242M8.222 23.778l4.242-4.242M8.222 8.222l4.242 4.242" />
//              <circle className="stroke-current text-white" transform="rotate(-45 16 16)" cx="16" cy="16" r="11" fill="none" />
//              <circle className="stroke-current text-blue-300" transform="rotate(-45 16 16)" cx="16" cy="16" r="5" fill="none" />
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Tech Support</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//        {/* 2nd item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <g fill="none" fillRule="evenodd">
//              <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//              <g strokeWidth="2">
//                <path className="stroke-current text-blue-300" d="M24 19v16M13 25h3M16 17l2.1 2.1M32 17l-2.1 2.1M16 34l2.1-2.1M32 34l-2.1-2.1M32 25h3M21 15l-2-2M27 15l2-2" />
//                <path className="stroke-current text-white" d="M27.9 17.2c2.5 1.6 4.1 4.7 4.1 8.3 0 5.2-3.6 9.5-8 9.5s-8-4.3-8-9.5c0-3.6 1.7-6.7 4.1-8.3" />
//                <path className="stroke-current text-white" d="M24 14c-2 0-3.7 1.5-4 3.5 0 0 2 1.5 4 1.5s4-1.5 4-1.5c-.3-2-2-3.5-4-3.5z" strokeLinecap="square" />
//              </g>
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Website Issue</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//        {/* 3rd item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <g fill="none" fillRule="evenodd">
//              <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//              <g strokeWidth="2">
//                <path className="stroke-current text-blue-300" d="M33 16L22 27" />
//                <path className="stroke-current text-white" d="M33 16l-7 19-4-8-8-4z" />
//              </g>
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contact Sales</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//        {/* 4th item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <g fill="none" fillRule="evenodd">
//              <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//              <g strokeWidth="2">
//                <path className="stroke-current text-blue-300" d="M19.799 29.601C21.092 31.61 23.826 33 27 33c.59 0 1.163-.051 1.716-.142L33 35v-4.04c1.241-1.057 2-2.44 2-3.96 0-1.552-.792-2.961-2.081-4.027" />
//                <path className="stroke-current text-white" d="M23 14c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V32l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
//              </g>
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Live Chat</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//        {/* 5th item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <g fill="none" fillRule="evenodd">
//              <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//              <g strokeWidth="2">
//                <path className="stroke-current text-blue-300" d="M26 20l-2.172 2.172a4 4 0 01-5.656 0L18 22l4.929-4.929A7.072 7.072 0 0134 25.7" />
//                <path className="stroke-current text-white" d="M27.266 23.266l3.613 3.613a3 3 0 010 4.242l-1.636 1.636a6 6 0 01-8.486 0l-5.686-5.686A7.072 7.072 0 0120 15" />
//                <path className="stroke-current text-white" d="M30.391 31.609l-3.891-3.89M27.513 33.965l-3.63-3.63" />
//              </g>
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Affiliate Program</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//        {/* 6th item */}
//        <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-blocks]">
//          <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//            <g fill="none" fillRule="evenodd">
//              <circle className="fill-current text-blue-600" cx="24" cy="24" r="24" />
//              <g strokeWidth="2">
//                <path className="stroke-current text-blue-300" d="M29 22h6v11H13V22h5" />
//                <path className="stroke-current text-white" d="M21 25h-3v-3l9-9 3 3z" />
//              </g>
//            </g>
//          </svg>
//          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Billing & Account</h4>
//          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>

//      </div>

//    </div>
//  </div>
// </section>