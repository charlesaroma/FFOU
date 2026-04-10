import { motion } from 'framer-motion'

const partners = [
  { name: 'Ministry of Agriculture, Animal Industry & Fisheries', short: 'MAAIF', logo: '/MAAIF-LOGO.png', type: 'Government' },
  { name: 'National Fisheries Resources Research Institute', short: 'NaFIRRI', logo: '/NAFIRRI-LOGO.png', type: 'Research' },
  { name: 'Lake Victoria Fisheries Organization', short: 'LVFO', logo: '/LVFO-LOGO.png', type: 'Regional' },
  { name: 'East African Community', short: 'EAC', logo: '/EAC.png', type: 'Regional' },
  { name: 'GIZ', short: 'GIZ', logo: '/giz.jpg', type: 'Development Partner' },
  { name: 'Sustainable Development Goals', short: 'SDG', logo: '/SDG.jpg', type: 'Global Framework' },
  { name: 'Uganda Network of AIDS Service Organisations', short: 'UNASO', logo: '/unaso.jpg', type: 'NGO' },
  { name: 'National Information Technology Authority', short: 'NITA-U', logo: '/NITA-LOGO.png', type: 'Government' },
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white border border-slate-100 rounded-[4px] p-4 text-center hover:border-marine-200 hover:shadow-md transition-all group cursor-default flex flex-col justify-between"
            >
              <div className="w-16 h-16 rounded-[4px] flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img src={p.logo} alt={p.short} className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 mb-1">{p.short}</div>
                <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{p.type}</div>
              </div>
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