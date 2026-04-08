import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/home/charlie/.gemini/antigravity/brain/3837ba27-8e02-4625-a3f9-953e02340a06/ugandan_fishermen_hero_1775643656715.png" 
          alt="UG Fisheries" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-marine-900/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 leading-tight flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-400"></span>
              Welcome to the Federation
            </h4>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tighter">
              2,102,491 <br /> 
              <span className="text-amber-400">Fisherfolks</span> empowered
            </h1>
            <p className="text-white/80 text-lg mb-12 max-w-xl leading-relaxed font-medium">
              We are a national umbrella body representing non-state actors in the fisheries sub-sector, working across Uganda's five major lakes.
            </p>
          </motion.div>
        </div>

        {/* Floating Action Cards at bottom */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'DONATE NOW', 
                text: 'Support 12 active programs and empower 131 associations.',
                icon: 'ph:heart-bold',
                to: '/donate'
              },
              { 
                title: 'GET INVOLVED', 
                text: 'Partner with us to drive sustainable innovation.',
                icon: 'ph:hand-heart-bold',
                to: '/programs/get-involved'
              },
              { 
                title: 'JOIN FEDERATION', 
                text: 'Access technical training and policy advocacy.',
                icon: 'ph:users-three-bold',
                to: '/membership'
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="bg-white/10 backdrop-blur-md p-8 border border-white/10 hover:bg-white hover:border-white transition-all group group cursor-pointer rounded-2xl"
              >
                <Icon icon={card.icon} className="text-amber-400 text-3xl mb-6 group-hover:text-amber-500" />
                <h3 className="text-white font-bold text-lg mb-3 tracking-tighter uppercase group-hover:text-slate-800">{card.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-6 font-medium group-hover:text-slate-500">
                  {card.text}
                </p>
                <Link 
                  to={card.to}
                  className="inline-block py-2 px-4 border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest group-hover:border-slate-800 group-hover:text-slate-800 transition-colors rounded-xl"
                >
                  Read more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
