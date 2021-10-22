import React from 'react'

import './About.css';
import AboutImage from '../Media/WhatsApp Image 2020-11-24 at 5.57.13 PM.jpeg'
import WebDeveloperIcon from '../Media/Web developer icon.png'
import DesignerIcon from '../Media/Designer icon.png'
import Resume2021 from '../Media/Resume2021.pdf'
import { useSelector } from 'react-redux';

const About = () => {
    let first_letter = "About"
    let second_letter = "Me"
    first_letter = first_letter.split("")
    second_letter = second_letter.split("")
    
    let first_letter_2 = "My"
    let second_letter_2 = "Services"
    first_letter_2 = first_letter_2.split("")
    second_letter_2 = second_letter_2.split("")

    let first_letter_3 = "My"
    let second_letter_3 = "Skills"
    first_letter_3 = first_letter_3.split("")
    second_letter_3 = second_letter_3.split("")
    const color = useSelector(state => state);
    return(
        <div className='about-container'>
            <div>
                <h1 className='about-me about-h1 hover-name-container'>
                    {first_letter.map((letter) => 
                        <p className='name-letter'>{letter}</p>
                    )} 
                    <p>&nbsp;</p>
                    <span className='color-change hover-name-container'>
                        {second_letter.map((letter) => 
                            <p className='name-letter'>{letter}</p>
                        )}
                    </span>
                </h1>
            </div>
            <div className='about-details'>
                <div className='about-details-text'>
                    <h2>I'm
                        <span className='color-change'> Web Developer</span> & 
                        <span className='color-change'> Graphic Designer </span> 
                        based in Delhi, India
                    </h2>
                    <p>I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces. I also have skills in other fields like branding, icon design or web development.</p>
                    <button className='btn btn-download-cv'>
                        <a href={Resume2021} download='Varun-Resume'>Download CV</a>
                    </button>
                </div>
                <img src={AboutImage} alt="My Photo" />
            </div>
            <div className='my-services'>
                <h1 className='my-skills about-h1 hover-name-container'>
                    {first_letter_2.map((letter) => 
                        <p className='name-letter'>{letter}</p>
                    )} 
                    <p>&nbsp;</p>
                    <span className='color-change hover-name-container'>
                        {second_letter_2.map((letter) => 
                            <p className='name-letter'>{letter}</p>
                        )}
                    </span>
                </h1>
                <div className='services'>
                    <div className = 'services-box hover-effect'>
                        <div className='icon-box'>
                            <img style={(color.backgroundColor.name === "white" || color.backgroundColor.name === "light")?{filter: "brightness(0)"}:{  }} src={WebDeveloperIcon} alt="Web Developer Icon"/>
                        </div>
                        <h2>Web Developer</h2>
                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </div>
                    <div className = 'services-box'>
                        <div className='icon-box'>
                            <img style={(color.backgroundColor.name === "white" || color.backgroundColor.name === "light")?{filter: "brightness(0)"}:{  }} src={DesignerIcon} alt="Design Icon"/>
                        </div>
                            <h2>Graphic Designer</h2>
                            <p>I value simple content structure, clean design patterns, and thoughful interactions.</p>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h1 className='my-skills about-h1 hover-name-container'>
                    {first_letter_3.map((letter) => 
                        <p className='name-letter'>{letter}</p>
                    )} 
                    <p>&nbsp;</p>
                    <span className='color-change hover-name-container'>
                        {second_letter_3.map((letter) => 
                            <p className='name-letter'>{letter}</p>
                        )}
                    </span>
                </h1>
                <div id='skill-container'>
                    <div id="skill-bars">
                        <div id="bar">
                            <div id="info">
                                <tag>HTML</tag>
                            </div>
                            <div id="progress-line" className='html'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>CSS</tag>
                            </div>
                            <div id="progress-line" className='css'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>JavaScript</tag>
                            </div>
                            <div id="progress-line" className='javascript'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>C++</tag>
                            </div>
                            <div id="progress-line" className='cpp'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>React</tag>
                            </div>
                            <div id="progress-line" className='react'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>Python</tag>
                            </div>
                            <div id="progress-line" className='python'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default About