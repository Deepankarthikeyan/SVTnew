import { purposeItems } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll } from '../RevealOnScroll'

export function PurposeSection() {
  return (
    <section id="purpose" className="section section--purpose">
      <div className="container purpose-layout">
        <RevealOnScroll className="purpose-layout__media">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80"
            alt="Person meditating at sunrise"
            width={720}
            height={880}
            loading="lazy"
            decoding="async"
          />
        </RevealOnScroll>
        <RevealOnScroll className="purpose-layout__copy" delay={0.1}>
          <h2 className="display-title">Know Yourself. Understand Life.</h2>
          <p>The ultimate purpose of this spiritual journey is to:</p>
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
