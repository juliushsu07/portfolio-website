import React from 'react'
import './nav.css'
import { BiHomeAlt } from 'react-icons/bi'
import { RiUser5Line } from 'react-icons/ri'
import { TbNotebook } from 'react-icons/tb'
import { FaProjectDiagram } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'

const Nav = (props) => {
  const {activeNav, setActiveNav} = props

  return (
    <nav>
        <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser5Line/></a>
        <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbNotebook/></a>
        <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaProjectDiagram/></a>
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav