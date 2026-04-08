import HomeHero from './sections/HomeHero'
import OurStory from './sections/OurStory'
import ActionSection from './sections/StatsSection'
import InitiativesSection from './sections/ProgramAreas'
import DonationCTA from './sections/DonationCTA'
import ActionAreas from './sections/SmartFisherApp'
import PartnerSection from '../3.programs/programs/components/PartnerSection'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <OurStory />
      <ActionSection />
      <InitiativesSection />
      <DonationCTA />
      <ActionAreas />
      <PartnerSection />
    </main>
  )
}
