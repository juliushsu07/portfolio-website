import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article>
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>juliushsu07@gmail.com</h5>
            <a href='mailto:juliushsu07@gmail.com'>Send me a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' requred />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' row='7' placeholder='Your Message' required />
          <button type='submit' className='btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact