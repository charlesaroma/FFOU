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
      <section className="py-32 border-b border-slate-100/50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Header Area */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl lg:w-[45%]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-amber-400" />
                <span className="text-marine-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Identity & Origins
                </span>
              </div>
              <h2 className="font-header text-5xl md:text-6xl text-slate-800 mb-8 leading-[1.1]">
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
              className="flex-1 lg:pt-10"
            >
              <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
                The <strong className="text-slate-800">Federation of Fisheries Organisations Uganda (FFOU)</strong> is a national umbrella body for all non-state actors in the Fisheries Sub-sector, currently working with <strong className="text-marine-600">131 member Associations</strong> across Uganda's five great lakes.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg italic border-l-4 border-amber-400 pl-8">
                Conceived in 2011 to address issues affecting marginalized groups, FFOU has evolved into a strategic force aligning with National Development Programs (NDP III) and Sustainable Development Goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vision & Mission (High-Fidelity Cards) */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: 'ph:eye-fill',
                title: 'Our Vision',
                text: 'To be the leading national Fisheries Federation in coordinating sustainable and ethical fishing practices in Uganda.',
                color: 'text-marine-600',
                bg: 'bg-marine-50',
                tag: 'AMBITION'
              },
              {
                icon: 'ph:target-fill',
                title: 'Our Mission',
                text: 'To promote ethical fishing practices and sustainable development for improved livelihood and alleviation of poverty.',
                color: 'text-cerulean-600',
                bg: 'bg-cerulean-50',
                tag: 'EXECUTION'
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-16 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-[1.7] group-hover:opacity-10 transition-all duration-700 ${item.color}`}>
                   <Icon icon={item.icon} className="text-[140px]" />
                </div>
                
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-10 transition-colors group-hover:bg-amber-400 group-hover:text-white`}>
                  <Icon icon={item.icon} className={`text-2xl ${item.color} group-hover:text-white`} />
                </div>

                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block ${item.color}`}>{item.tag}</span>
                <h3 className="font-header text-4xl mb-8 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">{item.text}</p>
                
                <div className="mt-10 h-1 w-0 bg-amber-400 group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Strategic Focus (Minimalist Grid) */}
      <section className="py-32">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Strategic Alignment</span>
              <h2 className="font-header text-5xl text-slate-800 leading-tight">Key Areas of<br />Implementation</h2>
            </div>
            <p className="max-w-md text-slate-500 text-sm leading-relaxed mb-1">
              Our interventions are designed to align with the Sustainable Development Goals (SDGs) while promoting inclusivity across all lake regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {strategicAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-10 bg-white border border-slate-50 text-center hover:bg-slate-50 hover:shadow-inner transition-all group cursor-default"
              >
                <span className="text-xs font-bold text-slate-400 group-hover:text-marine-600 uppercase tracking-widest transition-colors">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Values (Elite Row) */}
      <section className="py-32 bg-marine-900 overflow-hidden relative">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="max-w-xl mb-24 text-white">
             <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
             <h2 className="font-header text-5xl mb-8 lg:text-6xl tracking-tighter">The Principles<br />We Live By</h2>
             <p className="text-marine-200 text-lg max-w-sm font-medium">Fundamental principles that guide our internal conduct and our relationship with the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300">
                  <Icon icon={v.icon} className="text-3xl" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4 tracking-tight group-hover:text-amber-400 transition-colors uppercase">{v.label}</h4>
                <p className="text-marine-300 text-sm leading-relaxed font-medium transition-colors group-hover:text-white">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
