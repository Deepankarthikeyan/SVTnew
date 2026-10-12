import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Footer } from './components/Footer'
import { AboutSection } from './components/sections/AboutSection'
import { BalanceSection } from './components/sections/BalanceSection'
import { BrotherhoodSection } from './components/sections/BrotherhoodSection'
import { DimensionsSection } from './components/sections/DimensionsSection'
import { FinalCTASection } from './components/sections/FinalCTASection'
import { HeroSection } from './components/sections/HeroSection'
import { JourneySection } from './components/sections/JourneySection'
import { LifestyleSection } from './components/sections/LifestyleSection'
import { PracticeSection } from './components/sections/PracticeSection'
import { PurposeSection } from './components/sections/PurposeSection'
import { VillageSection } from './components/sections/VillageSection'
import { EnquireProvider } from './context/EnquireContext'
import { sectionIds } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const activeSection = useActiveSection([...sectionIds])

  return (
    <EnquireProvider>
      <div className="page">
        <ScrollProgress />
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <AboutSection />
          <PracticeSection />
          <DimensionsSection />
          <LifestyleSection />
          <JourneySection />
          <PurposeSection />
          <BrotherhoodSection />
          <VillageSection />
          <BalanceSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </EnquireProvider>
  )
}

export default App
