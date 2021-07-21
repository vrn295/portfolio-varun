import React from 'react';
import './Home.css';

// Importing Icon from Iconify
import { Icon } from '@iconify/react';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import linkedinIcon from '@iconify/icons-bi/linkedin';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import settingIcon from '@iconify/icons-uil/setting';
import mail16Filled from '@iconify/icons-fluent/mail-16-filled';

import ColorModal from './ColorModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = ({
    isScroll,
    isScrollEnd
}) => {
    const color = useSelector(state => state);
    const [colorModalStatus, setColorModalStatus] = useState(false)

    var firstName = "Varun";
    var firstNameArray = firstName.split('');
    var lastName = "Kumar";
    var lastNameArray = lastName.split('');
    
    return(
        <React.Fragment>
            <div className='home-container'>
                {/* Name Container */}
                <div className="name-container">
                    {/* Printing name letter by letter */}
                    <div className='first-name'>
                        {firstNameArray.map((letter) => (
                            <p className='name-letter'>{letter}</p>
                        ))}
                    </div> 
                    <div className='last-name'>
                        {lastNameArray.map((letter) => (
                            <p className='name-letter'>{letter}</p>
                        ))}
                    </div>
                </div>
                <div className='home-discription typewriter'>
                    <p>I'm a <span className=''>Web Developer</span></p>
                </div>
                <div className={"social-media-icons " + (isScroll ? "social-media-icons-scroll " : "") + (isScrollEnd ? "social-media-icons-scroll-end" : "")}>
                    <a href="https://www.facebook.com/profile.php?id=100004948182828" target='_blank'>
                        <Icon 
                            icon={facebookFill} 
                            style={{fontSize: '1.5rem'}}
                            color={color.backgroundColor.secondaryColor}
                        />
                    </a>
                    <a href="https://www.instagram.com/vrn_295/" target='_blank'>
                        <Icon 
                            icon={instagramFill} 
                            style={{fontSize: '1.5rem'}}
                            color={color.backgroundColor.secondaryColor}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/varun-kumar-0065851a7/" target='_blank'>
                        <Icon 
                            icon={linkedinIcon} 
                            style={{fontSize: '1.5rem'}} 
                            color={color.backgroundColor.secondaryColor}
                        />
                    </a>
                    <a href="https://github.com/vrn295" target='_blank'>
                        <Icon 
                            icon={githubFill} 
                            style={{fontSize: '1.5rem'}} 
                            color={color.backgroundColor.secondaryColor}
                        />
                    </a>
                </div>
                <div className={"message-icons " + (isScroll ? "message-icons-scroll" : "")}>
                    <div className='color-setting-container' style={{zIndex: "10"}}>
                        <div style={{position: "relative"}} onClick = {() => {setColorModalStatus(!colorModalStatus)}} >
                            {/* <p 
                                className="setting-text"
                                style={isScroll ? {opacity: "0"}: {}}
                            >Choose your<br/>Comfort
                            </p> */}
                            <Icon 
                                icon={settingIcon} 
                                style={{fontSize: '2rem'}}
                                color={color.backgroundColor.secondaryColor} 
                            />
                        </div>
                        { colorModalStatus && <ColorModal />}  
                    </div> 
                    <a href="mailto:varun.org295@gmail.com?Subject=Hello Varun">
                        <Icon 
                            icon={mail16Filled} 
                            style={{fontSize: '2rem'}}
                            color={color.backgroundColor.secondaryColor}
                        />
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
} 

export default Home