import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: 'mdi:map-marker-radius',
    title: 'Market Linkages',
    text: 'Real-time pricing from 40+ landing sites across all five lakes.',
  },
  {
    icon: 'mdi:bell-ring',
    title: 'Safety Alerts',
    text: 'Instant storm and weather notifications for lake-going fishers.',
  },
  {
    icon: 'mdi:microphone',
    title: 'Voice Guidance',
    text: 'Local language audio instructions for low-literacy users.',
  },
  {
    icon: 'mdi:certificate',
    title: 'Digital Licensing',
    text: 'Streamlined fishing permit applications through the app.',
  },
]

export default function SmartFisherSection() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-bold tracking-[0.35em] text-cerulean-500 uppercase mb-5 block">
              Digital Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
              The ABAVUBI App —
              <br />
              <span className="text-cerulean-600">fishing, reimagined</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Developed in partnership with FFOU, the ABAVUBI App brings the power of digital technology directly to fishing communities — cutting out middlemen, improving safety, and empowering livelihoods at the water's edge.
            </p>

            {/* Feature rows */}
            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-[4px] border border-slate-100 hover:border-cerulean-200 hover:bg-cerulean-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-[4px] bg-cerulean-600 flex items-center justify-center shrink-0">
                    <Icon icon={f.icon} className="text-white text-base" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-1">{f.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{f.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/programs/ict-integration-and-innovation"
              className="inline-flex items-center gap-2 bg-cerulean-600 text-white font-bold px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-cerulean-700 transition-all rounded-[4px]"
            >
              Explore Digital Programs
              <Icon icon="mdi:arrow-right-thick" />
            </Link>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-[4px] overflow-hidden">
              <img
                src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/ictIntegration.png?updatedAt=1775579971114"
                alt="ABAVUBI App in action"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-marine-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-[4px] border border-slate-100 shadow-2xl p-5 w-44">
              <div className="text-3xl font-bold text-cerulean-600 mb-1">40+</div>
              <div className="text-xs text-slate-500 leading-snug">Landing sites connected across all lakes</div>
            </div>

            {/* Decorative block */}
            <div className="absolute -top-6 -right-4 md:-right-6 w-20 h-20 bg-cerulean-600 rounded-[4px] flex items-center justify-center shadow-xl">
              <Icon icon="mdi:cellphone" className="text-white text-3xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
