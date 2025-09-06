import React, { useEffect, useState } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import Services from '../sections/Services';
import Counter from '../sections/Counter';
import Blog from '../sections/Blog';
import Testimonial from '../sections/Testimonial';
import "../../assets/css/style.css";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Counter />
      <Blog />
      <Testimonial />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="back-to-top btn  btn-lg-square"
          style={{
             backgroundColor: "#FF5E15" ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0 !important', // Remove border radius
            border: 'none'
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      )}
    </>
  );
};

export default Home;