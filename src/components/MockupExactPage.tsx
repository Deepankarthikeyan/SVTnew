import { useEnquire } from '../context/EnquireContext'

const SLICES = [
  { id: 'home', src: '/mockup/slice-00-hero.jpg', alt: 'Hero — Spiritual Based Life Living' },
  { id: 'about', src: '/mockup/slice-01-about.jpg', alt: 'About — Live Better. Think Deeper. Know Yourself.' },
  { id: 'journey', src: '/mockup/slice-02-journey.jpg', alt: 'The Journey Within — practices' },
  { id: 'dimensions', src: '/mockup/slice-03-dimensions.jpg', alt: 'Five Dimensions of Conscious Living' },
  { id: 'lifestyle', src: '/mockup/slice-04-lifestyle.jpg', alt: 'More Than a Practice. A Way of Life.' },
  { id: 'peace', src: '/mockup/slice-05-peace.jpg', alt: 'A Journey Towards Inner Peace' },
  { id: 'purpose', src: '/mockup/slice-06-purpose.jpg', alt: 'Purpose and Universal Brotherhood' },
  { id: 'village', src: '/mockup/slice-07-village.jpg', alt: 'Life at the Spiritual Village' },
  { id: 'balance', src: '/mockup/slice-08-balance.jpg', alt: 'Bring Balance Into Everyday Life' },
  { id: 'contact', src: '/mockup/slice-09-cta.jpg', alt: 'Begin Your Inner Journey' },
]

/** Invisible hit areas (% of full 581×1600 mockup) for key CTAs only */
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

  return (
    <div className="exact-mockup">
      <a className="skip-link" href="#about">Skip to content</a>

      <div className="exact-mockup__frame">
        <div className="exact-mockup__stack" aria-label="Vethathiri Maharishi Spiritual Village">
          {SLICES.map((slice, index) => (
            <img
              key={slice.id}
              id={slice.id}
              className="exact-mockup__slice"
              src={slice.src}
              alt={slice.alt}
              width={581}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : undefined}
            />
          ))}

          <div className="exact-mockup__hotspots" aria-hidden={false}>
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
                  else if ('href' in spot) {
                    document.querySelector(spot.href)?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <nav className="exact-mockup__nav-fallback" aria-label="Section navigation">
        {SLICES.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.id}</a>
        ))}
      </nav>
    </div>
  )
}
