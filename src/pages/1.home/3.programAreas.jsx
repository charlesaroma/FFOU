import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../../components/ui/AnimatedCounter'

const stats = [
  { number: 6, label: 'Regions Reached', icon: 'ph:map-pin-bold' },
  { number: 135, label: 'Associations Served', icon: 'ph:users-three-bold' },
  { number: 2102491, label: 'Individuals Served', icon: 'ph:user-bold' },
  { number: 12, label: 'Programs', icon: 'ph:folder-bold' },
  { number: 15612, label: 'Community Interventions', icon: 'ph:hand-heart-bold' },
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length)
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4 rounded-xl"
              style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
            >
              <Icon icon={stat.icon} className="text-lg text-zurich-400 mx-auto mb-1" />
              <div className="font-heading text-2xl md:text-3xl" style={{ color: 'var(--text-main)' }}>
                <AnimatedCounter end={stat.number} duration={2000} />
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programs Carousel */}
        <div className="mb-8">
          <h3 className="font-heading text-2xl text-center mb-6" style={{ color: 'var(--text-main)' }}>
            Our Programs
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {programs.map((program) => (
                  <div
                    key={program.title}
                    className="w-full flex-shrink-0 p-8 md:p-12"
                    style={{ background: program.bg }}
                  >
                    <div className="max-w-2xl mx-auto text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'var(--surface-a)' }}
                      >
                        <Icon icon={program.icon} className="text-3xl" style={{ color: program.color }} />
                      </div>
                      <h4 className="font-heading text-2xl md:text-3xl mb-3" style={{ color: 'var(--text-main)' }}>
                        {program.title}
                      </h4>
                      <p className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              style={{ background: 'var(--surface-a)' }}
            >
              <Icon icon="ph:caret-left-bold" className="text-lg" style={{ color: 'var(--text-main)' }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              style={{ background: 'var(--surface-a)' }}
            >
              <Icon icon="ph:caret-right-bold" className="text-lg" style={{ color: 'var(--text-main)' }} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: index === activeIndex ? 'var(--color-zurich-500)' : 'var(--nav-stroke)',
                  width: index === activeIndex ? '24px' : '8px',
                }}
              />
            ))}
          </div>

          {/* Program Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {programs.map((program, index) => (
              <button
                key={program.title}
                onClick={() => setActiveIndex(index)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background: index === activeIndex ? program.color : 'var(--surface-a)',
                  color: index === activeIndex ? '#fff' : 'var(--text-muted)',
                  border: `1px solid ${index === activeIndex ? program.color : 'var(--nav-stroke)'}`,
                }}
              >
                {program.title}
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
