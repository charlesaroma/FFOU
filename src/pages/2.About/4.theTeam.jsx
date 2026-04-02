import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const leadership = [
  { name: 'President', role: 'Board Chair', icon: 'ph:crown-bold', color: 'var(--color-amber-500)' },
]

const management = [
  { name: 'Ag. Executive Director', role: 'Chief Executive', icon: 'ph:user-circle-bold', color: 'var(--color-zurich-500)' },
  { name: 'Deputy E.D - Programs', role: 'Programs', icon: 'ph:briefcase-bold', color: 'var(--color-militant-500)' },
  { name: 'Director Admin & Finance', role: 'Administration & Finance', icon: 'ph:calculator-bold', color: 'var(--color-violet-500)' },
  { name: 'Head of Legal and Projects', role: 'Legal & Projects', icon: 'ph:scales-bold', color: 'var(--color-amber-500)' },
  { name: 'IT Project Manager', role: 'Technology', icon: 'ph:device-mobile-bold', color: 'var(--color-zurich-500)' },
]

const staff = [
  { name: 'Assistant Programs Officer', role: 'Programs', icon: 'ph:users-bold', color: 'var(--color-militant-500)' },
  { name: 'Marketing Manager', role: 'Marketing', icon: 'ph:megaphone-bold', color: 'var(--color-violet-500)' },
  { name: 'Field Manager', role: 'Field Operations', icon: 'ph:map-pin-bold', color: 'var(--color-amber-500)' },
  { name: 'Administrative Assistant / Secretary', role: 'Administration', icon: 'ph:note-pencil-bold', color: 'var(--color-zurich-500)' },
]

export default function TheTeam() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl" style={{ color: 'var(--text-main)' }}>
            Meet the Team
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            FFOU is led by a team of qualified and experienced professionals dedicated to serving fishing communities across Uganda.
          </p>
        </div>

        {/* President */}
        <div className="mb-10">
          <h3 className="font-heading text-lg text-center mb-6" style={{ color: 'var(--text-main)' }}>
            Board Leadership
          </h3>
          <div className="flex justify-center">
            {leadership.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl text-center"
                style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${member.color}15` }}
                >
                  <Icon icon={member.icon} className="text-3xl" style={{ color: member.color }} />
                </div>
                <h4 className="font-heading text-lg" style={{ color: 'var(--text-main)' }}>{member.name}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management */}
        <div className="mb-10">
          <h3 className="font-heading text-base text-center mb-5" style={{ color: 'var(--text-main)' }}>
            Management Team
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {management.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl text-center"
                style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: `${member.color}15` }}
                >
                  <Icon icon={member.icon} className="text-xl" style={{ color: member.color }} />
                </div>
                <h4 className="font-heading text-sm" style={{ color: 'var(--text-main)' }}>{member.name}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div>
          <h3 className="font-heading text-base text-center mb-5" style={{ color: 'var(--text-main)' }}>
            FFOU Staff
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg text-center"
                style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: `${member.color}15` }}
                >
                  <Icon icon={member.icon} className="text-lg" style={{ color: member.color }} />
                </div>
                <h4 className="font-heading text-xs" style={{ color: 'var(--text-main)' }}>{member.name}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
