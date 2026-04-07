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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-marine-900"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          src="https://images.unsplash.com/photo-1521791136064-7986c2959c92?auto=format&fit=crop&q=80&w=2048" 
          alt="Uganda Fisheries"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-marine-900/40" />
      </div>

      {/* Main Content Area */}
      <motion.div
        className="max-w-[1240px] mx-auto px-6 relative z-10 pt-32 pb-20 text-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Empowering Uganda's Fisheries<br />for a Sustainable Future
          </motion.h1>

          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Representing 131 member associations across Uganda. We are 
            dedicated to ethical fishing, community health, and digital 
            innovation in the fisheries sub-sector.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/membership"
              className="w-full sm:w-auto px-10 py-5 rounded-sm font-bold text-sm bg-white text-marine-900 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 tracking-widest uppercase"
            >
              Join the Federation
            </Link>

            <Link
              to="/programs/ict-integration"
              className="w-full sm:w-auto px-10 py-5 rounded-sm font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-marine-900 transition-all flex items-center justify-center gap-2 tracking-widest uppercase"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Preview */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#f8fafc] py-8 border-t border-slate-100 hidden md:block">
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center opacity-80">
          {[
            { label: "Member Associations", value: "131+" },
            { label: "NGO Bureau Reg.", value: "Verified" },
            { label: "Est. Year", value: "2017" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 items-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</span>
              <span className="text-xl font-bold text-marine-800">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
