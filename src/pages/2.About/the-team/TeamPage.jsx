import TheTeam from '../sections/TeamSection'
import AboutHero from '../sections/AboutHero'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function TheTeamPage() {
  return (
    <main>
      <AboutHero 
        title="Our Team"
        subtitle="Meet the dedicated team behind FFOU's mission, working across 131 member associations to empower Uganda's fishers."
        badgeText="Leadership"
        badgeIcon="ph:users-three-bold"
      />
      <TheTeam />
    </main>
  )
}
