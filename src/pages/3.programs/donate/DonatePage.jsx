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
    icon: 'mdi:graduation-cap',
    title: 'Training & Education',
    desc: 'Fund capacity building programs for fishers on sustainable practices, legal rights, and modern techniques.',
    color: 'text-cerulean-600',
    bg: 'bg-cerulean-50',
    border: 'border-cerulean-100',
  },
  {
    icon: 'mdi:cellphone',
    title: 'Digital Tools',
    desc: 'Support the ABAVUBI App development — connecting fishing communities to real-time market data and safety alerts.',
    color: 'text-marine-600',
    bg: 'bg-marine-50',
    border: 'border-marine-100',
  },
  {
    icon: 'mdi:medical-bag',
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
      <Icon icon={copied ? 'mdi:check-bold' : 'mdi:copy'} className="text-sm" />
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
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.35em] text-marine-500 uppercase mb-4 block">
                Where Your Money Goes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight">
                Every donation creates{' '}
                <span className="text-cerulean-600 block mt-1">measurable impact</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-base leading-relaxed md:text-right">
              Your financial contributions go directly to grassroots programs that empower over 2 million fisherfolk across Uganda's five great lakes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`p-10 rounded-[4px] border ${item.border} ${item.bg} group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden`}
              >
                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-current ${item.color}`} />
                <div className={`w-14 h-14 rounded-[4px] bg-white border ${item.border} flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <Icon icon={item.icon} className={`text-2xl ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-32 bg-marine-800 relative overflow-hidden">
        {/* Deep architectural gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-marine-800 via-marine-700 to-transparent opacity-80" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-cerulean-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-[4px] bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              <Icon icon="mdi:bank" className="text-amber-400 text-3xl" />
            </div>
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
              Secure Institutional Transfer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Offical Bank Accounts</h2>
            <p className="text-marine-300 text-base max-w-2xl mx-auto leading-relaxed">
              Please route funds directly to the official FFOU treasury accounts provided below. <br className="hidden md:block"/> Verify the exact account name before authorizing your transaction.
            </p>
          </motion.div>

          {/* Premium Ticket Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {bankAccounts.map((account, i) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-amber-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Card Container */}
                <div className="relative h-full rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col hover:border-amber-400/30 transition-colors duration-500">
                  {/* Currency Tag */}
                  <div className="absolute top-0 right-8 px-4 py-2 bg-amber-400 text-marine-800 text-[10px] font-bold uppercase tracking-widest rounded-b-[4px] shadow-lg">
                    {account.currency}
                  </div>

                  <div className="p-8 pb-6 border-b border-dashed border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-marine-400 block mb-2">
                      Recipient Bank
                    </span>
                    <h4 className="text-white font-bold text-2xl leading-tight mb-1 group-hover:text-amber-200 transition-colors">{account.bank}</h4>
                    <p className="text-marine-300 text-xs">{account.branch}</p>
                  </div>

                  <div className="p-8 grow flex flex-col">
                    {/* Account number */}
                    <div className="relative bg-black/30 rounded-[4px] p-5 mb-6 border border-white/5">
                      <span className="block text-[10px] font-bold text-marine-400 uppercase mb-2 tracking-wider">Account Number</span>
                      <p className="text-amber-400 font-mono text-xl tracking-widest pr-8 break-all font-bold">
                        {account.accountNumber}
                      </p>
                      <CopyButton text={account.accountNumber} />
                    </div>

                    {/* SWIFT / IBAN if present */}
                    {account.swift && (
                      <div className="space-y-3 mb-6 bg-white/5 rounded-[4px] p-5 border border-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] tracking-wider uppercase font-bold text-marine-400">SWIFT / BIC</span>
                          <span className="text-sm text-white font-mono font-bold tracking-widest">{account.swift}</span>
                        </div>
                        {account.iban && (
                          <div className="flex items-center justify-between pt-3 border-t border-white/5">
                            <span className="text-[10px] tracking-wider uppercase font-bold text-marine-400">IBAN</span>
                            <span className="text-[11px] text-white font-mono font-bold break-all text-right ml-4 tracking-widest">{account.iban}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Account name */}
                    <div className="mt-auto pt-5 border-t border-white/10">
                      <span className="text-[9px] text-marine-400 uppercase font-bold tracking-widest block mb-1">Beneficiary Name</span>
                      <span className="text-white text-sm font-semibold tracking-wide leading-relaxed">{account.accountName}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-[4px] border border-cerulean-400/20 bg-cerulean-500/10 max-w-4xl mx-auto backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-full bg-cerulean-400/20 flex items-center justify-center shrink-0">
              <Icon icon="mdi:shield-check" className="text-cerulean-400 text-2xl" />
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-1 tracking-wide">Federation Fraud Department Advisory</p>
              <p className="text-xs leading-relaxed text-marine-300">
                Official donations are strictly accepted through these recorded SWIFT/IBAN paths. Non-designated external portals or private mobile money requests claiming to represent FFOU are fraudulent. Check the beneficiary name prior exactly to transfer.
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
            <Icon icon="mdi:phone" />
            Contact Secretariat
          </a>
        </div>
      </section>
    </main>
  )
}
