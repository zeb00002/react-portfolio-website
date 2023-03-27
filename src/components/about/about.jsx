import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          
          <p>
          Front-end web developer skilled in bringing designs to life using HTML, CSS, JavaScript and other front-end technologies. Experience with various web development frameworks and libraries, and thrive in fast-paced environments
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About