import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return(
        <div className='navbar-hamburger'>
            <div id='navbar-container' className='navbar-container'>
                <ul className='nav-list'  onClick={() => document.getElementById('navbar-container').classList.toggle('navbar-active')}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                
            </div>
            <div className='hamburger' onClick={() => document.getElementById('navbar-container').classList.toggle('navbar-active')}>
                <div className='hamburger-lines hamburger-1'></div>
                <div className='hamburger-lines hamburger-2'></div>
                <div className='hamburger-lines hamburger-3'></div>
            </div>
        </div>
    )
} 

export default Navbar