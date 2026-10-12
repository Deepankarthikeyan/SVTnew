import { motion } from 'framer-motion'
import { DynamicIcon } from '../icons/IconMap'

type PracticeCardProps = {
  icon: string
  title: string
  description: string
  image: string
}

export function PracticeCard({ icon, title, description, image }: PracticeCardProps) {
  return (
    <motion.article
      className="practice-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className="practice-card__media">
        <img src={image} alt="" width={400} height={280} loading="lazy" decoding="async" />
      </div>
      <div className="practice-card__badge">
        <DynamicIcon name={icon} size={18} />
      </div>
      <div className="practice-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  )
}
