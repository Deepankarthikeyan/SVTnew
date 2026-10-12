import { dimensions } from '../../data/content'
import { DimensionCard } from '../cards/DimensionCard'
import { BotanicalDecor } from '../BotanicalDecor'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function DimensionsSection() {
  return (
    <section id="dimensions" className="section section--dimensions">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="top-right" />
      <div className="container">
        <SectionHeading eyebrow="Five Dimensions" title="Five Dimensions of Conscious Living" />
      </div>
      <StaggerReveal className="dimensions-row">
        {dimensions.map((dim) => (
          <StaggerItem key={dim.key}>
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
    </section>
  )
}
