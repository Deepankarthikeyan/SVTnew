import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { useEnquire } from '../../context/EnquireContext'
import { BotanicalDecor } from '../BotanicalDecor'

export function HeroSection() {
  const { openEnquire } = useEnquire()

  return (
    <section id="home" className="hero hero--reference">
      <BotanicalDecor position="top-left" />
      <div className="hero__split">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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
            <a className="btn btn--primary" href="#journey">
              Explore Spiritual Living <span aria-hidden="true">→</span>
            </a>
            <button type="button" className="btn btn--outline" onClick={openEnquire}>
              Enquire Now
            </button>
          </div>
          <p className="hero__tagline">
            <Leaf size={16} strokeWidth={1.6} aria-hidden="true" />
            Know Yourself <span aria-hidden="true">•</span> Understand Life{' '}
            <span aria-hidden="true">•</span> Live in Harmony
          </p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.85 }}
        >
          <img
            src="/images/ref/hero-scene.jpg"
            alt="Meditation overlooking a peaceful valley at sunrise"
            width={1134}
            height={846}
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  )
}
