import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const partners = [
  { name: 'Ministry of Agriculture, Animal Industry & Fisheries', short: 'MAAIF', icon: 'ph:building-columns-bold', type: 'Government' },
  { name: 'National Fisheries Resources Research Institute', short: 'NaFIRRI', icon: 'ph:flask-bold', type: 'Research' },
  { name: 'Food & Agriculture Organization', short: 'FAO Uganda', icon: 'ph:tree-evergreen-bold', type: 'UN Agency' },
  { name: 'European Union Delegation', short: 'EU Delegation', icon: 'ph:globe-hemisphere-west-bold', type: 'Donor' },
  { name: 'World Fish Center', short: 'WorldFish', icon: 'ph:fish-bold', type: 'International' },
  { name: 'Uganda Fish Processors & Exporters Assoc.', short: 'UFPEA', icon: 'ph:factory-bold', type: 'Industry' },
]

export default function HomePartners() {
  return (
    <section className="py-24 bg-surface-600 border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-bold tracking-[0.35em] text-slate-400 uppercase mb-4 block">
            Collaborators & Stakeholders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Partners who make it possible
          </h2>
        </motion.div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white border border-slate-100 rounded-[4px] p-5 text-center hover:border-marine-200 hover:shadow-md transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-[4px] bg-marine-500/08 border border-marine-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-marine-500/15 transition-colors">
                <Icon icon={p.icon} className="text-marine-600 text-xl" />
              </div>
              <div className="text-sm font-bold text-slate-800 mb-1">{p.short}</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{p.type}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-400 mt-10 max-w-md mx-auto"
        >
          Working alongside government bodies, international agencies, and private sector partners to build a resilient fisheries sector for Uganda.
        </motion.p>

      </div>
    </section>
  )
}