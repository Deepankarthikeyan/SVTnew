import { ScrollProgress } from './ScrollProgress'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { AboutSection } from './sections/AboutSection'
import { BalanceSection } from './sections/BalanceSection'
import { BrotherhoodSection } from './sections/BrotherhoodSection'
import { DimensionsSection } from './sections/DimensionsSection'
import { FinalCTASection } from './sections/FinalCTASection'
import { SimpleMessageSection } from './sections/SimpleMessageSection'
import { HeroSection } from './sections/HeroSection'
import { JourneySection } from './sections/JourneySection'
import { LifestyleSection } from './sections/LifestyleSection'
import { PracticeSection } from './sections/PracticeSection'
import { PurposeSection } from './sections/PurposeSection'
import { VillageSection } from './sections/VillageSection'
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
      <JourneySection />
      <div className="split-sections">
        <PurposeSection />
        <BrotherhoodSection />
      </div>
      <VillageSection />
      <BalanceSection />
      <SimpleMessageSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
