import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { programsData } from '../../data/programsData'

function ProgramsHero() {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/40" />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Our Programs</h1>
      </div>
    </section>
  )
}

function ProgramGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="standard-grid">
          {programsData.map((p) => (
            <Link 
              key={p.slug} 
              to={`/programs/${p.slug}`}
              className="program-card shadow-lg"
            >
              <img 
                src={p.image} 
                className="w-full h-full object-cover" 
                alt={p.title}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' }}
              />
              <div className="program-card-overlay">
                <h3 className="text-marine-800 font-bold text-lg">{p.shortTitle}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function MonitoringSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="max-w-xl">
            <span className="bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block">Performance Benchmarks</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Systemic Monitoring<br />& Evaluation</h2>
          </div>
          <div className="flex-1">
            <p className="text-slate-600 leading-relaxed mb-6">
              Our operational framework integrates tools to track performance across three critical levels: impact, outcome, and output. Every milestone within the FFOU portfolio is benchmarked against specific outcomes of achievement, ensuring direct alignment with our National Strategic Plan.
            </p>
            <p className="text-slate-600 leading-relaxed">
              To drive continuous improvement and data-based planning, we implement a rigorous review cycle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Quarterly Audits', 
              desc: 'This process takes a deep dive assessment of the strategy performance, ensuring that all our programs are reaching our defined operational strategy.', 
              icon: 'ph:clipboard-text-bold' 
            },
            { 
              title: 'Monthly Reporting', 
              desc: 'Communication is paramount, our process of routine monthly reporting ensures our partners are updated on our achievements and milestones.', 
              icon: 'ph:file-text-bold' 
            },
            { 
              title: 'Annual Reviews', 
              desc: 'Reflective and mandatory we find it extremely useful to gauge our impact and adjustment for our National Strategic Plan based on the causes of our project.', 
              icon: 'ph:calendar-check-bold' 
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#f0f9ff] p-10 rounded-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-marine-500/20 flex items-center justify-center mb-8">
                <Icon icon={item.icon} className="text-3xl text-marine-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnerSection() {
  return (
    <section className="relative py-32 bg-[#00338D] overflow-hidden">
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        alt="Partner background"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-white text-5xl font-bold mb-8">Partner with Us...</h2>
        <p className="text-white/80 text-lg mb-12">
          FFOU is always seeking strategic partnerships with associations, businesses, and institutions that share our vision. Through collaboration, we can extend our programs and impact more communities.
        </p>
        <Link 
          to="/contact-us" 
          className="inline-block border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-marine-900 transition-all text-sm tracking-widest"
        >
          CONTACT US NOW
        </Link>
      </div>
    </section>
  )
}

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
      <ProgramGrid />
      <MonitoringSection />
      <PartnerSection />
    </main>
  )
}
