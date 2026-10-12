import { useEnquire } from '../context/EnquireContext'

/** Native dimensions of public/mockup/reference-full.jpg */
const MOCKUP_WIDTH = 581
const MOCKUP_HEIGHT = 1600

/** Scroll targets aligned to the full-page reference artwork */
const SECTION_ANCHORS = [
  { id: 'home', top: 0 },
  { id: 'about', top: 18.9 },
  { id: 'journey', top: 26.8 },
  { id: 'dimensions', top: 34.1 },
  { id: 'lifestyle', top: 41.6 },
  { id: 'peace', top: 47.1 },
  { id: 'purpose', top: 53.4 },
  { id: 'brotherhood', top: 53.4 },
  { id: 'village', top: 62.8 },
  { id: 'balance', top: 70.9 },
  { id: 'contact', top: 77.8 },
]

type Hotspot =
  | {
      label: string
      top: number
      left: number
      width: number
      height: number
      action: 'enquire'
    }
  | {
      label: string
      top: number
      left: number
      width: number
      height: number
      href: string
    }

const HOTSPOTS: Hotspot[] = [
  { label: 'Enquire Now (navigation)', top: 1.2, left: 72, width: 26, height: 3.2, action: 'enquire' },
  { label: 'Explore Spiritual Living', top: 14.8, left: 4, width: 42, height: 2.8, href: '#journey' },
  { label: 'Enquire Now (hero)', top: 14.8, left: 48, width: 30, height: 2.8, action: 'enquire' },
  { label: 'Explore the Village', top: 66.5, left: 4, width: 38, height: 2.6, action: 'enquire' },
  { label: 'Begin Your Journey', top: 88.5, left: 28, width: 44, height: 3.2, action: 'enquire' },
]

export function MockupExactPage() {
  const { openEnquire } = useEnquire()

  function scrollToSection(hash: string) {
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="exact-mockup">
      <a className="skip-link" href="#about">Skip to content</a>

      <div className="exact-mockup__frame">
        <div
          className="exact-mockup__canvas"
          style={{ aspectRatio: `${MOCKUP_WIDTH} / ${MOCKUP_HEIGHT}` }}
        >
          <img
            id="home"
            className="exact-mockup__full"
            src="/mockup/reference-full.jpg"
            alt="Vethathiri Maharishi Spiritual Village — Spiritual Based Life Living (full design)"
            width={MOCKUP_WIDTH}
            height={MOCKUP_HEIGHT}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          {SECTION_ANCHORS.map((anchor) => (
            <span
              key={anchor.id}
              id={anchor.id}
              className="exact-mockup__anchor"
              style={{ top: `${anchor.top}%` }}
            />
          ))}

          <div className="exact-mockup__hotspots">
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.label}
                type="button"
                className="exact-mockup__hotspot"
                style={{
                  top: `${spot.top}%`,
                  left: `${spot.left}%`,
                  width: `${spot.width}%`,
                  height: `${spot.height}%`,
                }}
                aria-label={spot.label}
                onClick={() => {
                  if ('action' in spot && spot.action === 'enquire') openEnquire()
                  else if ('href' in spot) scrollToSection(spot.href)
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <nav className="exact-mockup__nav-fallback" aria-label="Section navigation">
        {SECTION_ANCHORS.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.id}</a>
        ))}
      </nav>
    </div>
  )
}
