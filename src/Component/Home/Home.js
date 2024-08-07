
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

// Importing Icon from Iconify
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import linkedinIcon from '@iconify/icons-bi/linkedin';
import mail16Filled from '@iconify/icons-fluent/mail-16-filled';
import settingIcon from '@iconify/icons-uil/setting';
import { Icon } from '@iconify/react';

// import ColorModal from './ColorModal';
import { useDispatch, useSelector } from 'react-redux';
import { modalBackground, modalPrimary } from "../Redux/action/action";
import './ColorModal.css';


const Home = ({ isScroll }) => {
  const color = useSelector(state => state);
  const [colorModalStatus, setColorModalStatus] = useState(false)

  var firstName = "Varun";
  var firstNameArray = firstName.split('');
  var lastName = "Kumar";
  var lastNameArray = lastName.split('');


  const dispatch = useDispatch();

  const handleSettingClick = () => {
    setColorModalStatus(prev => !prev)
  }

  const colorModalPrimary = (color) => {
    var htmlElement = document.querySelector('html')
    htmlElement.setAttribute('theme-color', color)
    dispatch(modalPrimary(color))
  }
  const colorModalBackground = (color) => {
    var htmlElement = document.querySelector('html')
    htmlElement.setAttribute('background-color', color)
    dispatch(modalBackground(color))
  }

  const myRef = useRef();

  const handleClickOutside = e => {
    if (colorModalStatus && !myRef.current.contains(e.target)) {
      setColorModalStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <React.Fragment>
      <div className="home-container">
        {/* Name Container */}
        <div className="name-container">
          {/* Printing name letter by letter */}
          <div className="first-name">
            {firstNameArray.map((letter) => (
              <p className="name-letter">{letter}</p>
            ))}
          </div>
          <div className="last-name">
            {lastNameArray.map((letter) => (
              <p className="name-letter">{letter}</p>
            ))}
          </div>
        </div>
        <div className="home-discription typewriter">
          <p>
            I'm a <span className="">Software Development Engineer</span>
          </p>
        </div>
        <button className="btn btn-download-cv" style={{ marginTop: "unset" }}>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            View resume
          </a>
        </button>
        <div
          className={
            "social-media-icons " +
            (isScroll ? "social-media-icons-scroll" : "")
          }
        >
          <a
            href="https://www.facebook.com/profile.php?id=100004948182828"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon={facebookFill}
              style={{ fontSize: "1.5rem" }}
              color={color.backgroundColor.secondaryColor}
            />
          </a>
          <a
            href="https://www.instagram.com/vrn_295/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon={instagramFill}
              style={{ fontSize: "1.5rem" }}
              color={color.backgroundColor.secondaryColor}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-kumar-0065851a7/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon={linkedinIcon}
              style={{ fontSize: "1.5rem" }}
              color={color.backgroundColor.secondaryColor}
            />
          </a>
          <a href="https://github.com/vrn295" target="_blank" rel="noreferrer">
            <Icon
              icon={githubFill}
              style={{ fontSize: "1.5rem" }}
              color={color.backgroundColor.secondaryColor}
            />
          </a>
        </div>
        <div
          className={
            "message-icons " + (isScroll ? "message-icons-scroll" : "")
          }
          style={{ zIndex: "10" }}
        >
          <div className="color-setting-container" ref={myRef}>
            <div style={{ position: "relative" }} onClick={handleSettingClick}>
              {/* <p 
                                className="setting-text"
                                style={isScroll ? {opacity: "0"}: {}}
                            >Choose your<br/>Comfort
                            </p> */}
              <Icon
                icon={settingIcon}
                style={{ fontSize: "2rem" }}
                color={color.backgroundColor.secondaryColor}
                className={"setting-icon"}
              />
            </div>
            {
              <ul
                className={`color-box ${
                  colorModalStatus ? "enter-animation" : "leaving-animation"
                }`}
              >
                <p>Primary Color</p>
                <div>
                  <li
                    onClick={() => {
                      colorModalPrimary("default");
                    }}
                    className="default"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalPrimary("pink");
                    }}
                    className="pink"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalPrimary("blue");
                    }}
                    className="blue"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalPrimary("purple");
                    }}
                    className="purple"
                  ></li>
                </div>
                <p>Background Color</p>
                <div>
                  <li
                    onClick={() => {
                      colorModalBackground("black");
                    }}
                    className="black"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalBackground("white");
                    }}
                    className="white"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalBackground("light");
                    }}
                    className="light"
                  ></li>
                  <li
                    onClick={() => {
                      colorModalBackground("dark");
                    }}
                    className="dark"
                  ></li>
                </div>
              </ul>
            }
          </div>
          <a href="mailto:varun.org295@gmail.com?Subject=Hello Varun">
            <Icon
              icon={mail16Filled}
              style={{ fontSize: "2rem" }}
              color={color.backgroundColor.secondaryColor}
            />
          </a>
        </div>
      </div>
      {
        <div
          className={`${
            isScroll
              ? "color-selection-tab-scroll"
              : "color-selection-tab-bottom"
          }`}
        >
          <div
            className={
              color.primaryColor === "default" ||
              color.primaryColor?.name === "primary" ||
              color.primaryColor === ""
                ? "selected-color"
                : ""
            }
          >
            <li
              onClick={() => {
                colorModalPrimary("default");
              }}
              className="default"
            ></li>
          </div>
          <div
            className={color.primaryColor === "pink" ? "selected-color" : ""}
          >
            <li
              onClick={() => {
                colorModalPrimary("pink");
              }}
              className="pink"
            ></li>
          </div>
          <div
            className={color.primaryColor === "blue" ? "selected-color" : ""}
          >
            <li
              onClick={() => {
                colorModalPrimary("blue");
              }}
              className="blue"
            ></li>
          </div>
          <div
            className={color.primaryColor === "purple" ? "selected-color" : ""}
          >
            <li
              onClick={() => {
                colorModalPrimary("purple");
              }}
              className="purple"
            ></li>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Home