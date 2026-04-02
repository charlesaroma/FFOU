import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const features = [
  { icon: 'ph:storefront-bold', label: 'Market Information', desc: 'Real-time fish prices across landing sites' },
  { icon: 'ph:cloud-sun-bold', label: 'Weather Forecasts', desc: 'Lake-specific weather and safety alerts' },
  { icon: 'ph:chart-line-up-bold', label: 'Business Tracking', desc: 'Income, expenses, and profit analytics' },
  { icon: 'ph:heart-bold', label: 'Health Services', desc: 'HMIS-aligned health data and wellness programs' },
  { icon: 'ph:navigation-arrow-bold', label: 'Navigation Data', desc: 'GPS tracking for fishing routes' },
  { icon: 'ph:users-three-bold', label: 'Community Network', desc: 'Connect with fishers and associations' },
]

export default function SmartFisherApp() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'var(--color-zurich-950)' }}
    >
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-300) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(to left, var(--color-militant-500), transparent)' }} />

      <div className="layout-spine relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="w-64 rounded-[2rem] p-5 shadow-2xl"
              style={{
                background: '#0a0a0a',
                border: '2px solid #181818',
              }}
            >
              {/* Phone top */}
              <div className="flex items-center justify-between mb-4">
                <Icon icon="ph:fish-bold" className="text-zurich-400 text-xl" />
                <span className="font-heading text-base text-white tracking-wider">ABAVUBI</span>
                <Icon icon="ph:bell-bold" className="text-thamar-300 text-base" />
              </div>

              {/* Market prices */}
              {[
                { label: 'Tilapia (Nile)', price: 'UGX 8,500/kg', change: '+12%', up: true },
                { label: 'Nile Perch', price: 'UGX 12,000/kg', change: '-3%', up: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="mb-2 p-2.5 rounded-lg flex items-center justify-between"
                  style={{ background: '#181818' }}
                >
                  <div>
                    <div className="text-white text-xs font-semibold">{item.label}</div>
                    <div className="text-thamar-200 text-xs mt-0.5">{item.price}</div>
                  </div>
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded-md"
                    style={{
                      background: item.up ? 'rgba(39,163,87,0.2)' : 'rgba(239,68,68,0.15)',
                      color: item.up ? '#4ade80' : '#f87171',
                    }}
                  >
                    {item.change}
                  </span>
                </div>
              ))}

              {/* Weather widget */}
              <div className="mt-3 p-2.5 rounded-lg" style={{ background: 'var(--color-zurich-900)' }}>
                <div className="flex items-center gap-2">
                  <Icon icon="ph:sun-bold" className="text-yellow-400 text-lg" />
                  <div>
                    <div className="text-white text-xs font-semibold">Lake Victoria</div>
                    <div className="text-zurich-300 text-xs">Clear · Safe to fish</div>
                  </div>
                </div>
              </div>

              {/* Health widget */}
              <div className="mt-2 p-2.5 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <div className="flex items-center gap-2">
                  <Icon icon="ph:first-aid-kit-bold" className="text-red-400 text-lg" />
                  <div>
                    <div className="text-white text-xs font-semibold">Health Services</div>
                    <div className="text-thamar-200 text-xs">HMIS Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-militant-400)' }}>
              Smart Fisher Technology
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-4 text-white">
              The ABAVUBI App
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-zurich-200)' }}>
              Federation of Fisheries Organizations Uganda (FFOU) with support from <strong>GIZ-RFBCP</strong> under the German government developed the <strong>ABAVUBI Fisher Mobile App</strong>. This software application allows fisher folk to easily and securely track, store, and analyze business and fisheries data.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-zurich-200)' }}>
              The app provides access to <strong>weather forecasts</strong>, <strong>market information</strong>, and <strong>navigation data</strong> — all aiming to build stronger fish businesses, improve market access, and strengthen fishing communities' role in co-management of water resources.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-zurich-200)' }}>
              ABAVUBI also facilitates <strong>health service access</strong>, supports end-user enrollment in health and wellness programs, and provides comprehensive health data insights aligned with national <strong>HMIS indicators</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <div key={f.label} className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(35,136,212,0.15)' }}>
                    <Icon icon={f.icon} className="text-zurich-400 text-xs" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{f.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--color-zurich-300)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--color-militant-500)', color: '#fff' }}
            >
              <Icon icon="ph:device-mobile-bold" className="text-xs" />
              Learn About ABAVUBI
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
