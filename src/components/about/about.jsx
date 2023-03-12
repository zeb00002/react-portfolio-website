import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbMilitaryAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {GoFileDirectory} from 'react-icons/go'

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
          <div className="about__cards">
            <article className="about__card">
              <TbMilitaryAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Freshie</h5>
              <small>Recently Graduated</small>
            </article>
            <article className="about__card">
              <GoFileDirectory className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rem soluta nemo at adipisci voluptate atque repellendus voluptatem ipsum, excepturi accusamus perferendis, in numquam quasi velit, amet labore! Ipsam, excepturi?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About