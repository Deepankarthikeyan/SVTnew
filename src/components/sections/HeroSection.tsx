import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useEnquire } from '../../context/EnquireContext'

export function HeroSection() {
  const { openEnquire } = useEnquire()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: imageY }}>
        <img
          src="/images/hero-valley.jpg"
          alt="Meditation overlooking misty mountains and village rooftops"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </motion.div>

      <div className="container hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65 }}
        >
          Vethathiri Maharishi Spiritual Village
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
        >
          <span>Spiritual Based</span>
          <span>Life Living</span>
        </motion.h1>
        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7 }}
        >
          A journey from physical well-being to inner transformation.
        </motion.p>
        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7 }}
        >
          Discover a way of life inspired by the teachings of Vethathiri Maharishi, where yoga,
          meditation, introspection, nature and conscious living come together to nurture the body,
          mind and life force.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.65 }}
        >
          <a className="btn btn--primary" href="#journey">Explore Spiritual Living</a>
          <button type="button" className="btn btn--outline-light" onClick={openEnquire}>
            Enquire Now
          </button>
        </motion.div>
      </div>

      <div className="hero__ribbon">
        <span>Know Yourself</span>
        <span aria-hidden="true">·</span>
        <span>Understand Life</span>
        <span aria-hidden="true">·</span>
        <span>Live in Harmony</span>
      </div>
    </section>
  )
}
