import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import HowItWorks from '../sections/HowItWorks'
import Chatbot from '../sections/Chatbot';
// import Team from '../sections/Team'
// import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import CTA from '../sections/CTA';

export default function Home(){
  return (
    <div>
      <Hero />
       <CTA />
      <Services />
      <HowItWorks />
   
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Chatbot />
    </div>
  )
}