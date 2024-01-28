import { useState } from 'react'
import { BrowserRouter, } from "react-router-dom" ;
import './App.css'


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="scroll-smooth ">
      <Navbar />
      <Hero />
      {/* <Info /> */}
      {/* <Services/> */}
      {/* <Info2 /> */}
      {/* <Testimonial/> */}
      <Contact />
      < Footer />
      </div>
      
      
    </BrowserRouter>
  )
}

export default App
