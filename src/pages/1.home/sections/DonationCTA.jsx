import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function DonationCTA() {
  return (
    <section className="py-28 bg-marine-800 relative overflow-hidden">
      {/* Background image layer */}
      <img
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsPartner.png?updatedAt=1775580530471"
        alt="Uganda fisheries"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.35em]">
                Join the Movement
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
              Every contribution{' '}
              <br />
              <span className="text-amber-400">protects a lake</span> and a livelihood
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-lg">
              Your support funds policy advocacy, technical training, and digital tools that directly reach fishing communities across Uganda's five great lakes.
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-[4px] bg-amber-400/15 border border-amber-400/20 flex items-center justify-center">
                <Icon icon="ph:shield-check-bold" className="text-amber-400 text-lg" />
              </div>
              <span className="text-white/60 text-sm">100% of donations go directly to community programs</span>
            </div>
          </motion.div>

          {/* Right — Action cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: 'ph:heart-bold',
                title: 'Donate to FFOU',
                text: 'Fund programs that empower over 2 million fisherfolks.',
                to: '/programs/donate',
                primary: true,
              },
              {
                icon: 'ph:handshake-bold',
                title: 'Become a Partner',
                text: 'Strategic partnerships that extend our reach across Uganda.',
                to: '/programs/get-involved',
                primary: false,
              },
              {
                icon: 'ph:users-bold',
                title: 'Join the Federation',
                text: 'Access advocacy, training, and collective bargaining power.',
                to: '/membership',
                primary: false,
              },
            ].map((cta) => (
              <Link
                key={cta.title}
                to={cta.to}
                className={`flex items-center gap-5 p-5 rounded-[4px] border transition-all group cursor-pointer ${cta.primary
                  ? 'bg-amber-400 border-amber-400 hover:bg-amber-300'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                }`}
              >
                <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center shrink-0 ${cta.primary ? 'bg-marine-800/20' : 'bg-white/10'}`}>
                  <Icon icon={cta.icon} className={`text-xl ${cta.primary ? 'text-marine-900' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <div className={`font-bold text-sm mb-0.5 ${cta.primary ? 'text-marine-900' : 'text-white'}`}>{cta.title}</div>
                  <div className={`text-xs leading-relaxed ${cta.primary ? 'text-marine-800/70' : 'text-white/50'}`}>{cta.text}</div>
                </div>
                <Icon icon="ph:arrow-right-bold" className={`shrink-0 ${cta.primary ? 'text-marine-900' : 'text-white/50 group-hover:text-white'} transition-colors`} />
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
