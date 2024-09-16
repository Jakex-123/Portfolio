
import dynamic from 'next/dynamic';
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
const Projects = dynamic(() => import('./Components/Projects'), { ssr: false });
const About = dynamic(() => import('./Components/About'), { ssr: false });


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
