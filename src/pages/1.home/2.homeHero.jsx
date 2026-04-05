import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function HomeHero() {
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-marine-800"
    >
      {/* Background with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          src="https://images.unsplash.com/photo-1580173611369-e705b0c95094?auto=format&fit=crop&q=80&w=2048" 
          alt="Uganda Fisheries"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-marine-800/95 via-marine-800/60 to-marine-800" />
      </div>

      {/* Main Content Area */}
      <motion.div
        className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 relative z-10 pt-40 pb-24"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marine-700/50 border border-marine-400/30 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cerulean-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-marine-100">
              Federation of Fisheries Organizations Uganda
            </span>
          </motion.div>

          {/* Impactful Typography */}
          <h1 className="text-white mb-8 leading-[1.05]">
            <span className="block text-h2 md:text-d4 font-header tracking-tight">
              Empowering Uganda's Fisheries
            </span>
            <span className="block text-h1 md:text-d3 font-header tracking-tight bg-linear-to-r from-marine-700 via-marine-500 to-marine-400 bg-clip-text text-transparent">
              for a Sustainable Future
            </span>
          </h1>

          {/* Balanced Subtext */}
          <p className="text-content-main md:text-content-lg text-marine-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Representing 131 member associations across Uganda. We are 
            dedicated to ethical fishing, community health, and digital 
            innovation in the fisheries sub-sector.
          </p>

          {/* Direct CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/membership"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-marine-500 text-white hover:bg-marine-400 transition-all duration-300 shadow-xl shadow-marine-900/40 flex items-center justify-center gap-2 group"
            >
              <Icon icon="ph:users-three-bold" className="text-lg group-hover:scale-110 transition-transform" />
              Join the Federation
            </Link>

            <Link
              to="/programs#abavubi"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-white/5 text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Icon icon="ph:play-circle-bold" className="text-lg text-marine-200" />
              Explore Abavubi App
            </Link>
          </div>

          {/* Trusted By / Stats Snippet */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { label: "Member Associations", value: "131+" },
              { label: "NGO Bureau Reg.", value: "Verified" },
              { label: "Est. Year", value: "2017" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-marine-300 font-bold">{stat.label}</span>
                <span className="text-xl font-header text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Simplified, Professional Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-linear-to-b from-marine-400 to-transparent" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-marine-400 font-bold">Discover</span>
        </div>
      </motion.div>
    </section>
  )
}
