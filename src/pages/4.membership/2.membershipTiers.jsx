import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Ordinary Membership',
    price: 'UGX 200,000',
    subscription: 'UGX 100,000/year',
    description: 'For organizations directly involved in fisheries activities — associations, cooperative unions, and community-based groups.',
    icon: 'ph:users-three-bold',
    color: 'var(--color-zurich-500)',
    bg: 'var(--color-zurich-50)',
    popular: true,
    benefits: [
      'Full participation in Federation activities',
      'Access to FFOU facilities and services',
      'Voting rights on the NEC',
      '10% discount on fee-based activities',
      'First-hand business opportunities',
      'Resource center & internet access',
      'Free subscription to FFOU magazine',
      'Invitation to fisheries delegations',
      'Training & capacity building',
      'Annual FFOU team visit',
    ],
  },
  {
    name: 'Associate Membership',
    price: 'UGX 500,000',
    subscription: 'UGX 200,000/year',
    description: 'For organizations involved in promoting the objectives of the Federation — suppliers, exporters, research institutions.',
    icon: 'ph:briefcase-bold',
    color: 'var(--color-militant-500)',
    bg: 'var(--color-militant-100)',
    popular: false,
    benefits: [
      'Participation in Federation activities',
      'Access to FFOU facilities',
      'Representation in decision-making',
      '50% discount on Business Directory ads',
      'Networking with fishing communities',
      'Resource center access',
      'Policy briefing notes',
      'Invitation to sector working groups',
      'Training & business counseling',
    ],
  },
  {
    name: 'Honorary Membership',
    price: 'Free',
    subscription: 'Voluntary contribution',
    description: 'Granted to individuals and organizations that have contributed or rendered distinguished services to the Federation.',
    icon: 'ph:award-bold',
    color: 'var(--color-amber-500)',
    bg: 'var(--color-amber-50)',
    popular: false,
    benefits: [
      'Recognition as distinguished supporter',
      'Invitation to Annual Conference',
      'Access to FFOU updates',
      'Networking opportunities',
      'Voluntary contribution options',
    ],
  },
]

function MembershipRights() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-zurich-50)' }}>
                <Icon icon="ph:shield-check-bold" className="text-xl text-zurich-600" />
              </div>
              <h3 className="font-heading text-xl" style={{ color: 'var(--text-main)' }}>
                Membership Rights
              </h3>
            </div>
            <ul className="space-y-2">
              {[
                'Fully participate in Federation activities',
                'Use and access facilities provided by FFOU',
                'Express opinions without undue interference',
                'Stand or vote for NEC positions (Ordinary & Associate)',
                'Withdraw membership freely',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Icon icon="ph:check-circle-fill" className="text-zurich-500 text-base flex-shrink-0 mt-0.5" />
                  {right}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-militant-100)' }}>
                <Icon icon="ph:list-checks-bold" className="text-xl text-militant-500" />
              </div>
              <h3 className="font-heading text-xl" style={{ color: 'var(--text-main)' }}>
                Membership Obligations
              </h3>
            </div>
            <ul className="space-y-2">
              {[
                'Pay all prescribed fees on time',
                'Uphold the FFOU constitution and bye-laws',
                'Conduct in a non-prejudicial manner',
                'Express opinions democratically and respectfully',
                'Contribute to Federation objectives',
              ].map((obligation) => (
                <li key={obligation} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Icon icon="ph:arrow-right-bold" className="text-militant-500 text-base flex-shrink-0 mt-0.5" />
                  {obligation}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function MembershipTiers() {
  return (
    <>
      <section className="py-16" style={{ background: 'var(--surface-a)' }}>
        <div className="layout-spine">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">
              Membership Categories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2" style={{ color: 'var(--text-main)' }}>
              Choose Your Membership
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              FFOU brings together all fisheries organizations across Uganda. Select the category that best fits your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-6 flex flex-col"
                style={{ 
                  background: 'var(--surface-b)', 
                  border: tier.popular ? '2px solid var(--color-zurich-500)' : '1px solid var(--nav-stroke)',
                }}
              >
                {tier.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: tier.bg }}
                  >
                    <Icon icon={tier.icon} className="text-xl" style={{ color: tier.color }} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base" style={{ color: 'var(--text-main)' }}>
                      {tier.name}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {tier.subscription}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-heading text-2xl" style={{ color: 'var(--text-main)' }}>
                    {tier.price}
                  </span>
                  <span className="text-xs ml-1.5" style={{ color: 'var(--text-muted)' }}>
                    membership fee
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                  {tier.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <Icon
                        icon="ph:check-bold"
                        className="text-base flex-shrink-0 mt-0.5"
                        style={{ color: tier.color }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/membership#apply"
                  className="w-full py-2.5 rounded-lg font-semibold text-sm text-center transition-all hover:scale-[1.02]"
                  style={{
                    background: tier.popular ? 'var(--color-zurich-500)' : 'transparent',
                    color: tier.popular ? '#fff' : 'var(--text-main)',
                    border: tier.popular ? 'none' : '1px solid var(--nav-stroke)',
                  }}
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <MembershipRights />
    </>
  )
}
