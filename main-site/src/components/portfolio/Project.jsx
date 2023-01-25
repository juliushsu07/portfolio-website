import React from 'react'

function Project({projectName, demoLink, gitLink, img}) {
  console.log(demoLink)
  return (
    <li className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src ={img} alt=''/>
        </div>
        
        <h3>{projectName}</h3>
        <div className='project__buttons'>
          <a href={gitLink} className={gitLink ? 'btn-primary' : 'btn-gray'} target='_blank'>{gitLink ? "GitHub" : "Not Available" }</a>
          <a href={demoLink} className={demoLink ? 'btn-primary': 'btn-gray'} target='_blank'>{demoLink ? "Live Demo" : "No Demo" }</a>
        </div>
    </li>   
  )
}

export default Project