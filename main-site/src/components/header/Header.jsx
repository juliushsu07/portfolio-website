import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import Typewritter from 'typewriter-effect'

function Header() {
  return (
    <header>
      <div className='container header__container'>
          <Typewritter  onInit={(typewritter) => {
              typewritter
              .typeString(`<span style="color: var(--color-text)">console</span>`)
              .typeString(`<span style="color: var(--color-yellow-variant)">.</span><span style="color: var(--color-yellow)">log</span><span style="color: var(--color-purple-variant)">&#40;</span><span style="color: var(--color-green)">&#34;Hello World!&#34;</span><span style="color: var(--color-purple-variant)">&#41;</span>`)
              .typeString(`<br>`)
              .typeString(`<`)
              .typeString("FullstackDeveloper")
              .typeString(" />")
              .start();
            }}
          />
        <h1>Julius Hsu</h1>

        <CTA />
        <HeaderSocial />
        
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      
      </div>
    </header>
  )
}

export default Header