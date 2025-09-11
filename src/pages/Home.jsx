import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import HowItWorks from '../sections/HowItWorks'
import Chatbot from '../sections/Chatbot';
// import Team from '../sections/Team'
// import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import CTA from '../sections/CTA';
import ServicesPricing from '../sections/ServicesPricing';

export default function Home(){
  return (
    <div>
      <Hero />
       <CTA />
      <Services />
      <ServicesPricing />
      <HowItWorks />
   
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Chatbot />
    </div>
  )
}