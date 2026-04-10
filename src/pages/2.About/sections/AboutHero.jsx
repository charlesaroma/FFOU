import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <img
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146"
        alt="About FFOU"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marine-900/75" />
      <div className="absolute inset-0 bg-linear-to-r from-marine-900/90 via-marine-900/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-marine-900/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-amber-400" />
            <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.35em]">
              Federation of Fisheries Organisations Uganda
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6 tracking-tight">
            Who We Are
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            The national umbrella body uniting 131 fisheries associations to advocate, empower, and transform Uganda's fisheries sub-sector.
          </p>

          {/* Quick nav breadcrumb pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {['About Us', 'The Team', 'Our Partners'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-[4px] border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
