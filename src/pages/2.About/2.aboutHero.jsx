import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--color-zurich-950)', minHeight: '60vh' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--color-militant-500)' }}
      />

      <div className="layout-spine relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-semibold tracking-widest uppercase"
          style={{ color: 'var(--color-zurich-400)' }}
        >
          About Us
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          The Federation of Fisheries Organisations Uganda (FFOU) is a national umbrella body 
          for all non-state actors in the fisheries sub-sector, working with 131 member associations.
        </motion.p>
      </div>
    </section>
  )
}
