import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Investigations from './pages/services/Investigations'
import SecurityManagement from './pages/services/SecurityManagement'
import SecurityAudits from './pages/services/SecurityAudits'
import EmergencyAssistance from './pages/services/EmergencyAssistance'
import Intelligence from './pages/services/Intelligence'
import Training from './pages/Training'
import Advantage from './pages/Advantage'
import ContactPage from './pages/Contact'
import Terms from './pages/Terms'
import Imprint from './pages/Imprint'
import NotFound from './pages/NotFound'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Lenis intercepts window.scrollTo, so reset through it when present
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: { immediate?: boolean }) => void } }).__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  return (
    <ThemeProvider>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <ParticleNetwork />
      <Navbar />
      <ScrollToTop />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/investigations" element={<Investigations />} />
          <Route path="/services/security-management" element={<SecurityManagement />} />
          <Route path="/services/audits" element={<SecurityAudits />} />
          <Route path="/services/emergency" element={<EmergencyAssistance />} />
          <Route path="/services/intelligence" element={<Intelligence />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  )
}
