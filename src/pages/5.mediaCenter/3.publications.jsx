import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const publications = [
  {
    category: 'Certificates',
    icon: 'ph:certificate-bold',
    items: [
      'FFOU-URSB',
      'FFOU NGO PERMIT',
      'FFOU NGO CERTIFICATE',
      'FFOU STRATEGIC PLAN',
    ],
  },
  {
    category: 'Audited Reports',
    icon: 'ph:chart-bar-bold',
    items: [
      'Audited Report 2023',
      'Audited Report 2022',
    ],
  },
  {
    category: 'Activity Reports',
    icon: 'ph:activity-bold',
    items: [
      'BDS Activity Report',
      'Climate Change Report',
      'Regional Consultations Report',
      'GIZ RFBCP Performance Report',
      'FFOU Report Integration of Health Services into the Abavubi Fisher App 2025',
      'FFOU-Kalangala HIV Campaign Report',
      'Project Report Empower Fishing Communities on Lake Victoria 2025',
    ],
  },
  {
    category: 'Abavubi App',
    icon: 'ph:device-mobile-bold',
    items: [
      'Abavubi App Luganda Manual',
      'Abavubi App Swahilli Manual',
    ],
  },
  {
    category: 'FFOU Research',
    icon: 'ph:magnifying-glass-bold',
    items: [
      'SOCIO-ECONOMIC AND INSTITUTIONAL DRIVERS OF ILLEGAL FISHING IN UGANDA',
    ],
  },
  {
    category: 'Policies',
    icon: 'ph:scroll-bold',
    items: [
      'FFOU Constitution',
      'Fisheries Policy',
      'Safe Guarding Policies',
    ],
  },
  {
    category: 'Ongoing Projects',
    icon: 'ph:rocket-bold',
    items: [
      'Abavubi Digital Platform',
    ],
  },
]

export default function Publications() {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-header text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-main)' }}>
            Publications & Resources
          </h1>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            At the Federation of Fisheries Organizations Uganda (FFOU), we aim to empower and uplift fisheries communities across Uganda through innovative and sustainable initiatives. Over the years, our programs have made a lasting impact in several key areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12 py-8 px-6 rounded-2xl"
          style={{ background: 'var(--color-marine-800)' }}
        >
          <h2 className="font-header text-xl md:text-2xl bg-linear-to-r from-marine-700 via-marine-500 to-marine-400 bg-clip-text text-transparent">
            EVERY CONTRIBUTION CAUSES AN IMPACT
          </h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {publications.map((section, index) => {
            const isOpen = openCategory === section.category
            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleCategory(section.category)}
                  className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: isOpen ? 'var(--color-zurich-50)' : 'var(--surface-b)',
                    border: `1px solid ${isOpen ? 'var(--color-zurich-200)' : 'var(--nav-stroke)'}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon 
                      icon={section.icon} 
                      className="text-xl" 
                      style={{ color: 'var(--color-marine-500)' }}
                    />
                    <span className="font-medium" style={{ color: 'var(--text-main)' }}>
                      {section.category}
                    </span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ 
                        background: 'var(--surface-a)', 
                        color: 'var(--text-muted)' 
                      }}
                    >
                      {section.items.length}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon 
                      icon="ph:caret-down-bold" 
                      className="text-lg" 
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="pt-3 pb-1 px-4"
                        style={{ borderLeft: '2px solid var(--color-zurich-200)', marginLeft: '19px' }}
                      >
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li 
                              key={item}
                              className="flex items-center py-2 px-3 rounded-lg text-sm"
                              style={{ color: 'var(--text-main)' }}
                            >
                              <span 
                                className="w-1.5 h-1.5 rounded-full mr-3"
                                style={{ background: 'var(--color-zurich-400)' }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
            Your support helps us continue publishing resources that empower fishing communities.
          </p>
          <Link
            to="/programs#donate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
            style={{ background: 'var(--color-marine-500)', color: '#fff' }}
          >
            Support Our Work
            <Icon icon="ph:arrow-right-bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
