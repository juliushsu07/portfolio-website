import React from 'react'
import { InView } from 'react-intersection-observer';

import './about.css'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {FaReact,FaNodeJs, FaPython, FaAws} from 'react-icons/fa'
import {GrMysql, GrDocker} from 'react-icons/gr'
import {DiCss3, DiJavascript, DiBootstrap, DiSass, DiLinux, DiGit} from 'react-icons/di'
import {SiTypescript, SiRedux, SiStyledcomponents, SiExpress, SiFlask, SiMongodb, SiPostgresql, SiFirebase, SiPostman, SiNginx, SiJirasoftware } from 'react-icons/si'

const About = ( {setActiveNav} ) => {
  return (
    <section id="about"> 
      <div className='container about__container'>
        <h2>About Me</h2>
        <InView as="div" onChange={(inView) => {inView ? setActiveNav('#about') : void(0) } }></InView>
        <div className ="about__content">
            <p>Enthusiastic and hardworking professional with 4+ years experience working as an Ad Operation Specialist - Scripter and 1 to 2 years of experience in full stack web development, seeking long-term employment with a company where I can immerse myself in their brand and ambitions!</p>
            <p>During my 4+ years in Cluep Inc, I have worked closely with the engineering team on some scrum releases, outside of my Ad Ops duties. I built many software features for the company’s internal admin dashboard, which used ReactJS as frontend, Node and ExpressJS as backend with MongoDB. I constantly took initiatives to provide software solutions that helped automate time-consuming tasks, and I have also built a full stack CRUD app from scratch for the Ad Ops team .</p>

          <div className='about__cards'>   
            <a className='about__card'>
              <h5>FRONTEND</h5>
              <ul>
                <li>&nbsp;<AiFillHtml5 /> HTML5</li>
                <li>&nbsp;<DiCss3 /> CSS3</li>
                <li>&nbsp;<DiJavascript /> Javascript</li>
                <li>&nbsp;<SiTypescript /> Typescript</li>
                <li>&nbsp;<FaReact /> ReactJs</li>
                <li>&nbsp;<SiRedux /> Redux</li>
                <li>&nbsp;<DiBootstrap /> Bootstrap</li>
                <li>&nbsp;<SiStyledcomponents /> Styled-components</li>
              </ul>
            </a>
            <a className='about__card'>
              <h5>BACKEND</h5>
              <ul>
                <li>&nbsp;<FaNodeJs /> NodeJS</li>
                <li>&nbsp;<SiExpress /> ExpressJS</li>
                <li>&nbsp;<FaPython /> Python</li>
                <li>&nbsp;<SiFlask /> Flask</li>
                <li>&nbsp;<SiMongodb /> MongoDB</li>
                <li>&nbsp;<GrMysql /> MySQL</li>
                <li>&nbsp;<SiPostgresql /> PostgreSQL</li>
              </ul>
            </a>  
            <a className='about__card'>
              <h5>DEVOPS-TOOLS</h5>
              <ul>
                <li>&nbsp;<DiLinux /> Linux</li>
                <li>&nbsp;<SiFirebase /> Firebase</li>
                <li>&nbsp;<FaAws /> AWS</li>
                <li>&nbsp;<DiGit /> Git</li>
                <li>&nbsp;<AiFillGithub /> GitHub</li>
                <li>&nbsp;<GrDocker /> Docker</li>
                <li>&nbsp;<SiJirasoftware /> Jira</li>
                <li>&nbsp;<SiPostman /> Postman</li>
                {/* <li>&nbsp;<SiNginx /> NGINX</li> */}
              </ul>
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About