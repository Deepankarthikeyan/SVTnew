import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { useEnquire } from '../context/EnquireContext'
import { navLinks } from '../data/content'

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const { openEnquire } = useEnquire()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 48)
  })

  const navClass = scrolled ? 'nav nav--solid' : 'nav nav--transparent'

  return (
    <motion.header
      className={navClass}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#home">
          <img src="/logo-emblem.svg" alt="" className="nav__emblem" width={40} height={40} />
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.sectionId ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" className="btn btn--primary btn--sm nav__cta" onClick={openEnquire}>
          Enquire Now
        </button>
      </div>
    </motion.header>
  )
}
