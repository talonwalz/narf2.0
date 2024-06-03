import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import BlogData from '../BlogData.json'

function PostSingle() {
    const [data, setData] = useState({})
    useEffect(() => {
      setData(BlogData)
    }, [])
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">
          {
             data.Blogs ? 
            <article>
            
              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-20">
                {/* Title */}
                <h1 className="h1 text-center mb-4">{data.Blogs.title}</h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>

                {/* Sidebar */}
                <aside className="relative hidden lg:block w-64 mr-20 flex-shrink-0">
                  <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                    <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Table of contents</h4>
                    <ul className="font-medium -my-1">
                      <li className="py-1">
                        <HashLink smooth to="#introduction" className="flex items-center hover:underline">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Introduction</span>
                        </HashLink>
                      </li>
                      <li className="py-1">
                        <HashLink smooth to="#general" className="flex items-center hover:underline">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>General content</span>
                        </HashLink>
                      </li>
                      <li className="py-1">
                        <HashLink to="#additional" className="flex items-center hover:underline" >
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Additional reading</span>
                        </HashLink>
                      </li>
                      <li className="py-1">
                        <HashLink to="#conclusion" className="flex items-center hover:underline">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Conclusion</span>
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </aside>

                {/* Main content */}
                <div>

                  {/* Article meta */}
                 <div className="flex items-center mb-6">
                    <div className="flex flex-shrink-0 mr-3">
                      <a className="relative" href="#0">
                        <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                        <img className="relative rounded-full" src={require('../images/news-author-04.jpg').default} width="32" height="32" alt="Author 04" />
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="font-medium hover:underline" href="#0">{data.Blogs.author}</a>
                      <span className="text-gray-600">{data.Blogs.date}</span>
                    </div>
                  </div>
                  <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                  {/* Article body */}
                  <div id="introduction" className="text-lg text-gray-600" style={{ scrollMarginTop: '100px' }}>
                    <p className="mb-8">
                     {data.Blogs.introduction}
                    </p>
                    <figure className="mb-8">
                      <img className="w-full rounded" src={require('../images/news-single.jpg').default} width="768" height="432" alt="Blog single" />
                    </figure>
                    <h3 id="general" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>General content</h3>
                    <p className="mb-8">
                      {data.Blogs.general_content}
                    </p>
                    <ul className="list-disc list-inside mb-8">
                      <li className="mb-1"><strong className="font-medium text-gray-900">E-commerce</strong>: Better lorem ipsum generator.</li>
                      <li className="mb-1"><strong className="font-medium text-gray-900">Booking</strong>: Lorem ipsum post generator.</li>
                      <li className="mb-1"><strong className="font-medium text-gray-900">Retail</strong>: Generic dummy blog post generator.</li>
                      <li className="mb-1"><strong className="font-medium text-gray-900">On-demand services</strong>: Lorem ipsum generator shortcode.</li>
                    </ul>
                    <p className="mb-8">
                      Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend:
                    </p>
                    <p className="mb-8">
                      <a className="inline-flex items-center text-base text-blue-600 font-medium hover:underline" href="#0">
                        <span>Read Simple on-demand services</span>
                        <svg className="w-3 h-3 fill-current text-blue-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </p>
                    <p className="mb-8">
                      Aenean sed adipiscing <em className="italic">diam donec adipiscing tristique risus nec feugiat</em> auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet.
                    </p>
                    <h4 className="h4 text-gray-900 mb-4">Why support for Business is important</h4>
                    <p className="mb-8">
                      Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend.
                    </p>
                    <blockquote className="italic text-gray-900 font-medium mb-8">
                      “ Mi in nulla posuere sollicitudin. Porttitor eget dolor morbi non arcu risus quis varius quam. Pharetra vel turpis nunc eget lorem dolor sed viverra. Semper auctor neque vitae tempus quam pellentesque nec. “
                                </blockquote>
                    <h3 id="additional" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Additional reading</h3>
                    <p className="mb-8">{data.Blogs.additional_reading}</p>
                    <p className="mb-8"><strong className="font-medium text-gray-900">Mi in nulla posuere sollicitudin:</strong></p>
                    <ul className="list-disc list-inside mb-8">
                      <li className="mb-1">
                        <a className="text-gray-900 underline" href="#0">E-commerce for etter lorem ipsum generator</a>
                      </li>
                      <li className="mb-1">
                        <a className="text-gray-900 underline" href="#0">Booking for lorem ipsum post generator</a>
                      </li>
                      <li className="mb-1">
                        <a className="text-gray-900 underline" href="#0">Retail for generic dummy blog post generator</a>
                      </li>
                      <li className="mb-1">
                        <a className="text-gray-900 underline" href="#0">On-demand services: Lorem ipsum generator shortcode</a>
                      </li>
                    </ul>
                    <h3 id="conclusion" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Conclusion</h3>
                    <p>
                      {data.Blogs.conclusion}
                    </p>

                    <div>
                      <hr className="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                      <div className="mt-8">
                        Interested in more tips like this? Check out <a className="text-gray-900 underline" href="#0">Introducing the Testing Field Guide</a>.
                                    </div>
                      <div className="mt-6">
                        <Link to="/blog" className="inline-flex items-center text-base text-blue-600 font-medium hover:underline">
                          <svg className="w-3 h-3 fill-current text-blue-400 flex-shrink-0 mr-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                          </svg>
                          <span>Back to the blog</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Article footer */}
            </article> :
            null}

          </div>

        </div>
      </div>
    </section>
  );
}

export default PostSingle;