import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Accordion({
  children,
  tag = 'li',
  title,
  active
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef(null);
  const Component = tag;

  useEffect(() => {
    setAccordionOpen(active)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion])

  return (
    <Component>
      <button
        className="flex items-center w-full text-lg font-medium text-center py-5 border-t border-gray-200"
        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        aria-expanded={accordionOpen}
      >
        <svg className="w-4 h-4 fill-current text-yellow-50 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && 'rotate-180'}`} />
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && 'rotate-180'}`} />
        </svg>
        <p className='border-transparent text-teal-50'>{title}</p>
      </button>
      <div
        ref={accordion}
        className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
        style={accordionOpen ? { maxHeight: accordion.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <div className="pb-5">{children}</div>
      </div>
    </Component>
  );
}

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ]),
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
