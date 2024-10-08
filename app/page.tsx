
import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'

export default function Home() {
  
  return (
    <main className='w-[90%] md:w-[80%] mx-auto'>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </main>
  )
}
