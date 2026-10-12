import type { ReactNode } from 'react'
import { RevealOnScroll } from './RevealOnScroll'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  intro?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  intro,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="kicker kicker--center">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      {intro && <div className="section-heading__intro">{intro}</div>}
    </RevealOnScroll>
  )
}
