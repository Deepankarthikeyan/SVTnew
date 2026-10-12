import { discoveries } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function JourneySection() {
  return (
    <section id="peace" className="section section--peace">
      <div className="container">
        <SectionHeading
          title="A Journey Towards Inner Peace"
          intro="Through regular practice and conscious living, seekers can develop:"
        />
        <StaggerReveal className="peace-grid">
          {discoveries.map((item) => (
            <StaggerItem key={item.num}>
              <article className="peace-card">
                <span className="peace-card__icon">
                  <DynamicIcon name={item.icon} size={20} />
                </span>
                <span className="peace-card__num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
