import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Membership() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1: Programs Style Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Membership Background"
        />
        <div className="absolute inset-0 bg-marine-900/50" />
        <div className="relative z-10 text-center px-6">
           <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Join the Apex Body</span>
           <h1 className="text-white text-5xl md:text-8xl font-header mb-8">Membership</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-surface-500 to-transparent" />
      </section>

      {/* SECTION 2: Value Proposition (Intro Block Pattern) */}
      <section className="py-24 bg-surface-500 border-b border-slate-100">
        <div className="layout-spine">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="max-w-xl">
               <span className="text-marine-500 text-[10px] font-bold uppercase tracking-widest mb-4 block">Strategic Advantage</span>
               <h2 className="font-header text-4xl md:text-5xl text-slate-800 leading-tight">
                  Strength in<br />
                  <span className="text-marine-600">Collective Action</span>
               </h2>
            </div>
            <div className="flex-1">
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 As the national umbrella body, FFOU provides a powerful platform for fishers, traders, and processors to engage with government and development partners. Our membership represents the shared voice of 131 associations.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'mdi:scale-balance', label: 'Policy Advocacy' },
                    { icon: 'mdi:shield-check', label: 'Legal Support' },
                    { icon: 'mdi:trending-up', label: 'Market Access' },
                    { icon: 'mdi:account-group', label: 'Networking' },
                  ].map((benefit) => (
                    <div key={benefit.label} className="flex items-center gap-3">
                       <Icon icon={benefit.icon} className="text-marine-500" />
                       <span className="text-sm font-bold text-slate-700">{benefit.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Membership Categories (Card Grid Pattern) */}
      <section className="py-24">
        <div className="layout-spine">
          <div className="text-center mb-16">
             <h2 className="font-header text-4xl text-slate-800">Registration Tiers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Landing Site level', 
                price: 'UGX 100,000', 
                desc: 'For local landing site associations and community groups.',
                icon: 'mdi:home'
              },
              { 
                title: 'District/Lake level', 
                price: 'UGX 300,000', 
                desc: 'For regional clusters and multi-site cooperatives.',
                icon: 'mdi:map'
              },
              { 
                title: 'National level', 
                price: 'UGX 500,000', 
                desc: 'For apex bodies and industrial scale processing associations.',
                icon: 'mdi:crown'
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-600 p-10 rounded-sm border border-slate-100 text-center flex flex-col items-center hover:border-marine-200 transition-all shadow-sm"
              >
                <div className="w-16 h-16 rounded-full border-2 border-marine-500/20 flex items-center justify-center mb-8">
                  <Icon icon={tier.icon} className="text-3xl text-marine-600" />
                </div>
                <h3 className="font-header text-2xl mb-2 text-slate-800">{tier.title}</h3>
                <div className="text-marine-600 font-bold mb-4">{tier.price}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{tier.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-marine-900 rounded-sm p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 opacity-10">
                <Icon icon="mdi:send" className="text-[200px]" />
             </div>
             <div className="relative z-10">
                <h3 className="text-2xl font-header mb-4">Start Your Registration</h3>
                <p className="text-marine-200 mb-8 max-w-xl mx-auto">Click below to download the official registration form or contact our secretariate for assistance.</p>
                <button className="px-12 py-4 bg-white text-marine-900 font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-slate-100 transition-all">
                  Contact Secretariat
                </button>
             </div>
          </div>
        </div>
      </section>
    </main>
  )
}
