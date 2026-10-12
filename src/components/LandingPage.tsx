import { ScrollProgress } from './ScrollProgress'
import { Navbar } from './Navbar'
import { AboutSection } from './sections/AboutSection'
import { DimensionsSection } from './sections/DimensionsSection'
import { HeroSection } from './sections/HeroSection'
import { LifestyleSection } from './sections/LifestyleSection'
import { PracticeSection } from './sections/PracticeSection'
import { useActiveSection } from '../hooks/useActiveSection'
import { landingNavLinks, landingSectionIds } from '../data/content'

export function LandingPage() {
  const activeSection = useActiveSection([...landingSectionIds])

  return (
    <div className="page">
      <ScrollProgress />
      <Navbar activeSection={activeSection} links={landingNavLinks} transparentOnTop />
      <HeroSection />
      <AboutSection />
      <PracticeSection />
      <DimensionsSection />
      <LifestyleSection />
    </div>
  )
}
