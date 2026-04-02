import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedCounter from '../../components/ui/AnimatedCounter'

const stats = [
  { number: 6, label: 'Regions Reached', icon: 'ph:map-pin-bold', color: 'var(--color-zurich-500)' },
  { number: 135, label: 'Associations Served', icon: 'ph:users-three-bold', color: 'var(--color-militant-500)' },
  { number: 2102491, label: 'Individuals Served', icon: 'ph:user-bold', color: 'var(--color-amber-500)' },
  { number: 12, label: 'Programs', icon: 'ph:folder-bold', color: 'var(--color-indigo-500)' },
  { number: 15612, label: 'Community Interventions', icon: 'ph:hand-heart-bold', color: 'var(--color-rose-500)' },
]

const programs = [
  {
    icon: 'ph:graduation-cap-bold',
    title: 'Capacity Building',
    description: 'Training fishers and community members in leadership, business skills, and financial literacy to strengthen organizational capacity.',
    color: 'var(--color-zurich-500)',
    bg: 'var(--color-zurich-50)',
  },
  {
    icon: 'ph:fish-bold',
    title: 'Aquaculture',
    description: 'Promoting sustainable fish farming and aquaponics to diversify livelihoods and increase fish production in Uganda.',
    color: 'var(--color-militant-500)',
    bg: 'var(--color-militant-100)',
  },
  {
    icon: 'ph:tool-bold',
    title: 'Vocational Training',
    description: 'Equipping community members with practical technical skills for sustainable fisheries-related livelihoods.',
    color: 'var(--color-amber-500)',
    bg: 'var(--color-amber-50)',
  },
  {
    icon: 'ph:first-aid-kit-bold',
    title: 'HIV Prevention & Care',
    description: 'Comprehensive health programs targeting fishing communities with testing, education, and support services.',
    color: 'var(--color-red-500)',
    bg: 'var(--color-red-100)',
  },
  {
    icon: 'ph:device-mobile-bold',
    title: 'Integration of ICT',
    description: 'Leveraging technology and digital solutions to improve market access and information sharing.',
    color: 'var(--color-indigo-500)',
    bg: 'var(--color-indigo-100)',
  },
  {
    icon: 'ph:student-bold',
    title: 'Girl Child Support',
    description: 'Empowering young girls through scholarships, health workshops, and vocational training initiatives.',
    color: 'var(--color-rose-500)',
    bg: 'var(--color-rose-100)',
  },
  {
    icon: 'ph:scales-bold',
    title: 'Legislation & Human Rights',
    description: 'Advocating for fishing rights, policy compliance, and legal support for fishing communities.',
    color: 'var(--color-violet-500)',
    bg: 'var(--color-violet-100)',
  },
  {
    icon: 'ph:leaf-bold',
    title: 'Climate Change',
    description: 'Environmental conservation, reforestation, and climate adaptation strategies for lake communities.',
    color: 'var(--color-emerald-500)',
    bg: 'var(--color-emerald-100)',
  },
  {
    icon: 'ph:smartphone-bold',
    title: 'SMart Fisher Technology',
    description: 'The ABAVUBI app providing real-time market prices, weather data, and business management tools.',
    color: 'var(--color-sky-500)',
    bg: 'var(--color-sky-100)',
  },
]

export default function ProgramAreas() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % programs.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">Impact</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-1" style={{ color: 'var(--text-main)' }}>
            Our Reach & Programs
          </h2>
        </div>

        {/* Stats Grid - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-5 rounded-2xl cursor-pointer transition-shadow hover:shadow-xl"
              style={{ 
                background: 'var(--surface-a)', 
                border: '1px solid var(--nav-stroke)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${stat.color}15` }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon icon={stat.icon} className="text-2xl" style={{ color: stat.color }} />
              </motion.div>
              <div className="font-heading text-2xl md:text-3xl" style={{ color: 'var(--text-main)' }}>
                <AnimatedCounter end={stat.number} duration={2000} />
              </div>
              <div className="text-xs mt-2 font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programs Carousel - Enhanced */}
        <div className="mb-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl text-center mb-8" 
            style={{ color: 'var(--text-main)' }}
          >
            Our Programs
          </motion.h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container with 3D Effect */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -15 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="w-full p-8 md:p-12 lg:p-16"
                  style={{ 
                    background: programs[activeIndex].bg,
                    minHeight: '320px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      style={{ background: 'var(--surface-a)' }}
                    >
                      <Icon icon={programs[activeIndex].icon} className="text-4xl" style={{ color: programs[activeIndex].color }} />
                    </motion.div>
                    <motion.h4 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-heading text-2xl md:text-4xl mb-4" 
                      style={{ color: 'var(--text-main)' }}
                    >
                      {programs[activeIndex].title}
                    </motion.h4>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-base md:text-lg leading-relaxed" 
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {programs[activeIndex].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6"
                    >
                      <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                        style={{ 
                          background: programs[activeIndex].color, 
                          color: '#fff',
                          boxShadow: `0 4px 20px ${programs[activeIndex].color}40`
                        }}
                      >
                        Learn More
                        <Icon icon="ph:arrow-right-bold" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Enhanced */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              style={{ background: 'var(--surface-a)', boxShadow: 'var(--shadow-md)' }}
            >
              <Icon icon="ph:caret-left-bold" className="text-xl transition-transform group-hover:-translate-x-0.5" style={{ color: 'var(--text-main)' }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              style={{ background: 'var(--surface-a)', boxShadow: 'var(--shadow-md)' }}
            >
              <Icon icon="ph:caret-right-bold" className="text-xl transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--text-main)' }} />
            </button>
          </div>

          {/* Dots Indicator - Enhanced */}
          <div className="flex justify-center gap-3 mt-8">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  background: index === activeIndex ? 'var(--color-zurich-500)' : 'var(--nav-stroke)',
                  width: index === activeIndex ? '32px' : '10px',
                  height: '10px',
                }}
              />
            ))}
          </div>

          {/* Program Pills - Enhanced */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {programs.map((program, index) => (
              <button
                key={program.title}
                onClick={() => goToSlide(index)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: index === activeIndex ? program.color : 'var(--surface-a)',
                  color: index === activeIndex ? '#fff' : 'var(--text-muted)',
                  border: `2px solid ${index === activeIndex ? program.color : 'var(--nav-stroke)'}`,
                  boxShadow: index === activeIndex ? `0 4px 15px ${program.color}40` : 'none',
                }}
              >
                <span className="flex items-center gap-2">
                  <Icon icon={program.icon} className={index === activeIndex ? 'text-base' : 'text-sm'} />
                  {program.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
          >
            Explore All Programs
            <Icon icon="ph:arrow-right-bold" />
          </Link>
        </div>
      </div>
    </section>
  )
}
