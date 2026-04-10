import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState } from 'react'
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
  },
  {
    bank: 'DFCU Bank',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '01011026665641',
    currency: 'UGX',
    swift: null,
    iban: null,
    branch: 'Impala Branch',
  },
  {
    bank: 'Bank of Africa',
    accountName: 'Federation of Fisheries Organizations Uganda',
    accountNumber: '0721151510007',
    currency: 'UGX',
    swift: null,
    iban: null,
    branch: 'Kampala Road',
  },
]

const impacts = [
  {
    icon: 'ph:graduation-cap-bold',
    title: 'Training & Education',
    desc: 'Fund capacity building programs for fishers on sustainable practices, legal rights, and modern techniques.',
    color: 'text-cerulean-600',
    bg: 'bg-cerulean-50',
    border: 'border-cerulean-100',
  },
  {
    icon: 'ph:device-mobile-bold',
    title: 'Digital Tools',
    desc: 'Support the ABAVUBI App development — connecting fishing communities to real-time market data and safety alerts.',
    color: 'text-marine-600',
    bg: 'bg-marine-50',
    border: 'border-marine-100',
  },
  {
    icon: 'ph:first-aid-kit-bold',
    title: 'Health Services',
    desc: 'Enable community health outreach covering HIV/AIDS awareness, malaria prevention, and maternal health.',
    color: 'text-militant-600',
    bg: 'bg-militant-100',
    border: 'border-militant-100',
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-[4px] text-marine-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
      title="Copy to clipboard"
    >
      <Icon icon={copied ? 'ph:check-bold' : 'ph:copy-bold'} className="text-sm" />
    </button>
  )
}

export default function Donate() {
  return (
    <main className="bg-surface-500">
      <DonateHero />

      {/* Impact Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end justify-between mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.35em] text-amber-600 uppercase mb-4 block">
                Where Your Money Goes
              </span>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight tracking-tight">
                Every donation creates{' '}
                <span className="text-marine-600">measurable impact</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Your financial contributions go directly to programs that reach over 2 million fisherfolk across Uganda's five great lakes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[4px] border ${item.border} ${item.bg} group hover:shadow-lg transition-all`}
              >
                <div className={`w-12 h-12 rounded-[4px] bg-white border ${item.border} flex items-center justify-center mb-6`}>
                  <Icon icon={item.icon} className={`text-xl ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-24 bg-marine-900 relative overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-[4px] bg-amber-400/15 border border-amber-400/20 flex items-center justify-center">
                <Icon icon="ph:bank-bold" className="text-amber-400 text-xl" />
              </div>
              <div>
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.35em] block mb-1">
                  Secure Transfer
                </span>
                <h2 className="text-3xl font-bold text-white leading-tight">Direct Bank Transfer</h2>
              </div>
            </div>
            <p className="text-marine-300 text-sm max-w-xl leading-relaxed">
              Please use the official accounts below. Always verify the account name before confirming.
              For international transfers, use the EUR account with SWIFT code.
            </p>
          </motion.div>

          {/* Bank Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {bankAccounts.map((account, i) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[4px] border border-white/10 bg-white/5 p-7 flex flex-col gap-5"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-marine-400">
                    Recipient Bank
                  </span>
                  <span className="text-[10px] px-3 py-1 rounded-[4px] font-bold bg-amber-400/15 text-amber-400 border border-amber-400/20">
                    {account.currency}
                  </span>
                </div>

                {/* Bank name */}
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">{account.bank}</h4>
                  <p className="text-marine-300 text-xs mt-1">{account.branch}</p>
                </div>

                {/* Account number */}
                <div className="relative bg-black/20 rounded-[4px] p-4">
                  <span className="block text-[10px] font-bold text-marine-400 uppercase mb-2">Account Number</span>
                  <p className="text-white font-mono text-base tracking-widest pr-8 break-all">
                    {account.accountNumber}
                  </p>
                  <CopyButton text={account.accountNumber} />
                </div>

                {/* SWIFT / IBAN if present */}
                {account.swift && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-t border-white/10">
                      <span className="text-xs text-marine-400">SWIFT / BIC</span>
                      <span className="text-sm text-white font-mono">{account.swift}</span>
                    </div>
                    {account.iban && (
                      <div className="flex items-center justify-between py-2 border-t border-white/10">
                        <span className="text-xs text-marine-400">IBAN</span>
                        <span className="text-xs text-white font-mono break-all text-right ml-4">{account.iban}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Account name */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] text-marine-400 uppercase font-bold tracking-wider block mb-1">Account Name</span>
                  <span className="text-white text-xs leading-relaxed">{account.accountName}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 rounded-[4px] border border-cerulean-400/20 bg-cerulean-500/10"
          >
            <Icon icon="ph:shield-check-bold" className="text-cerulean-400 text-2xl shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white mb-1">Official Federation Accounts Only</p>
              <p className="text-xs leading-relaxed text-marine-300">
                Payments are only processed through these official accounts. Always verify that the Account Name
                reads exactly <em>"Federation of Fisheries Organizations Uganda"</em> before confirming any transfer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact prompt */}
      <section className="py-16 bg-surface-600 border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Have questions about donating?</h3>
            <p className="text-slate-500 text-sm">Our secretariat is happy to assist with any financial queries.</p>
          </div>
          <a
            href="tel:+256417336800"
            className="inline-flex items-center gap-2 bg-marine-700 text-white font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-marine-800 transition-all rounded-[4px] shrink-0"
          >
            <Icon icon="ph:phone-bold" />
            Contact Secretariat
          </a>
        </div>
      </section>
    </main>
  )
}
