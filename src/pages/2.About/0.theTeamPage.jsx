import TheTeam from './4.theTeam'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function TheTeamPage() {
  return (
    <main>
      <section className="pt-28 pb-20" style={{ background: 'var(--color-zurich-950)' }}>
        <div className="layout-spine text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              style={{
                background: 'rgba(39, 163, 87, 0.2)',
                color: 'var(--color-militant-300)',
                border: '1px solid rgba(39, 163, 87, 0.4)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <Icon icon="ph:users-three-bold" className="text-sm" />
                Leadership
              </span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-gradient-blue"
            style={{ textShadow: '0 0 40px rgba(35, 136, 212, 0.3)' }}
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-zurich-200)' }}
          >
            Meet the dedicated team behind FFOU's mission.
          </motion.p>
        </div>
      </section>
      <TheTeam />
    </main>
  )
}
