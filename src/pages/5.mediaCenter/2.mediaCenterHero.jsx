import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function MediaCenterHero() {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--color-zurich-950)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--color-zurich-500)' }}
      />

      <div className="layout-spine relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--color-zurich-400)' }}
        >
          Media Center
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mt-3 mb-4 text-gradient-blue"
        >
          News & Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          Stay updated with the latest from FFOU — news, publications, reports, and a gallery
          of our work across Uganda's fishing communities.
        </motion.p>
      </div>
    </section>
  )
}
