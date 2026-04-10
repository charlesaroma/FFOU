import { motion } from 'framer-motion'

const partners = [
  { name: 'Ministry of Agriculture, MAAIF', short: 'MAAIF', logo: '/MAAIF-LOGO.png', type: 'Government' },
  { name: 'National Fisheries Resources Research Institute', short: 'NaFIRRI', logo: '/NAFIRRI-LOGO.png', type: 'Research' },
  { name: 'Lake Victoria Fisheries Organization', short: 'LVFO', logo: '/LVFO-LOGO.png', type: 'Regional' },
  { name: 'East African Community', short: 'EAC', logo: '/EAC.png', type: 'Regional' },
  { name: 'GIZ', short: 'GIZ', logo: '/giz.jpg', type: 'Development Partner' },
  { name: 'Sustainable Development Goals', short: 'SDG', logo: '/SDG.jpg', type: 'Global Framework' },
  { name: 'Uganda Network of AIDS Service Organisations', short: 'UNASO', logo: '/unaso.jpg', type: 'NGO' },
  { name: 'National Information Technology Authority', short: 'NITA-U', logo: '/NITA-LOGO.png', type: 'Government' },
]

export default function AboutOurPartners() {
  return (
    <section className="py-24 bg-surface-600 border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cerulean-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                Strategic Alliances
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 leading-tight tracking-tight">
              Partners &{' '}
              <span className="text-cerulean-600">Stakeholders</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex-1 max-w-md"
          >
            <p className="text-slate-600 leading-relaxed">
              FFOU collaborates with national agencies, international research institutions, and private sector leaders to amplify impact across Uganda's fisheries sector.
            </p>
          </motion.div>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-slate-100 rounded-[4px] p-4 text-center hover:border-cerulean-200 hover:shadow-md transition-all group cursor-default flex flex-col justify-between"
            >
              <div className="w-16 h-16 rounded-[4px] flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img src={p.logo} alt={p.short} className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 mb-1 leading-tight">{p.short}</div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{p.type}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}