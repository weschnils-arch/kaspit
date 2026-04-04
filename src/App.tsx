import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NetworkCanvas from './components/NetworkCanvas'
import Home from './pages/Home'
import About from './pages/About'
import Advantage from './pages/Advantage'
import SecurityManagement from './pages/SecurityManagement'
import SecurityAudits from './pages/SecurityAudits'
import Investigations from './pages/Investigations'
import EmergencyAssistance from './pages/EmergencyAssistance'
import Intelligence from './pages/Intelligence'
import Training from './pages/Training'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <NetworkCanvas />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/services/security-management" element={<SecurityManagement />} />
          <Route path="/services/security-audits" element={<SecurityAudits />} />
          <Route path="/services/investigations" element={<Investigations />} />
          <Route path="/services/emergency-assistance" element={<EmergencyAssistance />} />
          <Route path="/services/intelligence" element={<Intelligence />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function AccentToggle() {
  const { theme, toggle } = useTheme()
  const isSilver = theme === 'silver'

  return (
    <button
      onClick={toggle}
      title={isSilver ? 'Switch to Gold' : 'Switch to Silver'}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: 'rgba(13, 20, 40, 0.9)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(16px)',
        cursor: 'pointer',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        e.currentTarget.style.color = '#fff'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
      }}
    >
      <span style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: isSilver
          ? 'linear-gradient(135deg, #c0c8d4, #dce3ec)'
          : 'linear-gradient(135deg, #c9a96e, #e8cc99)',
        flexShrink: 0,
      }} />
      {isSilver ? 'Silver' : 'Gold'}
    </button>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/preview/5200">
        <ScrollToTop />
        <Layout />
        <AccentToggle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
