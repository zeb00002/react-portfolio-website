import React from 'react'
import './footer.css'
import {DiGithubFull} from 'react-icons/di';
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
  <footer>
    <a href="" className="footer__logo">Shah Zeb</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>

    <div className="footer__socials">
      <a href="https://github.com/zeb00002" target= '_blank'><DiGithubFull /></a>
      <a href="https://www.linkedin.com/in/esszee/" target = '_blank'> <AiFillLinkedin /> </a>
    </div>
    <div className="footer_cr">
      <small>&copy; Shah Zeb. All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer