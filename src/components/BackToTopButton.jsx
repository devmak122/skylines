import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 200) {  // Adjust the scroll position threshold
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach the scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
        >
         <FontAwesomeIcon icon={faArrowUp}  solid bounce /> 
       
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
