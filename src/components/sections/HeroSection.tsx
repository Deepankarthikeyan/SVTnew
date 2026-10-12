import { motion } from 'framer-motion'
import { useEnquire } from '../../context/EnquireContext'

export function HeroSection() {
  const { openEnquire } = useEnquire()

  return (
    <section id="home" className="hero hero--immersive">
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/mockup/hero-scene-ref.jpg"
          alt=""
          width={1920}
          height={826}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__shade" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero__eyebrow">Spiritual Based</p>
          <h1>Life Living</h1>
          <p className="hero__lead">
            A journey from physical well-being to inner transformation.
          </p>
          <p className="hero__text">
            Discover a way of life inspired by the teachings of Vethathiri Maharishi, where yoga,
            meditation, introspection, nature and conscious living come together to nurture the body,
            mind and life force.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#journey">
              Explore Spiritual Living <span aria-hidden="true">→</span>
            </a>
            <button type="button" className="btn btn--outline btn--lg" onClick={openEnquire}>
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>

      <div className="hero__ribbon">
        <div className="container hero__tagline">
          <img src="/logo-emblem.svg" alt="" width={28} height={28} className="hero__tagline-logo" />
          <span>Know Yourself</span>
          <span className="hero__tagline-dot" aria-hidden="true">·</span>
          <span>Understand Life</span>
          <span className="hero__tagline-dot" aria-hidden="true">·</span>
          <span>Live in Harmony</span>
        </div>
      </div>
    </section>
  )
}
