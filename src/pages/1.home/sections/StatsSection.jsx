import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { val: '2,102,491', label: 'Fisherfolks Represented', icon: 'mdi:account-group', suffix: '' },
  { val: '131', label: 'Member Associations', icon: 'mdi:office-building', suffix: '+' },
  { val: '5', label: 'Great Lake Regions', icon: 'mdi:waves', suffix: '' },
  { val: '12', label: 'Active Programs', icon: 'mdi:chart-line', suffix: '+' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const numTarget = parseInt(target.replace(/,/g, ''))

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * numTarget))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, numTarget, duration])

  return count.toLocaleString()
}

function StatCard({ stat, index, inView }) {
  const counted = useCountUp(stat.val, 1800, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="relative p-8 border-b md:border-r md:border-b border-white/10 group overflow-hidden md:last:border-r-0 flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

      <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
        <div className="w-12 h-12 rounded-[4px] bg-amber-400/15 border border-amber-400/20 flex items-center justify-center mb-5 group-hover:bg-amber-400/25 transition-colors">
          <Icon icon={stat.icon} className="text-amber-400 text-xl" />
        </div>
        <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-none tracking-tight break-words max-w-full">
          {inView ? counted : '0'}{stat.suffix}
        </div>
        <div className="text-white/60 text-sm font-medium">{stat.label}</div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-marine-800">
      {/* Top editorial bar */}
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="py-16 flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-between border-b border-white/10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center md:items-start"
          >
            <span className="text-[10px] font-bold tracking-[0.35em] text-amber-400 uppercase mb-3 block">
              Impact at a Glance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Nationwide reach. Measurable{' '}
              <span className="text-amber-400">impact.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 w-full max-w-sm mx-auto md:mx-0 text-sm leading-relaxed md:text-right text-center"
          >
            Every number represents a fishing family, a community, a future shaped by collective action and sustained advocacy.
          </motion.p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Bottom image strip */}
      <div className="relative mt-0 h-48 md:h-64 overflow-hidden border-t border-white/10">
        <img
          src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsPartner.png?updatedAt=1775580530471"
          alt="Uganda fisheries landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-marine-800/40" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="text-white/40 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-center leading-loose">
            Lake Victoria · Lake Albert · Lake Kyoga · Lake Edward · Lake George
          </span>
        </div>
      </div>
    </section>
  )
}
