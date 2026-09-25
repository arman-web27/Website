import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutUsPage from './pages/AboutUsPage'
import FaqsPage from './pages/FaqsPage'
import ContactUsPage from './pages/ContactUsPage'
import SplashCursor from './components/SplashCursor'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 240)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ScrollToTop />
      <button
        type="button"
        className={`back-to-top-float${showBackToTop ? ' is-visible' : ''}`}
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        })}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5m-7 7 7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#F6D98B"
      />

      <div className="overflow-x-hidden bg-white text-slate-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/testimonial" element={<AboutUsPage />} />
          <Route path="/our-team" element={<AboutUsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
