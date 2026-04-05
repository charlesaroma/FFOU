import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import AnimatedCounter from '../../components/ui/AnimatedCounter'

const stats = [
  { number: 6, label: 'Regions Reached', icon: 'ph:map-pin-bold' },
  { number: 135, label: 'Associations Served', icon: 'ph:users-three-bold' },
  { number: 2102491, label: 'Individuals Served', icon: 'ph:user-bold' },
  { number: 12, label: 'Programs', icon: 'ph:folder-bold' },
  { number: 15612, label: 'Community Interventions', icon: 'ph:hand-heart-bold' },
]

export default function StatsSection() {
  return (
    <section className="py-16" style={{ background: 'var(--color-marine-800)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Icon icon={stat.icon} className="text-2xl text-marine-400 mx-auto mb-2" />
              <div className="font-header text-3xl md:text-4xl text-white mb-1">
                <AnimatedCounter end={stat.number} duration={2000} />
              </div>
              <div className="text-xs" style={{ color: 'var(--color-marine-300)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
