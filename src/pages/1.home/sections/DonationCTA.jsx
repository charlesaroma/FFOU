import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function DonationCTA() {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white p-12 shadow-sm border border-slate-100 rounded-2xl">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4 tracking-tighter">
                Empowering Communities, <br /> Protecting Our Waters
             </h2>
             <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Your support helps us represent over 2 million lake users and implement sustainable fisheries policies across Uganda.
             </p>
             <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em]">100% of donations go directly to community programs</span>
          </div>
          <Link 
            to="/donate" 
            className="bg-amber-500 text-white font-bold px-10 py-5 text-sm uppercase hover:bg-amber-600 shadow-xl transition-all rounded-xl"
          >
            DONATE TODAY
          </Link>
        </div>
      </div>
    </section>
  )
}
