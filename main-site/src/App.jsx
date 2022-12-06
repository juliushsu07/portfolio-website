import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experience/Experiences'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'



const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiences/>
      <Contact/>
    </>
  )
}

export default App