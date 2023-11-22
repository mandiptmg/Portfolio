import Hero1 from "../component-1/Hero1"
import About from "../component-1/About"
import Contact from '../component-1/Contact'
import Projects from "../component-1/Projects"

const Hero = () => {
  return (
    <div>
     <div id='home'>
      <Hero1/>
     </div>
     <div id='about me'>
      <About/>
     </div>
     <div id="projects">
      <Projects/>
     </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  )
}

export default Hero
