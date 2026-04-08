import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const initiatives = [
  {
    icon: 'ph:device-mobile-bold',
    title: 'ICT INTEGRATION & INNOVATION',
    text: 'Digitizing the fisheries chain through the ABAVUBI App for market linkages, safety alerts, and real-time information.',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/ictIntegration.png?updatedAt=1775579971114'
  },
  {
    icon: 'ph:scales-bold',
    title: 'LEGISLATION, POLICIES & RIGHTS',
    text: 'Bridging the gap between government policy and community practice while promoting human rights and legal compliance.',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/legislation-policies.png?updatedAt=1775579979750'
  },
  {
    icon: 'ph:users-three-bold',
    title: 'CAPACITY BUILDING',
    text: 'Empowering women and youth through leadership training, financial literacy, and technical skills for business growth.',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/program-list/capacity-building.png?updatedAt=1775579978894'
  },
]

export default function InitiativesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="layout-spine">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4 block">
            ACTION AREAS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Initiatives that empower
          </h2>
          <p className="text-slate-500 max-w-2xl leading-relaxed">
            Our strategic actions are focused on creating a resilient and self-sustaining fisheries sub-sector. We address structural barriers through targeted interventions that prioritize innovation, legal compliance, and community leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 flex flex-col group overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <Icon icon={item.icon} className="text-xl text-slate-500" />
                 </div>
                 <h3 className="text-sm font-bold text-slate-700 mb-4 tracking-tighter leading-snug h-10 flex items-center">
                   {item.title}
                 </h3>
              </div>
              
              <div className="aspect-video bg-[#f1f5f9] overflow-hidden grayscale">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>

              <div className="p-8">
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link 
            to="/programs" 
            className="text-marine-600 font-bold text-sm tracking-widest uppercase hover:text-marine-700 transition-colors"
          >
            Learn more...
          </Link>
        </div>
      </div>
    </section>
  )
}
