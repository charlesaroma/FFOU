import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function MediaCenterHero() {
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
      style={{ background: 'var(--color-zurich-950)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-zurich-400) 2px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Orb */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, var(--color-zurich-500) 0%, transparent 70%)',
            filter: 'blur(100px)',
            y,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute top-24 right-20 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Icon icon="ph:newspaper-bold" className="text-8xl text-zurich-400" />
      </motion.div>

      <div className="layout-spine relative z-10 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            style={{
              background: 'rgba(79, 160, 221, 0.2)',
              color: 'var(--color-zurich-300)',
              border: '1px solid rgba(79, 160, 221, 0.4)',
            }}
          >
            <span className="inline-flex items-center gap-2">
              <Icon icon="ph:broadcast-bold" className="text-sm" />
              Media Center
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl mt-3 mb-6 text-gradient-blue"
          style={{ textShadow: '0 0 60px rgba(35, 136, 212, 0.3)' }}
        >
          News & Resources
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          Stay updated with the latest from FFOU — news, publications, reports, and a gallery
          of our work across Uganda's fishing communities.
        </motion.p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path
            fill="var(--surface-b)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
