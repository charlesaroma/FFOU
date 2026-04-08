import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import DonateHero from './sections/DonateHero'

const bankAccounts = [
  {
    bank: 'DFCU Bank',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '03011027359631',
    currency: 'EUR',
    swift: 'CITIGB21',
    iban: 'GB59CITI18500811117874',
    branch: 'Impala House, Kimathi Avenue, Kampala',
    color: 'var(--color-marine-500)',
  },
  {
    bank: 'DFCU Bank',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '01011026665641',
    currency: 'UGX',
    swift: null,
    iban: null,
    branch: 'Impala Branch',
    color: 'var(--color-cerulean-500)',
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

function DonationContent() {
  return (
    <div id="donate-details" className="py-24" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
            Ways to Help
          </span>
          <h2 className="font-header text-4xl mt-3" style={{ color: 'var(--text-main)' }}>
            Financial Contributions
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Your financial gifts directly support FFOU educational programs, health campaigns, 
            and structural infrastructure projects across Uganda's landing sites.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: 'ph:graduation-cap-bold',
              title: 'Training & Education',
              desc: 'Fund capacity building programs for fishers on sustainable practices.',
              color: 'var(--color-marine-500)',
            },
            {
              icon: 'ph:device-mobile-bold',
              title: 'Digital Tools',
              desc: 'Support the ABAVUBI app development for market access.',
              color: 'var(--color-cerulean-500)',
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl"
              style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${impact.color}15` }}
              >
                <Icon icon={impact.icon} className="text-2xl" style={{ color: impact.color }} />
              </div>
              <h3 className="font-header text-lg mb-2" style={{ color: 'var(--text-main)' }}>
                {impact.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {impact.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bank Details Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          style={{ background: 'var(--color-marine-900)' }}
        >
          {/* Decorative background for the box */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <Icon icon="ph:bank-bold" className="text-[200px] text-white" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                 <Icon icon="ph:currency-circle-dollar-bold" className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-header text-2xl text-white">
                  Direct Bank Transfer
                </h3>
                <p className="text-marine-300 text-sm">Please use the details below for SECURE transactions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {bankAccounts.map((account, i) => (
                <div
                  key={account.accountNumber}
                  className="p-6 rounded-2xl group transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-marine-400">Recipient Bank</span>
                    <span 
                      className="text-[10px] px-3 py-1 rounded-full font-bold"
                      style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--color-amber-400)' }}
                    >
                      {account.currency}
                    </span>
                  </div>

                  <div className="space-y-5">
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">{account.bank}</h4>
                        <p className="text-xs text-marine-300 italic">Branch: {account.branch}</p>
                    </div>

                    <div className="p-4 rounded-xl relative" style={{ background: 'rgba(0,0,0,0.2)' }}>
                      <span className="block text-[10px] font-bold text-marine-400 mb-2 uppercase">Account Number</span>
                      <p className="text-white font-mono text-base tracking-wider break-all">{account.accountNumber}</p>
                      <button 
                        onClick={() => navigator.clipboard.writeText(account.accountNumber)}
                        className="absolute top-4 right-4 text-marine-500 hover:text-white transition-colors"
                      >
                         <Icon icon="ph:copy-bold" />
                      </button>
                    </div>

                    {account.swift && (
                      <div className="flex items-center justify-between px-2">
                        <span className="text-xs text-marine-400">SWIFT / BIC</span>
                        <span className="text-sm text-white font-mono">{account.swift}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px border-dashed rgba(255,255,255,0.1)' }}>
              <Icon icon="ph:shield-check-bold" className="text-2xl text-cerulean-400 shrink-0 mt-1" />
              <div>
                 <p className="text-sm font-medium text-white mb-1">Official Federation Accounts</p>
                 <p className="text-xs leading-relaxed text-marine-300">
                  Payments are only processed through these official accounts. Ensure the Account Name is "Federation of Fisheries Organizations Uganda" before confirming. For international transfers, use the DFCU EUR account (SWIFT: CITIGB21).
                 </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Donate() {
  return (
    <main>
      <DonateHero />
      <DonationContent />
    </main>
  )
}
