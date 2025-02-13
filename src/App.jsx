import { useState } from 'react'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import ProjectModal from './components/Modal/Modal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
    <NavBar />
      <Hero />
      <AboutMe />
      <Projects handleProjectClick={handleProjectClick}/>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Footer />
    </>
  )
}

export default App
