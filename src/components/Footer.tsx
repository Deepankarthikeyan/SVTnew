import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <BrandLogo variant="footer" />
        <p className="site-footer__tag">Know Yourself · Understand Life · Live in Harmony</p>
        <p className="site-footer__copy">© {new Date().getFullYear()} Spiritual Based Life Living</p>
      </div>
    </footer>
  )
}
