import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import {
  brotherhoodValues,
  comparison,
  dimensions,
  discoveries,
  journeyPractices,
  purposeItems,
  villageTiles,
  wayOfLife,
} from '../data/content'
import { Reveal, StaggerItem, StaggerReveal } from './Reveal'
import { Navbar } from './Navbar'
import { ScrollProgress } from './ScrollProgress'

function DimensionGlyph({ type }: { type: string }) {
  const paths: Record<string, string> = {
    body: 'M12 4v16M8 8h8M8 12h8M8 16h5',
    mind: 'M12 3a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5zM8 21h8',
    force: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4',
    consciousness: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4 12H2M22 12h-2',
    harmony: 'M4 12c2-4 4-6 8-6s6 2 8 6-4 6-8 6-6-2-8-6z',
  }
  return (
    <svg viewBox="0 0 24 24" className="dimension-card__icon" aria-hidden="true">
      <path d={paths[type] ?? paths.harmony} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function LandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  return (
    <div className="page">
      <ScrollProgress />
      <Navbar />

      <section id="home" className="hero" ref={heroRef}>
        <motion.div className="hero__media" style={{ y: heroY, opacity: heroOpacity }}>
          <img
            src="/images/hero-meditation.jpg"
            alt="Meditation overlooking a peaceful valley"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__overlay" />
        </motion.div>

        <div className="hero__content container">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Vethathiri Maharishi Spiritual Village
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Spiritual Based Life Living
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
          >
            A journey from physical well-being to inner transformation.
          </motion.p>
          <motion.p
            className="hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75 }}
          >
            Discover a way of life inspired by the teachings of Vethathiri Maharishi, where yoga,
            meditation, introspection, nature and conscious living come together to nurture the
            body, mind and life force.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            <a className="btn btn--primary" href="#journey">Explore Spiritual Living</a>
            <a className="btn btn--ghost" href="#contact">Enquire Now</a>
          </motion.div>
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            Know Yourself <span aria-hidden="true">•</span> Understand Life{' '}
            <span aria-hidden="true">•</span> Live in Harmony
          </motion.p>
        </div>
      </section>

      <section id="about" className="section section--about">
        <div className="container about-grid">
          <Reveal className="about-grid__visual">
            <div className="about-portrait">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=75"
                alt="Portrait representing Vethathiri Maharishi"
                width={480}
                height={480}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal className="about-grid__copy" delay={0.1}>
            <p className="section-label">1. About Spiritual Based Life Living</p>
            <h2>Live Better. Think Deeper. Know Yourself.</h2>
            <p>
              Vethathiri Maharishi Spiritual Village offers a serene environment where spiritual
              practices become part of everyday life.
            </p>
            <p>
              The journey begins with caring for the body, develops awareness of the mind and life
              force, and gradually leads towards greater self-understanding and inner peace.
            </p>
            <blockquote className="quote">
              “Know yourself. Understand life. Live in harmony.”
              <cite>— Vethathiri Maharishi</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section id="journey" className="section section--journey">
        <div className="container">
          <Reveal>
            <p className="section-label">2. The Journey Within</p>
            <h2 className="section-title">From Physical Well-being to Inner Transformation</h2>
            <p className="section-intro">
              Our approach brings together simple yet meaningful practices that encourage a balanced
              and conscious way of living.
            </p>
          </Reveal>

          <StaggerReveal className="journey-track">
            {journeyPractices.map((item) => (
              <StaggerItem key={item.title}>
                <article className="journey-card">
                  <div className="journey-card__image">
                    <img src={item.image} alt="" width={400} height={260} loading="lazy" decoding="async" />
                  </div>
                  <div className="journey-card__body">
                    <span className="journey-card__icon" aria-hidden="true">{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="dimensions" className="section section--dimensions">
        <div className="container">
          <Reveal>
            <p className="section-label">3. Five Dimensions of Conscious Living</p>
            <h2 className="section-title">Create balance across body, mind and spirit</h2>
          </Reveal>
        </div>
        <StaggerReveal className="dimensions-row">
          {dimensions.map((dim, i) => (
            <StaggerItem key={dim.key}>
              <motion.article
                className="dimension-card"
                style={{ background: dim.gradient }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <div className="dimension-card__noise" />
                <DimensionGlyph type={dim.icon} />
                <h3>{dim.key}</h3>
                <p>{dim.subtitle}</p>
                <span className="dimension-card__index">{String(i + 1).padStart(2, '0')}</span>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      <section id="way-of-life" className="section section--way">
        <div className="container way-grid">
          <Reveal>
            <p className="section-label">4. A Way of Living</p>
            <h2>More Than a Practice. A Way of Life.</h2>
            <p>
              Spiritual living is not limited to meditation or yoga. It is about bringing awareness
              into everyday life.
            </p>
          </Reveal>
          <StaggerReveal className="way-list">
            {wayOfLife.map((item) => (
              <StaggerItem key={item}>
                <div className="way-list__item">
                  <span className="way-list__dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="discover" className="section section--discover">
        <div className="container">
          <Reveal>
            <p className="section-label">5. What You Can Discover</p>
            <h2 className="section-title">A Journey Towards Inner Peace</h2>
            <p className="section-intro">
              Through regular practice and conscious living, seekers can develop:
            </p>
          </Reveal>
          <StaggerReveal className="discover-grid">
            {discoveries.map((item) => (
              <StaggerItem key={item.num}>
                <article className="discover-card">
                  <span className="discover-card__num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="purpose" className="section section--purpose">
        <div className="container purpose-grid">
          <Reveal className="purpose-grid__copy">
            <p className="section-label">6. The Purpose of the Journey</p>
            <h2>Know Yourself. Understand Life.</h2>
            <p>The ultimate purpose of this spiritual journey is to:</p>
            <ul className="purpose-list">
              {purposeItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="purpose-grid__visual" delay={0.12}>
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=75"
              alt="Silhouette meditating at sunrise"
              width={720}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section id="brotherhood" className="section section--brotherhood">
        <div className="container brotherhood-grid">
          <Reveal>
            <p className="section-label">7. Universal Brotherhood</p>
            <h2>One Humanity. One Consciousness.</h2>
            <p>
              The teachings encourage us to move beyond individual boundaries and develop a sense of
              universal brotherhood.
            </p>
            <p className="brotherhood-values">
              A life based on: {brotherhoodValues.join(' • ')}
            </p>
            <p>
              Together, these values can create a more peaceful individual, family, society and world.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="brotherhood-visual">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=75"
                alt="Community gathering in nature"
                width={900}
                height={560}
                loading="lazy"
                decoding="async"
              />
              <div className="brotherhood-chips">
                {brotherhoodValues.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="village" className="section section--village">
        <div className="container">
          <Reveal>
            <p className="section-label">8. Life at the Spiritual Village</p>
            <h2 className="section-title">A Peaceful Environment for Conscious Living</h2>
            <p className="section-intro">
              Surrounded by nature, the Village provides an atmosphere where people can slow down,
              reflect, practise and reconnect with themselves.
            </p>
          </Reveal>
          <div className="village-layout">
            <Reveal className="village-layout__hero">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=75"
                alt="Garden path at the spiritual village"
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <StaggerReveal className="village-layout__tiles">
              {villageTiles.map((tile) => (
                <StaggerItem key={tile.title}>
                  <article className="village-tile">
                    <img src={tile.image} alt="" width={500} height={360} loading="lazy" decoding="async" />
                    <div className="village-tile__overlay">
                      <h3>{tile.title}</h3>
                      <p>{tile.text}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section id="why" className="section section--why">
        <div className="container">
          <Reveal>
            <p className="section-label">9. Why Spiritual Based Life Living?</p>
            <h2 className="section-title">Bring Balance Into Everyday Life</h2>
          </Reveal>
          <StaggerReveal className="compare-grid">
            {Object.values(comparison).map((col) => (
              <StaggerItem key={col.title}>
                <article className="compare-card" style={{ '--accent': col.color } as CSSProperties}>
                  <div className="compare-card__head">
                    <img src={col.image} alt="" width={400} height={220} loading="lazy" decoding="async" />
                    <h3>{col.title}</h3>
                  </div>
                  <ul>
                    {col.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="contact" className="section section--cta">
        <div className="cta__bg">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=75"
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <div className="cta__overlay" />
        </div>
        <div className="container cta__content">
          <Reveal>
            <p className="section-label section-label--light">10. A Simple Message</p>
            <h2>Begin Your Inner Journey</h2>
            <p>
              You don&apos;t have to leave everyday life behind to discover inner peace.
            </p>
            <ul className="cta-pillars">
              <li>Live consciously.</li>
              <li>Live compassionately.</li>
              <li>Live harmoniously.</li>
              <li>Live with awareness.</li>
            </ul>
            <p className="cta__brand">
              <strong>Spiritual Based Life Living</strong>
              <span>A journey towards knowing yourself and understanding life.</span>
            </p>
            <a className="btn btn--primary btn--lg" href="mailto:enquire@spiritualvillage.org">
              Begin Your Journey
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} Vethathiri Maharishi Spiritual Village</p>
          <p>Know Yourself • Understand Life • Live in Harmony</p>
        </div>
      </footer>
    </div>
  )
}
