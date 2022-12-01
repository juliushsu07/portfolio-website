import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbNotebook} from 'react-icons/tb'
import {FaProjectDiagram} from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>  
      <h2>About Me</h2>
      <div className='about__me'></div>
        <div className='about__me-image'>
          <img src={ME} alt='About Image' />
        </div>
    
    <div className ="about__content">
      <div className='about__cards'>   
        
      <article className='about__card'>
          <TbNotebook /> 
          <h5>Experience</h5>
          <small>4+ Years Working</small>
        </article>
        
        <article className='about__card'>
          <FaProjectDiagram /> 
          <h5>Projects</h5>
          <small> 14 projects and 88,888 comits</small>
        </article>
 
        <article className='about__card'>
          <TbSchool /> 
          <h5>UBC</h5>
          <small>Bachelor of Computer Engineering</small>
        </article>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque ipsam ipsa delectus deleniti provident magni sit. Aspernatur temporibus ipsam maiores iure. Itaque aperiam ea quo omnis, dicta quidem obcaecati.</p>
        
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
    </div>
    </section >
  )
}

export default About