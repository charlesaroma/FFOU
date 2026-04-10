import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146',
    label: 'Sustainable Fish Farming',
  },
  {
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/capacity-building.png?updatedAt=1775579978894',
    label: 'Capacity Building',
  },
  {
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/legislation-policies.png?updatedAt=1775579979750',
    label: 'Policy & Advocacy',
  },
]

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: activeSlide === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-marine-800/70" />
      <div className="absolute inset-0 bg-linear-to-r from-marine-900/80 via-marine-900/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-marine-900/60 via-transparent to-transparent" />


      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-0">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.35em]">
                Federation of Fisheries Organisations Uganda
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] mb-8 tracking-tight"
            >
              The Voice of{' '}
              <span className="text-amber-400">2.1 Million</span>
              <br />
              Lake Users
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/75 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Uganda's national umbrella body representing 131 fisheries associations across five great lakes — advocating for sustainable livelihoods, policy, and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/about/about-us"
                className="bg-amber-400 text-marine-900 font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-amber-300 transition-all rounded-[4px] flex items-center gap-2"
              >
                Learn Our Story
                <Icon icon="ph:arrow-right-bold" />
              </Link>
              <Link
                to="/programs/get-involved"
                className="border-2 border-white/40 text-white font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-white/10 hover:border-white/70 transition-all rounded-[4px]"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 w-full border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {[
              { val: '2.1M', label: 'Fisherfolks Represented', icon: 'ph:users-three-bold' },
              { val: '131', label: 'Member Associations', icon: 'ph:buildings-bold' },
              { val: '5', label: 'Major Lake Regions', icon: 'ph:waves-bold' },
              { val: '12+', label: 'Active Programs', icon: 'ph:chart-line-up-bold' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-6 px-6 border-r border-white/10 last:border-r-0 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-[4px] bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover:bg-amber-400/20 transition-colors">
                  <Icon icon={stat.icon} className="text-amber-400 text-lg" />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold leading-none">{stat.val}</div>
                  <div className="text-white/50 text-[11px] font-medium mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 md:bottom-28 right-8 z-20 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-1 transition-all duration-500 rounded-full cursor-pointer ${activeSlide === i ? 'h-8 bg-amber-400' : 'h-3 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  )
}
