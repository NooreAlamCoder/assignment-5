import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Component/NavBar'
import HeroSection from './Component/HeroSection'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <HeroSection/>
  </StrictMode>,
)
