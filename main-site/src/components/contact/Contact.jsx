import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pjkr405', 'template_l3mt9b9', form.current, '1EJHdUabNu79klbBB')
        .then((result) => {
            alert('Email Sent!');
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            alert('There was some ERROR!')
        });        
    };

  return (
    <section id='contact'>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>juliushsu07@gmail.com</h5>
            <a href='mailto:juliushsu07@gmail.com' target='_blank'>Send a message</a>
          </article>
          
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>+1 647 236 6568</h5>
            <a href='https://wa.me/16472366568' target='_blank'>Send a message</a>
          </article>
        
        </div>
        <form ref={form} onSubmit={sendEmail}>
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