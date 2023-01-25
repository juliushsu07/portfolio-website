import React from 'react'
import { InView } from 'react-intersection-observer';

import './header.css'

import HeaderSocial from './HeaderSocial'
import Typewritter from 'typewriter-effect'
import RESUME from '../../assets/resume.pdf'

const Header = ( {setActiveNav} ) => {
  return (
    <header>
      <div className='container header__container'>
        <section>
          <Typewritter className='type__writter'  onInit={(typewritter) => {
                typewritter
                .typeString(`<span style="color: var(--color-text)">console</span>`)
                .typeString(`<span style="color: var(--color-yellow-variant)">.</span><span style="color: var(--color-yellow)">log</span><span style="color: var(--color-purple-variant)">&#40;</span><span style="color: var(--color-green)">&#34;Hello there, &#34;</span><span style="color: var(--color-purple-variant)">&#41;</span>`)
                .typeString(`<br>`)
                .typeString(`<`)
                .typeString(`MyNameIs`)
                .typeString(" />")
                .start();
              }}
            />
          <InView as="div" onChange={(inView) => { inView ? setActiveNav('#') : void(0) } }></InView>
          <h1>Julius Hsu</h1>
          <h4>I'm a software engineer specialized in building full stack web apps.<br></br>Welcome to my cornor of the internet!</h4>
          <div className='my__resume'>
            <a href={RESUME} target="_blank" className='btn-primary'>My Resume</a>
          </div>
        </section>
        <HeaderSocial />  
        <a href="mailto:juliushsu07@gmail.com" className='email__sidebar' target="_blank">juliushsu07@gmail.com</a>
      </div>
    </header>
  )
}

export default Header