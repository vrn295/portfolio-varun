import React from 'react'
import experience from './Experirence'
import './WorkExperience.scss'

const WorkExperience = () => {
  let first_letter = "My"
  let second_letter = "Experience"
  first_letter = first_letter.split("")
  second_letter = second_letter.split("")
  return (
    <div className='container'>
      <h2 className='contact-me hover-name-container'>
        {first_letter.map((letter) =>
          <p className='name-letter'>{letter}</p>
        )}
        <p>&nbsp;</p>
        <span className='color-change hover-name-container'>
          {second_letter.map((letter) =>
            <p className='name-letter'>{letter}</p>
          )}
        </span>
      </h2>
      <main>
        {
          experience.map((item, index) => (
            <section key={index}>
              <h3>
                <span>{item.title}</span>
                &nbsp;@
                <a href={item.conpany_link} target="_blank" rel="noreferrer">
                  {item.conpany}
                </a>
              </h3>
              <span className='time'>{item.time}</span>
              <ul>
                {
                  item.points.map((point, key) => (
                    <li key={key}>{point}</li>
                  ))
                }
              </ul>
            </section>
          ))
        }
      </main>
    </div>
  )
}

export default WorkExperience