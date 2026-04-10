import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const programs = [
  {
    icon: 'mdi:cellphone',
    tag: 'DIGITAL',
    title: 'ICT Integration & Innovation',
    text: 'The ABAVUBI App connects fishers to real-time market prices, safety alerts, and voice-guided information in local languages — digitizing the entire value chain.',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/ictIntegration.png?updatedAt=1775579971114',
    to: '/programs/ict-integration-and-innovation',
    color: 'bg-cerulean-600',
    tagColor: 'text-cerulean-400',
  },
  {
    icon: 'mdi:scale-balance',
    tag: 'POLICY',
    title: 'Legislation, Policies & Rights',
    text: "We bridge the gap between government policy and community practice — advocating for fishers' legal rights, licensing, and fair representation in national frameworks.",
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/legislation-policies.png?updatedAt=1775579979750',
    to: '/programs/legislation-policies-and-rights',
    color: 'bg-marine-700',
    tagColor: 'text-amber-400',
  },
  {
    icon: 'mdi:account-group',
    tag: 'COMMUNITY',
    title: 'Capacity Building',
    text: 'Through leadership training, financial literacy workshops, and technical skills programs, we empower women and youth fishing communities to lead and thrive.',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/capacity-building.png?updatedAt=1775579978894',
    to: '/programs/capacity-building',
    color: 'bg-militant-700',
    tagColor: 'text-militant-300',
  },
]

export default function ProgramAreas() {
  return (
    <section className="py-28 bg-surface-500">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.35em] text-marine-500 uppercase mb-4 block">
              Action Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
              Initiatives that{' '}
              <span className="text-marine-600">transform</span>{' '}
              lives
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
            Three strategic pillars addressing the most pressing structural challenges in Uganda's fisheries sector — from digital inclusion to policy reform.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group flex flex-col rounded-[4px] overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' }}
                />
                <div className="absolute inset-0 bg-marine-900/30 group-hover:bg-marine-900/10 transition-colors duration-300" />
                {/* Tag */}
                <div className={`absolute top-4 left-4 ${prog.color} px-3 py-1 rounded-[4px]`}>
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${prog.tagColor}`}>
                    {prog.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-[4px] bg-slate-100 flex items-center justify-center">
                    <Icon icon={prog.icon} className="text-marine-600 text-base" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">{prog.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{prog.text}</p>
                <Link
                  to={prog.to}
                  className="inline-flex items-center gap-2 text-marine-600 text-[11px] font-bold uppercase tracking-widest hover:text-marine-800 transition-colors"
                >
                  Learn More <Icon icon="mdi:arrow-right-thick" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:border-marine-500 hover:text-marine-600 transition-all rounded-[4px]"
          >
            View All Programs <Icon icon="mdi:arrow-right-thick" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
