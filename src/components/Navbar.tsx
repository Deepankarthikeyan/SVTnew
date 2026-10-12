import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { navLinks } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 48)
  })

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        <a className="nav__brand" href="#home">
          <span className="nav__logo" aria-hidden="true">ॐ</span>
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
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary btn--sm" href="#contact" onClick={() => setOpen(false)}>
            Enquire Now
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
