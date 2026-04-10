import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const pillars = [
  { icon: 'ph:scales-bold', label: 'Policy Advocacy' },
  { icon: 'ph:device-mobile-bold', label: 'ICT Innovation' },
  { icon: 'ph:users-three-bold', label: 'Capacity Building' },
  { icon: 'ph:leaf-bold', label: 'Lake Conservation' },
]

export default function OurStory() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — Editorial Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Primary Image */}
            <div className="relative aspect-4/5 rounded-[4px] overflow-hidden shadow-2xl">
              <img
                src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/capacity-building.png?updatedAt=1775579978894"
                alt="FFOU community empowerment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-marine-900/50 to-transparent" />
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-marine-800 rounded-[4px] p-6 shadow-2xl w-48 md:w-56">
              <div className="text-amber-400 text-3xl font-bold mb-1">Est. 2002</div>
              <div className="text-white/70 text-xs leading-relaxed">Over two decades of championing Uganda's fishing communities.</div>
            </div>

            {/* Floating accent — top left */}
            <div className="absolute -top-4 -left-4 md:-left-8 w-24 h-24 bg-amber-400 rounded-[4px] flex items-center justify-center shadow-xl">
              <Icon icon="ph:fish-bold" className="text-marine-900 text-4xl" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-[10px] font-bold tracking-[0.35em] text-marine-500 uppercase mb-5 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
              Empowering sustainable{' '}
              <span className="text-marine-600">fisheries</span>{' '}
              across Uganda
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              The Federation of Fisheries Organisations Uganda (FFOU) is the national umbrella body representing non-state actors across Uganda's five major lakes — Victoria, Albert, Kyoga, Edward, and George.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              We currently coordinate <strong className="text-slate-700">131 member associations</strong>, giving us the platform to build capacity, advocate for policy, and connect over 2 million lake users to economic opportunity, legal protection, and modern technology.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-3 py-3 px-4 bg-slate-50 border border-slate-100 rounded-[4px]">
                  <div className="w-8 h-8 rounded-[4px] bg-marine-500/10 flex items-center justify-center shrink-0">
                    <Icon icon={p.icon} className="text-marine-600 text-base" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{p.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about/about-us"
              className="inline-flex items-center gap-2 bg-marine-700 text-white font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-marine-800 transition-all rounded-[4px]"
            >
              Discover Our Full Story
              <Icon icon="ph:arrow-right-bold" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
