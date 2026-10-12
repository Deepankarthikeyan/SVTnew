import { wayOfLife } from '../../data/content'
import { DynamicIcon } from '../icons/IconMap'
import { RevealOnScroll, StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="section section--lifestyle">
      <div className="container lifestyle-grid">
        <RevealOnScroll>
          <h2 className="display-title display-title--green">More Than a Practice. A Way of Life.</h2>
          <p>
            Spiritual living is not limited to meditation or yoga. It is about bringing awareness
            into everyday life.
          </p>
        </RevealOnScroll>
        <StaggerReveal className="lifestyle-list">
          {wayOfLife.map((item) => (
            <StaggerItem key={item.label}>
              <div className="lifestyle-list__item">
                <span className="lifestyle-list__icon">
                  <DynamicIcon name={item.icon} size={18} />
                </span>
                <span>{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
