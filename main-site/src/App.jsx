import { React, useState} from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  const HASH = window.location.hash
  const [activeNav, setActiveNav] = useState(HASH);

  return (
    <>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Experiences setActiveNav={setActiveNav} />
      <Projects setActiveNav={setActiveNav} />
      <Contact setActiveNav={setActiveNav}/>
    </>
  )
}

export default App