import { brotherhoodValues } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll } from '../RevealOnScroll'

export function BrotherhoodSection() {
  return (
    <section id="brotherhood" className="section section--brotherhood">
      <div className="container">
        <RevealOnScroll className="section-heading section-heading--center">
          <h2 className="section-heading__title">One Humanity. One Consciousness.</h2>
          <p className="section-heading__intro">
            The teachings encourage us to move beyond individual boundaries and develop a sense of
            universal brotherhood. Together, these values can create a more peaceful individual,
            family, society and world.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="brotherhood-banner">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
              alt="Group meditating together in nature"
              width={1200}
              height={520}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="brotherhood-values">
            {brotherhoodValues.map((value) => (
              <div key={value.label} className="brotherhood-values__item">
                <span className="brotherhood-values__icon">
                  <DynamicIcon name={value.icon} size={20} />
                </span>
                <span>{value.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
