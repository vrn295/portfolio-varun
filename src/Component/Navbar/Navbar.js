import React from 'react';
import './Navbar.css';

const Navbar = ({
    home,
    about,
    portfolio,
    contact,
    isScroll,
    handleScrollClick
}) => {
    return(
        <div className='navbar-hamburger'>
            <div id='navbar-container' className='navbar-container'>
                <ul className='nav-list'  onClick={() => document.getElementById('navbar-container').classList.toggle('navbar-active')}>
                    <li>
                        <span onClick={() => {handleScrollClick(home)}}>Home</span>
                    </li>
                    <li>
                        <span onClick={() => {handleScrollClick(about)}}>About</span>
                    </li>
                    <li>
                        <span onClick={() => {handleScrollClick(portfolio)}}>Portfolio</span>
                    </li>
                    <li>
                        <span onClick={() => {handleScrollClick(contact)}}>Contact</span>
                    </li>
                </ul>
                
            </div>
            <div className="hamburger-container">
                <div className={"hamburger " + (isScroll ? "hamburger-scroll" : "")} onClick={() => document.getElementById('navbar-container').classList.toggle('navbar-active')}>
                    <div className='hamburger-lines hamburger-1'></div>
                    <div className='hamburger-lines hamburger-2'></div>
                    <div className='hamburger-lines hamburger-3'></div>
                </div>
            </div>
        </div>
    )
} 

export default Navbar