import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div class='header__socials'>
        <a herf='https://www.linkedin.com/in/juliushsu/'><FaLinkedinIn/></a>
        <a herf='https://github.com/juliushsu07'><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocial