import { ctaPillars } from '../../data/content'
import { useEnquire } from '../../context/EnquireContext'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll } from '../RevealOnScroll'

export function FinalCTASection() {
  const { openEnquire } = useEnquire()

  return (
    <section id="contact" className="section section--final-cta">
      <div className="final-cta__bg">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80"
          alt=""
          width={1800}
          height={1000}
          loading="lazy"
          decoding="async"
        />
        <div className="final-cta__overlay" />
      </div>
      <div className="container final-cta__content">
        <RevealOnScroll>
          <h2 className="display-title display-title--light">Begin Your Inner Journey</h2>
          <p>
            You don&apos;t have to leave everyday life behind to discover inner peace.
          </p>
          <div className="final-cta__pillars">
            {ctaPillars.map((pillar) => (
              <div key={pillar.label} className="final-cta__pillar">
                <span className="final-cta__pillar-icon">
                  <DynamicIcon name={pillar.icon} size={22} />
                </span>
                <span>{pillar.label}</span>
              </div>
            ))}
          </div>
          <button type="button" className="btn btn--primary btn--lg" onClick={openEnquire}>
            Begin Your Journey
          </button>
          <p className="final-cta__closing">
            <strong>Spiritual Based Life Living</strong>
            <span>A journey towards knowing yourself and understanding life.</span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
