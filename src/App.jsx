import { useState } from 'react'
import { BrowserRouter, } from "react-router-dom" ;
import './App.css'


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {

  return (
    <BrowserRouter>
      <div className="scroll-smooth ">
      <Navbar />
      <Hero />
      <Info />
      {/* <Services/> */}
      {/* <Info2 /> */}
      {/* <Testimonial/> */}
      {/* <Contact /> */}
      </div>
      
      
    </BrowserRouter>
  )
}

export default App