import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const categories = ['All', 'Events', 'Community', 'Lakes', 'Programs']

const galleryItems = [
  { label: 'Annual Federation Conference 2023', category: 'Events', icon: 'ph:users-three-bold', color: 'var(--color-zurich-500)', span: 'col-span-2' },
  { label: 'Lake Victoria Landing Site', category: 'Lakes', icon: 'ph:waves-bold', color: 'var(--color-militant-500)' },
  { label: 'ABAVUBI App Training Session', category: 'Programs', icon: 'ph:device-mobile-bold', color: 'var(--color-amber-500)' },
  { label: 'Women Fishers Capacity Workshop', category: 'Community', icon: 'ph:woman-bold', color: 'var(--color-rose-500)' },
  { label: 'Fisheries Regulation Training', category: 'Programs', icon: 'ph:graduation-cap-bold', color: 'var(--color-violet-500)' },
  { label: 'Lake Albert Community Meeting', category: 'Events', icon: 'ph:microphone-bold', color: 'var(--color-zurich-600)' },
  { label: 'Aquaculture Demonstration Farm', category: 'Programs', icon: 'ph:leaf-bold', color: 'var(--color-emerald-500)', span: 'col-span-2' },
  { label: 'Youth Fishers Leadership Program', category: 'Community', icon: 'ph:star-bold', color: 'var(--color-amber-500)' },
  { label: 'Lake Kyoga Fisher Interviews', category: 'Lakes', icon: 'ph:camera-bold', color: 'var(--color-militant-400)' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === active)

  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl" style={{ color: 'var(--text-main)' }}>
            Photo Gallery
          </h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            A glimpse into the work that defines FFOU's mission.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                active === cat
                  ? { background: 'var(--color-zurich-500)', color: '#fff' }
                  : { background: 'var(--surface-a)', color: 'var(--text-muted)', border: '1px solid var(--nav-stroke)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightbox(item)}
                className={`aspect-video rounded-lg flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden ${item.span || ''}`}
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: `${item.color}22` }}>
                  <Icon icon="ph:magnifying-glass-plus-bold" className="text-2xl" style={{ color: item.color }} />
                </div>
                <Icon icon={item.icon} className="text-3xl mb-2" style={{ color: item.color }} />
                <span className="text-xs font-medium text-center px-2" style={{ color: 'var(--text-main)' }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="p-8 rounded-2xl text-center max-w-xs w-full"
                style={{ background: 'var(--surface-a)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <Icon icon={lightbox.icon} className="text-5xl mx-auto mb-3" style={{ color: lightbox.color }} />
                <h3 className="font-heading text-xl mb-1" style={{ color: 'var(--text-main)' }}>
                  {lightbox.label}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${lightbox.color}20`, color: lightbox.color }}>
                  {lightbox.category}
                </span>
                <button
                  onClick={() => setLightbox(null)}
                  className="mt-4 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ background: 'var(--surface-b)', color: 'var(--text-muted)' }}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
