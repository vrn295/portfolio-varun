import React, { useRef, useState } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    var htmlElement = document.querySelector('html')
    htmlElement.setAttribute('background-color', "black")
    
    window.addEventListener('scroll', scrollHandle);
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    }
  },[])

  const home = useRef()
  const about = useRef()
  const portfolio = useRef()
  const contact = useRef()

  function handleScrollClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  const [isScroll, setIsScroll] = useState(false)

  const scrollHandle = () => {
    window.pageYOffset > 100 ? setIsScroll(true) : setIsScroll(false)
  }

  return (
    <div className="App">
      <Navbar
        home={home}
        about={about}
        portfolio={portfolio}
        contact={contact}
        isScroll={isScroll}
        handleScrollClick={handleScrollClick}
      />
      <div ref={home}>
        <Home isScroll={isScroll}/>
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={portfolio}>
        <Portfolio />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
