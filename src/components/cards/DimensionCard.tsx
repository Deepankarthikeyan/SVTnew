import { motion } from 'framer-motion'
import { DynamicIcon } from '../icons/IconMap'

const dimensionIconMap: Record<string, string> = {
  body: 'activity',
  mind: 'brain',
  force: 'sun',
  consciousness: 'eye',
  harmony: 'leaf',
}

type DimensionCardProps = {
  keyLabel: string
  subtitle: string
  gradient: string
  icon: string
}

export function DimensionCard({ keyLabel, subtitle, gradient, icon }: DimensionCardProps) {
  return (
    <motion.article
      className="dimension-card"
      style={{ background: gradient }}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(23, 63, 53, 0.28)' }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      <div className="dimension-card__glow" />
      <div className="dimension-card__icon-wrap">
        <DynamicIcon name={dimensionIconMap[icon] ?? 'leaf'} size={26} />
      </div>
      <h3>{keyLabel}</h3>
      <p>{subtitle}</p>
      <div className="dimension-card__silhouette" aria-hidden="true" />
    </motion.article>
  )
}
