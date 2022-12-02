import React from 'react'
import './portfolio.css'
import Project from './Project'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


function Portfolio() {
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
    {
      "id": 4,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG4
    },
    {
      "id": 5,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG5
    },
    {
      "id": 6,
      "name": "Esmeralda Vanne",
      "demoLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "gitLink": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "img" : IMG6
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <ul className='container portfolio__container'
      >
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