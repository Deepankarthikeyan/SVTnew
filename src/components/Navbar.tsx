import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { useEnquire } from '../context/EnquireContext'
import { navLinks, type NavLink } from '../data/content'

type NavbarProps = {
  activeSection: string
  links?: NavLink[]
  transparentOnTop?: boolean
}

export function Navbar({ activeSection, links = navLinks, transparentOnTop = false }: NavbarProps) {
  const { openEnquire } = useEnquire()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 32)
  })

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ''}${transparentOnTop && !scrolled && activeSection === 'home' ? ' nav--hero' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#home">
          <img src="/mockup/logo-crop.png" alt="" className="nav__emblem" width={44} height={44} />
          <span className="nav__brand-text">
            <strong>Vethathiri Maharishi</strong>
            <small>Spiritual Village</small>
          </span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={activeSection === link.sectionId ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" className="btn btn--primary btn--sm nav__cta" onClick={openEnquire}>
          Enquire Now <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.header>
  )
}
