import './Contact.css';
// npm install --save-dev @iconify/react @iconify-icons/gg
import { Icon, InlineIcon } from '@iconify/react';
import profileIcon from '@iconify-icons/gg/profile';
import emailIcon from '@iconify-icons/carbon/email';
import phoneIcon from '@iconify-icons/akar-icons/phone';
import locationAlt from '@iconify-icons/dashicons/location-alt';



const Contact = () => {
    return(
        <div className='contact-container'>
            <h1 className='contact-me'>Contact <span className='color-change'>Me</span></h1>
            <div className='contact-deatils'>
                <div className='contact-form'>
                    <h3>Message Me</h3>
                    <form action="">
                        <input className='name' type="text" name='name' placeholder='Your Name' required/>
                        <input className='email' type="email" name="email" placeholder='Email' required/>
                        <input className='subject' type="text" name='subject' placeholder='Subject' required/>
                        <textarea className='textarea' name="messange" placeholder='Message' required></textarea>
                        <button className='submit-btn' type="submit">Submit</button>
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
                        <p>Delhi India</p>
                    </div>
                    <div className="info-cards">
                        <Icon icon={phoneIcon} />
                        <h4>Phone Number</h4>
                        <p>+91 9582744682</p>
                    </div>
                    <div className="info-cards">
                        <Icon icon={emailIcon} />
                        <h4>E-Mail</h4>
                        <p>varun.org295@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Contact

