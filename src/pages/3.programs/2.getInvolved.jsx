import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const involvementOptions = [
  {
    icon: 'ph:users-three-bold',
    title: 'Become a Member',
    description: 'Join 131+ associations across Uganda\'s fisheries sector and gain access to advocacy, training, and networking.',
    cta: 'Apply Now',
    to: '/membership',
    color: 'var(--color-marine-500)',
    bg: 'var(--color-marine-50)',
  },
  {
    icon: 'ph:hand-heart-bold',
    title: 'Volunteer',
    description: 'Share your skills with fishing communities in education, health, technology, and community organizing.',
    cta: 'Contact Us',
    to: '/contact-us',
    color: 'var(--color-cerulean-500)',
    bg: 'var(--color-cerulean-100)',
  },
  {
    icon: 'ph:handshake-bold',
    title: 'Partner With Us',
    description: 'Collaborate on research, programs, or policy initiatives with NGOs, government bodies, and private sector.',
    cta: 'Explore',
    to: '/contact-us',
    color: 'var(--color-violet-500)',
    bg: 'var(--color-violet-100)',
  },
  {
    icon: 'ph:megaphone-bold',
    title: 'Advocate',
    description: 'Support sustainable fisheries policy and amplify the voices of fishing communities.',
    cta: 'Learn More',
    to: '/programs',
    color: 'var(--color-amber-500)',
    bg: 'var(--color-amber-50)',
  },
]

const impactStats = [
  { number: '131+', label: 'Member Associations', icon: 'ph:users-three-bold' },
  { number: '500K+', label: 'Fishers Represented', icon: 'ph:fish-bold' },
  { number: '5', label: 'Great Lakes Covered', icon: 'ph:waves-bold' },
  { number: '40+', label: 'Partner Organizations', icon: 'ph:handshake-bold' },
]

const resourceStrategies = [
  { icon: 'ph:money-bold', title: 'Donor Engagement', desc: 'Strategically engage with donors for project financing.' },
  { icon: 'ph:globe-helix-bold', title: 'NGO Partnerships', desc: 'Collaborate with NGOs for joint implementation.' },
  { icon: 'ph:currency-circle-dollar-bold', title: 'Membership Contributions', desc: 'Leverage member resources and networks.' },
  { icon: 'ph:calendar-bold', title: 'Events & Festivals', desc: 'Organize events for visibility and fundraising.' },
  { icon: 'ph:building-bold', title: 'Government Relations', desc: 'Work with government for aligned objectives.' },
  { icon: 'ph:chart-line-up-bold', title: 'Income Generation', desc: 'Offer consultancy and training services.' },
]

export default function GetInvolved() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-10">
          <h2 className="font-header text-3xl md:text-4xl" style={{ color: 'var(--text-main)' }}>
            Get Involved
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            There are many ways to support Uganda's fisheries communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {involvementOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl text-center"
              style={{ background: option.bg }}
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: 'var(--surface-a)' }}
              >
                <Icon icon={option.icon} className="text-2xl" style={{ color: option.color }} />
              </div>
              <h3 className="font-header text-base mb-2" style={{ color: 'var(--text-main)' }}>
                {option.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {option.description}
              </p>
              <Link
                to={option.to}
                className="inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: option.color }}
              >
                {option.cta}
                <Icon icon="ph:arrow-right-bold" className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Resource Mobilization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-header text-2xl text-center mb-6" style={{ color: 'var(--text-main)' }}>
            Resource Mobilization
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceStrategies.map((strategy, i) => (
              <div
                key={strategy.title}
                className="p-4 rounded-xl"
                style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
              >
                <Icon icon={strategy.icon} className="text-xl mb-2 text-marine-500" />
                <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-main)' }}>
                  {strategy.title}
                </h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {strategy.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center"
          style={{ background: 'var(--color-marine-800)' }}
        >
          <h3 className="font-header text-2xl mb-3 bg-linear-to-r from-marine-700 via-marine-500 to-marine-400 bg-clip-text text-transparent">
            Our Impact
          </h3>
          <p className="text-sm max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-marine-200)' }}>
            Together with our members and partners, FFOU is driving sustainable change.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <Icon icon={stat.icon} className="text-2xl text-marine-400 mb-1" />
                <span className="font-header text-2xl text-white">{stat.number}</span>
                <span className="text-xs" style={{ color: 'var(--color-marine-300)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
