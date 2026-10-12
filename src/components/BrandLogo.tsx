type BrandLogoProps = {
  className?: string
  variant?: 'default' | 'footer'
}

export function BrandLogo({ className = '', variant = 'default' }: BrandLogoProps) {
  return (
    <img
      src="/images/brand-logo.png"
      alt="Vethathiri Maharishi Spiritual Village"
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      width={variant === 'footer' ? 280 : 240}
      height={variant === 'footer' ? 72 : 62}
      decoding="async"
    />
  )
}
