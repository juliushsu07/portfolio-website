import React from 'react'
import './about.css'
import {TbNotebook} from 'react-icons/tb'
import {TbSchool} from 'react-icons/tb'
import {FaProjectDiagram} from 'react-icons/fa'

import {FaReact} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {DiBootstrap} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {DiLinux} from 'react-icons/di'


function About() {
  
  return (
    <section id="about"> 
      <h2>About Me</h2>
      
      <div className='my__stack'>
        <small>
          <DiJavascript />Javascript&nbsp;&nbsp;
          <AiFillHtml5 />HTML5&nbsp;&nbsp;
          <DiCss3 />CSS3&nbsp;&nbsp;
          <FaReact />ReactJs&nbsp;&nbsp;
          <SiRedux />Redux&nbsp;&nbsp;
          <DiBootstrap />Bootstrap&nbsp;&nbsp;
          <FaNodeJs />NodeJS&nbsp;&nbsp;
          <SiExpress />ExpressJS&nbsp;&nbsp;
          <SiMongodb />MongoDB&nbsp;&nbsp;
          <AiOutlineConsoleSql />SQL&nbsp;&nbsp;
          <DiLinux />Linux&nbsp;&nbsp;
        </small>
      </div>

      <div className='container about__container'>
        <div className ="about__content">
            <p>I'm a positive and enthusiastic Full Stack Developer, seeking long-term employment with a company where I can immerse myself in their brand and ambitions!
              <br></br>
              <br></br>
              During my last 4+ years working as a Software Engineer and a Senior Operation Specialist, I have gained a lot of experience in building web applications using ReactJS as the front-end and NodeJS and ExpressJS as the back-end with MongoDB. I enjoy taking on challenges, and I learn new kits and frameworks in my free time to stay updated with current technology. I strive to write better code that meets first-class standards and desire to make an impact in software development!
            </p>

          <div className='about__cards'>   
            <a href="https://github.com/juliushsu07" target="_blank" className='about__card'>
              <FaProjectDiagram /> 
              <h5>Git</h5>
              <small> 15 projects</small>
            </a>
            
            <a href="#experience" className='about__card'>
              <TbNotebook /> 
              <h5>Experience</h5>
              <small>4+ Years</small>
            </a>
            
            <a href="#experience" className='about__card'>
              <TbSchool /> 
              <h5>UBC</h5>
              <small>Bachelor of Comp Eng</small>
            </a>
          </div>

        </div>
      
      </div>
    </section >
  )
}

export default About