import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../Media/IMG_9554.jpg";
import "./About.css";
// import { useSelector } from 'react-redux';
import useOnScreen from "../../Common/intersectionObserver";
import WorkExperience from "../WorkExperience/WorkExperience";

const About = () => {
  const [isVisibleOnce, setisVisibleOnce] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setisVisibleOnce(true);
    }
  }, [isVisible]);

  let first_letter = "About";
  let second_letter = "Me";
  first_letter = first_letter.split("");
  second_letter = second_letter.split("");

  let first_letter_3 = "My";
  let second_letter_3 = "Skills";
  first_letter_3 = first_letter_3.split("");
  second_letter_3 = second_letter_3.split("");
  return (
    <div className="about-container">
      <div>
        <h1 className="about-me about-h1 hover-name-container">
          {first_letter.map((letter) => (
            <p className="name-letter">{letter}</p>
          ))}
          <p>&nbsp;</p>
          <span className="color-change hover-name-container">
            {second_letter.map((letter) => (
              <p className="name-letter">{letter}</p>
            ))}
          </span>
        </h1>
      </div>
      <div className="about-details">
        <div className="about-details-text">
          <h2>
            Crafting &nbsp;
            <span className="color-change">User-Centric Experiences</span>
          </h2>
          <p>
            Results-driven Senior Frontend Engineer with over 3 years of
            experience in web development, specializing in JavaScript, HTML,
            CSS, React JS, Next JS, and GraphQL. Proven track record in leading
            frontend teams, optimizing web performance, and improving SEO to
            boost conversion rates. Adept at collaborating with cross-functional
            teams to deliver high-quality, user-centric products.
          </p>
          <div className="resume-btn-container">
            <button className="btn btn-download-cv">
              <a href="/Resume.pdf" target="_blank" rel="noreferrer">
                View resume
              </a>
            </button>
          </div>
        </div>
        <img src={AboutImage} alt="Varun Kumar" />
      </div>
      <WorkExperience />
      <div className="skills" ref={ref}>
        <h1 className="my-skills about-h1 hover-name-container">
          {first_letter_3.map((letter) => (
            <p className="name-letter">{letter}</p>
          ))}
          <p>&nbsp;</p>
          <span className="color-change hover-name-container">
            {second_letter_3.map((letter) => (
              <p className="name-letter">{letter}</p>
            ))}
          </span>
        </h1>
        <div id="skill-container">
          <div
            id={isVisible || isVisibleOnce ? "skill-bars" : ""}
            className="skill-bars-class"
          >
            <div id="bar">
              <div id="info">
                <tag className="span">HTML</tag>
              </div>
              <div id="progress-line" className="html">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">CSS / Sass</tag>
              </div>
              <div id="progress-line" className="css">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">JavaScript</tag>
              </div>
              <div id="progress-line" className="javascript">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">TypeScript</tag>
              </div>
              <div id="progress-line" className="typescript">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">React</tag>
              </div>
              <div id="progress-line" className="react">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">Next JS</tag>
              </div>
              <div id="progress-line" className="nextjs">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">GraphQL</tag>
              </div>
              <div id="progress-line" className="graphql">
                <tag className="span"></tag>
              </div>
            </div>
            <div id="bar">
              <div id="info">
                <tag className="span">Vue</tag>
              </div>
              <div id="progress-line" className="vue">
                <tag className="span"></tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
