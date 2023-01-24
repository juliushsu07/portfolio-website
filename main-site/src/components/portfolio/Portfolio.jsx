import React from 'react'
import { InView } from 'react-intersection-observer';

import Project from './Project'

import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


function Portfolio( {setActiveNav} ) {
  const projects = [
    {
      "id": 1,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG1
    },
    {
      "id": 2,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG2
    },
    {
      "id": 3,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG3
    },
  ]

  return (
    <section id="portfolio">
        <h2>My Recent Work</h2>
        <InView as="div" onChange={(inView) => { inView ? setActiveNav('#portfolio') : void(0) } }></InView>
        <ul className='container portfolio__container'>
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
    </section>
  )
}

export default Portfolio