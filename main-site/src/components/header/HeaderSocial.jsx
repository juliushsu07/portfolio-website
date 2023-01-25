import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/juliushsu/" target="_blank"><FaLinkedinIn size={30}/></a>
        <a href="https://github.com/juliushsu07" target="_blank"><AiFillGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocial