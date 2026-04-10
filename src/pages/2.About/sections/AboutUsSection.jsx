import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const values = [
  { icon: 'mdi:shield-check', label: 'Integrity', desc: 'Upholding ethical standards in all our operations and partnerships.' },
  { icon: 'mdi:lightning', label: 'Efficiency', desc: 'Delivering maximum impact with available resources.' },
  { icon: 'mdi:scale-balance', label: 'Accountability', desc: 'Transparent governance and reporting to all members.' },
  { icon: 'mdi:graduation-cap', label: 'Professionalism', desc: 'Maintaining high standards of expertise and conduct.' },
  { icon: 'mdi:refresh', label: 'Continuity', desc: 'Building lasting systems for generational impact.' },
]

const strategicAreas = [
  { label: 'Policy & Human Rights', icon: 'mdi:scale-balance' },
  { label: 'HIV/AIDS Services', icon: 'mdi:medical-bag' },
  { label: 'ICT Integration', icon: 'mdi:cellphone' },
  { label: 'Climate Action', icon: 'mdi:leaf' },
  { label: 'Youth & Women', icon: 'mdi:account-group' },
  { label: 'Aquaculture Dev', icon: 'mdi:fish' },
  { label: 'Girl-Child Education', icon: 'mdi:book-open' },
  { label: 'Vocational Training', icon: 'mdi:wrench' },
]

export default function AboutUs() {
  return (
    <div className="bg-surface-500">

      {/* SECTION 1: Who We Are */}
      <section className="py-28 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-marine-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                  Identity & Origins
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
                An Umbrella for{' '}
                <span className="text-marine-600">Non-State Actors</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                The <strong className="text-slate-800">Federation of Fisheries Organisations Uganda (FFOU)</strong> is the national umbrella body representing all non-state actors in the Fisheries Sub-sector, currently coordinating{' '}
                <strong className="text-marine-600">131 member Associations</strong> across Uganda's five great lakes.
              </p>
              <p className="text-slate-500 leading-relaxed text-base italic border-l-4 border-amber-400 pl-6 py-1">
                Conceived in 2011 to address issues affecting marginalized groups, FFOU has evolved into a strategic force aligning with National Development Programs (NDP III) and Sustainable Development Goals.
              </p>
            </motion.div>

            {/* Right — Image + floating card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-[4px] overflow-hidden shadow-2xl">
                <img
                  src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/legislation-policies.png?updatedAt=1775579979750"
                  alt="FFOU advocacy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-marine-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-marine-800 rounded-[4px] p-5 shadow-2xl w-52">
                <div className="text-amber-400 text-2xl font-bold mb-1">Est. 2002</div>
                <div className="text-white/70 text-xs leading-relaxed">Over two decades serving Uganda's fishing communities.</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Vision & Mission */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.35em] text-amber-600 uppercase mb-3 block">
              Our Direction
            </span>
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
              Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'mdi:eye',
                label: 'AMBITION',
                title: 'Our Vision',
                text: 'To be the leading national Fisheries Federation in coordinating sustainable and ethical fishing practices in Uganda.',
                accent: 'border-marine-500',
                iconBg: 'bg-marine-50',
                iconColor: 'text-marine-600',
              },
              {
                icon: 'mdi:target',
                label: 'EXECUTION',
                title: 'Our Mission',
                text: 'To promote ethical fishing practices and sustainable development for improved livelihood and alleviation of poverty.',
                accent: 'border-cerulean-500',
                iconBg: 'bg-cerulean-50',
                iconColor: 'text-cerulean-600',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`bg-surface-500 p-10 rounded-[4px] border-l-4 ${item.accent} border border-slate-100 group hover:shadow-xl transition-all duration-400 cursor-default`}
              >
                <div className={`w-12 h-12 ${item.iconBg} rounded-[4px] flex items-center justify-center mb-6`}>
                  <Icon icon={item.icon} className={`text-xl ${item.iconColor}`} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block ${item.iconColor}`}>
                  {item.label}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
                <div className="mt-8 h-0.5 w-0 bg-amber-400 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Strategic Areas */}
      <section className="py-28 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.35em] text-amber-600 uppercase mb-4 block">
                Strategic Alignment
              </span>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight tracking-tight">
                Key Areas of Implementation
              </h2>
            </div>
            <p className="max-w-sm text-slate-500 text-sm leading-relaxed">
              Our interventions align with the Sustainable Development Goals (SDGs) while promoting inclusivity across all lake regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strategicAreas.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-[4px] hover:border-marine-200 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-9 h-9 rounded-[4px] bg-marine-50 flex items-center justify-center shrink-0 group-hover:bg-marine-500 transition-colors">
                  <Icon icon={area.icon} className="text-marine-600 group-hover:text-white text-base transition-colors" />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-marine-600 transition-colors leading-snug">
                  {area.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Values */}
      <section className="py-32 bg-marine-900 relative overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cerulean-500/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Our DNA
            </span>
            <h2 className="text-4xl md:text-[52px] font-bold text-white leading-tight tracking-tight">
              The Principles We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-[4px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] p-10 md:p-12 transition-all duration-500 ${
                  i < 3 ? 'md:col-span-4' : 'md:col-span-6'
                }`}
              >
                {/* Large Background Number */}
                <div className="absolute -right-4 -bottom-6 text-[140px] font-black text-white/5 group-hover:text-amber-400/5 transition-colors duration-500 select-none pointer-events-none leading-none">
                  0{i + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[4px] bg-marine-800/50 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-500">
                    <Icon icon={v.icon} className="text-white text-3xl group-hover:text-marine-900 transition-colors" />
                  </div>
                  <h4 className="text-white font-bold text-2xl mb-4 tracking-tight">
                    {v.label}
                  </h4>
                  <p className="text-marine-200 text-base leading-relaxed max-w-sm">
                    {v.desc}
                  </p>
                </div>
                
                {/* Hover line accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
