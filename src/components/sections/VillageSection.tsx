import { villageTiles } from '../../data/content'
import { useEnquire } from '../../context/EnquireContext'
import { RevealOnScroll, StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function VillageSection() {
  const { openEnquire } = useEnquire()

  return (
    <section id="village" className="section section--village">
      <div className="container village-split">
        <RevealOnScroll className="village-split__copy">
          <p className="kicker kicker--bar">Life at the Spiritual Village</p>
          <h2 className="display-title display-title--green">
            A Peaceful Environment for Conscious Living
          </h2>
          <p>
            Surrounded by nature, the Village provides an atmosphere where people can slow down,
            reflect, practise and reconnect with themselves.
          </p>
          <button type="button" className="btn btn--primary" onClick={openEnquire}>
            Explore the Village <span aria-hidden="true">→</span>
          </button>
        </RevealOnScroll>
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
      </div>
    </section>
  )
}
