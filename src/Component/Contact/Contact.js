import './Contact.css';
import { Icon } from '@iconify/react';
import profileIcon from '@iconify-icons/gg/profile';
import emailIcon from '@iconify-icons/carbon/email';
import phoneIcon from '@iconify-icons/akar-icons/phone';
import locationAlt from '@iconify-icons/dashicons/location-alt';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import emailjs from 'emailjs-com';

const Contact = () => {
    const phoneNumber = "+91 9582744682"
    toast.configure()

    function sendEmail(e) {
        e.preventDefault();emailjs.sendForm('service_c9fpri7', 'template_eq6vsmq', e.target, 'user_3BIAqWrBGSgeAMWtWPQtP')
          .then((result) => {
            toast.success('Message send successfully, Thank You.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          }, (error) => {
            toast.error('Please try again later.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          });
      }
      
    return(
        <div className='contact-container'>
            <h1 className='contact-me'>Contact <span className='color-change'>Me</span></h1>
            <div className='contact-deatils'>
                <div className='contact-form'>
                    <h3>Message Me</h3>
                    <form action="" onSubmit={sendEmail}>
                        <input className='name' type="text" name='name' placeholder='Your Name' required/>
                        <input className='email' type="email" name="email" placeholder='Email' required/>
                        <input className='subject' type="text" name='subject' placeholder='Subject' required/>
                        <textarea className='textarea' name="message" placeholder='Message' required></textarea>
                        <button className='submit-btn btn' type="submit">Submit</button>
                    </form>
                </div>
                <div className='contact-info'>
                    {/* <h3>Contact Info</h3> */}
                    <div className="info-cards">
                        <Icon icon={profileIcon} />
                        <h4>Name</h4>
                        <p>Varun Kumar</p>
                    </div>
                    <div className="info-cards">
                        <Icon icon={locationAlt} />
                        <h4>Location</h4>
                        <p>Delhi, India</p>
                    </div>
                    <div className="info-cards" 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            window.open(`tel:${phoneNumber}`, '_self')
                        }}
                    >
                        <Icon icon={phoneIcon} />
                        <h4>Phone Number</h4>
                        <p>+91 9582744682</p>
                    </div>
                        <a href="mailto:varun.org295@gmail.com?Subject=Hello Varun" className="info-cards" style={{color: "white", textDecoration: "none"}}>
                            <Icon icon={emailIcon} />
                            <h4>E-Mail</h4>
                            <p>varun.org295@gmail.com</p>
                        </a>
                </div>
            </div>
        </div>
    )
} 

export default Contact

