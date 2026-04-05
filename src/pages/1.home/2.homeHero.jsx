import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

const headlineWords = ['Empowering', "Uganda's", 'Fisheries', 'for', 'a', 'Sustainable', 'Future']

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

export default function HomeHero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const wavePath = "M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zurich-950"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1580173611369-e705b0c95094?auto=format&fit=crop&q=80&w=2048" 
          alt="Lake Victoria Sunrise"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-zurich-950/80 via-zurich-950/40 to-zurich-950" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1] z-1">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 160, 221, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 160, 221, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs with Enhanced Animations */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-125 h-125 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(35, 136, 212, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          y,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(39, 163, 87, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fish/Fishing Hook Decorative Elements */}
      <motion.div
        className="absolute top-[20%] left-[8%] opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Icon icon="ph:fish-simple-bold" className="text-9xl text-zurich-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[8%] opacity-15"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        <Icon icon="ph:waves-bold" className="text-8xl text-zurich-400" />
      </motion.div>

      {/* Floating Particles System */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-zurich-300"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="layout-spine relative z-10 pt-28 pb-20"
        style={{ opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Badges with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <motion.span
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              style={{
                background: 'rgba(14, 54, 85, 0.6)',
                color: 'var(--color-zurich-300)',
                border: '1px solid rgba(79, 160, 221, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center gap-2">
                Est. 2017 · Uganda
              </span>
            </motion.span>
            
            <motion.span
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              style={{
                background: 'rgba(39, 163, 87, 0.15)',
                color: 'var(--color-militant-300)',
                border: '1px solid rgba(39, 163, 87, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center gap-2">
                <Icon icon="ph:users-three-bold" className="text-sm" />
                131+ Member Associations
              </span>
            </motion.span>

            <motion.span
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: 'var(--color-amber-300)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center gap-2">
                <Icon icon="ph:medal-bold" className="text-sm" />
                NGO Bureau Registered
              </span>
            </motion.span>
          </motion.div>

          {/* Enhanced Headline with 3D Effect */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4" style={{ perspective: '1000px' }}>
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${i >= 4 ? 'text-gradient-blue' : 'text-white'}`}
                    style={{ 
                      textShadow: i >= 4 ? '0 0 40px rgba(35, 136, 212, 0.3)' : '0 4px 30px rgba(0, 0, 0, 0.5)',
                    }}
                    whileHover={{ scale: 1.05, rotateX: -10 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>

          {/* Enhanced Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="font-body text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--color-zurich-200)' }}
          >
            The apex umbrella body representing 131 member associations, dedicated to ethical fishing, community health, and digital innovation in the fisheries sub-sector.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link
                to="/membership"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zurich-500/30"
                style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
              >
                <span className="absolute inset-0 bg-linear-to-r from-zurich-600 to-zurich-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Icon icon="ph:users-three-bold" className="text-lg" />
                  Join the Federation
                </span>
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link
                to="/programs#abavubi"
                className="group px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm border-2 border-white/30 hover:bg-white/10"
                style={{ color: '#fff' }}
              >
                <Icon icon="ph:play-circle-bold" className="text-lg" />
                Explore Abavubi App
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Animated Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <motion.path
            fill="rgba(35, 136, 212, 0.1)"
            d={wavePath}
            animate={{
              d: [
                wavePath,
                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                wavePath,
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zurich-400 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-zurich-400/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-zurich-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
