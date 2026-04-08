import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const values = [
  { icon: 'ph:shield-check-bold', label: 'Integrity', desc: 'Upholding ethical standards in all our operations.' },
  { icon: 'ph:lightning-bold', label: 'Efficiency', desc: 'Delivering maximum impact with available resources.' },
  { icon: 'ph:scales-bold', label: 'Accountability', desc: 'Transparent governance and reporting to our members.' },
  { icon: 'ph:graduation-cap-bold', label: 'Professionalism', desc: 'Maintaining high standards of conduct and expertise.' },
  { icon: 'ph:arrows-clockwise-bold', label: 'Continuity', desc: 'Building lasting systems for generational impact.' },
]

const strategicAreas = [
  'Policy & Human Rights',
  'HIV/AIDS Services',
  'ICT Integration',
  'Climate Action',
  'Youth & Women',
  'Aquaculture Dev',
  'Girl Child Education',
  'Vocational Training',
]

export default function AboutUs() {
  return (
    <div style={{ background: 'var(--surface-a)' }}>
      {/* SECTION 1: Who We Are (Intro Block Group Pattern) */}
      <section className="py-24 border-b border-slate-100/50">
        <div className="layout-spine">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            {/* Header Area */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="bg-marine-100 text-marine-700 text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block tracking-widest">
                Identity & Origins
              </span>
              <h2 className="font-header text-4xl md:text-5xl text-slate-800 mb-8 leading-tight">
                An Umbrella for<br />
                <span className="text-marine-600">Non-State Actors</span>
              </h2>
            </motion.div>

            {/* Description Area */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The <strong>Federation of Fisheries Organisations Uganda (FFOU)</strong> is a national umbrella body for all non-state actors in the Fisheries Sub-sector, currently working with <strong>131 member Associations</strong> across Uganda's five great lakes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Conceived in 2011 to address issues affecting marginalized groups, FFOU has evolved into a strategic force aligning with <strong>National Development Programs (NDP III)</strong> and Sustainable Development Goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vision & Mission (Card Grid Pattern) */}
      <section className="py-24 bg-surface-600">
        <div className="layout-spine">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: 'ph:eye-bold',
                title: 'Our Vision',
                text: 'To be the leading national Fisheries Federation in coordinating sustainable and ethical fishing practices in Uganda.',
                color: 'var(--color-marine-600)',
                tag: 'Ambition'
              },
              {
                icon: 'ph:target-bold',
                title: 'Our Mission',
                text: 'To promote ethical fishing practices and sustainable development for improved livelihood and alleviation of poverty.',
                color: 'var(--color-cerulean-600)',
                tag: 'Execution'
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-sm shadow-sm border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Icon icon={item.icon} className="text-[120px]" style={{ color: item.color }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block" style={{ color: item.color }}>{item.tag}</span>
                <h3 className="font-header text-3xl mb-6" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
                <p className="text-slate-500 font-body leading-relaxed max-w-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Strategic Focus (Modular List) */}
      <section className="py-24">
        <div className="layout-spine">
          <div className="text-center mb-16">
            <span className="text-marine-500 text-[10px] font-bold uppercase tracking-widest mb-4 block">Strategic Alignment</span>
            <h2 className="font-header text-4xl text-slate-800">Key Areas of Implementation</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {strategicAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-surface-600 border border-slate-100 rounded-sm text-center hover:border-marine-200 transition-colors"
              >
                <span className="text-sm font-bold text-slate-700">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Values (Value Circles Pattern) */}
      <section className="py-24 bg-marine-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
           <div className="grid grid-cols-6 h-full">
              {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/20 h-full" />)}
           </div>
        </div>
        
        <div className="layout-spine relative z-10">
          <div className="max-w-xl mb-20 text-white">
             <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">Foundations</span>
             <h2 className="font-header text-4xl mb-6">Our Core Values</h2>
             <p className="text-marine-200 text-sm">The fundamental principles that guide our internal conduct and our relationship with the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-marine-900 transition-all">
                  <Icon icon={v.icon} className="text-xl" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{v.label}</h4>
                <p className="text-marine-300 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
