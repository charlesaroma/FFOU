import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const values = [
  { icon: 'ph:shield-check-bold', label: 'Integrity', desc: 'Upholding ethical standards in all our operations.' },
  { icon: 'ph:lightning-bold', label: 'Efficiency & Effectiveness', desc: 'Delivering maximum impact with available resources.' },
  { icon: 'ph:scales-bold', label: 'Accountability', desc: 'Transparent governance and reporting to our members.' },
  { icon: 'ph:graduation-cap-bold', label: 'Professionalism', desc: 'Maintaining high standards of conduct and expertise.' },
  { icon: 'ph:arrows-clockwise-bold', label: 'Continuity', desc: 'Building lasting systems for generational impact.' },
]

const strategicAreas = [
  'Legislations, policies and human rights',
  'Scale up comprehensive HIV/AIDS services among fisherfolk',
  'Integration of ICT into the fisheries subsector',
  'Climate change action to protect the eco-system',
  'Capacity building for women and youth',
  'Sustainable development of aquaculture and aquaponics',
  'Girl Child Education',
  'Skills Development through Vocational Training',
]

export default function AboutUs() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-main)' }}>
              Who We Are
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
              The <strong>Federation of Fisheries Organisations Uganda (FFOU)</strong> is a Non-profit making Organisation and national umbrella body for all non-state actors in the Fisheries Sub sector, currently working with <strong>131 member Associations/Organizations</strong> which brings together all Fishing Communities across the five great lakes of; <strong>Victoria, Kyoga, Albert, George, Edward</strong> and the surrounding districts in Uganda.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
              FFOU was subsequently conceived in early 2011 as a loose coalition to steer involvement of the fisheries sector players in addressing the issues directly affecting the poor and marginalized groups.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              FFOU strategic areas of implementation contributes significantly to achieve the <strong>Sustainable Development Goals (SDGs)</strong> and the <strong>National Development Programme (NDP III)</strong>.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: 'ph:eye-bold',
              title: 'Our Vision',
              text: 'To be the leading national Fisheries Federation in coordinating sustainable and ethical fishing practices in Uganda.',
              color: 'var(--color-zurich-500)',
              bg: 'var(--color-zurich-50)',
            },
            {
              icon: 'ph:target-bold',
              title: 'Our Mission',
              text: 'To promote ethical fishing practices and sustainable development of the fisheries sector in Uganda for improved livelihood, the alleviation of poverty and contribution to the food basket.',
              color: 'var(--color-militant-500)',
              bg: 'var(--color-militant-100)',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl"
              style={{ background: item.bg }}
            >
              <Icon icon={item.icon} className="text-2xl mb-3" style={{ color: item.color }} />
              <h3 className="font-heading text-xl mb-2" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl"
          style={{ background: 'var(--color-zurich-950)' }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl mb-2 text-gradient-blue">
              Strategic Focus Areas
            </h3>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: 'var(--color-zurich-200)' }}>
              The fundamental and key strategic areas of implementation for FFOU:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {strategicAreas.map((area) => (
              <div
                key={area}
                className="p-3 rounded-lg flex items-start gap-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icon icon="ph:check-circle-fill" className="text-zurich-400 text-base flex-shrink-0 mt-0.5" />
                <span className="text-xs" style={{ color: 'var(--color-zurich-100)' }}>{area}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-8" style={{ color: 'var(--text-main)' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl text-center"
                style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
              >
                <Icon icon={v.icon} className="text-zurich-500 text-xl mx-auto mb-2" />
                <div className="font-heading text-sm mb-1" style={{ color: 'var(--text-main)' }}>{v.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
