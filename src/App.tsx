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
import Training from './pages/Training'
import Advantage from './pages/Advantage'
import ContactPage from './pages/Contact'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
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
          <Route path="/services/*" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  )
}
