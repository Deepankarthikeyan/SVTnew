import { brotherhoodValues } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll } from '../RevealOnScroll'

export function BrotherhoodSection() {
  return (
    <section id="brotherhood" className="section section--brotherhood section--split-panel">
      <div className="container">
        <RevealOnScroll className="section-heading section-heading--center brotherhood-intro">
          <p className="kicker kicker--center kicker--triangle">Universal Brotherhood</p>
          <h2 className="section-heading__title">One Humanity. One Consciousness.</h2>
          <p className="section-heading__intro">
            The teachings encourage us to move beyond individual boundaries and develop a sense of
            universal brotherhood.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="brotherhood-banner">
            <img
              src="/images/ref/brotherhood.jpg"
              alt="Group meditating together in nature"
              width={1566}
              height={480}
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
          <p className="brotherhood-footer">
            Together, these values can create a more peaceful individual, family, society and world.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
