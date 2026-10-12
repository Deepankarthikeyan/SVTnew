import { BotanicalDecor } from '../BotanicalDecor'
import { RevealOnScroll } from '../RevealOnScroll'

export function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="bottom-right" />
      <div className="container about-grid">
        <RevealOnScroll className="about-grid__visual">
          <div className="about-portrait">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=720&q=80"
              alt="Spiritual teacher portrait"
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="about-grid__copy" delay={0.08}>
          <h2 className="display-title">Live Better. Think Deeper. Know Yourself.</h2>
          <p>
            Vethathiri Maharishi Spiritual Village offers a serene environment where spiritual
            practices become part of everyday life.
          </p>
          <p>
            The journey begins with caring for the body, develops awareness of the mind and life
            force, and gradually leads towards greater self-understanding and inner peace.
          </p>
          <blockquote className="quote-box">
            “Know yourself. Understand life. Live in harmony.”
            <cite>— Vethathiri Maharishi</cite>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  )
}
