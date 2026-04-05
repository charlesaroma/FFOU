import TheTeam from './4.theTeam'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function TheTeamPage() {
  return (
    <main>
      <section className="pt-28 pb-20" style={{ background: 'var(--color-marine-800)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              style={{
                background: 'rgba(0, 102, 204, 0.2)',
                color: 'var(--color-cerulean-300)',
                border: '1px solid rgba(0, 102, 204, 0.4)',
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
            className="font-header text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-marine-700 via-marine-500 to-marine-400 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 40px rgba(0, 51, 141, 0.3)' }}
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-marine-200)' }}
          >
            Meet the dedicated team behind FFOU's mission.
          </motion.p>
        </div>
      </section>
      <TheTeam />
    </main>
  )
}
