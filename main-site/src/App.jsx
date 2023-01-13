import { React, useState} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experience/Experiences'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  const [activeNav, setActiveNav] = useState(window.location.hash ? window.location.hash : '#')
  return (
    <>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <About activeNav={activeNav} setActiveNav={setActiveNav} />
      <Experiences activeNav={activeNav} setActiveNav={setActiveNav} />
      <Portfolio activeNav={activeNav} setActiveNav={setActiveNav} />
      <Contact activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  )
}

export default App