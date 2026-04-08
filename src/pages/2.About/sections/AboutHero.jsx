import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function AboutHero({ 
  title = "Our Story", 
  subtitle = "Empowering fishing communities across Uganda's great lakes since 2017.",
  badgeText = "About Us" 
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/about%20page/aboutHero.png?updatedAt=1775579643146" 
        alt="About FFOU" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.src = "https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146";
        }}
      />
      <div className="absolute inset-0 bg-marine-900/60" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block tracking-[0.2em]">
            {badgeText.toUpperCase()}
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            {subtitle}
          </p>

          {/* Minimalist Stats Row */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 border-t border-white/10 pt-10">
            {[
              { val: '2017', label: 'ESTABLISHED' },
              { val: '131+', label: 'ASSOCIATIONS' },
              { val: '12+', label: 'ACTIVE PROGRAMS' },
              { val: '2.1M+', label: 'LAKE USERS' },
            ].map(s => (
              <div key={s.label} className="text-center group">
                <div className="text-white text-2xl md:text-3xl font-bold mb-1 transition-transform group-hover:scale-110">{s.val}</div>
                <div className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
