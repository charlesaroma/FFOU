import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function AboutHero({ title = "Our Story", subtitle, badgeText = "About Us", badgeIcon = "ph:info-bold" }) {
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
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-marine-400) 2px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
           className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full opacity-20"
           style={{ 
             background: 'radial-gradient(circle, var(--color-cerulean-500) 0%, transparent 70%)',
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
        
        <motion.div
           className="absolute left-1/4 top-1/3 w-[300px] h-[300px] rounded-full opacity-15"
           style={{ 
             background: 'radial-gradient(circle, var(--color-marine-500) 0%, transparent 70%)',
             filter: 'blur(80px)',
           }}
           animate={{
             y: [0, -50, 0],
             x: [0, 30, 0],
           }}
           transition={{
             duration: 12,
             repeat: Infinity,
             ease: 'easeInOut',
           }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 relative z-10 text-center" style={{ opacity }}>
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
              <Icon icon={badgeIcon} className="text-sm" />
              {badgeText}
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-header text-5xl md:text-7xl mt-3 mb-6 text-white"
          style={{ textShadow: '0 0 60px rgba(0, 51, 141, 0.3)' }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-marine-200)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Stats Preview - only show if it's the main about page */}
        {title === "Our Story" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {[
              { value: '2017', label: 'Established', icon: 'ph:calendar-bold' },
              { value: '131+', label: 'Members', icon: 'ph:users-bold' },
              { value: '5', label: 'Great Lakes', icon: 'ph:waves-bold' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  background: 'rgba(0, 20, 56, 0.4)',
                  border: '1px solid rgba(0, 102, 204, 0.2)',
                }}
              >
                <Icon icon={stat.icon} className="text-xl text-marine-400" />
                <div className="text-left">
                  <div className="font-header text-xl text-white">{stat.value}</div>
                  <div className="text-xs text-marine-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
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
