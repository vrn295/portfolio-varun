import './Portfolio.css';
import TrimEmpire from '../Media/Trim-Empire.png'  
import Zephyr from '../Media/Zephyr.png'  
import PigGame from '../Media/Pig-Game.png'  
import Todo from '../Media/ToDo.png'  

const Portfolio = () => {
    let first_letter = "My"
    let second_letter = "Portfolio"
    first_letter = first_letter.split("")
    second_letter = second_letter.split("")

    return(
        <div className='portfolio-container'>
            <h1 className='my-portfolio hover-name-container'>
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
            <div className='my-work'>
                <div className='work-list'>
                    <img src={TrimEmpire} alt="Trim-Empire"/>
                    <div className='portfolio-overlay'></div>
                    <caption>
                        <h2>Trim Empire</h2>
                        <p>Trim Empire is a Responsive Barber Website</p>
                        <a href="https://trim-empire.netlify.app/" target='_blank' rel="noreferrer"><button>Visit Website</button></a>
                    </caption>
                </div>
                <div className='work-list'>
                    <img src={Zephyr} alt="Zephyr"/>
                    <div className='portfolio-overlay'></div>
                    <caption>
                        <h2>Zephyr</h2>
                        <p>Zephyr is a website for Film And Photography Society of my College</p>
                        <a href="https://www.zephyrcvs.com//" target='_blank' rel="noreferrer"><button>Visit Website</button></a>
                    </caption>
                </div>
                <div className='work-list'>
                    <img src={PigGame} alt="Pig-Game"/>
                    <div className='portfolio-overlay'></div>
                    <caption>
                        <h2>Pig Game</h2>
                        <p>Pig Game is a dice game in which the first who scores 100 wins.</p>
                        <a href="https://vrn295-pig-game.netlify.app/" target='_blank' rel="noreferrer"><button>Visit Website</button></a>
                    </caption>
                </div>
                <div className='work-list'>
                    <img src={Todo} alt="ToDo app"/>
                    <div className='portfolio-overlay'></div>
                    <caption>
                        <h2>ToDo App</h2>
                        <p>This is simple todo app made with the help of Django</p>
                        <a href="http://vrn295.pythonanywhere.com/" target='_blank' rel="noreferrer"><button>Visit Website</button></a>
                    </caption>
                </div>
            </div>
        </div>
    )
} 

export default Portfolio