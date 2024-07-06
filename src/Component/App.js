import React, { useRef, useState } from 'react';

import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Portfolio from './Portfolio/Portfolio';

import { useEffect } from "react";
// import Services from './Services/Services';
import InitialLoader from '../Common/InitialLoader';

const App = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  
  const home = useRef()
  const about = useRef()
  // const services = useRef()
  const portfolio = useRef()
  const contact = useRef()

  function handleScrollClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollHandle = () => {
    window.pageYOffset > 100 ? setIsScroll(true) : setIsScroll(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3000);
    var htmlElement = document.querySelector('html')
    htmlElement.setAttribute('background-color', "black")
    
    window.addEventListener('scroll', scrollHandle);
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    }
  },[])

  return (
    <div className="App">
      {
        isLoading && 
        <InitialLoader /> 
      }
      <React.Fragment>
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
          {/* <div ref={services}>
            <Services />
          </div> */}
          <div ref={portfolio}>
            <Portfolio />
          </div>
          <div ref={contact}>
            <Contact />
          </div>
          <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
