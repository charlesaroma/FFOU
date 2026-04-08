import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function PlatformGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="layout-spine">
        <div className="mb-12">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4 block">
            APPLE & GOOGLE
          </span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-[#f1f5f9] rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer group"
            >
              <Icon 
                icon={i % 2 === 0 ? 'ph:apple-logo-fill' : 'ph:google-play-logo-fill'} 
                className="text-4xl text-slate-400 group-hover:text-slate-600 transition-colors" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
