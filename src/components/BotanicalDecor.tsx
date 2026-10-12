type BotanicalDecorProps = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export function BotanicalDecor({ position = 'top-right' }: BotanicalDecorProps) {
  return (
    <svg
      className={`botanical botanical--${position}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <path
        d="M60 110c-8-22-28-38-28-58a28 28 0 0 1 56 0c0 20-20 36-28 58z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M60 52V20M48 32l12-8 12 8M42 44l18-6 18 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
