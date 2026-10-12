import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import {
  brotherhoodValues,
  comparison,
  ctaPillars,
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

function MiniIcon({ name }: { name: string }) {
  const d: Record<string, string> = {
    clarity: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8',
    balance: 'M12 3v18M6 9h12M8 15h8',
    awareness: 'M12 8a4 4 0 1 0 0 8M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z',
    peace: 'M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11z',
    harmony: 'M4 14c3-5 5-7 8-7s5 2 8 7',
    wisdom: 'M4 19h16M8 16V8l4-3 4 3v8',
    conscious: 'M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1',
    compassion: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z',
  }
  return (
    <svg viewBox="0 0 24 24" className="mini-icon" aria-hidden="true">
      <path d={d[name] ?? d.peace} fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function LandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['-4%', '6%'])

  return (
    <div className="page">
      <ScrollProgress />
      <Navbar />

      <section id="home" className="hero" ref={heroRef}>
        <div className="hero__layout container-wide">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__brand-line">Vethathiri Maharishi Spiritual Village</p>
            <h1>
              <span className="hero__title-main">Spiritual Based</span>
              <span className="hero__title-main">Life Living</span>
            </h1>
            <p className="hero__lead">
              A journey from physical well-being to inner transformation.
            </p>
            <p className="hero__text">
              Discover a way of life inspired by the teachings of Vethathiri Maharishi, where yoga,
              meditation, introspection, nature and conscious living come together to nurture the
              body, mind and life force.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#journey">Explore Spiritual Living</a>
              <a className="btn btn--outline" href="#contact">Enquire Now</a>
            </div>
          </motion.div>

          <motion.div className="hero__visual" style={{ y: heroImageY }}>
            <img
              src="/images/hero-meditation.jpg"
              alt="Meditation overlooking a peaceful valley"
              width={1200}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>

        <div className="hero__ribbon">
          <span>Know Yourself</span>
          <span className="hero__ribbon-dot" aria-hidden="true" />
          <span>Understand Life</span>
          <span className="hero__ribbon-dot" aria-hidden="true" />
          <span>Live in Harmony</span>
        </div>
      </section>

      <section id="about" className="section section--about">
        <div className="container about-grid">
          <Reveal className="about-grid__visual">
            <div className="about-portrait">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=75"
                alt="Vethathiri Maharishi"
                width={480}
                height={480}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal className="about-grid__copy" delay={0.1}>
            <h2 className="heading-serif">Live Better. Think Deeper. Know Yourself.</h2>
            <p>
              Vethathiri Maharishi Spiritual Village offers a serene environment where spiritual
              practices become part of everyday life.
            </p>
            <p>
              The journey begins with caring for the body, develops awareness of the mind and life
              force, and gradually leads towards greater self-understanding and inner peace.
            </p>
            <blockquote className="quote quote--mockup">
              “Know yourself. Understand life. Live in harmony.”
              <cite>— Vethathiri Maharishi</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section id="journey" className="section section--journey">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <h2 className="heading-serif">The Journey Within</h2>
            <p className="section-sub">From Physical Well-being to Inner Transformation</p>
            <p className="section-intro section-intro--center">
              Our approach brings together simple yet meaningful practices that encourage a balanced
              and conscious way of living.
            </p>
          </Reveal>

          <StaggerReveal className="journey-grid">
            {journeyPractices.map((item) => (
              <StaggerItem key={item.title}>
                <article className="journey-card">
                  <div className="journey-card__image">
                    <img src={item.image} alt="" width={400} height={260} loading="lazy" decoding="async" />
                  </div>
                  <div className="journey-card__badge" aria-hidden="true">{item.icon}</div>
                  <div className="journey-card__body">
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
          <Reveal className="section-head section-head--center">
            <h2 className="heading-serif">Five Dimensions of Conscious Living</h2>
          </Reveal>
        </div>
        <StaggerReveal className="dimensions-row">
          {dimensions.map((dim) => (
            <StaggerItem key={dim.key}>
              <motion.article
                className="dimension-card"
                style={{ background: dim.gradient }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              >
                <div className="dimension-card__noise" />
                <DimensionGlyph type={dim.icon} />
                <h3>{dim.key}</h3>
                <p>{dim.subtitle}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      <section id="way-of-life" className="section section--way">
        <div className="container way-grid">
          <Reveal>
            <h2 className="heading-serif">More Than a Practice. A Way of Life.</h2>
            <p>
              Spiritual living is not limited to meditation or yoga. It is about bringing awareness
              into everyday life.
            </p>
          </Reveal>
          <StaggerReveal className="way-list">
            {wayOfLife.map((item) => (
              <StaggerItem key={item}>
                <div className="way-list__item">
                  <span className="way-list__icon" aria-hidden="true">
                    <MiniIcon name="peace" />
                  </span>
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="discover" className="section section--discover">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <h2 className="heading-serif">A Journey Towards Inner Peace</h2>
            <p className="section-intro section-intro--center">
              Through regular practice and conscious living, seekers can develop:
            </p>
          </Reveal>
          <StaggerReveal className="discover-row">
            {discoveries.map((item) => (
              <StaggerItem key={item.num}>
                <article className="discover-card">
                  <span className="discover-card__icon">
                    <MiniIcon name={item.icon} />
                  </span>
                  <span className="discover-card__num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section id="purpose" className="section section--dual">
        <div className="container dual-panels">
          <Reveal className="dual-panel dual-panel--purpose">
            <div className="dual-panel__media">
              <img
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=700&q=75"
                alt="Meditation at sunrise"
                width={520}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="dual-panel__copy">
              <h2 className="heading-serif">Know Yourself. Understand Life.</h2>
              <p>The ultimate purpose of this spiritual journey is to:</p>
              <ul className="purpose-list purpose-list--icons">
                {purposeItems.map((item) => (
                  <li key={item.title}>
                    <span className="purpose-list__icon" aria-hidden="true">
                      <MiniIcon name="awareness" />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="dual-panel dual-panel--brotherhood" delay={0.08}>
            <div className="dual-panel__copy">
              <h2 className="heading-serif">One Humanity. One Consciousness.</h2>
              <p>
                The teachings encourage us to move beyond individual boundaries and develop a sense
                of universal brotherhood.
              </p>
              <p className="brotherhood-values">
                A life based on: {brotherhoodValues.join(' • ')}
              </p>
            </div>
            <div className="dual-panel__media dual-panel__media--wide">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=75"
                alt="Community in nature"
                width={900}
                height={520}
                loading="lazy"
                decoding="async"
              />
              <div className="value-icons">
                {brotherhoodValues.map((v) => (
                  <div key={v} className="value-icons__item">
                    <MiniIcon name="compassion" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="village" className="section section--village">
        <div className="container village-wrap">
          <Reveal className="village-wrap__intro">
            <h2 className="heading-serif">A Peaceful Environment for Conscious Living</h2>
            <p>
              Surrounded by nature, the Village provides an atmosphere where people can slow down,
              reflect, practise and reconnect with themselves.
            </p>
            <a className="btn btn--primary" href="#contact">Explore the Village</a>
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
          <Reveal className="section-head section-head--center">
            <h2 className="heading-serif">Why Spiritual Based Life Living?</h2>
            <p className="section-sub">Bring Balance Into Everyday Life</p>
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
            <h2 className="heading-serif heading-serif--light">Begin Your Inner Journey</h2>
            <p>You don&apos;t have to leave everyday life behind to discover inner peace.</p>
            <div className="cta-pillars">
              {ctaPillars.map((pillar) => (
                <div key={pillar.label} className="cta-pillars__item">
                  <span className="cta-pillars__icon">
                    <MiniIcon name={pillar.icon} />
                  </span>
                  <span>{pillar.label}</span>
                </div>
              ))}
            </div>
            <p className="cta__brand">
              <strong>Spiritual Based Life Living</strong>
              <span>A journey towards knowing yourself and understanding life.</span>
            </p>
            <a className="btn btn--primary btn--lg" href="mailto:enquire@spiritualvillage.org">
              Begin Your Journey
            </a>
          </Reveal>
        </div>
        <footer className="footer footer--cta">
          <img src="/logo-emblem.svg" alt="" width={36} height={36} />
          <p>Vethathiri Maharishi Spiritual Village</p>
          <p className="footer--cta__tag">Spiritual Based Life Living — Know Yourself • Understand Life • Live in Harmony</p>
        </footer>
      </section>
    </div>
  )
}
