import { useState } from 'react'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
    <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}

export default App
