import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const aboutLinks = [
  ['About Me', '/about-us'],
  ['Testimonials', '/testimonial'],
]

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef(null)
  const aboutButton = useRef(null)
  const menuButton = useRef(null)
  const { pathname } = useLocation()
  const close = () => { setMenuOpen(false); setAboutOpen(false) }

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 16)
    const outside = event => { if (!ref.current?.contains(event.target)) close() }
    const escape = event => {
      if (event.key === 'Escape') {
        if (aboutOpen) { setAboutOpen(false); aboutButton.current?.focus() }
        else { setMenuOpen(false); menuButton.current?.focus() }
      }
    }
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      window.removeEventListener('scroll', scroll)
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [aboutOpen])

  return <>
    <header ref={ref} className={'reference-nav' + (scrolled ? ' reference-nav--scrolled' : '')}>
      <nav className="reference-nav__bar" aria-label="Main navigation">
        <Link to="/" className="reference-nav__brand" onClick={close} aria-label="AdyGuru home">
          <span className="reference-nav__mark"><img src="/AdyGuru%20Logo.png" alt="" /></span>
          <span>AdyGuru</span>
        </Link>
        <div id="main-navigation-links" className={'reference-nav__links' + (menuOpen ? ' is-open' : '')}>
          <NavLink to="/" end onClick={close} className="reference-nav__link">Home</NavLink>
          <div className="reference-nav__about" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setAboutOpen(false) }}>
            <button ref={aboutButton} type="button" className={'reference-nav__link' + (aboutLinks.some(([, href]) => href === pathname) ? ' active' : '')} aria-expanded={aboutOpen} aria-controls="navbar-about-links" onClick={() => setAboutOpen(value => !value)}>
              About <svg className={aboutOpen ? 'is-rotated' : ''} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div id="navbar-about-links" className={'reference-nav__dropdown' + (aboutOpen ? ' is-open' : '')}>
              {aboutLinks.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}<Arrow /></NavLink>)}
            </div>
          </div>
          <NavLink to="/services" onClick={close} className="reference-nav__link">What we do</NavLink>
          <NavLink to="/our-team" onClick={close} className="reference-nav__link">Our Team</NavLink>
          <NavLink to="/faqs" onClick={close} className="reference-nav__link">FAQs</NavLink>
        </div>
        <div className="reference-nav__actions">
          <Link to="/contact-us" className="reference-nav__contact" onClick={close}><span>Contact</span><Arrow /></Link>
          <button ref={menuButton} type="button" className={'reference-nav__toggle' + (menuOpen ? ' is-open' : '')} onClick={() => { setMenuOpen(value => !value); setAboutOpen(false) }} aria-expanded={menuOpen} aria-controls="main-navigation-links" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><span /><span /></button>
        </div>
      </nav>
    </header>
    <div className="reference-nav__spacer" aria-hidden="true" />
  </>
}
