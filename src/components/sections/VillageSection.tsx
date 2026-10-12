import { villageTiles } from '../../data/content'
import { useEnquire } from '../../context/EnquireContext'
import { SectionHeading } from '../SectionHeading'
import { RevealOnScroll, StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function VillageSection() {
  const { openEnquire } = useEnquire()

  return (
    <section id="village" className="section section--village">
      <div className="container">
        <SectionHeading title="A Peaceful Environment for Conscious Living" />
        <StaggerReveal className="village-grid">
          {villageTiles.map((tile) => (
            <StaggerItem key={tile.title}>
              <article className="village-card">
                <div className="village-card__media">
                  <img src={tile.image} alt="" width={520} height={360} loading="lazy" decoding="async" />
                </div>
                <div className="village-card__body">
                  <h3>{tile.title}</h3>
                  <p>{tile.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <RevealOnScroll className="village-cta">
          <button type="button" className="btn btn--primary" onClick={openEnquire}>
            Explore the Village
          </button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
