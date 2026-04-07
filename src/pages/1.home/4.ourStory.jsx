import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function OurStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-marine-600 mb-6 block">Our Impact journey</span>
            <h2 className="text-5xl font-bold text-slate-900 mb-10 leading-tight">
              A Decade of Transforming Ugandan Fisheries
            </h2>
            
            <div className="space-y-8 mb-12 text-slate-600 text-lg leading-relaxed">
              <p>
                With over a decade of industry experience, <strong className="text-marine-800">Federation of Fisheries Organizations Uganda</strong> is the leading apex body dedicated to promoting ethical and sustainable fishing practices.
              </p>
              <p>
                From humble beginnings, we have grown to represent <strong>131 member associations</strong>, coordinating a massive network of fishers to build capacity for a viable, digital-first fisheries sub-sector.
              </p>
            </div>

            <Link
              to="/about/about-us"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-sm text-sm font-bold bg-marine-600 text-white hover:bg-marine-700 transition-all shadow-lg uppercase tracking-widest"
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
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200" 
                alt="FFOU Community Impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-marine-900/10" />
            </div>

            {/* Overlapping Mission Card - Clean Style */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 md:-left-10 max-w-sm bg-marine-600 rounded-sm shadow-2xl p-10 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <Icon icon="ph:target-bold" className="text-3xl text-white" />
                <h3 className="text-xl font-bold uppercase tracking-wider">Our Mission</h3>
              </div>
              <p className="text-sm leading-relaxed text-blue-50">
                "To promote responsible fishing by guiding our members to comply with an agreed ethical code of conduct, observe national standards, and leverage innovation throughout the value chain."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
