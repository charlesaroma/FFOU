import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const headlineWords = [
  'Empowering', 
  "Uganda's", 
  'Fisheries', 
  'for', 
  'a', 
  'Sustainable', 
  'Future'
]

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, var(--color-zurich-900) 0%, var(--color-zurich-950) 70%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Decorative Orb */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--color-zurich-700) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.3,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Orb */}
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--color-militant-500) 0%, transparent 70%)',
          filter: 'blur(50px)',
          opacity: 0.15,
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'var(--color-zurich-400)',
            opacity: 0.3,
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="layout-spine relative z-10 pt-28 pb-16">
        <div className="max-w-4xl text-center">
          {/* Badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.1}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'var(--color-zurich-800)',
                color: 'var(--color-zurich-300)',
              }}
            >
              Est. 2017 · Uganda
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'var(--color-militant-900)',
                color: 'var(--color-militant-300)',
              }}
            >
              131+ Member Associations
            </span>
          </motion.div>

          {/* Headline with Word-by-Word Reveal */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            <div className="flex flex-wrap justify-center gap-x-4">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={i >= 4 ? 'text-gradient-blue' : 'text-white'}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.7}
            className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--color-zurich-200)' }}
          >
            The apex umbrella body representing 131 member associations, dedicated to ethical fishing,
            community health, and digital innovation in the fisheries sub-sector.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.9}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/membership"
              className="btn-premium px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ background: 'var(--color-zurich-600)', color: '#fff' }}
            >
              <Icon icon="ph:users-three-bold" className="text-lg" />
              Join the Federation
            </Link>
            <Link
              to="/programs#abavubi"
              className="btn-premium px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Icon icon="ph:play-circle-bold" className="text-lg" />
              Explore Abavubi App
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Icon icon="ph:caret-down-bold" className="text-zurich-400 text-2xl opacity-50" />
      </motion.div>
    </section>
  )
}
