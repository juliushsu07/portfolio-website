import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>juliushsu07@gmail.com</h5>
            <a href='mailto:juliushsu07@gmail.com'>Send me a message</a>
          </article>
          
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>+1 647 236 6568</h5>
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