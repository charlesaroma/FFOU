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
    <section className="py-32 bg-[#f8fafc] border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Intro Block Group */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl lg:w-[45%]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-cerulean-500" />
              <span className="text-cerulean-700 text-[10px] font-bold uppercase tracking-[0.3em]">
                Strategic Alliances
              </span>
            </div>
            <h2 className="font-header text-5xl md:text-6xl text-slate-800 leading-[1.1]">
              Partners &<br />
              <span className="text-cerulean-600">Stakeholders</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 lg:pt-10"
          >
            <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
              FFOU collaborates with national agencies, international research institutions, and private sector giants to amplify impact across Uganda's fisheries.
            </p>
            <div className="h-px w-20 bg-slate-200 mb-8" />
            <p className="text-slate-500 leading-relaxed font-medium">
              Our growth is anchored on shared values and a cross-border commitment to the sustainable management of Africa's great water resources.
            </p>
          </motion.div>
        </div>

        {/* Card Grid Pattern */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group cursor-pointer hover:border-cerulean-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 group-hover:border-cerulean-100 transition-all duration-500 group-hover:scale-110">
                <Icon icon={p.icon} className="text-3xl text-cerulean-600" />
              </div>
              <div className="font-header text-sm text-slate-800 mb-3 leading-tight h-10 flex items-center justify-center uppercase tracking-tight">{p.name}</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">{p.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}