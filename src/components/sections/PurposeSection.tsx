import { purposeItems } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll } from '../RevealOnScroll'

export function PurposeSection() {
  return (
    <section id="purpose" className="section section--purpose section--split-panel">
      <div className="container purpose-layout">
        <RevealOnScroll className="purpose-layout__media">
          <img
            src="/images/ref/purpose.jpg"
            alt="Person meditating at sunrise"
            width={783}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </RevealOnScroll>
        <RevealOnScroll className="purpose-layout__copy" delay={0.1}>
          <p className="kicker kicker--bar">The Purpose of the Journey</p>
          <h2 className="display-title display-title--green">Know Yourself. Understand Life.</h2>
          <ul className="purpose-points">
            {purposeItems.map((item) => (
              <li key={item.title}>
                <span className="purpose-points__icon">
                  <DynamicIcon name={item.icon} size={18} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  )
}
