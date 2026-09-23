import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LayoutGroup, motion as Motion, useReducedMotion } from 'framer-motion'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Faqs', href: '/faqs' },
]

const aboutLinks = [
  { label: 'About Me', description: 'Discover our story', href: '/about-us' },
  { label: 'Testimonial', description: 'What our clients say', href: '/testimonial' },
  { label: 'Our Team', description: 'Meet the experts', href: '/our-team' },
]

const aboutRoutes = aboutLinks.map(({ href }) => href)

function Navbar() {
  const reducedMotion = useReducedMotion()
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isAboutActive = aboutRoutes.includes(pathname)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutOpen(false)
    setHoveredLink(null)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) closeMenu()
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const linkClass = ({ isActive }) =>
    `relative isolate flex min-h-11 items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${isActive ? 'text-white' : 'text-black'}`

  const indicator = (href, active) => <>
    {hoveredLink === href && <Motion.span layoutId="nav-hover-pill" className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-neutral-200" transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 28 }} />}
    {active && <Motion.span layoutId="nav-active-pill" className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-black shadow-sm" transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 28 }} />}
  </>

  return (
    <LayoutGroup><header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-neutral-100 bg-white shadow-sm'
          : 'border-transparent bg-white'
      }`}
    >
      <nav
        ref={navRef}
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-16"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="group relative z-10 inline-flex shrink-0 items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
          onClick={closeMenu}
          aria-label="AdyGuru home"
        >
          <span className="absolute -inset-2 -z-10 scale-75 rounded-2xl bg-slate-100 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          <img
            src="/AdyGuru%20Logo.webp"
            alt="AdyGuru"
            className="h-10 w-auto object-contain brightness-0"
          />
          <span className="text-xl font-semibold tracking-tight text-black sm:text-2xl">AdyGuru</span>
        </Link>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:shadow-md hover:shadow-slate-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] md:hidden"
          onClick={() => {
            setIsMenuOpen((open) => !open)
            setIsAboutOpen(false)
          }}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-links"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              isMenuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>

        <div
          id="main-navigation-links"
          onMouseLeave={() => setHoveredLink(null)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHoveredLink(null) }}
          className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] isolate origin-top rounded-2xl border border-neutral-200 bg-white p-[5px] shadow-xl transition-all duration-300 md:static md:flex md:w-auto md:translate-y-0 md:items-center md:gap-1 md:rounded-full md:opacity-100 md:shadow-sm ${
            isMenuOpen
              ? 'visible translate-y-0 scale-100 opacity-100'
              : 'invisible -translate-y-3 scale-95 opacity-0 md:visible md:scale-100'
          }`}
        >
          {navigationLinks.slice(0, 1).map(({ label, href }) => (
            <NavLink key={label} to={href} end={href === '/'} onClick={closeMenu} onMouseEnter={() => setHoveredLink(href)} onFocus={() => setHoveredLink(href)} className={linkClass}>
              {({ isActive }) => <>{indicator(href, isActive)}{label}</>}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsAboutOpen(false)
            }}
          >
            <Motion.button
              onMouseEnter={() => setHoveredLink('/about-us')}
              onFocus={() => setHoveredLink('/about-us')}
              transition={{ duration: .2 }}
              type="button"
              onClick={() => setIsAboutOpen((open) => !open)}
              aria-expanded={isAboutOpen}
              aria-controls="navbar-about-links"
              className={linkClass({ isActive: isAboutActive }) + ' w-full justify-between gap-2 md:w-auto'}
            >
              {indicator('/about-us', isAboutActive)}
              About Us
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Motion.button>

            <div
              id="navbar-about-links"
              className={`mt-2 grid origin-top gap-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10 transition-all duration-300 md:absolute md:left-1/2 md:top-full md:mt-3 md:w-64 md:-translate-x-1/2 ${
                isAboutOpen
                  ? 'visible max-h-80 translate-y-0 scale-100 opacity-100'
                  : 'invisible max-h-0 -translate-y-2 scale-95 border-transparent p-0 opacity-0 md:max-h-80 md:border-slate-200 md:p-2'
              }`}
            >
              {aboutLinks.map(({ label, description, href }, index) => (
                <NavLink
                  key={label}
                  to={href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-out hover:translate-x-1 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:shadow-lg hover:shadow-black/15 ${
                      isActive
                        ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                        : 'text-slate-700'
                    }`
                  }
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A0A0A] text-xs font-black text-white shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{label}</span>
                    <span className="block text-xs text-slate-400 transition-colors duration-300 group-hover:text-white/75">{description}</span>
                  </span>
                  <span className="ml-auto translate-x-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
                </NavLink>
              ))}
            </div>
          </div>

          {navigationLinks.slice(1).map(({ label, href }) => (
            <NavLink key={label} to={href} onClick={closeMenu} onMouseEnter={() => setHoveredLink(href)} onFocus={() => setHoveredLink(href)} className={linkClass}>
              {({ isActive }) => <>{indicator(href, isActive)}{label}</>}
            </NavLink>
          ))}

        </div>
      </nav>
    </header></LayoutGroup>
  )
}

export default Navbar
