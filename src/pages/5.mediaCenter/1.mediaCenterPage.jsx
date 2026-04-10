import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import MediaCenterHero from './2.mediaCenterHero'

const hubCategories = [
  {
    title: 'Visual Gallery',
    desc: 'Browse through our high-resolution photo archives capturing the vibrant life, fieldwork, and events of the fishing communities we serve.',
    route: '/media-center/gallery',
    icon: 'mdi:image-multiple-outline',
    bg: 'bg-marine-50',
    color: 'text-marine-600',
    border: 'border-marine-100',
    actionText: 'View Gallery'
  },
  {
    title: 'Publications & Reports',
    desc: 'Access our official policy documents, annual reports, strategic plans, and fact sheets documenting our systematic interventions.',
    route: '/media-center/publications',
    icon: 'mdi:file-document-outline',
    bg: 'bg-cerulean-50',
    color: 'text-cerulean-600',
    border: 'border-cerulean-100',
    actionText: 'Read Publications'
  }
]

function HubSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-marine-500 mb-4 block">
              Official Resources
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight">
              Browse our <span className="text-cerulean-600 block mt-1">media collections</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base leading-relaxed md:text-right">
            Navigate through our expertly curated hubs to learn about the federation's advocacy, interventions, and visual milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {hubCategories.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={item.route}
                className={`flex flex-col p-10 h-full rounded-[4px] border ${item.border} ${item.bg} group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Decorative blob */}
                <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-[40px] opacity-20 bg-current ${item.color} group-hover:opacity-40 transition-opacity duration-700`} />
                
                <div className={`w-16 h-16 rounded-[4px] bg-white border ${item.border} flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <Icon icon={item.icon} className={`text-3xl ${item.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed relative z-10 mb-10 flex-grow">
                  {item.desc}
                </p>

                <div className="mt-auto relative z-10 pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  <span className={`text-sm font-bold uppercase tracking-wider ${item.color}`}>
                    {item.actionText}
                  </span>
                  <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-white border ${item.border} group-hover:bg-current group-hover:text-white transition-all duration-300`}>
                    <Icon icon="mdi:arrow-right" className="text-lg text-slate-400 group-hover:text-inherit" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MediaCenterPage() {
  return (
    <main>
      <MediaCenterHero />
      <HubSection />
    </main>
  )
}