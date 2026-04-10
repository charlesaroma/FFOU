import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { programsData } from '../../../data/programsData'
import { useState, useEffect } from 'react'

export default function ProgramDetails() {
  const { slug } = useParams()
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveAccordion(0);
  }, [slug])

  const program = programsData.find((p) => p.slug === slug)

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Dynamic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <img 
          src={program.heroImage || program.cardImage} 
          alt={program.heroTitle}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&q=80&w=2048' }}
        />
        <div className="absolute inset-0 bg-[#00173D]/60" />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl font-bold px-4"
          >
            {program.heroTitle}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-slate-100">
              <div className="bg-cerulean-500 p-6">
                <h3 className="text-white font-bold text-xl">View more programs</h3>
              </div>
              <nav className="divide-y divide-slate-100">
                {programsData.map((p) => {
                  const isActive = p.slug === slug;
                  return (
                    <Link
                      key={p.slug}
                      to={`/programs/${p.slug}`}
                      className={`flex items-center justify-between p-5 text-sm font-medium transition-colors hover:bg-slate-50 ${isActive ? 'text-cerulean-600 bg-slate-50' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      <span>{p.cardTitle}</span>
                      <Icon icon="mdi:arrow-top-right-thick" className={isActive ? "text-cerulean-500" : "text-slate-300"} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Contact Card */}
            <div className="relative rounded-sm overflow-hidden h-[300px] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Contact visual"
              />
              <div className="absolute inset-0 bg-[#0b1f3c]/70" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
                <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[12px] font-bold text-white mb-2">Phone Number</span>
                    <p className="text-sm font-medium text-slate-200">+(256) 417336800</p>
                    <p className="text-sm font-medium text-slate-200">+(256) 414583081</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <section className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-slate-50">
              {/* Detail Image */}
              <div className="w-full aspect-2/1 md:aspect-21/9 mb-10 overflow-hidden rounded-sm">
                <img 
                  src={program.detailImage || program.cardImage} 
                  alt={`${program.heroTitle} presentation`} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-6">What we do?</h2>
              <p className="text-[15px] text-[#4a4a4a] leading-[1.8] mb-12">
                {program.whatWeDo}
              </p>

              <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-6">How we work</h2>
              <p className="text-[15px] text-[#4a4a4a] leading-[1.8] mb-10">
                {program.howWeWorkDescription}
              </p>

              <div className="space-y-0">
                {program.howWeWorkAccordions.map((item, index) => (
                  <div key={index} className="border-b border-slate-100 last:border-b-0">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                      className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-content-sm font-bold text-cerulean-600">
                        {item.title}
                      </span>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gold-400 text-white shrink-0">
                        <Icon icon={activeAccordion === index ? 'mdi:chevron-up' : 'mdi:chevron-down'} className="text-[12px]" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-[15px] text-[#4a4a4a] leading-[1.8] pr-12">
                            {item.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
