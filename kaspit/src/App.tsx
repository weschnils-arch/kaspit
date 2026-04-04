import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'
import CustomCursor from './components/CustomCursor'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Advantage from './pages/Advantage'
import Services from './pages/Services'
import SecurityManagement from './pages/SecurityManagement'
import Investigations from './pages/Investigations'
import Intelligence from './pages/Intelligence'
import Emergency from './pages/Emergency'
import Audits from './pages/Audits'
import Training from './pages/Training'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AccentToggle() {
  const { accent, toggle } = useTheme()
  return (
    <button className="accent-toggle" onClick={toggle} aria-label="Toggle accent color">
      <span className={`accent-toggle-dot ${accent}`} />
      {accent === 'gold' ? 'Gold' : 'Silver'}
    </button>
  )
}

function AppInner() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <ParticleNetwork />
      <CustomCursor />
      <Navigation />
      <ScrollToTop />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/security-management" element={<SecurityManagement />} />
          <Route path="/services/investigations" element={<Investigations />} />
          <Route path="/services/intelligence" element={<Intelligence />} />
          <Route path="/services/emergency" element={<Emergency />} />
          <Route path="/services/audits" element={<Audits />} />
          <Route path="/security-management" element={<SecurityManagement />} />
          <Route path="/investigations" element={<Investigations />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/security-audits" element={<Audits />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <AccentToggle />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
