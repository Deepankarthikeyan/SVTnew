import type { CSSProperties } from 'react'
import { discoveries } from '../../data/content'
import { BotanicalDecor } from '../BotanicalDecor'
import { DynamicIcon } from '../icons/IconMap'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function JourneySection() {
  return (
    <section id="peace" className="section section--peace">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="top-right" />
      <div className="container">
        <SectionHeading
          eyebrow="What You Can Discover"
          title="A Journey Towards Inner Peace"
          intro="Through regular practice and conscious living, seekers can develop:"
        />
        <StaggerReveal className="peace-grid">
          {discoveries.map((item) => (
            <StaggerItem key={item.num}>
              <article
                className="peace-card"
                style={{ '--peace-accent': item.accent } as CSSProperties}
              >
                <span className="peace-card__num">{item.num}</span>
                <span className="peace-card__icon">
                  <DynamicIcon name={item.icon} size={20} />
                </span>
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
