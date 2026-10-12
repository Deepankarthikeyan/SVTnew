import { journeyPractices } from '../../data/content'
import { PracticeCard } from '../cards/PracticeCard'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function PracticeSection() {
  return (
    <section id="journey" className="section section--practices">
      <div className="container">
        <SectionHeading
          eyebrow="The Journey Within"
          title="From Physical Well-being to Inner Transformation"
          intro="Our approach brings together simple yet meaningful practices that encourage a balanced and conscious way of living."
        />
        <StaggerReveal className="practice-grid">
          {journeyPractices.map((item) => (
            <StaggerItem key={item.title}>
              <PracticeCard {...item} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
