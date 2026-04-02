import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const partners = [
  { name: 'Ministry of Agriculture, Animal Industry & Fisheries', type: 'Government', icon: 'ph:building-bold' },
  { name: 'National Fisheries Resources Research Institute (NaFIRRI)', type: 'Research', icon: 'ph:flask-bold' },
  { name: 'Food and Agriculture Organization (FAO)', type: 'UN Agency', icon: 'ph:globe-bold' },
  { name: 'World Fish Center', type: 'International', icon: 'ph:fish-bold' },
  { name: 'EU Delegation to Uganda', type: 'Donor', icon: 'ph:star-four-bold' },
  { name: 'Uganda Fish Processors & Exporters Association', type: 'Industry', icon: 'ph:factory-bold' },
]

export default function AboutOurPartners() {
  return (
    <section className="py-24" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">Partnerships</span>
          <h2 className="font-heading text-4xl md:text-5xl mt-2" style={{ color: 'var(--text-main)' }}>
            Partners & Stakeholders
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-muted)' }}>
            FFOU collaborates with government agencies, research institutions, international organizations,
            and the private sector to amplify impact across Uganda's fisheries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl hover:shadow-md transition-shadow"
              style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-zurich-50 flex items-center justify-center shrink-0">
                <Icon icon={p.icon} className="text-zurich-500 text-xl" />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>{p.name}</div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                  style={{ background: 'var(--color-zurich-50)', color: 'var(--color-zurich-600)' }}>
                  {p.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}