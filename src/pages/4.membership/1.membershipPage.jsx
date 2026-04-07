import { useRef } from 'react'
import { motion } from 'framer-motion'

function MembershipHero() {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden pt-20">
      <img 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2048" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Membership header"
      />
      <div className="absolute inset-0 bg-blue-900/40" />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-6xl font-bold">Membership</h1>
      </div>
    </section>
  )
}

function MembershipContent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-4xl">
          <span className="bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block">Performance Benchmarks</span>
          <h2 className="text-5xl font-bold text-slate-900 mb-10 leading-tight">How we mobilise resources<br />for sustainable fisheries</h2>
          
          <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
            <p>
              FFOU's core membership structure looks at associations, cooperative unions, and other community-based organized groups within the sub-sector for fisher communities, local traders, aquaculture fish farmers, processors, and exporters, all based on mutual roles, interests, and expectations.
            </p>
            <p>
              Partnerships extend to various levels from Government instrumental bodies, research institutions, and management & development organizations to Donor/funder organizations. Affiliations are intended for sharing ideas, and experiences with related organizations outside our geographical area of operation or those within the geographical scope that support or contribute to the development of the fisheries sub-sector but are not directly involved in the fisheries activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MembershipPage() {
  return (
    <main>
      <MembershipHero />
      <MembershipContent />
    </main>
  )
}
