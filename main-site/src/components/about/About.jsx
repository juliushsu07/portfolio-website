import React from 'react'
import './about.css'
import {TbNotebook} from 'react-icons/tb'
import {FaProjectDiagram} from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'

function About() {
  
  const CardInformation = [

  ] 
  
  return (
    <section id="about">
      <h5>Get To Know</h5>  
      <h2>About Me</h2>

      <div className='container about__container'>
      
        <div className ="about__content">
          <p>I'm a positive and enthusiastic Full Stack Developer, seeking long-term employment with a company where I can immerse myself in their brand and ambitions!
            <br></br>
            <br></br>
            During my last 4+ years working as a Software Engineer and a Senior Operation Specialist, I have gained a lot of experience in building web applications using ReactJS as the front-end and NodeJS and ExpressJS as the back-end with MongoDB. I enjoy taking on challenges, and I learn new kits and frameworks in my free time to stay updated with current technology. I strive to write better code that meets first-class standards and desire to make an impact in software development!
          </p>

          <div className='about__cards'>   
            
            <article className='about__card'>
              <TbNotebook /> 
              <h5>Experience</h5>
              <small>4+ Years <br></br> Working</small>
            </article>
            
            <article className='about__card'>
              <FaProjectDiagram /> 
              <h5>Git</h5>
              <small> 14 projects<br></br>88,888 comits</small>
            </article>
    
            <article className='about__card'>
              <TbSchool /> 
              <h5>UBC</h5>
              <small>Bachelor of <br></br>Comp Eng</small>
            </article>
          
          </div>

        </div>
      
      </div>
    </section >
  )
}

export default About