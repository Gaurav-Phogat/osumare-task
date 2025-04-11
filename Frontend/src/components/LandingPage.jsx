import React from 'react';
import Hero from './Hero';
import Service from './service';
import Promises from './promises';
import Testimonials from './Testimonials';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Promises/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default LandingPage