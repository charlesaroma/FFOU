import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const programs = [
  'Legislation',
  'Aquaculture',
  'Integration of ICT',
  'Capacity Building for Women & Youth',
  'Climate Change',
  'HIV/AIDS, Malaria & TB',
  'Raising a Girl Child',
]

const partners = [
  { name: 'GIZ RFBCP-Uganda', type: 'Project Partner' },
  { name: 'FAO Uganda', type: 'UN Agency' },
  { name: 'MAAIF', type: 'Government' },
  { name: 'Uganda Co-operative Alliance', type: 'Partner' },
]

export default function OurStory() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-marine-500 mb-4 block">Our Impact journey</span>
            <h2 className="font-header text-h2 md:text-h1 tracking-tight mb-6" style={{ color: 'var(--text-main)' }}>
              A Decade of Transforming <span className="bg-linear-to-r from-marine-700 via-marine-500 to-marine-400 bg-clip-text text-transparent">Ugandan Fisheries</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="font-body text-content-main md:text-content-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                With over a decade of industry experience, <strong className="text-marine-700">Federation of Fisheries Organizations Uganda</strong> is the leading apex body dedicated to promoting ethical and sustainable fishing practices.
              </p>
              <p className="font-body text-content-main md:text-content-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                From humble beginnings, we have grown to represent <strong>131 member associations</strong>, coordinating a massive network of fishers to build capacity for a viable, digital-first fisheries sub-sector.
              </p>
            </div>

            {/* Strategic Partners Mini-Section */}
            <div className="mb-10">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-main)' }}>
                Strategic Partners
              </h3>
              <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex flex-col">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{partner.name}</span>
                    <span className="text-[10px] uppercase tracking-tighter" style={{ color: 'var(--text-muted)' }}>{partner.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/about/about-us"
              className="relative overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98] shadow-md hover:shadow-lg inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-marine-500 text-white"
            >
              Learn More About Our Mission <Icon icon="ph:arrow-right-bold" />
            </Link>
          </motion.div>

          {/* Right - Visual Impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200" 
                alt="FFOU Community Impact"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-marine-800/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Mission Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 md:-left-20 max-w-sm bg-marine-800/92 backdrop-blur-[16px] border border-white/10 rounded-[1.5rem] shadow-xl p-8"
              style={{ color: 'white' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-marine-500 flex items-center justify-center">
                  <Icon icon="ph:target-bold" className="text-2xl text-white" />
                </div>
                <h3 className="font-header text-xl">Our Mission</h3>
              </div>
              <p className="text-sm leading-relaxed text-marine-100">
                "To promote responsible fishing by guiding our members to comply with an agreed ethical code of conduct, observe national standards, and leverage innovation throughout the value chain."
              </p>
            </motion.div>

            {/* Achievement Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white shadow-xl flex flex-col items-center justify-center p-4 border border-marine-100 animate-bounce-slow">
              <span className="font-header text-3xl text-marine-600">131</span>
              <span className="text-[10px] font-bold uppercase text-center leading-tight text-marine-400">Member Associations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
