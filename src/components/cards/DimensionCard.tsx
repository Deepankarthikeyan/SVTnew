import { motion } from 'framer-motion'
import { DynamicIcon } from '../icons/IconMap'

const dimensionIconMap: Record<string, string> = {
  body: 'user',
  mind: 'brain',
  force: 'sun',
  consciousness: 'flower2',
  harmony: 'users',
}

type DimensionCardProps = {
  keyLabel: string
  subtitle: string
  gradient: string
  icon: string
  image: string
}

export function DimensionCard({ keyLabel, subtitle, gradient, icon, image }: DimensionCardProps) {
  return (
    <motion.article
      className="dimension-card"
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(23, 63, 53, 0.28)' }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      <img className="dimension-card__photo" src={image} alt="" width={320} height={420} loading="lazy" decoding="async" />
      <div className="dimension-card__overlay" style={{ background: gradient }} />
      <div className="dimension-card__glow" />
      <div className="dimension-card__content">
        <div className="dimension-card__icon-wrap">
          <DynamicIcon name={dimensionIconMap[icon] ?? 'leaf'} size={26} />
        </div>
        <h3>{keyLabel}</h3>
        <p>{subtitle}</p>
      </div>
    </motion.article>
  )
}
