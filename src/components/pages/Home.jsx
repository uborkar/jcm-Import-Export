import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import Services from '../sections/Services';
import Counter from '../sections/Counter';
// import Projects from '../sections/Projects';
// import Team from '../sections/Team';
import Blog from '../sections/Blog';
import Testimonial from '../sections/Testimonial';
import "../../assets/css/style.css";

import useMainEffects from '../../hooks/useMainEffects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Counter />
      {/* <Projects /> */}
      {/* <Team /> */}
      <Blog />
      <Testimonial />
    </>
  );
};

export default Home;