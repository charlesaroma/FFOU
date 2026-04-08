import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const partners = [
  { name: 'Ministry of Agriculture, MAAIF', type: 'Government', icon: 'ph:building-bold' },
  { name: 'NaFIRRI', type: 'Research', icon: 'ph:flask-bold' },
  { name: 'FAO', type: 'UN Agency', icon: 'ph:globe-bold' },
  { name: 'World Fish Center', type: 'International', icon: 'ph:fish-bold' },
  { name: 'EU Delegation', type: 'Donor', icon: 'ph:star-four-bold' },
  { name: 'Fish Processors Assoc.', type: 'Industry', icon: 'ph:factory-bold' },
]

export default function AboutOurPartners() {
  return (
    <section className="py-24 bg-surface-500 border-b border-slate-100">
      <div className="layout-spine">
        {/* Intro Block Group */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="bg-cerulean-100 text-cerulean-700 text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block tracking-widest">
              Strategic Alliances
            </span>
            <h2 className="font-header text-4xl md:text-5xl text-slate-800 leading-tight">
              Partners &<br />
              <span className="text-cerulean-600">Stakeholders</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              FFOU collaborates with government agencies, research institutions, international organizations, and the private sector to amplify impact across Uganda's fisheries.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our growth is anchored on shared values and a commitment to sustainable management of Uganda's water resources.
            </p>
          </motion.div>
        </div>

        {/* Card Grid Pattern */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-cerulean-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-cerulean-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-cerulean-50">
                <Icon icon={p.icon} className="text-xl text-cerulean-600" />
              </div>
              <div className="font-bold text-[13px] text-slate-800 mb-2 leading-tight h-10 flex items-center">{p.name}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}