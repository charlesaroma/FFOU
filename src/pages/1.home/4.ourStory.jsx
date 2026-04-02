import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const programs = [
  'Legislation',
  'Aquaculture',
  'Integration of ICT',
  'Capacity Building for Women & Youth',
  'Climate Change',
  'HIV/AIDS, Malaria & TB',
  'Raising a Girl Child',
]

const partners = [
  { name: 'GIZ RFBCP-Uganda', type: 'Project Partner' },
  { name: 'FAO Uganda', type: 'UN Agency' },
  { name: 'MAAIF', type: 'Government' },
  { name: 'Uganda Co-operative Alliance', type: 'Partner' },
]

export default function OurStory() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-5" style={{ color: 'var(--text-main)' }}>
              A Decade of Impact
            </h2>
            
            <div className="space-y-4 mb-6">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                With over a decade of industry experience, <strong>Federation of Fisheries Organizations Uganda</strong> is a leading non-profit dedicated to promoting ethical and sustainable fishing practices in Uganda.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Currently, FFOU has grown to a total number of <strong>131 member associations</strong>. This gives the organization opportunity to coordinate and build capacity of their membership for a viable fisheries sub-sector.
              </p>
            </div>

            {/* Programs */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-main)' }}>
                Our Programmes Include:
              </h3>
              <div className="flex flex-wrap gap-2">
                {programs.map((program) => (
                  <span
                    key={program}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'var(--color-zurich-50)',
                      color: 'var(--color-zurich-600)',
                    }}
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
            >
              Learn More About Us <Icon icon="ph:arrow-right-bold" className="text-xs" />
            </Link>
          </motion.div>

          {/* Right - Partners & Ethics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Strategic Partners */}
            <div className="p-6 rounded-xl" style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}>
              <h3 className="font-heading text-lg mb-4" style={{ color: 'var(--text-main)' }}>
                Strategic Partners
              </h3>
              <div className="space-y-3">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--color-zurich-50)' }}
                    >
                      <Icon icon="ph:handshake-bold" className="text-sm text-zurich-500" />
                    </div>
                    <div>
                      <span className="text-sm font-medium block" style={{ color: 'var(--text-main)' }}>
                        {partner.name}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {partner.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-6 rounded-xl" style={{ background: 'var(--color-zurich-950)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="ph:target-bold" className="text-xl text-zurich-400" />
                <h3 className="font-heading text-lg text-white">Our Mission</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-zurich-200)' }}>
                To promote responsible fishing by guiding our members to comply with an agreed ethical code of conduct, 
                observe fishing standards, and national laws throughout the work process.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { number: '131', label: 'Member Associations', icon: 'ph:users-three-bold' },
                { number: '10+', label: 'Years Experience', icon: 'ph:calendar-bold' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-lg text-center"
                  style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
                >
                  <Icon icon={item.icon} className="text-xl text-zurich-400 mx-auto mb-1" />
                  <div className="font-heading text-2xl" style={{ color: 'var(--text-main)' }}>
                    {item.number}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
