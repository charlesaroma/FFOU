import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function DonateHero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center"
      style={{ background: 'var(--color-marine-950)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-marine-400) 2px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
           className="absolute right-1/4 top-1/4 w-[600px] h-[600px] rounded-full opacity-20"
           style={{ 
             background: 'radial-gradient(circle, var(--color-amber-500) 0%, transparent 70%)',
             filter: 'blur(100px)',
             y,
           }}
           animate={{
             scale: [1, 1.2, 1],
           }}
           transition={{
             duration: 15,
             repeat: Infinity,
             ease: 'easeInOut',
           }}
        />
      </div>

      <div className="layout-spine relative z-10 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            style={{
              background: 'rgba(245, 158, 11, 0.2)',
              color: 'var(--color-amber-300)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
            }}
          >
            <span className="inline-flex items-center gap-2">
              <Icon icon="ph:heart-bold" className="text-sm" />
              Empower Communities
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-header text-5xl md:text-7xl mb-8 leading-tight text-white"
        >
          Your Support Changes<br />
          <span className="text-amber-500">Lives on the Water</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: 'var(--color-marine-200)' }}
        >
          FFOU works tirelessly to bridge the gap in fisheries governance, health, 
          and technology. Your donation directly funds training, digital tools, 
          and advocacy for 131 member associations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#donate-details"
            className="w-full sm:w-auto px-10 py-5 rounded-sm font-bold text-sm bg-amber-500 text-white hover:bg-amber-600 transition-all tracking-widest uppercase flex items-center justify-center gap-2"
          >
            Donate Today
            <Icon icon="ph:arrow-down-bold" className="text-lg" />
          </a>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="layout-spine">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 opacity-60">
            {[
              { label: 'ASSOCIATIONS', val: '131+' },
              { label: 'GREAT LAKES', val: '5' },
              { label: 'ESTABLISHED', val: '2017' },
              { label: 'NGO BUREAU', val: 'VERIFIED' },
            ].map(s => (
              <div key={s.label} className="text-center md:text-left border-l border-white/20 pl-4">
                <div className="text-[10px] font-bold text-marine-300 tracking-tighter mb-1 uppercase">{s.label}</div>
                <div className="text-lg font-bold text-white">{s.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path
            fill="var(--surface-a)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
