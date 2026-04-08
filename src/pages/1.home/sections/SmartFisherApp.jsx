import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function ActionAreas() {
  return (
    <section className="py-24 bg-surface-500">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Intro Block Group */}
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          {/* Header Area */}
          <div className="max-w-xl">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block tracking-[0.2em]">
              OUR COMMITMENT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tighter">
              Strategic Action <br />& Impact
            </h2>
          </div>
          {/* Description Area */}
          <div className="flex-1">
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              We leverage data-driven strategies and community-led initiatives to address the most pressing challenges in Uganda's fisheries sub-sector. Our work is centered on three core pillars of transformation.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              From digitizing the value chain to ensuring policy compliance, we aim to build a resilient ecosystem for over 2 million lake users.
            </p>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Digital Inclusion', 
              desc: 'Pioneering ICT solutions like the ABAVUBI App to provide market linkages and real-time safety information for fishing communities.', 
              icon: 'ph:device-mobile-bold' 
            },
            { 
              title: 'Policy Advocacy', 
              desc: 'Bridging the gap between government regulations and community rights, ensuring fair representation for non-state actors.', 
              icon: 'ph:scales-bold' 
            },
            { 
              title: 'Livelihood Dev', 
              desc: 'Empowering women and youth through technical training, microfinance, and sustainable aquaculture development.', 
              icon: 'ph:users-three-bold' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 shadow-sm border border-slate-100 flex flex-col group hover:border-amber-400 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors">
                <Icon icon={item.icon} className="text-3xl text-slate-400 group-hover:text-amber-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
