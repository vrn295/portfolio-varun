import React, { useRef } from 'react'

import './About.css';
import AboutImage from '../Media/WhatsApp Image 2020-11-24 at 5.57.13 PM.jpeg'
import Resume2021 from '../Media/Resume2021.pdf'
// import { useSelector } from 'react-redux';
import WorkExperience from '../WorkExperience/WorkExperience';
import useOnScreen from '../../Common/intersectionObserver';

const About = () => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    let first_letter = "About"
    let second_letter = "Me"
    first_letter = first_letter.split("")
    second_letter = second_letter.split("")

    let first_letter_3 = "My"
    let second_letter_3 = "Skills"
    first_letter_3 = first_letter_3.split("")
    second_letter_3 = second_letter_3.split("")
    console.log(isVisible)
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
                <img src={AboutImage} alt="Varun Kumar" />
            </div>
            <WorkExperience />
            <div 
                className='skills' 
                ref={ref}
            >
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
                    <div 
                        id={ isVisible ? 'skill-bars' : '' }
                        className='skill-bars-class'
                    >
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>HTML</tag>
                            </div>
                            <div id="progress-line" className='html'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>CSS / Sass</tag>
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
                                <tag className='span'>TypeScript</tag>
                            </div>
                            <div id="progress-line" className='typescript'>
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
                                <tag className='span'>Next JS</tag>
                            </div>
                            <div id="progress-line" className='nextjs'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>GraphQL</tag>
                            </div>
                            <div id="progress-line" className='graphql'>
                                <tag className='span'></tag>
                            </div>
                        </div>
                        <div id="bar">
                            <div id="info">
                                <tag className='span'>Vue</tag>
                            </div>
                            <div id="progress-line" className='vue'>
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