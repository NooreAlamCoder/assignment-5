import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Component/NavBar'
import HeroSection from './Component/HeroSection'
import Footer from './Component/Footer'
import TechnologySection from './Component/TechnologySection'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <HeroSection/>
    <TechnologySection/>
    
    <Footer/>
  </StrictMode>,
)
