import React from 'react'
import './services.css'
import {FiCheckSquare} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>  
            <ul className="service__list">
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>User research: Experience conducting user research, analyzing user needs and behaviors, and creating personas.</p>
              </li>
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>Information architecture: Ability to organize complex information into clear, concise structures that are easy for users to navigate.</p>
              </li>
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>Wireframing and prototyping: Proficiency in UX design tools like Sketch, Figma, or Adobe XD to create wireframes and prototypes.</p>
              </li>
            </ul>
          
        </article>
        {/* End of UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Devolopment</h3>
          </div>  
            <ul className="service__list">
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>JavaScript: Knowledge of JavaScript, including proficiency in writing and debugging JavaScript code and using libraries and frameworks like React, Vue.js, or Angular.</p>
              </li>
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>Debugging and troubleshooting: Ability to identify and troubleshoot common web development issues, including browser compatibility issues, JavaScript errors, and CSS layout problems.</p>
              </li>
              <li> 
                <FiCheckSquare className='service__list-icon'/>
                <p>Version control: Experience with version control systems like Git and knowledge of best practices for collaborative development using Git workflows.</p>
              </li>            
            </ul>
          
        </article>
        {/* End of web dev*/}
        
      </div>
      </section>
  )
}

export default Services