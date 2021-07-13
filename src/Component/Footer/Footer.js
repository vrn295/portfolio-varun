import './Footer.css';

import { Icon, InlineIcon } from '@iconify/react';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import linkedinIcon from '@iconify/icons-bi/linkedin';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import { useSelector } from 'react-redux';

const Footer = () => {
    const color = useSelector(state => state);
    return(
        <div className='footer-container'>
            <h3>Varun Kumar</h3>
            <div className='footer-social-media-icons'>
                <a href="https://www.facebook.com/profile.php?id=100004948182828" target='_blank'>
                    <Icon 
                        icon={facebookFill} 
                        style={{fontSize: '1.8rem'}}
                        color={color.backgroundColor.secondaryColor}
                    />
                </a>
                <a href="https://www.instagram.com/vrn_295/" target='_blank'>
                    <Icon 
                        icon={instagramFill} 
                        style={{fontSize: '1.8rem'}}
                        color={color.backgroundColor.secondaryColor} 
                    />
                </a>
                <a href="https://www.linkedin.com/in/varun-kumar-0065851a7/" target='_blank'>
                    <Icon 
                        icon={linkedinIcon} 
                        style={{fontSize: '1.8rem'}}
                        color={color.backgroundColor.secondaryColor} 
                    />
                </a>
                <a href="https://github.com/vrn295" target='_blank'>
                    <Icon 
                        icon={githubFill} 
                        style={{fontSize: '1.8rem'}}
                        color={color.backgroundColor.secondaryColor} 
                    />
                </a>
            </div>
        </div>
    )
} 

export default Footer