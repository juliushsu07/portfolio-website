import React from 'react'
import './about.css'
import {TbNotebook} from 'react-icons/tb'
import {TbSchool} from 'react-icons/tb'
import {FaProjectDiagram} from 'react-icons/fa'

import {DiJavascript} from 'react-icons/di'
import {FaPython} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
// import {SiStyledcomponents} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiFlask} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {DiLinux} from 'react-icons/di'
import {GrDocker} from 'react-icons/gr'



function About() {
  
  return (
    <section id="about"> 
      <h2>About Me</h2>
      
      <div className='my__stack'>
        <small>
          <DiJavascript />Javascript&nbsp;&nbsp;
          <FaPython />Python&nbsp;&nbsp;
          <FaReact />ReactJs&nbsp;&nbsp;
          <SiRedux />Redux&nbsp;&nbsp;
          <AiFillHtml5 />HTML5&nbsp;&nbsp;
          <DiCss3 />CSS3&nbsp;&nbsp;
          <DiBootstrap />Bootstrap&nbsp;&nbsp;
          <DiSass />Sass&nbsp;&nbsp;
          {/* <SiStyledcomponents />Styled Components&nbsp;&nbsp; */}
          <FaNodeJs />NodeJS&nbsp;&nbsp;
          <SiExpress />ExpressJS&nbsp;&nbsp;
          <SiFlask />Flask&nbsp;&nbsp;
          <SiMongodb />MongoDB&nbsp;&nbsp;
          <AiOutlineConsoleSql />SQL&nbsp;&nbsp;
          <DiLinux />Linux&nbsp;&nbsp;
          <GrDocker />Docker&nbsp;&nbsp;
        </small>
      </div>

      <div className='container about__container'>
        <div className ="about__content">
            <p>I'm a positive, enthusiastic and competent Full Stack Developer, seeking long-term employment with a company where I can immerse myself in their brand and ambitions!
              <br></br>
              <br></br>
              During my last 4+ years working as a Software Engineer and a Senior Operation Specialist, I have gained a lot of experience in building web applications using ReactJS as the front-end and NodeJS and ExpressJS as the back-end with MongoDB. I enjoy taking on new challenges, and I learn new kits and frameworks in my free time to stay updated with current technology. I strive to write better code that meets first-class standards, and I desire to make an impact in the world of software development!
            </p>

          <div className='about__cards'>   
            <a href="https://github.com/juliushsu07" target="_blank" className='about__card'>
              <FaProjectDiagram /> 
              <h5>Git</h5>
              <small> 17 projects</small>
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