import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { navLinks } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ' nav--hero'}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container nav__inner--mockup">
        <a className="nav__brand" href="#home">
          <img src="/logo-emblem.svg" alt="" className="nav__emblem" width={42} height={42} />
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

        <nav
          className={`nav__center${open ? ' nav__center--open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm nav__cta" href="#contact" onClick={() => setOpen(false)}>
          Enquire Now
        </a>
      </div>
    </motion.header>
  )
}
