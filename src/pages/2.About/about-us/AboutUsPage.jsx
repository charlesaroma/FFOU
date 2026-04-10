import AboutHero from '../sections/AboutHero'
import AboutUs from '../sections/AboutUsSection'

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero 
        title="Our Story" 
        subtitle="The Federation of Fisheries Organisations Uganda (FFOU) is a national umbrella body for all non-state actors in the fisheries sub-sector, working with 131 member associations across Uganda's five great lakes."
        badgeText="About Us"
        badgeIcon="mdi:info"
      />
      <AboutUs />
    </main>
  )
}
