import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function ActionSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="layout-spine">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              We take action. To make <br />
              better changes
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl">
              Quality information means better interventions. We monitor every lake-specific hub to ensure targeted support.
            </p>

            {/* Minor Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'REGIONS REACHED', val: '6', icon: 'ph:map-pin-bold' },
                { label: 'ASSOCIATIONS', val: '135', icon: 'ph:users-three-bold' },
                { label: 'FISHERFOLKS', val: '2.1 M', icon: 'ph:user-bold' },
              ].map((s, i) => (
                <div key={s.label} className="bg-[#f8fafc] p-6 text-center border border-slate-100 flex flex-col items-center">
                  <Icon icon={s.icon} className="text-xl text-slate-400 mb-4" />
                  <div className="text-3xl font-bold text-slate-800 mb-1">{s.val}</div>
                  <div className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square lg:aspect-4/5 bg-[#cbd5e1] rounded-4xl overflow-hidden shadow-2xl relative group"
          >
             <img 
               src="/home/charlie/.gemini/antigravity/brain/3837ba27-8e02-4625-a3f9-953e02340a06/ugandan_fisheries_community_meeting_1775643850862.png" 
               alt="Community Action" 
               className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-slate-900/40 to-transparent">
                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Community Empowerment</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
