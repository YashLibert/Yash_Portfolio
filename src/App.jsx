import { motion } from "framer-motion";
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About  from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'



function App() {
  return (
    <>
    <motion.div
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    transition={{duration: 0.6, ease: "easeOut"}}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
    </>
  )
}


export default App
