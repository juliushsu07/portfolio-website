import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {RiUser5Line} from 'react-icons/ri'
import {TbNotebook} from 'react-icons/tb'
import {FaProjectDiagram} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'

function Nav() {
  return (
    <nav>
      <a href='#' className='active'><BiHomeAlt/></a>
      <a href='#about'><RiUser5Line/></a>
      <a href='#experience'><TbNotebook/></a>
      <a href='#portfolio'><FaProjectDiagram/></a>
      <a href='#contact'><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav