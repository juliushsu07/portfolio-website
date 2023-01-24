import { React, useRef, useState} from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experience/Experiences'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  const [activeNav, setActiveNav] = useState(window.location.hash ? window.location.hash : '#');

  return (
    <>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Experiences setActiveNav={setActiveNav} />
      <Portfolio setActiveNav={setActiveNav} />
      <Contact setActiveNav={setActiveNav}/>
    </>
  )
}

export default App