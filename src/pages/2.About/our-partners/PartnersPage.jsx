import AboutOurPartners from '../sections/PartnersSection'
import AboutHero from '../sections/AboutHero'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function OurPartnersPage() {
  return (
    <main>
      <AboutHero 
        title="Our Partners"
        subtitle="Organizations and donor bodies we collaborate with to drive sustainable impact in Uganda's fisheries sub-sector."
        badgeText="Collaboration"
        badgeIcon="ph:handshake-bold"
      />
      <AboutOurPartners />
    </main>
  )
}
