import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#f8fafc] overflow-hidden min-h-screen flex items-center">
      <div className="layout-spine relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-slate-900 font-bold text-lg mb-6 leading-tight">
              Welcome to the Federation of <br />
              Fisheries Organizations Uganda
            </h4>
            <h1 className="text-slate-800 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              2,102,491 Fisherfolks <br /> 
              empowered...
            </h1>
          </motion.div>

          {/* Right - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="aspect-square lg:aspect-4/5 bg-[#cbd5e1] rounded-4xl overflow-hidden shadow-2xl relative group"
          >
            <img 
              src="/home/charlie/.gemini/antigravity/brain/3837ba27-8e02-4625-a3f9-953e02340a06/ugandan_fishermen_hero_1775643656715.png" 
              alt="Community Empowerment"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Floating Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'DONATE NOW', 
              text: 'Your support fuels 12 active programs and amplifies our impact across 131 member associations. Every contribution builds a sustainable future.',
              icon: 'ph:heart-bold',
              to: '/donate'
            },
            { 
              title: 'GET INVOLVED', 
              text: 'Partner with the national apex body to drive innovation. We seek strategic alliances with businesses and institutions to empower communities.',
              icon: 'ph:hand-heart-bold',
              to: '/programs/get-involved'
            },
            { 
              title: 'JOIN FEDERATION', 
              text: 'Access technical training, microfinance through our SACCO, and policy advocacy. Join over 2 million fishers in our unified network.',
              icon: 'ph:users-three-bold',
              to: '/membership'
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-slate-800 font-bold text-lg mb-4 tracking-tighter uppercase">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {card.text}
              </p>
              <Link 
                to={card.to}
                className="inline-block py-2 px-4 border border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:border-marine-500 hover:text-marine-600 transition-colors"
              >
                Read more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
