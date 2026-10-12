import { SectionArt, type SectionHotspot } from './SectionArt'

const heroHotspots: SectionHotspot[] = [
  { label: 'Enquire Now (navigation)', top: 2, left: 84, width: 14, height: 9, action: 'enquire' },
  { label: 'Explore Spiritual Living', top: 58, left: 5, width: 22, height: 10, href: '#journey' },
  { label: 'Enquire Now (hero)', top: 58, left: 28, width: 14, height: 10, action: 'enquire' },
]

const SECTIONS = [
  {
    id: 'home',
    src: '/sections/hero.png',
    width: 1920,
    height: 826,
    alt: 'Hero — Spiritual Based Life Living',
    hotspots: heroHotspots,
    priority: true,
  },
  {
    id: 'about',
    src: '/sections/about.png',
    width: 1920,
    height: 578,
    alt: 'About — Live Better. Think Deeper. Know Yourself.',
  },
  {
    id: 'journey',
    src: '/sections/journey.png',
    width: 1920,
    height: 717,
    alt: 'The Journey Within — five spiritual practices',
  },
  {
    id: 'dimensions',
    src: '/sections/dimensions.png',
    width: 1920,
    height: 545,
    alt: 'Five Dimensions of Conscious Living',
  },
  {
    id: 'lifestyle',
    src: '/sections/lifestyle.png',
    width: 1920,
    height: 397,
    alt: 'More Than a Practice. A Way of Life.',
  },
] as const

export function FiveSectionPage() {
  return (
    <div className="five-sections">
      <a className="skip-link" href="#about">Skip to about section</a>
      <nav className="five-sections__nav" aria-label="Page sections">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.id}</a>
        ))}
      </nav>
      <main>
        {SECTIONS.map((section) => (
          <SectionArt
            key={section.id}
            id={section.id}
            src={section.src}
            width={section.width}
            height={section.height}
            alt={section.alt}
            hotspots={'hotspots' in section ? section.hotspots : undefined}
            priority={'priority' in section ? section.priority : false}
          />
        ))}
      </main>
    </div>
  )
}
