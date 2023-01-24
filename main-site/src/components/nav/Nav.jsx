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
        <InView as="a" href='#experience' className={activeNav === '#experience' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#experience') : void(0) } }><TbNotebook/></InView>
        <InView as="a" href='#portfolio' className={activeNav === '#portfolio' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#portfolio') : void(0) } }><FaProjectDiagram/></InView>
        <InView as="a" href='#contact' className={activeNav === '#contact' ? 'active' : ''} onChange={(inView) => { inView ? setActiveNav('#contact') : void(0) } }><AiOutlinePhone/></InView>
    </nav>
  )
}

export default Nav