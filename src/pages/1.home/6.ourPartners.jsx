import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const partners = [
  { name: 'Ministry of Agriculture', icon: 'ph:building-bold', type: 'Government' },
  { name: 'Uganda Fish Processors', icon: 'ph:factory-bold', type: 'Industry' },
  { name: 'NaFIRRI', icon: 'ph:flask-bold', type: 'Research' },
  { name: 'World Fish Center', icon: 'ph:globe-bold', type: 'International' },
  { name: 'FAO Uganda', icon: 'ph:tree-bold', type: 'UN Agency' },
  { name: 'EU Delegation Uganda', icon: 'ph:star-bold', type: 'Donor' },
]

export default function OurPartners() {
  return (
    <section className="py-20" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">Collaborators</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-2" style={{ color: 'var(--text-main)' }}>
            Our Partners & Stakeholders
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="p-5 rounded-2xl text-center hover:shadow-md transition-shadow group"
              style={{
                background: 'var(--surface-a)',
                border: '1px solid var(--nav-stroke)',
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-zurich-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-zurich-100 transition-colors">
                <Icon icon={p.icon} className="text-zurich-500 text-lg" />
              </div>
              <div className="text-xs font-semibold leading-tight" style={{ color: 'var(--text-main)' }}>{p.name}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{p.type}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}