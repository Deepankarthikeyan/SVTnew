import { journeyPractices } from '../../data/content'
import { PracticeCard } from '../cards/PracticeCard'
import { BotanicalDecor } from '../BotanicalDecor'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function PracticeSection() {
  return (
    <section id="journey" className="section section--practices">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="top-right" />
      <div className="container">
        <SectionHeading
          eyebrow="The Journey Within"
          title="From Physical Well-being to Inner Transformation"
          intro="Our approach brings together simple yet meaningful practices that encourage a balanced and conscious way of living."
        />
        <StaggerReveal className="practice-grid">
          {journeyPractices.map((item, index) => (
            <StaggerItem key={item.title}>
              <PracticeCard {...item} index={index} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
