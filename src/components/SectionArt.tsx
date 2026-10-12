import { motion, useReducedMotion } from 'framer-motion'
import { useEnquire } from '../context/EnquireContext'

export type SectionHotspot =
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

type SectionArtProps = {
  id: string
  src: string
  width: number
  height: number
  alt: string
  hotspots?: SectionHotspot[]
  priority?: boolean
}

export function SectionArt({
  id,
  src,
  width,
  height,
  alt,
  hotspots = [],
  priority = false,
}: SectionArtProps) {
  const { openEnquire } = useEnquire()
  const reduceMotion = useReducedMotion()

  return (
    <section id={id} className="section-art" aria-label={alt}>
      <motion.div
        className="section-art__frame"
        style={{ aspectRatio: `${width} / ${height}` }}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="section-art__img"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
        />
        {hotspots.length > 0 && (
          <div className="section-art__hotspots">
            {hotspots.map((spot) => (
              <button
                key={spot.label}
                type="button"
                className="section-art__hotspot"
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
        )}
      </motion.div>
    </section>
  )
}
