import { BotanicalDecor } from '../BotanicalDecor'
import { RevealOnScroll } from '../RevealOnScroll'

export function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <BotanicalDecor position="top-left" />
      <BotanicalDecor position="bottom-right" />
      <div className="container about-grid">
        <RevealOnScroll className="about-grid__visual">
          <div className="about-portrait about-portrait--soft">
            <img
              src="/mockup/about-portrait.jpg"
              alt="Vethathiri Maharishi"
              width={834}
              height={744}
              loading="lazy"
              decoding="async"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="about-grid__copy" delay={0.08}>
          <p className="kicker kicker--bar">About</p>
          <h2 className="display-title display-title--green">Live Better. Think Deeper. Know Yourself.</h2>
          <p>
            Vethathiri Maharishi Spiritual Village offers a serene environment where spiritual
            practices become part of everyday life.
          </p>
          <p>
            The journey begins with caring for the body, develops awareness of the mind and life
            force, and gradually leads towards greater self-understanding and inner peace.
          </p>
          <blockquote className="quote-box quote-box--featured">
            <span className="quote-box__mark" aria-hidden="true">“</span>
            <div>
              <p className="quote-box__text">Know yourself. Understand life. Live in harmony.</p>
              <cite>— Vethathiri Maharishi</cite>
            </div>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  )
}
