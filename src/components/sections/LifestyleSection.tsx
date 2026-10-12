import { wayOfLife } from '../../data/content'
import { BotanicalDecor } from '../BotanicalDecor'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll, StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="section section--lifestyle">
      <BotanicalDecor position="bottom-left" />
      <BotanicalDecor position="top-right" />
      <div className="container lifestyle-grid">
        <RevealOnScroll>
          <p className="kicker kicker--bar">A Way of Living</p>
          <h2 className="display-title display-title--green">More Than a Practice. A Way of Life.</h2>
          <p className="lifestyle-grid__intro">
            Spiritual living is not limited to meditation or yoga. It is about bringing awareness
            into everyday life.
          </p>
        </RevealOnScroll>
        <StaggerReveal className="lifestyle-list">
          {wayOfLife.map((item) => (
            <StaggerItem key={item.title}>
              <div className="lifestyle-list__item">
                <span className="lifestyle-list__icon">
                  <DynamicIcon name={item.icon} size={18} />
                </span>
                <span className="lifestyle-list__text">
                  <strong>{item.title}</strong>
                  <span className="lifestyle-list__sub">{item.sub}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
