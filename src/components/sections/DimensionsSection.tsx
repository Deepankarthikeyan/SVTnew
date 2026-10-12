import { dimensions } from '../../data/content'
import { DimensionCard } from '../cards/DimensionCard'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

/** Five dimension pillars — single React layer (no mockup slice backgrounds). */
export function DimensionsSection() {
  return (
    <section id="dimensions" className="section section--dimensions">
      <div className="container dimensions-head">
        <SectionHeading
          eyebrow="Five Dimensions"
          title="Five Dimensions of Conscious Living"
          align="center"
        />
      </div>
      <div className="dimensions-row-wrap">
        <StaggerReveal className="dimensions-row">
          {dimensions.map((dim) => (
            <StaggerItem key={dim.key} className="dimensions-row__item">
              <DimensionCard
                keyLabel={dim.key}
                subtitle={dim.subtitle}
                gradient={dim.gradient}
                icon={dim.icon}
                image={dim.image}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
