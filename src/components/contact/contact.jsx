import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nl7w1rt', 'template_fkfc3ts', form.current, 'FY2Fhg5SmXACNooir')
    e.target.reset();
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="container__options">
          <article className="contact__option">
            < AiTwotoneMail className='contact__options-icon' />
            <h4>Email</h4>
            <h5>szayb77@gmail.com</h5>
            <a href="mailto:szayb77@gmail.com" target= "_blank"> Send a message</a>
            

          </article>

          <article className="contact__option">
            < BsFillTelephoneFill className='contact__options-icon' />
            <h4> Cell Number</h4>
            <h5>+1 (613)863-6287</h5>
            <a href="tel:16138636287" target= "_blank">Make A Call</a>
            

          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder = 'Your message ' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact