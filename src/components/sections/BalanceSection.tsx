import type { CSSProperties } from 'react'
import { comparison } from '../../data/content'
import { BotanicalDecor } from '../BotanicalDecor'
import { SectionHeading } from '../SectionHeading'
import { StaggerItem, StaggerReveal } from '../RevealOnScroll'

export function BalanceSection() {
  return (
    <section id="balance" className="section section--balance">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="bottom-right" />
      <div className="container">
        <SectionHeading
          eyebrow="Why Spiritual Based Life Living"
          title="Bring Balance Into Everyday Life"
        />
        <StaggerReveal className="balance-grid">
          {comparison.map((col) => (
            <StaggerItem key={col.title}>
              <article
                className="balance-card"
                style={
                  {
                    '--accent': col.color,
                    '--wash': col.wash,
                  } as CSSProperties
                }
              >
                <div className="balance-card__media">
                  <img src={col.image} alt="" width={480} height={300} loading="lazy" decoding="async" />
                </div>
                <div className="balance-card__body">
                  <h3>{col.title}</h3>
                  <ul>
                    {col.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
