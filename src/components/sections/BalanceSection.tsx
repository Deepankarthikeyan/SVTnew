import type { CSSProperties } from 'react'
import { comparison } from '../../data/content'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function BalanceSection() {
  return (
    <section id="balance" className="section section--balance">
      <div className="container">
        <SectionHeading title="Bring Balance Into Everyday Life" />
        <StaggerReveal className="balance-grid">
          {comparison.map((col) => (
            <StaggerItem key={col.title}>
              <article className="balance-card" style={{ '--accent': col.color } as CSSProperties}>
                <div className="balance-card__media">
                  <img src={col.image} alt="" width={480} height={300} loading="lazy" decoding="async" />
                  <h3>{col.title}</h3>
                </div>
                <ul>
                  {col.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
