import React from 'react'
import { InView } from 'react-intersection-observer';

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
        <InView as="a" href='#' className={activeNav === '#' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#') : void(0) } }><BiHomeAlt/></InView>
        <InView as="a" href='#about' className={activeNav === '#about' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#about') : void(0) } }><RiUser5Line/></InView>
        <InView as="a" href='#experiences' className={activeNav === '#experiences' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#experiences') : void(0) } }><TbNotebook/></InView>
        <InView as="a" href='#projects' className={activeNav === '#projects' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#projects') : void(0) } }><FaProjectDiagram/></InView>
        <InView as="a" href='#contact' className={activeNav === '#contact' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#contact') : void(0) } }><AiOutlinePhone/></InView>
    </nav>
  )
}

export default Nav