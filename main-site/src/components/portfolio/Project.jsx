import React from 'react'

function Project({projectName, demoLink, gitLink, img}) {
  return (
    <li className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src ={img} alt=''/>
        </div>
        <div className='project__buttons'>
        <h3>{projectName}</h3>
          <a href={demoLink} className='btn' target='_blank'>GitHub</a>
          <a href={gitLink} className='btn-primary' target='_blank'>Live Demo</a>
        </div>
    </li>   
  )
}

export default Project