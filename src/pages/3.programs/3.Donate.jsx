import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const bankAccounts = [
  {
    bank: 'DFCU Bank',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '03011027359631',
    currency: 'EUR',
    swift: 'CITIGB21',
    iban: 'GB59CITI18500811117874',
    branch: 'Impala House, Kimathi Avenue, Kampala',
    color: 'var(--color-zurich-500)',
  },
  {
    bank: 'DFCU Bank',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '01011026665641',
    currency: 'UGX',
    swift: null,
    iban: null,
    branch: 'Impala Branch',
    color: 'var(--color-militant-500)',
  },
  {
    bank: 'Bank of Africa',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '0721151510007',
    currency: 'UGX',
    swift: null,
    iban: null,
    branch: 'Kampala Road',
    color: 'var(--color-amber-500)',
  },
]

export default function Donate() {
  return (
    <section id="donate" className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-militant-500">
            Support Our Mission
          </span>
          <h2 className="font-heading text-3xl md:text-4xl mt-2" style={{ color: 'var(--text-main)' }}>
            Make a Donation
          </h2>
          <p className="mt-2 text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Your contribution helps FFOU support fishing communities across Uganda's five great lakes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: 'ph:graduation-cap-bold',
              title: 'Training & Education',
              desc: 'Fund capacity building programs for fishers on sustainable practices.',
              color: 'var(--color-zurich-500)',
            },
            {
              icon: 'ph:device-mobile-bold',
              title: 'Digital Tools',
              desc: 'Support the ABAVUBI app development for market access.',
              color: 'var(--color-militant-500)',
            },
            {
              icon: 'ph:first-aid-kit-bold',
              title: 'Health Services',
              desc: 'Enable health outreach for fishing communities.',
              color: 'var(--color-amber-500)',
            },
          ].map((impact, i) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl"
              style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${impact.color}15` }}
              >
                <Icon icon={impact.icon} className="text-xl" style={{ color: impact.color }} />
              </div>
              <h3 className="font-heading text-base mb-1" style={{ color: 'var(--text-main)' }}>
                {impact.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {impact.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8"
          style={{ background: 'var(--color-militant-950)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Icon icon="ph:bank-bold" className="text-2xl text-militant-300" />
            <h3 className="font-heading text-xl text-white">
              Bank Transfer Details
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {bankAccounts.map((account, i) => (
              <div
                key={account.accountNumber}
                className="p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: account.color }} />
                  <span className="font-semibold text-sm text-white">{account.bank}</span>
                  <span 
                    className="ml-auto text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--color-militant-200)' }}
                  >
                    {account.currency}
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-xs" style={{ color: 'var(--color-militant-300)' }}>Account</span>
                    <p className="text-sm text-white font-mono">{account.accountNumber}</p>
                  </div>
                  <div>
                    <span className="text-xs" style={{ color: 'var(--color-militant-300)' }}>Branch</span>
                    <p className="text-xs" style={{ color: 'var(--color-militant-200)' }}>{account.branch}</p>
                  </div>
                  {account.swift && (
                    <div>
                      <span className="text-xs" style={{ color: 'var(--color-militant-300)' }}>SWIFT</span>
                      <p className="text-sm text-white font-mono">{account.swift}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-lg flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <Icon icon="ph:info-bold" className="text-base text-militant-300 flex-shrink-0" />
            <p className="text-xs" style={{ color: 'var(--color-militant-200)' }}>
              For international transfers, use DFCU EUR account (SWIFT: CITIGB21). For local transfers, use DFCU or Bank of Africa UGX accounts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
