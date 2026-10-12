import { BotanicalDecor } from '../BotanicalDecor'
import { RevealOnScroll } from '../RevealOnScroll'

export function SimpleMessageSection() {
  return (
    <section className="simple-message" aria-labelledby="simple-message-title">
      <div className="simple-message__bg" aria-hidden="true">
        <img src="/images/ref/cta-sunset.jpg" alt="" width={1743} height={576} loading="lazy" decoding="async" />
        <div className="simple-message__shade" />
      </div>
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="top-right" />
      <div className="container simple-message__content">
        <RevealOnScroll>
          <p className="section-eyebrow section-eyebrow--center">A Simple Message</p>
          <h2 id="simple-message-title" className="display-title">
            Begin Your Inner Journey
          </h2>
        </RevealOnScroll>
      </div>
    </section>
  )
}
