import { useSelector } from 'react-redux';
import './Services.css';
import WebDeveloperIcon from '../Media/Web developer icon.png'
import DesignerIcon from '../Media/Designer icon.png'

const Services = () => {
    let first_letter_2 = "My"
    let second_letter_2 = "Services"
    first_letter_2 = first_letter_2.split("")
    second_letter_2 = second_letter_2.split("")
    const color = useSelector(state => state);
    return(
        <div className='container'>
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
        </div>
    )
} 

export default Services