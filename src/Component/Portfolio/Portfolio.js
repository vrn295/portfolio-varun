import './Portfolio.css';
import {portfolioData} from './PortfolioData'

const Portfolio = () => {
    return(
        <div className='portfolio-container'>
            <h1 className='my-portfolio'>My <span className='color-change'>Portfolio</span></h1>
            <div className='my-work'>
            <ul className='portfolio-list'>
                {/* {portfolioData.map((data, key) =>{
                    return (
                        
                    )
                } )} */}
            </ul>
            </div>
        </div>
    )
} 

export default Portfolio