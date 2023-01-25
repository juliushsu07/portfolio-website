import React from 'react'
import { InView } from 'react-intersection-observer';

import Project from './Project'

import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


function Projects( {setActiveNav} ) {
  const projects = [
    {
      "id": 1,
      "name": "Daily Task CRUD App",
      "demoLink": "https://todolist-b59c9.web.app/",
      "gitLink": "https://github.com/juliushsu07/to-do-list",
      "img" : IMG1
    },
    {
      "id": 2,
      "name": "Aircall 48hr Challenge",
      "demoLink": "https://aircall-5fd82.web.app/",
      "gitLink": "https://github.com/juliushsu07/aircall",
      "img" : IMG2
    },
    {
      "id": 3,
      "name": "Cluep Ad Ops Tool App",
      "demoLink": null,
      "gitLink": null,
      "img" : IMG3
    },
  ]

  return (
    <section id="projects">
        <div className='container projects__container'>
          <h2>My Projects</h2>
          <InView as="div" onChange={(inView) => { inView ? setActiveNav('#projects') : void(0) } }></InView>
          <ul className='projects__items'>
            {projects.map((project) => (
              <Project
                key={project.id}
                projectName={project.name}
                demoLink={project.demoLink}
                gitLink={project.gitLink}
                img={project.img}
              />
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Projects